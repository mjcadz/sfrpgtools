var adjective = ["A Gun Named","Absaloms","Accelerated","Adamant","Adamantium","Advanced","Aggressive","Amplified","Anti","Anti-Armor","Anti-Personnel","Anti-Tank","Astral","Astronomical","Atomic","Automatic","Autonomous","Awesome","Basic","Battle","Binary","Blessed","Bloody","Bolt-Action","Booming","Burning","Bushcraft","Carbon","Celestial","Classic","Commanding","Compact","Computerised","Consealed","Cosmic","Cosmic","Crude","Darkiron","Dangerous","Dank","Delivery","Devastating","Diseased","Double","Drunken","Dynamic","Efficient","Electric","Electronic","Essential","Evo Tactical","Explosive","Exalted","Extrasolar","Extraterrestrial","Fatal","Fieldcraft","Fission","Flying","Friendly","Furious","Fusion","Galactic","Geared","Glittering","Golarions","Godlike","Godly","Hardened","Hasty","Heavenly","Heavy","Heavy","Hectic","Holy","Horrible","Hungry","Incredible","Infinite","Infinite","Insidious","Intergalactic","Interplanetary","Interstellar","Laser-Guided","Lawful","Lever-Action","Liquid","Legit","Literally A","Loaded","Loud","Lunar","Magnificent","Makeshift","Malevolent","Maxx","Meaty","Mechanical","Mechanised","Meteoric","Mil-Spec","Military","Mithril","Naked","Obtuse","Octo","Offensive","Omni Sport","Overclocked","Patrol","Peak","Pearly","Peculiar","Perfect","Phantasmal","Phantom","Planetary","Polar","Powerful","Precision","Primary","Proto","Proverbial","Pump-Action","Punishing","Quick Draw","Radiant","Rampaging","Revolutionary","Rhetorical","Robotic","Rowdy","Rude","Rusty","Ruthless","Sacred","Salty","Sandy","Savage","Serious","Sidereal","Skyforged","Sneaky","Soggy","Solar","Solid","Sparkling","Spicy","Spiritual","Splendid","Sports","Stellar","Superior","Suppressive","Synthetic","Tactical","Tasty","Terrible","Thermonuclear","Triple","Twin","Ultra","Unforgiving","Unstoppable","Vegan","Venomous","Vorpal","Weird","Winged","Wooden","Wrought"];

var noun = ["Aegis","Air Strike","Alien","Artemis","Asteroid","Avenger","Barbarian","Bard","Bastard","Beast","Beestinger","Beholder","Bitch","Black Hole","Bouncer","Boy","Bulletstorm","Butcher","Cataclysm","Chaos","Claw","Cleric","Cloud","Comet","Compulsion","Constellation","Contingency","Crowd Control","D20","Dark Matter","Death","Defender","Delivery","Detective","Demigod","Diamond","Didact","Drama","Dragon","Dragons Breath","Druid","Duellist","Elite","Engine","Executioner","Fighter","Fist","Fox","Friendship","Galaxy","Gamma Ray","Ghost","Girl","Gladiator","Glitter","Goblin","Goddess","Godzilla","Heuristics","Hercules","Hornet","Infinity","Invention","Jaeger","Jealousy","Jewel","Joker","Justice","King","Kitten","Law","Lich","Madhouse","Magus","Massacre","Matter","Meteor","Monk","Moon","Nutrition","Netflix & Kill","Order","Owlbear","Pacifier","Paladin","Paragon","People's Elbow","Pepper","Photosphere","Pile Driver","Platform","Politician","Platypus","Protector","Pulsar","Seeker","Slave","Quarter-Pounder","Quartz","Quasar","Queen","Ranger","Rhino","Rogue","Ruby","Sapphire","Satellite","Savage","Shadow","Shine","Sorcerer","Star","Starburst","Steel","Stomper","Storm","Streetsweeper","Striker","Summoner","Supercluster","Talon","Tea & Biscuits","Threat","Thumper","Titan","Vacation","Vegan","Void","Whopper","Widow","Witch","Wizard","Zone"];

var manufacturer = ["AbadarCorp","Arabani Arms","Ulrikka","Idari","Eox Armory","Farraddi","Kalt & Ryder","Kosunagi Arsenal","LR Vostan","Stonewall","Weyland Industries","Hyperion","Aegis Solutions","Davetech","Vercite Traders","Vinson Dynamics","Kendachi","HyperChrome","Dyson Securities","Scrynet","Neon Photonics","G.L.A.I.V.E","Enforcer Inc.","Turbo Tactical","MantiCorps" ];

var series = ["A3-","AAA-","ACR-","ACW-","AZU-","BAR-","CBR-","CQB-","CSP-","DX-","GR6-","GSG-","IXN-","KFS-","KHE-","KT-","LNR-","MACR-","NDT-","R9-","RHR-","RTA-","SBR-","STH-","TCR-","UTX-","Z5-","ZTN-","ZTR-"];

var removedWords = [ "Acid", "Acid-edged", "Sonic", "Sonic-edged", "Shock", "Shock-edged", "Flame", "Flame-edged", "Cryo", "Cryo-edged", "Plasma", "Plasma-edged", "Kasathan", ];

