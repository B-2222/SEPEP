# SEPEP Gaelic

The site for the Year 10 SEPEP Gaelic football competition at Scotch College.

| File | What it is |
| --- | --- |
| `index.html` | The site. Everything — pages, styles, the Media Desk — lives in here. |
| `data.js` | The content: teams, fixtures, votes, stats, tips, reports. |
| `classic.html` | **The old design, kept exactly as it was.** Still works, still reads `data.js`. |
| `apps-script.gs` | The optional cloud backend. Paste into Google Apps Script once. |
| `*.png` | Team logos. |

## Editing the site

Open the site, click **Desk** in the sidebar, enter the passcode, edit, then hit **Publish**.

The passcode is `media` until you set up the cloud, at which point the cloud's
passcode takes over. It is set at the top of `apps-script.gs`.

## Publishing

**Without the cloud** (how it works right now): the Desk gives you the new `data.js`,
you paste it into GitHub and commit. About fifteen seconds.

**With the cloud** (five minutes to set up, once): the Desk saves straight to the web
with one button, and anyone can put in their own tips without you typing them in.
Setup instructions are in the comment at the top of `apps-script.gs`, and repeated
in the Desk under **Cloud**.

Every cloud save keeps the previous version, so you can roll back from
**Desk → Cloud → Backups**.

## Turning things off

Every extra — the countdown, the results ticker, the form guide, the MVP podium,
public tipping, the player cards, search, dark mode — has a switch in
**Desk → Features**. Untick it and it disappears for everyone.

Whole pages can be renamed, reordered or removed in **Desk → Pages**.
Colours, the site name and the ladder points are in **Desk → Look**.

## Going back to the old design

The old site is at `classic.html` and is untouched, so
`.../classic.html` works right now.

To make it the main site again, rename the files (`index.html` → `new.html`,
`classic.html` → `index.html`) or revert the commit in GitHub's History.
`data.js` is shared by both, so no content is lost either way.
