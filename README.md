# SEPEP Gaelic

The site for the Year 10 SEPEP Gaelic football competition at Scotch College.

| File | What it is |
| --- | --- |
| `index.html` | The site. Everything — pages, styles, the Media Desk — lives in here. |
| `data.js` | The content: teams, fixtures, votes, stats, tips, reports, settings. |
| `classic.html` | **The old design, kept exactly as it was.** Still works, still reads `data.js`. |
| `apps-script.gs` | The optional cloud backend. Paste into Google Apps Script once. |
| `manifest.webmanifest`, `icon-*.png` | Let people add the site to a phone home screen. |
| `share-card.png` | The picture that shows up when the link is pasted into a chat. |
| `sharks.png`, `titans.png`, `simpon says.png` | Team logos. |

## Editing the site

Open the site, click **Desk** in the sidebar, enter the passcode, edit, then hit **Publish**.

The passcode is `media` until you set up the cloud, at which point the cloud's passcode
takes over. That one is set at the top of `apps-script.gs`.

Everything already added — reports, interviews, photos, quotes, rules, fixtures, squads —
can be edited in place. You never have to delete something just to fix a typo.

## Publishing

**Without the cloud:** the Desk gives you the new `data.js`, you paste it into GitHub and
commit. About fifteen seconds.

**With the cloud** (five minutes to set up, once): the Desk saves straight to the web with
one button, and anyone can put in their own tips without you typing them in. Setup steps
are in the comment at the top of `apps-script.gs` and repeated in the Desk under **Cloud**.

Two things worth knowing about the cloud:

- The setup is only finished when the cloud URL is inside the published `data.js`. Until
  then the Desk will keep telling you so — the URL alone in your browser is not enough for
  anyone else.
- If two people have the Desk open, the second one to save is warned rather than silently
  writing over the first. Someone submitting a tip does not count as a clash. Every save
  keeps the version before it, restorable from **Desk → Cloud → Backups**.

## Turning things off

Every extra — countdown, results ticker, form guide, MVP podium, public tipping, player
cards, search, dark mode, live updates — has a switch in **Desk → Features**. Untick it and
it disappears for everyone.

Whole pages can be renamed, reordered or removed in **Desk → Pages**. The site name,
highlight colour, default theme and ladder points are in **Desk → Look**.

## If something breaks

If `data.js` is ever pasted in wrong, the site says so and offers the repo history and the
old design rather than showing a blank page. Nothing is lost: open the repo, click
**History**, revert `data.js` to the last version that worked.

## Going back to the old design

The old site is at `classic.html`, untouched, so that link works right now.

To make it the main site again, rename the files (`index.html` → `new.html`,
`classic.html` → `index.html`) or revert the commit in GitHub's History. `data.js` is
shared by both, so no content is lost either way.

## One note for a future maintainer

The share links in `index.html` (`og:image`, `og:url`) point at
`https://b-2222.github.io/SEPEP/`. If the site ever moves to a different address, update
those two lines or shared links will show the wrong picture.
