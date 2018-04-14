var shipTiers = [
  {
    label: "1/4",
    value: {
      SBP: 25
    }
  },
  {
    label: "1/3",
    value: {
      SBP: 30
    }
  },
  {
    label: "1/2",
    value: {
      SBP: 40
    }
  },
  {
    label: "1",
    value: {
      SBP: 40
    }
  },
  {
    label: "2",
    value: {
      SBP: 75
    }
  },
  {
    label: "3",
    value: {
      SBP: 95
    }
  },
  {
    label: "4",
    value: {
      SBP: 115,
      hpIncrease: 1
    },
  },
  {
    label: "5",
    value: {
      SBP: 135
    }
  },
  {
    label: "6",
    value: {
      SBP: 155
    }
  },
  {
    label: "7",
    value: {
      SBP: 180
    }
  },
  {
    label: "8",
    value: {
      SBP: 205,
      hpIncrease: 2
    }
  },
  {
    label: "9",
    value: {
      SBP: 230
    }
  },
  {
    label: "10",
    value: {
      SBP: 270
    }
  },
  {
    label: "11",
    value: {
      SBP: 310
    }
  },
  {
    label: "12",
    value: {
      SBP: 350,
      hpIncrease: 3
    }
  },
  {
    label: "13",
    value: {
      SBP: 400
    }
  },
  {
    label: "14",
    value: {
      SBP: 450
    }
  },
  {
    label: "15",
    value: {
      SBP: 500
    }
  },
  {
    label: "16",
    value: {
      SBP: 600,
      hpIncrease: 4
    }
  },
  {
    label: "17",
    value: {
      SBP: 700
    }
  },
  {
    label: "18",
    value: {
      SBP: 800
    }
  },
  {
    label: "19",
    value: {
      SBP: 900
    }
  },
  {
    label: "20",
    value: {
      SBP: 1000,
      hpIncrease: 5
    }
  }
];

var shipSizes = [
  null,
  "Tiny",
  "Small",
  "Medium",
  "Large",
  "Huge",
  "Gargantuan",
  "Colossal"
];

var shipArmor = [
{
  "BPCostMultiplier": 9,
  "label": "Mk 6 armor",
  "value": {
    "AC": 6,
    "TL": -1,
    "turn": 0
  }
},
{
  "BPCostMultiplier": 7,
  "label": "Mk 5 armor",
  "value": {
    "AC": 5,
    "TL": -1,
    "turn": 0
  }
},
{
  "BPCostMultiplier": 2,
  "label": "Mk 2 armor",
  "value": {
    "AC": 2,
    "TL": "none",
    "turn": 0
  }
},
{
  "BPCostMultiplier": 1,
  "label": "Mk 1 armor",
  "value": {
    "AC": 1,
    "TL": "none",
    "turn": 0
  }
},
{
  "BPCostMultiplier": 21,
  "label": "Mk 10 armor",
  "value": {
    "AC": 10,
    "TL": -2,
    "turn": 1
  }
},
{
  "BPCostMultiplier": 15,
  "label": "Mk 8 armor",
  "value": {
    "AC": 8,
    "TL": -1,
    "turn": 0
  }
},
{
  "BPCostMultiplier": 18,
  "label": "Mk 9 armor",
  "value": {
    "AC": 9,
    "TL": -2,
    "turn": 1
  }
},
{
  "BPCostMultiplier": 5,
  "label": "Mk 4 armor",
  "value": {
    "AC": 4,
    "TL": "none",
    "turn": 0
  }
},
{
  "BPCostMultiplier": 3,
  "label": "Mk 3 armor",
  "value": {
    "AC": 3,
    "TL": "none",
    "turn": 0
  }
},
{
  "BPCostMultiplier": 12,
  "label": "Mk 7 armor",
  "value": {
    "AC": 7,
    "TL": -1,
    "turn": 0
  }
},
{
  "BPCostMultiplier": 40,
  "label": "Mk 14 armor",
  "value": {
    "AC": 14,
    "TL": -3,
    "turn": 2
  }
},
{
  "BPCostMultiplier": 45,
  "label": "Mk 15 armor",
  "value": {
    "AC": 15,
    "TL": -4,
    "turn": 3
  }
},
{
  "BPCostMultiplier": 35,
  "label": "Mk 13 armor",
  "value": {
    "AC": 13,
    "TL": -3,
    "turn": 2
  }
},
{
  "BPCostMultiplier": 25,
  "label": "Mk 11 armor",
  "value": {
    "AC": 11,
    "TL": -2,
    "turn": 1
  }
},
{
  "BPCostMultiplier": 30,
  "label": "Mk 12 armor",
  "value": {
    "AC": 12,
    "TL": -3,
    "turn": 2
  }
}
];

var shipComputers = [
{
  "cost": {
    "BP": 25,
    "PCU": 30
  },
  "label": "Mk 5 mononode",
  "value": {
    "computerBonus": 5,
    "computerNodes": 1
  }
},
{
  "cost": {
    "BP": 8,
    "PCU": 15
  },
  "label": "Mk 2 duonode",
  "value": {
    "computerBonus": 2,
    "computerNodes": 2
  }
},
{
  "cost": {
    "BP": 1,
    "PCU": 10
  },
  "label": "Mk 1 mononode",
  "value": {
    "computerBonus": 1,
    "computerNodes": 1
  }
},
{
  "cost": {
    "BP": 2,
    "PCU": 10
  },
  "label": "Mk 1 duonode",
  "value": {
    "computerBonus": 1,
    "computerNodes": 2
  }
},
{
  "cost": {
    "BP": 98,
    "PCU": 40
  },
  "label": "Mk 7 duonode",
  "value": {
    "computerBonus": 7,
    "computerNodes": 2
  }
},
{
  "cost": {
    "BP": 36,
    "PCU": 20
  },
  "label": "Mk 3 tetranode",
  "value": {
    "computerBonus": 3,
    "computerNodes": 4
  }
},
{
  "cost": {
    "BP": 128,
    "PCU": 45
  },
  "label": "Mk 8 duonode",
  "value": {
    "computerBonus": 8,
    "computerNodes": 2
  }
},
{
  "cost": {
    "BP": 0,
    "PCU": 0
  },
  "label": "Basic computer",
  "value": {
    "computerBonus": 0,
    "computerNodes": 0
  }
},
{
  "cost": {
    "BP": 4,
    "PCU": 10
  },
  "label": "Mk 1 tetranode",
  "value": {
    "computerBonus": 1,
    "computerNodes": 4
  }
},
{
  "cost": {
    "BP": 12,
    "PCU": 15
  },
  "label": "Mk 2 trinode",
  "value": {
    "computerBonus": 2,
    "computerNodes": 3
  }
},
{
  "cost": {
    "BP": 72,
    "PCU": 35
  },
  "label": "Mk 6 duonode",
  "value": {
    "computerBonus": 6,
    "computerNodes": 2
  }
},
{
  "cost": {
    "BP": 49,
    "PCU": 40
  },
  "label": "Mk 7 mononode",
  "value": {
    "computerBonus": 7,
    "computerNodes": 1
  }
},
{
  "cost": {
    "BP": 9,
    "PCU": 20
  },
  "label": "Mk 3 mononode",
  "value": {
    "computerBonus": 3,
    "computerNodes": 1
  }
},
{
  "cost": {
    "BP": 36,
    "PCU": 35
  },
  "label": "Mk 6 mononode",
  "value": {
    "computerBonus": 6,
    "computerNodes": 1
  }
},
{
  "cost": {
    "BP": 75,
    "PCU": 30
  },
  "label": "Mk 5 trinode",
  "value": {
    "computerBonus": 5,
    "computerNodes": 3
  }
},
{
  "cost": {
    "BP": 48,
    "PCU": 25
  },
  "label": "Mk 4 trinode",
  "value": {
    "computerBonus": 4,
    "computerNodes": 3
  }
},
{
  "cost": {
    "BP": 27,
    "PCU": 20
  },
  "label": "Mk 3 trinode",
  "value": {
    "computerBonus": 3,
    "computerNodes": 3
  }
},
{
  "cost": {
    "BP": 64,
    "PCU": 45
  },
  "label": "Mk 8 mononode",
  "value": {
    "computerBonus": 8,
    "computerNodes": 1
  }
},
{
  "cost": {
    "BP": 4,
    "PCU": 15
  },
  "label": "Mk 2 mononode",
  "value": {
    "computerBonus": 2,
    "computerNodes": 1
  }
},
{
  "cost": {
    "BP": 3,
    "PCU": 10
  },
  "label": "Mk 1 trinode",
  "value": {
    "computerBonus": 1,
    "computerNodes": 3
  }
},
{
  "cost": {
    "BP": 100,
    "PCU": 55
  },
  "label": "Mk 10 mononode",
  "value": {
    "computerBonus": 10,
    "computerNodes": 1
  }
},
{
  "cost": {
    "BP": 81,
    "PCU": 50
  },
  "label": "Mk 9 mononode",
  "value": {
    "computerBonus": 9,
    "computerNodes": 1
  }
},
{
  "cost": {
    "BP": 32,
    "PCU": 25
  },
  "label": "Mk 4 duonode",
  "value": {
    "computerBonus": 4,
    "computerNodes": 2
  }
},
{
  "cost": {
    "BP": 18,
    "PCU": 20
  },
  "label": "Mk 3 duonode",
  "value": {
    "computerBonus": 3,
    "computerNodes": 2
  }
},
{
  "cost": {
    "BP": 16,
    "PCU": 15
  },
  "label": "Mk 2 tetranode",
  "value": {
    "computerBonus": 2,
    "computerNodes": 4
  }
},
{
  "cost": {
    "BP": 200,
    "PCU": 55
  },
  "label": "Mk 10 duonode",
  "value": {
    "computerBonus": 10,
    "computerNodes": 2
  }
},
{
  "cost": {
    "BP": 16,
    "PCU": 25
  },
  "label": "Mk 4 mononode",
  "value": {
    "computerBonus": 4,
    "computerNodes": 1
  }
},
{
  "cost": {
    "BP": 162,
    "PCU": 50
  },
  "label": "Mk 9 duonode",
  "value": {
    "computerBonus": 9,
    "computerNodes": 2
  }
},
{
  "cost": {
    "BP": 50,
    "PCU": 30
  },
  "label": "Mk 5 duonode",
  "value": {
    "computerBonus": 5,
    "computerNodes": 2
  }
}
];

