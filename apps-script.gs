/* ════════════════════════════════════════════════════════════════
   SEPEP Gaelic — cloud backend
   ────────────────────────────────────────────────────────────────
   This is the little server that lets the site save itself.
   With it running you never touch data.js again, and anyone can
   put in their own tips.

   HOW TO SET IT UP (once, about five minutes)
   1.  Go to script.google.com and start a new project.
   2.  Delete everything in the editor and paste this whole file in.
   3.  Change PASSCODE below to your own secret word. Whoever knows
       it can edit the site, so do not make it "media".
   4.  Click Deploy → New deployment → (gear) Web app.
         Execute as:      Me
         Who has access:  Anyone
       Deploy, then say yes to the permissions it asks for.
   5.  Copy the web app URL it gives you (it ends in /exec) and
       paste it into the site: Desk → Cloud → paste → Use this URL,
       then publish by hand one last time.

   If you ever change this file, click Deploy → Manage deployments
   → edit → New version, or the site keeps seeing the old copy.
   ════════════════════════════════════════════════════════════════ */

var PASSCODE = 'media';           /* ← change me */
var FILE_NAME = 'sepep-data.json';
var BACKUP_FOLDER = 'sepep-backups';
var KEEP_BACKUPS = 30;

/* ─────────────── plumbing ─────────────── */

function reply(obj, callback) {
  var text = JSON.stringify(obj);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + text + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(text)
    .setMimeType(ContentService.MimeType.JSON);
}

function props() {
  return PropertiesService.getScriptProperties();
}

function storeFile() {
  var id = props().getProperty('fileId');
  if (id) {
    try { return DriveApp.getFileById(id); } catch (e) { /* deleted — remake below */ }
  }
  var found = DriveApp.getFilesByName(FILE_NAME);
  if (found.hasNext()) {
    var f = found.next();
    props().setProperty('fileId', f.getId());
    return f;
  }
  var made = DriveApp.createFile(FILE_NAME, JSON.stringify({ rev: 0, data: null }),
    MimeType.PLAIN_TEXT);
  props().setProperty('fileId', made.getId());
  return made;
}

function readStore() {
  try {
    var o = JSON.parse(storeFile().getBlob().getDataAsString());
    return (o && typeof o === 'object') ? o : { rev: 0, data: null };
  } catch (e) {
    return { rev: 0, data: null };
  }
}

function writeStore(store) {
  storeFile().setContent(JSON.stringify(store));
}

function backupFolder() {
  var found = DriveApp.getFoldersByName(BACKUP_FOLDER);
  if (found.hasNext()) return found.next();
  return DriveApp.createFolder(BACKUP_FOLDER);
}

function makeBackup(store) {
  if (!store || !store.data) return;
  var folder = backupFolder();
  var stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH-mm-ss');
  folder.createFile('sepep rev' + (store.rev || 0) + ' ' + stamp + '.json',
    JSON.stringify(store), MimeType.PLAIN_TEXT);
  trimBackups(folder);
}

function trimBackups(folder) {
  var all = [];
  var it = folder.getFiles();
  while (it.hasNext()) {
    var f = it.next();
    all.push({ f: f, at: f.getDateCreated().getTime() });
  }
  all.sort(function (a, b) { return b.at - a.at; });
  for (var i = KEEP_BACKUPS; i < all.length; i++) all[i].f.setTrashed(true);
}

function checkPass(pass) {
  return String(pass || '') === String(PASSCODE);
}

/* ─────────────── reads ─────────────── */

function doGet(e) {
  var q = (e && e.parameter) || {};
  var cb = q.callback;
  var action = q.action || 'get';

  try {
    if (action === 'backups') {
      var folder = backupFolder();
      var list = [];
      var it = folder.getFiles();
      while (it.hasNext()) {
        var f = it.next();
        list.push({
          id: f.getId(),
          name: f.getName().replace(/\.json$/, ''),
          at: f.getDateCreated().getTime(),
          when: Utilities.formatDate(f.getDateCreated(), Session.getScriptTimeZone(),
            'd MMM yyyy, h:mm a')
        });
      }
      list.sort(function (a, b) { return b.at - a.at; });
      return reply({ ok: true, backups: list }, cb);
    }

    var store = readStore();
    return reply({ ok: true, rev: store.rev || 0, data: store.data || null }, cb);

  } catch (err) {
    return reply({ ok: false, error: String(err) }, cb);
  }
}

/* ─────────────── writes ─────────────── */

function doPost(e) {
  var body = {};
  try { body = JSON.parse(e.postData.contents); } catch (err) {
    return reply({ ok: false, error: 'bad request' });
  }
  var action = body.action || '';

  /* just checking the passcode */
  if (action === 'auth') {
    return reply(checkPass(body.pass) ? { ok: true } : { ok: false, error: 'wrong passcode' });
  }

  var lock = LockService.getScriptLock();
  try { lock.waitLock(20000); } catch (err) {
    return reply({ ok: false, error: 'busy, try again' });
  }

  try {
    var store = readStore();

    /* ── the desk saving the whole site ── */
    if (action === 'save') {
      if (!checkPass(body.pass)) return reply({ ok: false, error: 'wrong passcode' });
      if (!body.data || !body.data.teams) return reply({ ok: false, error: 'no data' });
      makeBackup(store);
      var next = { rev: (store.rev || 0) + 1, data: body.data, at: new Date().toISOString() };
      writeStore(next);
      return reply({ ok: true, rev: next.rev });
    }

    /* ── somebody putting their own tips in ── */
    if (action === 'tip') {
      if (!store.data) return reply({ ok: false, error: 'the site has not been published yet' });

      var name = String(body.tipper || '').trim().slice(0, 40);
      if (!name) return reply({ ok: false, error: 'no name' });

      var picks = body.picks || {};
      var clean = {};
      var fixtures = store.data.fixtures || [];
      var teams = (store.data.teams || []).map(function (t) { return t.id; });

      Object.keys(picks).forEach(function (fid) {
        var fx = fixtures.filter(function (f) { return f.id === fid; })[0];
        if (!fx) return;
        if (fx.played) return;                                  /* too late for that one */
        if (teams.indexOf(picks[fid]) < 0) return;              /* not a real team */
        if (picks[fid] !== fx.home && picks[fid] !== fx.away) return;
        clean[fid] = picks[fid];
      });
      if (!Object.keys(clean).length) return reply({ ok: false, error: 'nothing to save' });

      store.data.tips = store.data.tips || [];
      var row = store.data.tips.filter(function (t) {
        return String(t.tipper || '').toLowerCase() === name.toLowerCase();
      })[0];
      if (row) {
        row.tipper = name;
        row.picks = row.picks || {};
        Object.keys(clean).forEach(function (k) { row.picks[k] = clean[k]; });
      } else {
        store.data.tips.push({ tipper: name, picks: clean });
      }
      store.rev = (store.rev || 0) + 1;
      writeStore(store);
      return reply({ ok: true, rev: store.rev });
    }

    /* ── rolling back to a backup ── */
    if (action === 'restore') {
      if (!checkPass(body.pass)) return reply({ ok: false, error: 'wrong passcode' });
      var old = JSON.parse(DriveApp.getFileById(body.id).getBlob().getDataAsString());
      if (!old || !old.data) return reply({ ok: false, error: 'that backup is empty' });
      makeBackup(store);
      var restored = { rev: (store.rev || 0) + 1, data: old.data, at: new Date().toISOString() };
      writeStore(restored);
      return reply({ ok: true, rev: restored.rev });
    }

    return reply({ ok: false, error: 'unknown action' });

  } catch (err) {
    return reply({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}
