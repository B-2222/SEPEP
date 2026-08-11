/* ============================================================================
   SEPEP GAELIC — SITE CONTENT

   You don't need to edit this by hand. Open the site, scroll to the footer,
   click Media desk, make your changes, then Publish.

   If you ever do edit it directly: text goes in "quotes", every item in a list
   ends with a comma except the last, and never delete a { } or [ ] bracket.
   ============================================================================ */

const DATA = {

  /* --------------------------------------------------------------------------
     SECTIONS
     on:false hides a section completely, including its link in the menu.
     Change title or sub to rename a section.
     The order here is the order they appear on the page.
     -------------------------------------------------------------------------- */
  sections: [
    { id:"ladder",     on:true, title:"Ladder",          sub:"Two points a win, one a draw" },
    { id:"fixtures",   on:true, title:"Fixtures",        sub:"The team not playing referees and votes" },
    { id:"stats",      on:true, title:"Stats",           sub:"Season totals across all halves" },
    { id:"mvp",        on:true, title:"The MVP Race",    sub:"Voted by the refereeing team" },
    { id:"tipping",    on:true, title:"Tipping",         sub:"Pick your winners before the lesson" },
    { id:"teams",      on:true, title:"Teams",           sub:"Tap any player for their season" },
    { id:"gallery",    on:true, title:"Gallery",         sub:"From the sideline" },
    { id:"reports",    on:true, title:"Match Reports",   sub:"" },
    { id:"interviews", on:true, title:"Interviews",      sub:"Players and coaches on camera" },
    { id:"quotes",     on:true, title:"Coach's Corner",  sub:"" },
    { id:"rules",      on:true, title:"Rules",           sub:"" }
  ],

  /* --------------------------------------------------------------------------
     TEAMS
     -------------------------------------------------------------------------- */
  teams: [
    {
      id: "T1", name: "Simon Says", coach: "James Berean",
      colour: "#F0A43A", logo: "",
      players: [
        { name:"Barsa",         no:1, pos:"", photo:"" },
        { name:"Hamish",        no:2, pos:"", photo:"" },
        { name:"Max Jenkinson", no:3, pos:"", photo:"" },
        { name:"Fraser",        no:4, pos:"", photo:"" },
        { name:"Isaac",         no:5, pos:"", photo:"" },
        { name:"Aleksa",        no:6, pos:"", photo:"" },
        { name:"Simon",         no:7, pos:"", photo:"" }
      ]
    },
    {
      id: "T2", name: "Sharks", coach: "Charlie Newbold",
      colour: "#5FB0D4", logo: "",
      players: [
        { name:"Keir",           no:1, pos:"", photo:"" },
        { name:"Cooper",         no:2, pos:"", photo:"" },
        { name:"Will Fox",       no:3, pos:"", photo:"" },
        { name:"Dhruva",         no:4, pos:"", photo:"" },
        { name:"Ben Roberts",    no:5, pos:"", photo:"" },
        { name:"Hugh",           no:6, pos:"", photo:"" },
        { name:"Archer Miller",  no:7, pos:"", photo:"" },
        { name:"Lachlan Gillet", no:8, pos:"", photo:"" }
      ]
    },
    {
      id: "T3", name: "Titans", coach: "Will Cooke",
      colour: "#C4574E", logo: "",
      players: [
        { name:"Harper",       no:1, pos:"", photo:"" },
        { name:"Will Liston",  no:2, pos:"", photo:"" },
        { name:"Max Kovac",    no:3, pos:"", photo:"" },
        { name:"Ben Stupples", no:4, pos:"", photo:"" },
        { name:"Jack Telfer",  no:5, pos:"", photo:"" },
        { name:"Jackson",      no:6, pos:"", photo:"" },
        { name:"Max Davis",    no:7, pos:"", photo:"" }
      ]
    }
  ],

  /* --------------------------------------------------------------------------
     FIXTURES  (referee is worked out automatically)
     -------------------------------------------------------------------------- */
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

  votes: [],
  potr: [],
  statCategories: ["Goals", "Overs", "Behinds"],
  stats: [],
  tips: [],
  gallery: [],
  reports: [],
  interviews: [],
  quotes: [],
  rules: [],

  ladderPoints: { win: 2, draw: 1, loss: 0 }
};