var shipDefenses = [
{
  "cost": {
    "BP": 27,
      "PCU": 13
  },
    "label": "Mk 10 defenses",
    "value": {
      "TL": 10
    }
},
{
  "cost": {
    "BP": 4,
    "PCU": 2
  },
  "label": "Mk 3 defenses",
  "value": {
    "TL": 3
  }
},
{
  "cost": {
    "BP": 50,
    "PCU": 25
  },
  "label": "Mk 13 defenses",
  "value": {
    "TL": 13
  }
},
{
  "cost": {
    "BP": 40,
    "PCU": 20
  },
  "label": "Mk 12 defenses",
  "value": {
    "TL": 12
  }
},
{
  "cost": {
    "BP": 14,
    "PCU": 7
  },
  "label": "Mk 7 defenses",
  "value": {
    "TL": 7
  }
},
{
  "cost": {
    "BP": 8,
    "PCU": 4
  },
  "label": "Mk 5 defenses",
  "value": {
    "TL": 5
  }
},
{
  "cost": {
    "BP": 6,
    "PCU": 3
  },
  "label": "Mk 4 defenses",
  "value": {
    "TL": 4
  }
},
{
  "cost": {
    "BP": 90,
    "PCU": 45
  },
  "label": "Mk 15 defenses",
  "value": {
    "TL": 15
  }
},
{
  "cost": {
    "BP": 2,
    "PCU": 1
  },
  "label": "Mk 1 defenses",
  "value": {
    "TL": 1
  }
},
{
  "cost": {
    "BP": 33,
    "PCU": 16
  },
  "label": "Mk 11 defenses",
  "value": {
    "TL": 11
  }
},
{
  "cost": {
    "BP": 11,
    "PCU": 5
  },
  "label": "Mk 6 defenses",
  "value": {
    "TL": 6
  }
},
{
  "cost": {
    "BP": 3,
    "PCU": 1
  },
  "label": "Mk 2 defenses",
  "value": {
    "TL": 2
  }
},
{
  "cost": {
    "BP": 22,
    "PCU": 11
  },
  "label": "Mk 9 defenses",
  "value": {
    "TL": 9
  }
},
{
  "cost": {
    "BP": 18,
    "PCU": 9
  },
  "label": "Mk 8 defenses",
  "value": {
    "TL": 8
  }
},
{
  "cost": {
    "BP": 65,
    "PCU": 32
  },
  "label": "Mk 14 defenses",
  "value": {
    "TL": 14
  }
}
];

var shipDriftEngines = [
{
  "BPCostMultiplier": 15,
    "MaxSize": 4,
    "MinPCU": 175,
    "label": "Signal Superior",
    "value": {
      "driftEngineRating": 4
    }
},
{
  "BPCostMultiplier": 2,
  "MaxSize": 7,
  "MinPCU": 75,
  "label": "Signal Basic",
  "value": {
    "driftEngineRating": 1
  }
},
{
  "BPCostMultiplier": 5,
  "MaxSize": 5,
  "MinPCU": 100,
  "label": "Signal Booster",
  "value": {
    "driftEngineRating": 2
  }
},
{
  "BPCostMultiplier": 20,
  "MaxSize": 3,
  "MinPCU": 200,
  "label": "Signal Ultra",
  "value": {
    "driftEngineRating": 5
  }
},
{
  "BPCostMultiplier": 10,
  "MaxSize": 4,
  "MinPCU": 150,
  "label": "Signal Major",
  "value": {
    "driftEngineRating": 3
  }
}
];