var terms = [
  {
    triggers: [
      "Spear",
      "Doshko",
      "Pike",
    ],
    outputs: [
      "Acceleration",
      "Lightspeed",
      "Mach I",
      "Mach II",
      "Mach III",
      "Momentum",
      "Speed-Force",
      "Sub-light",
      "Velocity",
      "Warp-Speed",
      "Hyper",
    ]
  },
  {
    triggers: [
      "Knife",
      "Sword",
      "Longsword",
      "Bladestaff",
      "Handaxe",
      "Greatsword",
    ],
    outputs: [
      "Buzzblade",
      "Diamond-Edged",
      "Dimensional Slice",
      "Drop Point",
      "Microserrated",
      "Molecular Rift",
      "Serrated",
      "Ultraserrated",
      "Ultrathin",
      "Zero-Edged",
    ]
  },
  {
    triggers: [
      "Baton",
      "Battleglove",
      "Mace",
      "Staff",
      "Gauntlet",
      "Hammer",
      "Longhammer",
      "Truncheon",
    ],
    outputs: [
      "Battle",
      "Blunt",
      "Combat",
      "Gravity Well",
      "Hardlight",
      "Protector",
      "Repeller",
      "Sentinel",
      "Skirmish",
      "Warborn",
      "Edgeless",
      "Warfare",
    ]
  },
  {
    triggers: [
      "Acid",
      "Acid-edged",
    ],
    outputs: [
      "Corroder",
      "Decay",
      "Scorpion",
      "Dart-Frog",
      "Green Lotus",
      "Black Lotus",
      "Black Dragon",
      "Ooze",
      "Vial",
      "Heart Burn",
      "Fume Extraction",
      "Industrial Waste",
    ]
  },
  {
    triggers: [
      "Sonic",
      "Sonic-edged",
    ],
    outputs: [
      "Thunderstrike",
      "Low Frequency Emitter",
      "High Frequency Emitter",
      "Banshee",
      "Decibel",
      "Sonic-Boom",
      "Calamity",
      "Hurricane",
      "Howler",
      "Cyclone",
      "Thunderwave",
      "Thunderclap",
    ]
  },
  {
    triggers: [
      "Shock",
      "Shock-edged",
    ],
    outputs: [
      "Static",
      "Storm",
      "Tempest",
      "Lightning",
      "Surge",
      "Giga-Watt",
      "Mega-Watt",
      "Tumblespark",
      "Direct Current",
      "Flash",
      "Bolt",
      "Blue Dragon",
      "Dynamo",
    ]
  },
  {
    triggers: [
      "Flame",
      "Flame-edged",
    ],
    outputs: [
      "Pyro",
      "Incendiary",
      "Inferno",
      "Ember",
      "Blaze",
      "Salamander",
      "Hellhound",
      "Firedrake",
      "Phoenix",
      "Volcano",
      "Cinder",
      "Red Dragon",
      "Magma",
    ]
  },
  {
    triggers: [
      "Laser",
    ],
    outputs: [
      "Azimuth",
      "Corona",
      "Aphelion",
      "Perihelion",
      "Parallax",
      "Zenith",
      "Nova",
      "Prism",
      "Spectrum",
      "Aureole",
      "Halo",
      "Crystal",
      "Optics",
      "Rosette",
    ]
  },
  {
    triggers: [
      "Cryo",
      "Cryo-edged",
    ],
    outputs: [
      "Chill",
      "Frostbite",
      "Hailstorm",
      "Blizzard",
      "Avalanche",
      "Frostdrake",
      "Frost-Giant",
      "Ice-Troll",
      "Snowfall",
      "Snowflake",
      "White Dragon",
    ]
  },
  {
    triggers: [
      "Plasma",
      "Plasma-edged",
    ],
    outputs: [
      "Solar Wind",
      "Mass Ejection",
      "Ion Cloud",
      "Neutron Star",
      "Star Scream",
      "Blue Heat",
      "White Heat",
      "Solar Flare",
      "Sun Storm",
      "Ejecta",
      "Ionosphere",
      "Welder",
    ]
  }
];

function replaceWord(word) {
  var result = [];
  terms.forEach(function(term) {
    if (term.triggers.indexOf(word) > -1) {
      result = term.outputs;
    }
  })
  return result;
}

function getrandomName(weaponName){
  var name = [];
  var deck = [];

  //stack the deck
  for (i = 0; i < 10; i++) {
    deck.push(randomChoice(noun));
  }

  weaponName.split(' ').forEach(function(word) {
    deck = deck.concat(replaceWord(word));
  })

  //Remove unnecessary words
  stripName = weaponName.split(' ').filter(function(word) {
    console.log(word, removedWords.indexOf(word));
    return removedWords.indexOf(word) === -1;
  }).join(' ');

  name[0] = randomChoice(adjective) + " " + randomChoice(deck);
  name[1] = randomChoice(manufacturer);
  name[2] = randomChoice(series) + getRandomInt(1, 990).toString();
  name[3] = stripName;

  return name;
}
