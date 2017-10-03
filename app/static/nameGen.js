var adjective = ["A Gun Named","Absaloms","Accelerated","Adamant","Adamantium","Advanced","Aggressive","Amplified","Anti","Anti-Armor","Anti-Personnel","Anti-Tank","Astral","Astronomical","Atomic","Automatic","Autonomous","Awesome","Basic","Battle","Binary","Blessed","Bloody","Bolt-Action","Booming","Burning","Bushcraft","Carbon","Celestial","Classic","Commanding","Compact","Computerised","Consealed","Cosmic","Cosmic","Crude","Darkiron","Dangerous","Dank","Delivery","Devastating","Diseased","Double","Drunken","Dynamic","Efficient","Electric","Electronic","Essential","Evo Tactical","Explosive","Exalted","Extrasolar","Extraterrestrial","Fatal","Fieldcraft","Fission","Flying","Friendly","Furious","Fusion","Galactic","Geared","Glittering","Golarions","Godlike","Godly","Hardened","Hasty","Heavenly","Heavy","Heavy","Hectic","Holy","Horrible","Hungry","Incredible","Infinite","Infinite","Insidious","Intergalactic","Interplanetary","Interstellar","Laser-Guided","Lawful","Lever-Action","Liquid","Legit","Literally A","Loaded","Loud","Lunar","Magnificent","Makeshift","Malevolent","Maxx","Meaty","Mechanical","Mechanised","Meteoric","Mil-Spec","Military","Mithril","Naked","Obtuse","Octo","Offensive","Omni Sport","Overclocked","Patrol","Peak","Pearly","Peculiar","Perfect","Phantasmal","Phantom","Planetary","Polar","Powerful","Precision","Primary","Proto","Proverbial","Pump-Action","Punishing","Quick Draw","Radiant","Rampaging","Revolutionary","Rhetorical","Robotic","Rowdy","Rude","Rusty","Ruthless","Sacred","Salty","Sandy","Savage","Serious","Sidereal","Skyforged","Sneaky","Soggy","Solar","Solid","Sparkling","Spicy","Spiritual","Splendid","Sports","Stellar","Superior","Suppressive","Synthetic","Tactical","Tasty","Terrible","Thermonuclear","Triple","Twin","Ultra","Unforgiving","Unstoppable","Vegan","Venomous","Vorpal","Weird","Winged","Wooden","Wrought"];

var noun = ["Aegis","Air Strike","Alien","Artemis","Asteroid","Avenger","Barbarian","Bard","Bastard","Beast","Beestinger","Beholder","Bitch","Black Hole","Bouncer","Boy","Bulletstorm","Butcher","Cataclysm","Chaos","Claw","Cleric","Cloud","Comet","Compulsion","Constellation","Contingency","Crowd Control","D20","Dark Matter","Death","Defender","Delivery","Detective","Demigod","Diamond","Didact","Drama","Dragon","Dragons Breath","Druid","Duellist","Elite","Engine","Executioner","Fighter","Fist","Fox","Friendship","Galaxy","Gamma Ray","Ghost","Girl","Gladiator","Glitter","Goblin","Goddess","Godzilla","Heuristics","Hercules","Hornet","Infinity","Invention","Jaeger","Jealousy","Jewel","Joker","Justice","King","Kitten","Law","Lich","Madhouse","Magus","Massacre","Matter","Meteor","Monk","Moon","Nutrition","Netflix & Kill","Order","Owlbear","Pacifier","Paladin","Paragon","People's Elbow","Pepper","Photosphere","Pile Driver","Platform","Politician","Platypus","Protector","Pulsar","Seeker","Slave","Quarter-Pounder","Quartz","Quasar","Queen","Ranger","Rhino","Rogue","Ruby","Sapphire","Satellite","Savage","Shadow","Shine","Sorcerer","Star","Starburst","Steel","Stomper","Storm","Streetsweeper","Striker","Summoner","Supercluster","Talon","Tea & Biscuits","Threat","Thumper","Titan","Vacation","Vegan","Void","Whopper","Widow","Witch","Wizard","Zone"];

var nounSlashing = ["Buzzblade","Diamond-Edged","Dimensional Slice","Drop Point","Microserrated","Molecular Rift","Serrated","Ultraserrated","Ultrathin","Zero-Edged"];

var nounBludgeoning = ["Battle","Blunt","Combat","Gravity Well","Hardlight","Protector","Repeller","Sentinel","Skirmish","Warborn","Edgeless","Warfare"];

var nounPiercing = ["Acceleration","Lightspeed","Mach I","Mach II","Mach III","Momentum","Speed-Force","Sub-light","Velocity","Warp-Speed","Hyper"];