var shipExpansionBays = [
{
  "cost": {
    "BP": 1,
      "PCU": 2
  },
    "decription": "A science lab contains scientific apparatuses and other laboratory equipment to aid in the research of certain topics. A general science lab provides a +1 circumstance bonus to Life Science and Physical Science checks (and is called a general science lab), a life science lab provides a +2 circumstance bonus to Life Science checks, and a physical science lab provides a +2 circumstance bonus to Physical Science checks. The lab type is chosen when the expansion bay is converted.",
    "label": "Science lab",
    "minSize": 1
},
{
  "cost": {
    "BP": 2,
    "PCU": 4
  },
  "decription": "Smuggler compartments are cargo holds hidden behind false bulkheads and are shielded from most scanning, allowing a starship equipped with them to haul illegal goods without detection. A smuggler compartment can contain 10 tons of goods, with no item being larger than Medium. A creature on the starship must succeed at a DC 20 Perception check to detect a basic smuggler compartment on the starship. A creature scanning the starship must succeed at a DC 20 Computers check to detect one (this additional check is part of the science officer\u2019s scan action in starship combat; see page 325). For each Build Point spent over the base cost, these DCs increase by 5 (maximum DC 50), though the amount of power the compartment uses also increases by 1.",
  "label": "Smuggler compartment",
  "minSize": 1
},
{
  "cost": {
    "BP": 1,
    "PCU": 3
  },
  "decription": "A recreation suite includes entertainments that help the crew (or passengers) relax and blow off steam. These diversions can be wide-ranging, with some consuming more PCU than others (see the table on page 300). Example recreation suites include a gym, sparring arena, or other exercise area; a trivid den or other comfortable space in which to consume passive entertainment; or a holographic amusement chamber (or HAC), vidgame arcade, or other high-tech interactive entertainment center.",
  "label": "Recreation suite (HAC)",
  "minSize": 1
},
{
  "cost": {
    "BP": 1,
    "PCU": 2
  },
  "decription": "A science lab contains scientific apparatuses and other laboratory equipment to aid in the research of certain topics. A general science lab provides a +1 circumstance bonus to Life Science and Physical Science checks (and is called a general science lab), a life science lab provides a +2 circumstance bonus to Life Science checks, and a physical science lab provides a +2 circumstance bonus to Physical Science checks. The lab type is chosen when the expansion bay is converted.",
  "label": "Life Science lab",
  "minSize": 1
},
{
  "cost": {
    "BP": 1,
    "PCU": 3
  },
  "decription": "A tech workshop contains all the space and tools necessary to craft technological items (see page 235), though the crafter must still provide the necessary raw materials. Such a workshop reduces the crafting time by half.",
  "label": "Tech workshop",
  "minSize": 1
},
{
  "cost": {
    "BP": 4,
    "PCU": 10
  },
  "decription": "A shuttle bay can be installed only in a Huge or larger starship and takes up two expansion bays. A shuttle bay provides a place for a Small or smaller starship to dock.",
  "label": "Shuttle bay",
  "minSize": 5
},
{
  "cost": {
    "BP": 0,
    "PCU": 0
  },
  "decription": "Unconverted expansion bays count as cargo holds. A cargo hold can contain approximately 25 tons of goods, with no item being larger than Large. A starship with multiple cargo holds can hold larger objects; usually 4 contiguous cargo holds are required to hold Huge objects and 8 for Gargantuan objects. These size restrictions can be overridden at the GM\u2019s discretion.",
  "label": "Cargo hold",
  "minSize": 1
},
{
  "cost": {
    "BP": 10,
    "PCU": 30
  },
  "decription": "A hangar bay can be installed only in a Gargantuan or larger starship and takes up 4 expansion bays. A hangar bay provides a place for up to 8 Tiny starships to dock.",
  "label": "Hangar bay",
  "minSize": 6
},
{
  "cost": {
    "BP": 1,
    "PCU": 1
  },
  "decription": "An arcane laboratory contains all the tools and space necessary to craft magic items (see page 235), though the crafter must still provide the necessary raw materials. Such a laboratory reduces the crafting time by half.",
  "label": "Arcane laboratory",
  "minSize": 1
},
{
  "cost": {
    "BP": 3,
    "PCU": 5
  },
  "decription": "A life boat is a more sophisticated version of an escape pod. It has room for one Large creature, or two Medium or smaller creatures, and enough supplies to last those passengers 15 days (or 30 days of supplies for one Medium or smaller creature). While it has the same kind of distress beacon as an escape pod, a life boat also has an on-board computer that automatically detects the nearest hospitable celestial body and minimal thrusters to get the craft there (though a life boat can\u2019t participate in starship combat). A single expansion bay can be converted into two life boats.",
  "label": "Life boats",
  "minSize": 1
},
{
  "cost": {
    "BP": 10,
    "PCU": 0
  },
  "decription": "An expansion bay can be set aside for an additional power core (which must be purchased separately) and the associated wiring and safety apparatuses. A power core housing can be installed on only a Medium or larger starship.",
  "label": "Power core housing",
  "minSize": 3
},
{
  "cost": {
    "BP": 1,
    "PCU": 2
  },
  "decription": "Escape pods give the crew of a severely damaged or destroyed starship a way to avoid imminent death. An escape pod fits one Medium or smaller creature and has enough supplies and life-support capacity for that creature to survive for 7 days. It is also fitted with a distress beacon that is easily identified by long-range scanners. An escape pod has heat shields that allow it to crash-land on a planet with an atmosphere, but no means of propulsion. A single expansion bay can be converted into six escape pods.",
  "label": "Escape pods",
  "minSize": 1
},
{
  "cost": {
    "BP": 1,
    "PCU": 2
  },
  "decription": "A synthesis bay contains all the space and tools required to craft drugs, medicine, or poison (see page 235), though the crafter must still provide the necessary raw materials. A synthesis bay reduces the crafting time by half.",
  "label": "Synthesis bay",
  "minSize": 1
},
{
  "cost": {
    "BP": 1,
    "PCU": 2
  },
  "decription": "Occasionally, a starship will need to host an alien or other creature whose biology is radically different from that of the crew. The passenger might be able to breathe only methane gas or can survive in only below-freezing temperatures. In such a case, a sealed environment chamber is required for the passenger to remain comfortable (and alive).",
  "label": "Sealed environment chamber",
  "minSize": 1
},
{
  "cost": {
    "BP": 1,
    "PCU": 2
  },
  "decription": "A science lab contains scientific apparatuses and other laboratory equipment to aid in the research of certain topics. A general science lab provides a +1 circumstance bonus to Life Science and Physical Science checks (and is called a general science lab), a life science lab provides a +2 circumstance bonus to Life Science checks, and a physical science lab provides a +2 circumstance bonus to Physical Science checks. The lab type is chosen when the expansion bay is converted.",
  "label": "Physical Science lab",
  "minSize": 1
},
{
  "cost": {
    "BP": 1,
    "PCU": 1
  },
  "decription": "Starships that function as passenger vessels require spaces apart from their crew quarters for their guests to sleep. A single expansion bay can be converted into common quarters (usually simple bunks or hammocks) for six passengers, good quarters (usually a comfortable bed, a desk with a chair, and a small set of drawers) for four passengers, or luxurious quarters (usually a large bed, a wardrobe, a couch, a desk with a nice chair, and a private washroom) for two passengers.",
  "label": "Guest quarters",
  "minSize": 1
},
{
  "cost": {
    "BP": 1,
    "PCU": 0
  },
  "decription": "A recreation suite includes entertainments that help the crew (or passengers) relax and blow off steam. These diversions can be wide-ranging, with some consuming more PCU than others (see the table on page 300). Example recreation suites include a gym, sparring arena, or other exercise area; a trivid den or other comfortable space in which to consume passive entertainment; or a holographic amusement chamber (or HAC), vidgame arcade, or other high-tech interactive entertainment center.",
  "label": "Recreation suite (gym)",
  "minSize": 1
},
{
  "cost": {
    "BP": 1,
    "PCU": 1
  },
  "decription": "A recreation suite includes entertainments that help the crew (or passengers) relax and blow off steam. These diversions can be wide-ranging, with some consuming more PCU than others (see the table on page 300). Example recreation suites include a gym, sparring arena, or other exercise area; a trivid den or other comfortable space in which to consume passive entertainment; or a holographic amusement chamber (or HAC), vidgame arcade, or other high-tech interactive entertainment center.",
  "label": "Recreation suite (trivid den)",
  "minSize": 1
},
{
  "cost": {
    "BP": 0,
    "PCU": 0
  },
  "decription": "An expansion bay can be converted into rows of seating for passengers at no cost. A single expansion bay can hold seating for 16 Medium passengers (though seats can be built for larger creatures). This upgrade is appropriate only for taking many passengers on short trips; starships on journeys lasting multiple days should instead have guest quarters installed.",
  "label": "Passenger seating",
  "minSize": 1
},
{
  "cost": {
    "BP": 8,
    "PCU": 4
  },
  "decription": "A medical bay functions as a medical lab (see page 220).",
  "label": "Medical bay",
  "minSize": 1
}
];

