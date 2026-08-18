/* SEPEP Gaelic content.
   Written by the media desk. To change anything, open the site,
   click Desk in the sidebar, edit, then publish. */

const DATA = {
  "sections": [
    {
      "id": "home",
      "on": true,
      "title": "Home",
      "sub": "Season at a glance"
    },
    {
      "id": "ladder",
      "on": true,
      "title": "Ladder",
      "sub": "Three points a win, one a draw"
    },
    {
      "id": "fixtures",
      "on": true,
      "title": "Fixtures",
      "sub": "The team not playing referees and votes"
    },
    {
      "id": "stats",
      "on": true,
      "title": "Stats",
      "sub": "Season totals across all halves"
    },
    {
      "id": "mvp",
      "on": true,
      "title": "The MVP Race",
      "sub": "Voted by the refereeing team"
    },
    {
      "id": "tipping",
      "on": true,
      "title": "Tipping",
      "sub": "Pick your winners before the lesson"
    },
    {
      "id": "teams",
      "on": true,
      "title": "Teams",
      "sub": "Tap any player for their season"
    },
    {
      "id": "gallery",
      "on": false,
      "title": "Gallery",
      "sub": "From the sideline"
    },
    {
      "id": "reports",
      "on": true,
      "title": "Match Reports",
      "sub": ""
    },
    {
      "id": "interviews",
      "on": true,
      "title": "Interviews",
      "sub": "Players and coaches on camera"
    },
    {
      "id": "quotes",
      "on": true,
      "title": "Coach's Corner",
      "sub": ""
    },
    {
      "id": "rules",
      "on": true,
      "title": "Rules",
      "sub": ""
    }
  ],
  "teams": [
    {
      "id": "T1",
      "name": "Simon Says",
      "coach": "James Berean",
      "colour": "#F0A43A",
      "logo": "simpon says.png",
      "players": [
        {
          "name": "James Berean",
          "no": 1,
          "pos": "Coach",
          "photo": ""
        },
        {
          "name": "Barsa",
          "no": 2,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Hamish",
          "no": 3,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Max Jenkinson",
          "no": 4,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Fraser",
          "no": 5,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Isaac",
          "no": 6,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Aleksa",
          "no": 7,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Simon",
          "no": 8,
          "pos": "",
          "photo": ""
        }
      ]
    },
    {
      "id": "T2",
      "name": "Sharks",
      "coach": "Charlie Newbold",
      "colour": "#5FB0D4",
      "logo": "sharks.png",
      "players": [
        {
          "name": "Charlie Newbold",
          "no": 1,
          "pos": "Coach",
          "photo": ""
        },
        {
          "name": "Keir",
          "no": 2,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Cooper",
          "no": 3,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Will Fox",
          "no": 4,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Dhruva",
          "no": 5,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Ben Roberts",
          "no": 6,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Hugh",
          "no": 7,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Archer Miller",
          "no": 8,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Lachlan Gillet",
          "no": 9,
          "pos": "",
          "photo": ""
        }
      ]
    },
    {
      "id": "T3",
      "name": "Titans",
      "coach": "Will Cooke",
      "colour": "#C4574E",
      "logo": "titans.png",
      "players": [
        {
          "name": "Will Cooke",
          "no": 1,
          "pos": "Coach, goalkeeper",
          "photo": ""
        },
        {
          "name": "Harper",
          "no": 2,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Will Liston",
          "no": 3,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Max Kovac",
          "no": 4,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Ben Stupples",
          "no": 5,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Jack Telfer",
          "no": 6,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Jackson",
          "no": 7,
          "pos": "",
          "photo": ""
        },
        {
          "name": "Max Davis",
          "no": 8,
          "pos": "",
          "photo": ""
        }
      ]
    }
  ],
  "fixtures": [
    {
      "id": "g01",
      "round": 1,
      "half": 1,
      "home": "T2",
      "away": "T3",
      "when": "",
      "played": true,
      "homeScore": 5,
      "awayScore": 3,
      "date": ""
    },
    {
      "id": "g02",
      "round": 1,
      "half": 2,
      "home": "T2",
      "away": "T1",
      "when": "",
      "played": true,
      "homeScore": 2,
      "awayScore": 0,
      "date": ""
    },
    {
      "id": "g03",
      "round": 2,
      "half": 1,
      "home": "T3",
      "away": "T1",
      "when": "",
      "played": true,
      "homeScore": 9,
      "awayScore": 1,
      "date": ""
    },
    {
      "id": "g04",
      "round": 2,
      "half": 2,
      "home": "T2",
      "away": "T3",
      "when": "",
      "played": true,
      "homeScore": 4,
      "awayScore": 0,
      "date": ""
    },
    {
      "id": "g05",
      "round": 3,
      "half": 1,
      "home": "T2",
      "away": "T1",
      "when": "",
      "played": false,
      "homeScore": "",
      "awayScore": "",
      "date": ""
    },
    {
      "id": "g06",
      "round": 3,
      "half": 2,
      "home": "T3",
      "away": "T1",
      "when": "",
      "played": false,
      "homeScore": "",
      "awayScore": "",
      "date": ""
    },
    {
      "id": "g07",
      "round": 4,
      "half": 1,
      "home": "T2",
      "away": "T3",
      "when": "",
      "played": false,
      "homeScore": "",
      "awayScore": "",
      "date": ""
    },
    {
      "id": "g08",
      "round": 4,
      "half": 2,
      "home": "T2",
      "away": "T1",
      "when": "",
      "played": false,
      "homeScore": "",
      "awayScore": "",
      "date": ""
    },
    {
      "id": "g09",
      "round": 5,
      "half": 1,
      "home": "T3",
      "away": "T1",
      "when": "",
      "played": false,
      "homeScore": "",
      "awayScore": "",
      "date": ""
    },
    {
      "id": "g10",
      "round": 5,
      "half": 2,
      "home": "T2",
      "away": "T3",
      "when": "",
      "played": false,
      "homeScore": "",
      "awayScore": "",
      "date": ""
    },
    {
      "id": "g11",
      "round": 6,
      "half": 1,
      "home": "T2",
      "away": "T1",
      "when": "",
      "played": false,
      "homeScore": "",
      "awayScore": "",
      "date": ""
    },
    {
      "id": "g12",
      "round": 6,
      "half": 2,
      "home": "T3",
      "away": "T1",
      "when": "",
      "played": false,
      "homeScore": "",
      "awayScore": "",
      "date": ""
    }
  ],
  "votes": [
    {
      "fixtureId": "g01",
      "lines": [
        {
          "player": "Charlie Newbold",
          "votes": 3
        },
        {
          "player": "Will Cooke",
          "votes": 2
        },
        {
          "player": "Ben Stupples",
          "votes": 1
        }
      ]
    },
    {
      "fixtureId": "g02",
      "lines": [
        {
          "player": "Charlie Newbold",
          "votes": 3
        },
        {
          "player": "Hugh",
          "votes": 2
        },
        {
          "player": "Max Jenkinson",
          "votes": 1
        }
      ]
    },
    {
      "fixtureId": "g04",
      "lines": [
        {
          "player": "Hugh",
          "votes": 3
        },
        {
          "player": "Charlie Newbold",
          "votes": 2
        },
        {
          "player": "Jackson",
          "votes": 1
        }
      ]
    },
    {
      "fixtureId": "g03",
      "lines": [
        {
          "player": "Will Liston",
          "votes": 3
        },
        {
          "player": "Max Davis",
          "votes": 2
        },
        {
          "player": "Fraser",
          "votes": 1
        }
      ]
    }
  ],
  "potr": [],
  "statCategories": [
    "Goals",
    "Overs",
    "Saves"
  ],
  "stats": [
    {
      "fixtureId": "g01",
      "lines": [
        {
          "player": "Ben Stupples",
          "values": {
            "Goals": 1,
            "Overs": 0,
            "Saves": 0
          }
        },
        {
          "player": "Ben Roberts",
          "values": {
            "Goals": 1,
            "Overs": 0,
            "Saves": 0
          }
        },
        {
          "player": "Charlie Newbold",
          "values": {
            "Goals": 0,
            "Overs": 1,
            "Saves": 0
          }
        },
        {
          "player": "Will Cooke",
          "values": {
            "Goals": 0,
            "Overs": 0,
            "Saves": 1
          }
        },
        {
          "player": "Lachlan Gillet",
          "values": {
            "Goals": 0,
            "Overs": 0,
            "Saves": 1
          }
        }
      ]
    },
    {
      "fixtureId": "g02",
      "lines": [
        {
          "player": "Charlie Newbold",
          "values": {
            "Goals": 0,
            "Overs": 1,
            "Saves": 0
          }
        },
        {
          "player": "Fraser",
          "values": {
            "Goals": 0,
            "Overs": 0,
            "Saves": 1
          }
        }
      ]
    },
    {
      "fixtureId": "g04",
      "lines": [
        {
          "player": "Charlie Newbold",
          "values": {
            "Goals": 3,
            "Overs": 0,
            "Saves": 0
          }
        },
        {
          "player": "Hugh",
          "values": {
            "Goals": 1,
            "Overs": 0,
            "Saves": 0
          }
        }
      ]
    },
    {
      "fixtureId": "g03",
      "lines": [
        {
          "player": "Will Liston",
          "values": {
            "Goals": 3,
            "Overs": 0,
            "Saves": 0
          }
        },
        {
          "player": "Jackson",
          "values": {
            "Goals": 3,
            "Overs": 0,
            "Saves": 0
          }
        },
        {
          "player": "Max Davis",
          "values": {
            "Goals": 3,
            "Overs": 0,
            "Saves": 0
          }
        },
        {
          "player": "Max Jenkinson",
          "values": {
            "Goals": 1,
            "Overs": 0,
            "Saves": 0
          }
        },
        {
          "player": "Fraser",
          "values": {
            "Goals": 0,
            "Overs": 0,
            "Saves": 1
          }
        }
      ]
    }
  ],
  "tips": [
    {
      "tipper": "Will Fox",
      "picks": {
        "g01": "T2",
        "g02": "T2"
      }
    },
    {
      "tipper": "Max Kovac",
      "picks": {
        "g01": "T3",
        "g02": "T2"
      }
    }
  ],
  "gallery": [],
  "reports": [],
  "interviews": [],
  "quotes": [
    {
      "round": 1,
      "team": "T1",
      "text": "My team is going to come out fighting, and destroy anything in our path."
    }
  ],
  "rules": [
    {
      "heading": "Scoring",
      "points": [
        "3 points for a goal under the crossbar",
        "2 points for a goal over the crossbar"
      ]
    },
    {
      "heading": "Ladder",
      "points": [
        "3 points for a win",
        "1 point for a draw",
        "No points for a loss"
      ]
    },
    {
      "heading": "Match rules",
      "points": [
        "Attackers cannot use hand at all in opposition box",
        "You cannot pick the ball up below knee height",
        "Take maximum 5 steps before bouncing the ball and can only bounce twice before disposing of the ball",
        "If you mark the ball opposition cannot tackle you before playing on",
        "5 outfield players and one designated goalkeeper for each team",
        "Soccer type penalty for attacking team if defenders use of hand below knees in box",
        "Football kick if picked up below knees anywhere not in the box",
        "Throw in if the opposition team kicked it out",
        "Only grab tackle is allowed (no slinging or dumping)",
        "If you don't dispose of the ball two seconds after getting tackled it is holding the ball and football kick to opposition",
        "Will try to play on soccer fields. If on rugby same rules apply."
      ]
    }
  ],
  "ladderPoints": {
    "win": 3,
    "draw": 1,
    "loss": 0
  },
  "settings": {
    "name": "SEPEP Gaelic",
    "tagline": "Scotch College",
    "accent": "#E0912A",
    "theme": "auto",
    "apiUrl": "https://script.google.com/macros/s/AKfycbwfyemJT83utKTiWRMGinn73-rMgUANUtS3Fgx8_BFcTusaSrerznruEM5_ZNmbmKSj/exec",
    "features": {
      "hero": true,
      "countdown": true,
      "ticker": true,
      "homeTiles": true,
      "form": true,
      "ladderOpen": true,
      "podium": true,
      "publicTips": true,
      "playerCard": true,
      "search": true,
      "themeSwap": true,
      "share": true
    }
  }
};
