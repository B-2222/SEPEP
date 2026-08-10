/* ============================================================================
   SEPEP GAELIC — SITE CONTENT
   ----------------------------------------------------------------------------
   This is the only file you edit. The site reads everything from here.

   TO UPDATE THE SITE
   1. Open this file on GitHub
   2. Click the pencil icon (top right of the file)
   3. Change what you need
   4. Scroll down, click "Commit changes"
   5. Wait about a minute. The live site updates. The link never changes.

   THE RULES OF EDITING
   - Text goes inside "quote marks"
   - Every item in a list ends with a comma, except the last one
   - Never delete a { } or [ ] bracket
   - If the site goes blank after an edit, you've broken a bracket or comma.
     Go to the repo, click History, and revert to the last working version.
   ============================================================================ */

const DATA = {

  /* ==========================================================================
     TEAMS
     --------------------------------------------------------------------------
     colour  -> the team's colour, used everywhere on the site
     logo    -> "" for none, or "photos/sharks.png" once you upload a logo
     players -> name is required. no, pos and photo are optional.
     ========================================================================== */
  teams: [
    {
      id: "T1",
      name: "Simon Says",
      coach: "James Berean",
      colour: "#F0A43A",
      logo: "",
      players: [
        { name: "Barsa",         no: 1, pos: "", photo: "" },
        { name: "Hamish",        no: 2, pos: "", photo: "" },
        { name: "Max Jenkinson", no: 3, pos: "", photo: "" },
        { name: "Fraser",        no: 4, pos: "", photo: "" },
        { name: "Isaac",         no: 5, pos: "", photo: "" },
        { name: "Aleksa",        no: 6, pos: "", photo: "" },
        { name: "Simon",         no: 7, pos: "", photo: "" }
      ]
    },
    {
      id: "T2",
      name: "Sharks",
      coach: "Charlie Newbold",
      colour: "#5FB0D4",
      logo: "",
      players: [
        { name: "Keir",           no: 1, pos: "", photo: "" },
        { name: "Cooper",         no: 2, pos: "", photo: "" },
        { name: "Will Fox",       no: 3, pos: "", photo: "" },
        { name: "Dhruva",         no: 4, pos: "", photo: "" },
        { name: "Ben Roberts",    no: 5, pos: "", photo: "" },
        { name: "Hugh",           no: 6, pos: "", photo: "" },
        { name: "Archer Miller",  no: 7, pos: "", photo: "" },
        { name: "Lachlan Gillet", no: 8, pos: "", photo: "" }
      ]
    },
    {
      id: "T3",
      name: "Titans",
      coach: "Will Cooke",
      colour: "#C4574E",
      logo: "",
      players: [
        { name: "Harper",       no: 1, pos: "", photo: "" },
        { name: "Will Liston",  no: 2, pos: "", photo: "" },
        { name: "Max Kovac",    no: 3, pos: "", photo: "" },
        { name: "Ben Stupples", no: 4, pos: "", photo: "" },
        { name: "Jack Telfer",  no: 5, pos: "", photo: "" },
        { name: "Jackson",      no: 6, pos: "", photo: "" },
        { name: "Max Davis",    no: 7, pos: "", photo: "" }
      ]
    }
  ],

  /* ==========================================================================
     FIXTURES AND RESULTS
     --------------------------------------------------------------------------
     The refereeing team is worked out automatically (it's the team not playing).
     They're also the team that votes for MVP.

     To post a result, change played to true and fill in the two scores.
       played: true, homeScore: 14, awayScore: 9
     ========================================================================== */
  fixtures: [
    { id:"g01", round:1, half:1, home:"T2", away:"T3", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g02", round:1, half:2, home:"T2", away:"T1", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g03", round:2, half:1, home:"T3", away:"T1", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g04", round:2, half:2, home:"T2", away:"T3", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g05", round:3, half:1, home:"T2", away:"T1", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g06", round:3, half:2, home:"T3", away:"T1", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g07", round:4, half:1, home:"T2", away:"T3", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g08", round:4, half:2, home:"T2", away:"T1", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g09", round:5, half:1, home:"T3", away:"T1", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g10", round:5, half:2, home:"T2", away:"T3", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g11", round:6, half:1, home:"T2", away:"T1", when:"", played:false, homeScore:"", awayScore:"" },
    { id:"g12", round:6, half:2, home:"T3", away:"T1", when:"", played:false, homeScore:"", awayScore:"" }
  ],

  /* ==========================================================================
     MVP VOTES
     --------------------------------------------------------------------------
     The refereeing team votes after each half. 3-2-1 per voter works well.
     Add the totals here. fixtureId matches the id in fixtures above.

     Example:
     { fixtureId:"g01", lines:[
         { player:"Keir", votes:9 },
         { player:"Harper", votes:5 }
     ]},
     ========================================================================== */
  votes: [
  ],

  /* ==========================================================================
     PLAYER OF THE ROUND
     --------------------------------------------------------------------------
     Leave a lesson out and the site uses the top vote getter automatically.
     Add an entry to override it.

     Example: { round:1, player:"Keir", note:"Three goals and ran the midfield" },
     ========================================================================== */
  potr: [
  ],

  /* ==========================================================================
     STATS
     --------------------------------------------------------------------------
     Change statCategories to whatever your rules board settles on.
     Then record stats per half. The site adds up season totals.

     Example:
     { fixtureId:"g01", lines:[
         { player:"Keir", values:{ Goals:2, Overs:1, Behinds:0 } }
     ]},
     ========================================================================== */
  statCategories: ["Goals", "Overs", "Behinds"],
  stats: [
  ],

  /* ==========================================================================
     TIPPING
     --------------------------------------------------------------------------
     People pick winners on the site and send you their tips.
     Enter them here. picks maps a fixture id to the team id they tipped.

     Example:
     { tipper:"Barsa", picks:{ g01:"T2", g02:"T1" } },
     ========================================================================== */
  tips: [
  ],

  /* ==========================================================================
     PHOTO GALLERY
     --------------------------------------------------------------------------
     Easiest way: make a folder called photos in the repo, upload your images,
     then reference them like "photos/lesson1-01.jpg".
     A web link to an image also works.
     ========================================================================== */
  gallery: [
  ],

  /* ==========================================================================
     MATCH REPORTS
     --------------------------------------------------------------------------
     body is a list of paragraphs.
     media is optional, any video or photo link.
     ========================================================================== */
  reports: [
  ],

  /* ==========================================================================
     INTERVIEWS
     --------------------------------------------------------------------------
     media takes a OneDrive, Google Drive, YouTube, Dropbox or .mp4 link.
     Make sure sharing is set to "Anyone with the link", not just the school.

     Example:
     { round:1, subject:"Will Cooke", title:"Titans coach on the fightback",
       media:"https://...", note:"Two minutes on what changed at half time." },
     ========================================================================== */
  interviews: [
  ],

  /* ==========================================================================
     COACH QUOTES
     --------------------------------------------------------------------------
     team is the team id: T1, T2 or T3. The coach's name is filled in for you.
     ========================================================================== */
  quotes: [
  ],

  /* ==========================================================================
     RULES
     --------------------------------------------------------------------------
     Example:
     { heading:"Scoring", points:["Goal = 6", "Over = 3", "Behind = 1"] },
     ========================================================================== */
  rules: [
  ],

  /* Ladder points. Change only if your comp scores differently. */
  ladderPoints: { win: 2, draw: 1, loss: 0 }
};