var shipFrames = [
{
  "cost": {
    "BP": 55
  },
    "label": "Bulk Freighter",
    "maneuverability": "poor",
    "mounts": {
      "AftArc": {
        "heavy": 1
      },
      "ForwardArc": {
        "heavy": 1
      },
      "Turret": {
        "light": 2
      }
    },
    "size": 5,
    "value": {
      "CT": 32,
      "DT": 5,
      "ExansionBays": 10,
      "HP": 160,
      "HPIncrement": 20,
      "maxCrew": 50,
      "minCrew": 20,
      "piloting": -1,
      "turn": 3
    }
},
{
  "cost": {
    "BP": 8
  },
  "label": "Fighter",
  "maneuverability": "good",
  "mounts": {
    "AftArc": {
      "light": 1
    },
    "ForwardArc": {
      "light": 2
    }
  },
  "size": 1,
  "value": {
    "CT": 7,
    "DT": 0,
    "ExansionBays": 0,
    "HP": 35,
    "HPIncrement": 5,
    "maxCrew": 2,
    "minCrew": 1,
    "piloting": 1,
    "turn": 1
  }
},
{
  "cost": {
    "BP": 60
  },
  "label": "Cruiser",
  "maneuverability": "average",
  "mounts": {
    "ForwardArc": {
      "capital": 1
    },
    "PortArc": {
      "light": 1
    },
    "StarboardArc": {
      "light": 1
    },
    "Turret": {
      "heavy": 1
    }
  },
  "size": 5,
  "value": {
    "CT": 36,
    "DT": 5,
    "ExansionBays": 6,
    "HP": 180,
    "HPIncrement": 25,
    "maxCrew": 100,
    "minCrew": 20,
    "piloting": 0,
    "turn": 2
  }
},
{
  "cost": {
    "BP": 30
  },
  "label": "Destroyer",
  "maneuverability": "average",
  "mounts": {
    "AftArc": {
      "light": 1
    },
    "ForwardArc": {
      "heavy": 2
    },
    "PortArc": {
      "light": 1
    },
    "StarboardArc": {
      "light": 1
    },
    "Turret": {
      "light": 1
    }
  },
  "size": 4,
  "value": {
    "CT": 30,
    "DT": 0,
    "ExansionBays": 4,
    "HP": 150,
    "HPIncrement": 20,
    "maxCrew": 20,
    "minCrew": 6,
    "piloting": 0,
    "turn": 2
  }
},
{
  "cost": {
    "BP": 150
  },
  "label": "Battleship",
  "maneuverability": "average",
  "mounts": {
    "AftArc": {
      "light": 1
    },
    "ForwardArc": {
      "capital": 1,
      "heavy": 2
    },
    "PortArc": {
      "heavy,1": 2
    },
    "StarboardArc": {
      "heavy": 2,
      "light": 1
    },
    "Turret": {
      "heavy": 2
    }
  },
  "size": 6,
  "value": {
    "CT": 56,
    "DT": 10,
    "ExansionBays": 8,
    "HP": 280,
    "HPIncrement": 40,
    "maxCrew": 300,
    "minCrew": 100,
    "piloting": 0,
    "turn": 2
  }
},
{
  "cost": {
    "BP": 10
  },
  "label": "Light Freighter",
  "maneuverability": "good",
  "mounts": {
    "ForwardArc": {
      "light": 2
    },
    "PortArc": {
      "light": 1
    },
    "StarboardArc": {
      "light": 1
    }
  },
  "size": 2,
  "value": {
    "CT": 8,
    "DT": 0,
    "ExansionBays": 3,
    "HP": 40,
    "HPIncrement": 10,
    "maxCrew": 6,
    "minCrew": 1,
    "piloting": 1,
    "turn": 1
  }
},
{
  "cost": {
    "BP": 40
  },
  "label": "Heavy Freighter",
  "maneuverability": "average",
  "mounts": {
    "ForwardArc": {
      "heavy": 1,
      "light": 2
    },
    "PortArc": {
      "heavy": 1
    },
    "StarboardArc": {
      "heavy": 1
    }
  },
  "size": 4,
  "value": {
    "CT": 24,
    "DT": 0,
    "ExansionBays": 8,
    "HP": 120,
    "HPIncrement": 20,
    "maxCrew": 20,
    "minCrew": 6,
    "piloting": 0,
    "turn": 2
  }
},
{
  "cost": {
    "BP": 4
  },
  "label": "Racer",
  "maneuverability": "perfect",
  "mounts": {
    "AftArc": {
      "light": 1
    },
    "ForwardArc": {
      "light": 1
    }
  },
  "size": 1,
  "value": {
    "CT": 4,
    "DT": 0,
    "ExansionBays": 0,
    "HP": 20,
    "HPIncrement": 5,
    "maxCrew": 1,
    "minCrew": 1,
    "piloting": 2,
    "turn": 0
  }
},
{
  "cost": {
    "BP": 120
  },
  "label": "Carrier",
  "maneuverability": "poor",
  "mounts": {
    "ForwardArc": {
      "capital": 1
    },
    "PortArc": {
      "heavy": 3
    },
    "StarboardArc": {
      "heavy": 3
    },
    "Turret": {
      "light": 2
    }
  },
  "size": 6,
  "value": {
    "CT": 48,
    "DT": 10,
    "ExansionBays": 10,
    "HP": 240,
    "HPIncrement": 30,
    "maxCrew": 200,
    "minCrew": 75,
    "piloting": -1,
    "turn": 3
  }
},
{
  "cost": {
    "BP": 200
  },
  "label": "Dreadnought",
  "maneuverability": "clumsy",
  "mounts": {
    "ForwardArc": {
      "capital": 2,
      "heavy": 2
    },
    "PortArc": {
      "capital,3": 1
    },
    "StarboardArc": {
      "capital": 1,
      "heavy": 3
    },
    "Turret": {
      "light": 4
    }
  },
  "size": 7,
  "value": {
    "CT": 80,
    "DT": 15,
    "ExansionBays": 20,
    "HP": 400,
    "HPIncrement": 50,
    "maxCrew": 500,
    "minCrew": 125,
    "piloting": -2,
    "turn": 4
  }
},
{
  "cost": {
    "BP": 6
  },
  "label": "Shuttle",
  "maneuverability": "perfect",
  "mounts": {
    "ForwardArc": {
      "light": 1
    }
  },
  "size": 2,
  "value": {
    "CT": 7,
    "DT": 0,
    "ExansionBays": 3,
    "HP": 35,
    "HPIncrement": 5,
    "maxCrew": 4,
    "minCrew": 1,
    "piloting": 2,
    "turn": 0
  }
},
{
  "cost": {
    "BP": 6
  },
  "label": "Interceptor",
  "maneuverability": "perfect",
  "mounts": {
    "ForwardArc": {
      "light": 2
    }
  },
  "size": 1,
  "value": {
    "CT": 6,
    "DT": 0,
    "ExansionBays": 0,
    "HP": 30,
    "HPIncrement": 5,
    "maxCrew": 1,
    "minCrew": 1,
    "piloting": 2,
    "turn": 0
  }
},
{
  "cost": {
    "BP": 15
  },
  "label": "Transport",
  "maneuverability": "average",
  "mounts": {
    "AftArc": {
      "light": 1
    },
    "ForwardArc": {
      "heavy": 1,
      "light": 1
    },
    "Turret": {
      "light": 2
    }
  },
  "size": 3,
  "value": {
    "CT": 14,
    "DT": 0,
    "ExansionBays": 5,
    "HP": 70,
    "HPIncrement": 15,
    "maxCrew": 6,
    "minCrew": 1,
    "piloting": 0,
    "turn": 2
  }
},
{
  "cost": {
    "BP": 12
  },
  "label": "Explorer",
  "maneuverability": "good",
  "mounts": {
    "ForwardArc": {
      "light": 1
    },
    "PortArc": {
      "light": 1
    },
    "StarboardArc": {
      "light": 1
    },
    "Turret": {
      "light": 1
    }
  },
  "size": 3,
  "value": {
    "CT": 11,
    "DT": 0,
    "ExansionBays": 4,
    "HP": 55,
    "HPIncrement": 10,
    "maxCrew": 6,
    "minCrew": 1,
    "piloting": 1,
    "turn": 1
  }
}
];