var nounAcid = ["Corroder","Decay","Scorpion","Dart-Frog","Green Lotus","Black Lotus","Black Dragon","Ooze","Vial","Heart Burn","Fume Extraction","Industrial Waste"];

var nounSonic = ["Thunderstrike","Low Frequency Emitter","High Frequency Emitter","Banshee","Decibel","Sonic-Boom","Calamity","Hurricane","Howler","Cyclone","Thunderwave","Thunderclap"];

var nounShock = ["Static ","Storm","Tempest","Lightning","Surge","Giga-Watt","Mega-Watt","Tumblespark","Direct Current","Flash","Bolt","Blue Dragon","Dynamo"];

var nounFlame = ["Pyro","Incendiary","Inferno","Ember","Blaze","Salamander","Hellhound","Firedrake","Phoenix","Volcano","Cinder","Red Dragon","Magma"];

var nounLaser = ["Azimuth","Corona","Aphelion","Perihelion","Parallax","Zenith","Nova","Prism","Spectrum","Aureole","Halo","Crystal","Optics","Rosette"];

var nounCryo = ["Chill","Frostbite","Hailstorm","Blizzard","Avalanche","Frostdrake","Frost-Giant","Ice-Troll","Snowfall","Snowflake","White Dragon"];

var nounPlasma = ["Solar Wind","Mass Ejection","Ion Cloud","Neutron Star","Star Scream","Blue Heat","White Heat","Solar Flare","Sun Storm","Ejecta","Ionosphere","Welder"];

var manufacturer = ["AbadarCorp","Arabani Arms","Ulrikka","Idari","Eox Armory","Farraddi","Kalt & Ryder","Kosunagi Arsenal","LR Vostan","Stonewall","Weyland Industries","Hyperion","Aegis Solutions","Davetech","Vercite Traders","Vinson Dynamics","Kendachi" ];

var series = ["A3-","AAA-","ACR-","ACW-","AZU-","BAR-","CBR-","CQB-","CSP-","DX-","GR6-","GSG-","IXN-","KFS-","KHE-","KT-","LNR-","MACR-","NDT-","R9-","RHR-","RTA-","SBR-","STH-","TCR-","UTX-","Z5-","ZTN-","ZTR-"];

function getrandomName(weaponName){
  var name = [];
  var deck = [];
  var concatAll = 0;
  var stripName = weaponName;

  //stack the deck
  for (i = 0; i < 10; i++) {
    deck.push(randomChoice(noun));
  }

  if (weaponName.includes("Knife") || weaponName.includes("Sword") || weaponName.includes("Longsword") || weaponName.includes("Bladestaff") || weaponName.includes("Handaxe") || weaponName.includes("Greatsword")){
    deck = deck.concat(nounSlashing);
  }
  else if (weaponName.includes("Baton") || weaponName.includes("Battleglove") || weaponName.includes("Mace") || weaponName.includes("Staff") || weaponName.includes("Gauntlet") || weaponName.includes("Hammer") || weaponName.includes("Longhammer") || weaponName.includes("Truncheon")){
    deck = deck.concat(nounBludgeoning);
  }
  else if (weaponName.includes("Spear") || weaponName.includes("Doshko") || weaponName.includes("Pike")){
    deck = deck.concat(nounPiercing);
  }else{
    concatAll += 1;
  }

  if (weaponName.includes("Acid")){
    deck = deck.concat(nounAcid);
  }
  else if (weaponName.includes("Sonic")){
    deck = deck.concat(nounSonic);
  }
  else if (weaponName.includes("Shock")){
    deck = deck.concat(nounShock);
  }
  else if (weaponName.includes("Flame")){
    deck = deck.concat(nounFlame);
  }
  else if (weaponName.includes("Laser")){
    deck = deck.concat(nounLaser);
  }
  else if (weaponName.includes("Cryo")){
    deck = deck.concat(nounCryo);
  }
  else if (weaponName.includes("Plasma")){
    deck = deck.concat(nounPlasma);
  }
  else {
    concatAll += 1;
  }

  if (concatAll === 2){
    deck = deck.concat(noun);
  }

  stripName = stripName.replace("Acid ", "").replace("Acid-edged ", "").replace("Sonic ", "").replace("Sonic-edged ", "").replace("Shock ", "").replace("Shock-edged ", "").replace("Flame ", "").replace("Flame-edged ", "").replace("Cryo ", "").replace("Cryo-edged ", "").replace("Plasma ", "").replace("Plasma-edged ", "").replace("Kasathan ", "");

  name[0] = randomChoice(adjective) + " " + randomChoice(deck);
  name[1] = randomChoice(manufacturer);
  name[2] = randomChoice(series) + getRandomInt(1, 990).toString();
  name[3] = stripName;

  return name;
}