var shipPowerCores = [
{
  "cost": {
    "BP": 17
  },
    "label": "Pulse Red",
    "maxSize": 3,
    "minSize": 1,
    "value": {
      "PCU": 175
    }
},
{
  "cost": {
    "BP": 15
  },
  "label": "Nova Light",
  "maxSize": 5,
  "minSize": 3,
  "value": {
    "PCU": 150
  }
},
{
  "cost": {
    "BP": 4
  },
  "label": "Micron Light",
  "maxSize": 1,
  "minSize": 1,
  "value": {
    "PCU": 50
  }
},
{
  "cost": {
    "BP": 30
  },
  "label": "Pulse Prismatic",
  "maxSize": 4,
  "minSize": 2,
  "value": {
    "PCU": 300
  }
},
{
  "cost": {
    "BP": 20
  },
  "label": "Pulse Blue",
  "maxSize": 3,
  "minSize": 1,
  "value": {
    "PCU": 200
  }
},
{
  "cost": {
    "BP": 13
  },
  "label": "Arcus Heavy",
  "maxSize": 3,
  "minSize": 1,
  "value": {
    "PCU": 130
  }
},
{
  "cost": {
    "BP": 20
  },
  "label": "Arcus Maximum",
  "maxSize": 4,
  "minSize": 2,
  "value": {
    "PCU": 200
  }
},
{
  "cost": {
    "BP": 10
  },
  "label": "Pulse Gray",
  "maxSize": 3,
  "minSize": 1,
  "value": {
    "PCU": 100
  }
},
{
  "cost": {
    "BP": 9
  },
  "label": "Pulse Brown",
  "maxSize": 2,
  "minSize": 1,
  "value": {
    "PCU": 90
  }
},
{
  "cost": {
    "BP": 30
  },
  "label": "Nova Ultra",
  "maxSize": 5,
  "minSize": 3,
  "value": {
    "PCU": 300
  }
},
{
  "cost": {
    "BP": 50
  },
  "label": "Gateway Ultra",
  "maxSize": 7,
  "minSize": 5,
  "value": {
    "PCU": 500
  }
},
{
  "cost": {
    "BP": 40
  },
  "label": "Gateway Heavy",
  "maxSize": 6,
  "minSize": 4,
  "value": {
    "PCU": 400
  }
},
{
  "cost": {
    "BP": 25
  },
  "label": "Pulse Orange",
  "maxSize": 4,
  "minSize": 2,
  "value": {
    "PCU": 250
  }
},
{
  "cost": {
    "BP": 30
  },
  "label": "Gateway Light",
  "maxSize": 6,
  "minSize": 4,
  "value": {
    "PCU": 300
  }
},
{
  "cost": {
    "BP": 15
  },
  "label": "Arcus Ultra",
  "maxSize": 4,
  "minSize": 2,
  "value": {
    "PCU": 150
  }
},
{
  "cost": {
    "BP": 6
  },
  "label": "Micron Heavy",
  "maxSize": 1,
  "minSize": 1,
  "value": {
    "PCU": 70
  }
},
{
  "cost": {
    "BP": 15
  },
  "label": "Pulse Green",
  "maxSize": 3,
  "minSize": 1,
  "value": {
    "PCU": 150
  }
},
{
  "cost": {
    "BP": 14
  },
  "label": "Pulse White",
  "maxSize": 2,
  "minSize": 1,
  "value": {
    "PCU": 140
  }
},
{
  "cost": {
    "BP": 8
  },
  "label": "Micron Ultra",
  "maxSize": 1,
  "minSize": 1,
  "value": {
    "PCU": 80
  }
},
{
  "cost": {
    "BP": 12
  },
  "label": "Pulse Black",
  "maxSize": 2,
  "minSize": 1,
  "value": {
    "PCU": 120
  }
},
{
  "cost": {
    "BP": 20
  },
  "label": "Nova Heavy",
  "maxSize": 5,
  "minSize": 3,
  "value": {
    "PCU": 200
  }
},
{
  "cost": {
    "BP": 7
  },
  "label": "Arcus Light",
  "maxSize": 2,
  "minSize": 1,
  "value": {
    "PCU": 75
  }
}
];

var shipQuarters = [
{
  "cost": {
    "BP": 2
  },
    "description": "Good crew quarters are a bit more upscale than common crew quarters. They consist of dormitory-style rooms that can hold one or two small beds (larger starships usually require lower-ranking crew members to share these quarters) and sometimes a personal closet or drawer space for each occupant. Good crew quarters also include one or two shared bathrooms with multiple sinks and shower stalls, and a dining space with an attached galley. Crews of larger starships eat in this dining space in shifts.",
    "label": "Good"
},
{
  "cost": {
    "BP": 0
  },
  "description": "Common crew quarters are the most basic type. They consist of simple bunks (sometimes folding out from the side of a hallway) or other similarly austere places to rest. Crew members who sleep in common quarters usually keep their personal possessions in a footlocker. Common crew quarters also include a communal bathroom (which includes a military-style shower) and a tiny galley (big enough to prepare only the most basic of meals). Starships with crews numbering in the dozens or hundreds often have massive barracks where crew members sleep in shifts.",
  "label": "Common"
},
{
  "cost": {
    "BP": 5
  },
  "description": "Luxurious crew quarters are the pinnacle of comfort. They consist of private rooms for each crew member, with personal bathrooms (including showers with high water pressure) and furnishings that match the resident\u2019s tastes. Some luxurious crew quarters also feature a kitchenette, gaming areas, or intimate meeting spaces.",
  "label": "Luxurious"
}
]

var shipSecurity = [
{
  "cost": {
    "BP": 5,
    "PCU": 0
  },
  "description": "Used most often as a last resort, a self-destruct system completely destroys the starship on which it is installed (as if the ship had taken damage equal to twice its Hull Points), often killing everyone on board. A starship in a hex adjacent to a starship that self-destructs takes an amount of damage equal to half the destroyed starship\u2019s maximum Hull Points; this damage can be mitigated by shields. A self-destruct system can be activated only by creatures on the starship (by turning a set of keys, typing in a specific passcode, or other physical means known only to high-ranking members of the crew) and can\u2019t be activated remotely via hacking. The activating creatures set a time delay for the destruction (at least 1 round of starship combat). The cost of a self-destruct system depends on the size category of the ship (for the purposes of this calculation, Tiny = 1, Small = 2, Medium = 3, Large = 4, and so on).",
  "label": "Self-destruct system"
},
{
  "cost": {
    "BP": 3,
    "PCU": 0
  },
  "description": "By increasing the security of the starship\u2019s computer, these systems increase the DC to hack into it by 1 (see page 139). This upgrade can be purchased up to four times.",
  "label": "Anti-hacking systems"
},
{
  "cost": {
    "BP": 5,
    "PCU": 0
  },
  "description": "The systems of a starship with biometric locks can only be used by certain creatures, designated when the locks are installed; this list can be updated by any creature who can gain access to the ship\u2019s computer systems. A successful Computers check (DC = 20 + 1-1/2 \u00d7 the tier of the starship) can bypass these locks.",
  "label": "Biometric locks"
},
{
  "cost": {
    "BP": 0,
    "PCU": 0
  },
  "description": "When a foe attempts to hack a starship\u2019s computers and fails, a set of countermeasures can punish the would-be hacker. The crew can install one of the countermeasures listed on page 216, following the normal rules for countermeasures. Each countermeasure costs a number of Build Points equal to the starship\u2019s computer\u2019s tier (half the starship\u2019s tier; see page 297).",
  "label": "Computer countermeasures"
},
{
  "cost": {
    "BP": 5,
    "PCU": 0
  },
  "description": "An antipersonnel weapon must be mounted near the boarding ramp of a Medium or smaller starship. This weapon can be any longarm whose item level is equal to or less than the starship\u2019s tier. By spending 5 additional Build Points, the installed weapon can be a heavy weapon (of creature scale, not starship scale). When an antipersonnel weapon is activated, if a hostile creature approaches within the weapon\u2019s range increment, it begins firing with an attack roll modifier equal to the ship\u2019s tier (minimum 1). It fires once per round during combat until its ammunition is depleted or the hostile creature is disabled or flees. The weapon can\u2019t detect invisible (or similarly hidden) creatures. This weapon can\u2019t be removed and used by characters. Anyone with access to the starship\u2019s computer system can activate or deactivate the weapon, as well designate what kind of targets are considered hostile. Once installed, this weapon can\u2019t be removed from the starship without destroying it.",
  "label": "Antipersonnel weapon (heavy)"
},
{
  "cost": {
    "BP": 0,
    "PCU": 0
  },
  "description": "An antipersonnel weapon must be mounted near the boarding ramp of a Medium or smaller starship. This weapon can be any longarm whose item level is equal to or less than the starship\u2019s tier. By spending 5 additional Build Points, the installed weapon can be a heavy weapon (of creature scale, not starship scale). When an antipersonnel weapon is activated, if a hostile creature approaches within the weapon\u2019s range increment, it begins firing with an attack roll modifier equal to the ship\u2019s tier (minimum 1). It fires once per round during combat until its ammunition is depleted or the hostile creature is disabled or flees. The weapon can\u2019t detect invisible (or similarly hidden) creatures. This weapon can\u2019t be removed and used by characters. Anyone with access to the starship\u2019s computer system can activate or deactivate the weapon, as well designate what kind of targets are considered hostile. Once installed, this weapon can\u2019t be removed from the starship without destroying it.",
  "label": "Antipersonnel weapon (longarm)"
}
];

var shipSensors = [
{
  "cost": {
    "BP": 3
  },
    "label": "Basic short-range",
    "range": "Short",
    "sensorMod": 2
},
{
  "cost": {
    "BP": 5
  },
  "label": "Basic medium-range",
  "range": "Medium",
  "sensorMod": 2
},
{
  "cost": {
    "BP": 1
  },
  "label": "Cut-rate",
  "range": "Short",
  "sensorMod": -2
},
{
  "cost": {
    "BP": 4
  },
  "label": "Advanced short-range",
  "range": "Short",
  "sensorMod": 4
},
{
  "cost": {
    "BP": 8
  },
  "label": "Advanced medium-range",
  "range": "Medium",
  "sensorMod": 4
},
{
  "cost": {
    "BP": 6
  },
  "label": "Budget long-range",
  "range": "Long",
  "sensorMod": 0
},
{
  "cost": {
    "BP": 14
  },
  "label": "Advanced long-range",
  "range": "Long",
  "sensorMod": 4
},
{
  "cost": {
    "BP": 10
  },
  "label": "Basic long-range",
  "range": "Long",
  "sensorMod": 2
},
{
  "cost": {
    "BP": 3
  },
  "label": "Budget medium-range",
  "range": "Medium",
  "sensorMod": 0
},
{
  "cost": {
    "BP": 2
  },
  "label": "Budget short-range",
  "range": "Short",
  "sensorMod": 0
}
];

var shipShields = [
{
  "cost": {
    "BP": 27,
      "PCU": 70
  },
    "label": "Heavy 320",
    "value": {
      "SP": 320,
      "shieldRegen": 16
    }
},
{
  "cost": {
    "BP": 23,
    "PCU": 55
  },
  "label": "Heavy 240",
  "value": {
    "SP": 240,
    "shieldRegen": 16
  }
},
{
  "cost": {
    "BP": 15,
    "PCU": 30
  },
  "label": "Medium 100",
  "value": {
    "SP": 100,
    "shieldRegen": 4
  }
},
{
  "cost": {
    "BP": 10,
    "PCU": 25
  },
  "label": "Light 70",
  "value": {
    "SP": 70,
    "shieldRegen": 2
  }
},
{
  "cost": {
    "BP": 6,
    "PCU": 20
  },
  "label": "Light 50",
  "value": {
    "SP": 50,
    "shieldRegen": 2
  }
},
{
  "cost": {
    "BP": 35,
    "PCU": 130
  },
  "label": "Superior 540",
  "value": {
    "SP": 540,
    "shieldRegen": 64
  }
},
{
  "cost": {
    "BP": 25,
    "PCU": 60
  },
  "label": "Heavy 280",
  "value": {
    "SP": 280,
    "shieldRegen": 16
  }
},
{
  "cost": {
    "BP": 5,
    "PCU": 15
  },
  "label": "Basic 40",
  "value": {
    "SP": 40,
    "shieldRegen": 1
  }
},
{
  "cost": {
    "BP": 2,
    "PCU": 5
  },
  "label": "Basic 10",
  "value": {
    "SP": 10,
    "shieldRegen": 1
  }
},
{
  "cost": {
    "BP": 4,
    "PCU": 15
  },
  "label": "Basic 30",
  "value": {
    "SP": 30,
    "shieldRegen": 1
  }
},
{
  "cost": {
    "BP": 22,
    "PCU": 50
  },
  "label": "Medium 200",
  "value": {
    "SP": 200,
    "shieldRegen": 8
  }
},
{
  "cost": {
    "BP": 13,
    "PCU": 30
  },
  "label": "Medium 90",
  "value": {
    "SP": 90,
    "shieldRegen": 4
  }
},
{
  "cost": {
    "BP": 17,
    "PCU": 35
  },
  "label": "Medium 120",
  "value": {
    "SP": 120,
    "shieldRegen": 4
  }
},
{
  "cost": {
    "BP": 30,
    "PCU": 90
  },
  "label": "Heavy 420",
  "value": {
    "SP": 420,
    "shieldRegen": 32
  }
},
{
  "cost": {
    "BP": 40,
    "PCU": 160
  },
  "label": "Superior 600",
  "value": {
    "SP": 600,
    "shieldRegen": 64
  }
},
{
  "cost": {
    "BP": 8,
    "PCU": 20
  },
  "label": "Light 60",
  "value": {
    "SP": 60,
    "shieldRegen": 2
  }
},
{
  "cost": {
    "BP": 18,
    "PCU": 40
  },
  "label": "Medium 140",
  "value": {
    "SP": 140,
    "shieldRegen": 8
  }
},
{
  "cost": {
    "BP": 20,
    "PCU": 45
  },
  "label": "Medium 160",
  "value": {
    "SP": 160,
    "shieldRegen": 8
  }
},
{
  "cost": {
    "BP": 32,
    "PCU": 110
  },
  "label": "Heavy 480",
  "value": {
    "SP": 480,
    "shieldRegen": 32
  }
},
{
  "cost": {
    "BP": 12,
    "PCU": 30
  },
  "label": "Light 80",
  "value": {
    "SP": 80,
    "shieldRegen": 2
  }
},
{
  "cost": {
    "BP": 3,
    "PCU": 10
  },
  "label": "Basic 20",
  "value": {
    "SP": 20,
    "shieldRegen": 1
  }
},
{
  "cost": {
    "BP": 28,
    "PCU": 80
  },
  "label": "Heavy 360",
  "value": {
    "SP": 360,
    "shieldRegen": 32
  }
}
];

var shipThrusters = [
{
  "cost": {
    "BP": 5,
      "PCU": 30
  },
    "label": "T10 Thrusters",
    "size": 1,
    "value": {
      "hexSpeed": 10,
      "piloting": 0
    }
},
{
  "cost": {
    "BP": 4,
    "PCU": 80
  },
  "label": "H4 Thrusters",
  "size": 5,
  "value": {
    "hexSpeed": 4,
    "piloting": 2
  }
},
{
  "cost": {
    "BP": 6,
    "PCU": 60
  },
  "label": "S12 Thrusters",
  "size": 2,
  "value": {
    "hexSpeed": 12,
    "piloting": -1
  }
},
{
  "cost": {
    "BP": 8,
    "PCU": 120
  },
  "label": "G4 Thrusters",
  "size": 6,
  "value": {
    "hexSpeed": 4,
    "piloting": 2
  }
},
{
  "cost": {
    "BP": 8,
    "PCU": 100
  },
  "label": "L8 Thrusters",
  "size": 4,
  "value": {
    "hexSpeed": 8,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 5,
    "PCU": 50
  },
  "label": "S10 Thrusters",
  "size": 2,
  "value": {
    "hexSpeed": 10,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 4,
    "PCU": 25
  },
  "label": "T8 Thrusters",
  "size": 1,
  "value": {
    "hexSpeed": 8,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 6,
    "PCU": 80
  },
  "label": "M12 Thrusters",
  "size": 3,
  "value": {
    "hexSpeed": 12,
    "piloting": -1
  }
},
{
  "cost": {
    "BP": 8,
    "PCU": 140
  },
  "label": "H8 Thrusters",
  "size": 5,
  "value": {
    "hexSpeed": 8,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 7,
    "PCU": 40
  },
  "label": "T14 Thrusters",
  "size": 2,
  "value": {
    "hexSpeed": 14,
    "piloting": -2
  }
},
{
  "cost": {
    "BP": 2,
    "PCU": 40
  },
  "label": "M4 Thrusters",
  "size": 3,
  "value": {
    "hexSpeed": 4,
    "piloting": 2
  }
},
{
  "cost": {
    "BP": 6,
    "PCU": 35
  },
  "label": "T12 Thrusters",
  "size": 1,
  "value": {
    "hexSpeed": 12,
    "piloting": -1
  }
},
{
  "cost": {
    "BP": 4,
    "PCU": 40
  },
  "label": "S8 Thrusters",
  "size": 2,
  "value": {
    "hexSpeed": 8,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 8,
    "PCU": 200
  },
  "label": "C4 Thrusters",
  "size": 7,
  "value": {
    "hexSpeed": 4,
    "piloting": 2
  }
},
{
  "cost": {
    "BP": 4,
    "PCU": 60
  },
  "label": "L4 Thrusters",
  "size": 4,
  "value": {
    "hexSpeed": 4,
    "piloting": 2
  }
},
{
  "cost": {
    "BP": 6,
    "PCU": 120
  },
  "label": "H6 Thrusters",
  "size": 5,
  "value": {
    "hexSpeed": 6,
    "piloting": 1
  }
},
{
  "cost": {
    "BP": 12,
    "PCU": 300
  },
  "label": "C6 Thrusters",
  "size": 7,
  "value": {
    "hexSpeed": 6,
    "piloting": 1
  }
},
{
  "cost": {
    "BP": 16,
    "PCU": 400
  },
  "label": "C8 Thrusters",
  "size": 7,
  "value": {
    "hexSpeed": 8,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 10,
    "PCU": 160
  },
  "label": "H10 Thrusters",
  "size": 5,
  "value": {
    "hexSpeed": 10,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 16,
    "PCU": 240
  },
  "label": "G8 Thrusters",
  "size": 6,
  "value": {
    "hexSpeed": 8,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 5,
    "PCU": 70
  },
  "label": "M10 Thrusters",
  "size": 3,
  "value": {
    "hexSpeed": 10,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 12,
    "PCU": 180
  },
  "label": "G6 Thrusters",
  "size": 6,
  "value": {
    "hexSpeed": 6,
    "piloting": 1
  }
},
{
  "cost": {
    "BP": 4,
    "PCU": 60
  },
  "label": "M8 Thrusters",
  "size": 3,
  "value": {
    "hexSpeed": 8,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 3,
    "PCU": 50
  },
  "label": "M6 Thrusters",
  "size": 3,
  "value": {
    "hexSpeed": 6,
    "piloting": 1
  }
},
{
  "cost": {
    "BP": 3,
    "PCU": 20
  },
  "label": "T6 Thrusters",
  "size": 1,
  "value": {
    "hexSpeed": 6,
    "piloting": 1
  }
},
{
  "cost": {
    "BP": 6,
    "PCU": 80
  },
  "label": "L6 Thrusters",
  "size": 4,
  "value": {
    "hexSpeed": 6,
    "piloting": 1
  }
},
{
  "cost": {
    "BP": 10,
    "PCU": 120
  },
  "label": "L10 Thrusters",
  "size": 4,
  "value": {
    "hexSpeed": 10,
    "piloting": 0
  }
},
{
  "cost": {
    "BP": 3,
    "PCU": 30
  },
  "label": "S6 Thrusters",
  "size": 2,
  "value": {
    "hexSpeed": 6,
    "piloting": 1
  }
}
];

var shipWeapons = [
{
  "class": "Heavy",
    "cost": {
      "BP": 30,
      "PCU": 40
    },
    "damage": "6d6",
    "label": "Gravity gun",
    "range": "Medium",
    "special": "Tractor beam",
    "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 40,
    "PCU": 50
  },
  "damage": "2d10 \u00d7 10",
  "label": "Persistent particle beam cannon",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 30,
    "PCU": 30
  },
  "damage": "3d4 \u00d7 10",
  "label": "Particle beam cannon",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 8,
    "PCU": 10
  },
  "damage": "5d8",
  "hexSpeed": 14,
  "label": "Heavy torpedo launcher",
  "range": "Long",
  "special": "Limited fire 5",
  "type": "Tracking"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 20,
    "PCU": 30
  },
  "damage": "5d12",
  "label": "Plasma cannon",
  "range": "Medium",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 10,
    "PCU": 15
  },
  "damage": "6d4",
  "label": "Heavy laser array",
  "range": "Short",
  "special": "Array",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 8,
    "PCU": 10
  },
  "damage": "4d8",
  "label": "Heavy laser cannon",
  "range": "Medium",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 15,
    "PCU": 25
  },
  "damage": "8d6",
  "label": "Particle beam",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 45,
    "PCU": 45
  },
  "damage": "Special",
  "label": "Super EMP cannon",
  "range": "Long",
  "special": "EMP",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 10,
    "PCU": 15
  },
  "damage": "10d8",
  "hexSpeed": 10,
  "label": "Heavy nuclear missile launcher",
  "range": "Long",
  "special": "Irradiate (medium), limited fire 5",
  "type": "Tracking"
},
{
  "class": "Light",
  "cost": {
    "BP": 10,
    "PCU": 10
  },
  "damage": "3d6",
  "label": "Light particle beam",
  "range": "Medium",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Light",
  "cost": {
    "BP": 5,
    "PCU": 10
  },
  "damage": "3d4",
  "label": "Flak thrower",
  "range": "Short",
  "special": "Point (+8)",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 22,
    "PCU": 35
  },
  "damage": "6d10",
  "label": "Maser",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Light",
  "cost": {
    "BP": 2,
    "PCU": 5
  },
  "damage": "2d4",
  "label": "Light laser cannon",
  "range": "Short",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Light",
  "cost": {
    "BP": 4,
    "PCU": 10
  },
  "damage": "4d8",
  "hexSpeed": 12,
  "label": "High explosive missile launcher",
  "range": "Long",
  "special": "Limited fire 5",
  "type": "Tracking"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 35,
    "PCU": 40
  },
  "damage": "7d10",
  "label": "Graser",
  "range": "Short",
  "special": "Irradiate (medium)",
  "type": "Direct"
},
{
  "class": "Light",
  "cost": {
    "BP": 9,
    "PCU": 10
  },
  "damage": "2d6",
  "label": "Laser net",
  "range": "Short",
  "special": "Point (+10)",
  "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 25,
    "PCU": 25
  },
  "damage": "2d6 \u00d7 10",
  "label": "Mass driver",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 12,
    "PCU": 15
  },
  "damage": "5d8",
  "label": "Twin laser",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 60,
    "PCU": 50
  },
  "damage": "2d8 \u00d7 10",
  "label": "Supergraser",
  "range": "Medium",
  "special": "Irradiate (high)",
  "type": "Direct"
},
{
  "class": "Light",
  "cost": {
    "BP": 8,
    "PCU": 10
  },
  "damage": "Special",
  "label": "Light EMP cannon",
  "range": "Short",
  "special": "EMP",
  "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 25,
    "PCU": 15
  },
  "damage": "4d10 \u00d7 10",
  "hexSpeed": 6,
  "label": "Antimatter mega-missile launcher",
  "range": "Long",
  "special": "Limited fire 5",
  "type": "Tracking"
},
{
  "class": "Light",
  "cost": {
    "BP": 12,
    "PCU": 10
  },
  "damage": "2d12",
  "label": "Light plasma cannon",
  "range": "Short",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 20,
    "PCU": 20
  },
  "damage": "2d4 \u00d7 10",
  "label": "Superlaser",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Light",
  "cost": {
    "BP": 4,
    "PCU": 5
  },
  "damage": "2d8",
  "hexSpeed": 16,
  "label": "Light torpedo launcher",
  "range": "Long",
  "special": "\u2014",
  "type": "Tracking"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 12,
    "PCU": 15
  },
  "damage": "5d6",
  "label": "Heavy laser net",
  "range": "Short",
  "special": "Point (+12)",
  "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 75,
    "PCU": 55
  },
  "damage": "2d12 \u00d7 10",
  "label": "Vortex cannon",
  "range": "Medium",
  "special": "Vortex",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 24,
    "PCU": 30
  },
  "damage": "Special",
  "label": "Heavy EMP cannon",
  "range": "Medium",
  "special": "EMP",
  "type": "Direct"
},
{
  "class": "Light",
  "cost": {
    "BP": 3,
    "PCU": 10
  },
  "damage": "1d8",
  "label": "Gyrolaser",
  "range": "Short",
  "special": "Broad arc",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 15,
    "PCU": 20
  },
  "damage": "8d4",
  "label": "Railgun",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Light",
  "cost": {
    "BP": 15,
    "PCU": 15
  },
  "damage": "6d4",
  "label": "Chain cannon",
  "range": "Short",
  "special": "Ripper",
  "type": "Direct"
},
{
  "class": "Light",
  "cost": {
    "BP": 3,
    "PCU": 10
  },
  "damage": "2d6",
  "hexSpeed": 10,
  "label": "Micromissile battery",
  "range": "Long",
  "special": "Array, limited fire 5",
  "type": "Tracking"
},
{
  "class": "Light",
  "cost": {
    "BP": 5,
    "PCU": 10
  },
  "damage": "5d8",
  "hexSpeed": 10,
  "label": "Tactical nuclear missile launcher",
  "range": "Long",
  "special": "Irradiate (low), limited fire 5",
  "type": "Tracking"
},
{
  "class": "Capital",
  "cost": {
    "BP": 35,
    "PCU": 45
  },
  "damage": "3d6 \u00d7 10",
  "label": "Super plasma cannon",
  "range": "Medium",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 25,
    "PCU": 40
  },
  "damage": "10d6",
  "label": "Persistent particle beam",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 35,
    "PCU": 40
  },
  "damage": "8d6",
  "label": "X-laser cannon",
  "range": "Long",
  "special": "Line",
  "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 20,
    "PCU": 15
  },
  "damage": "4d8 \u00d7 10",
  "hexSpeed": 8,
  "label": "Nuclear mega-missile launcher",
  "range": "Long",
  "special": "Limited fire 5",
  "type": "Tracking"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 10,
    "PCU": 10
  },
  "damage": "5d10",
  "hexSpeed": 12,
  "label": "Heavy plasma torpedo launcher",
  "range": "Long",
  "special": "Limited fire 5",
  "type": "Tracking"
},
{
  "class": "Light",
  "cost": {
    "BP": 6,
    "PCU": 10
  },
  "damage": "4d4",
  "label": "Coilgun",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Light",
  "cost": {
    "BP": 5,
    "PCU": 5
  },
  "damage": "3d8",
  "hexSpeed": 14,
  "label": "Light plasma torpedo launcher",
  "range": "Long",
  "special": "Limited fire 5",
  "type": "Tracking"
},
{
  "class": "Capital",
  "cost": {
    "BP": 20,
    "PCU": 15
  },
  "damage": "2d8 \u00d7 10",
  "hexSpeed": 12,
  "label": "Quantum missile launcher",
  "range": "Long",
  "special": "Limited fire 5, quantum",
  "type": "Tracking"
},
{
  "class": "Heavy",
  "cost": {
    "BP": 12,
    "PCU": 15
  },
  "damage": "10d10",
  "hexSpeed": 8,
  "label": "Heavy antimatter missile launcher",
  "range": "Long",
  "special": "Limited fire 5",
  "type": "Tracking"
},
{
  "class": "Capital",
  "cost": {
    "BP": 25,
    "PCU": 10
  },
  "damage": "2d10 \u00d7 10",
  "hexSpeed": 8,
  "label": "Hellfire torpedo launcher",
  "range": "Long",
  "special": "Limited fire 5",
  "type": "Tracking"
},
{
  "class": "Capital",
  "cost": {
    "BP": 60,
    "PCU": 50
  },
  "damage": "3d4 \u00d7 10",
  "label": "Super X-laser cannon",
  "range": "Long",
  "special": "Line",
  "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 35,
    "PCU": 40
  },
  "damage": "2d8 \u00d7 10",
  "label": "Supermaser",
  "range": "Long",
  "special": "\u2014",
  "type": "Direct"
},
{
  "class": "Capital",
  "cost": {
    "BP": 20,
    "PCU": 10
  },
  "damage": "2d6 \u00d7 10",
  "hexSpeed": 10,
  "label": "Solar torpedo launcher",
  "range": "Long",
  "special": "Limited fire 5",
  "type": "Tracking"
},
{
  "class": "Capital",
  "cost": {
    "BP": 50,
    "PCU": 40
  },
  "damage": "2d6 \u00d7 10",
  "label": "Gravity cannon",
  "range": "Long",
  "special": "Tractor beam",
  "type": "Direct"
}
];
