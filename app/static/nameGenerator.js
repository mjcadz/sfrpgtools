var adjective = ["Adamantium","Advanced","Aggressive","Amplified","Anti","Anti-Armor","Anti-Personnel","Anti-Tank","Astral","Astronomical","Atomic","Awesome","Basic","Battle","Binary","Bloody","Bolt-Action","Booming","Burning","Bushcraft","Carbon","Celestial","Classic","Cleaning","Commanding","Compact","Consealed","Cosmic","Cosmic","Crude","Dangerous","Dank","Devastating","Diseased","Drunken","Dynamic","Efficient","Essential","Evo Tactical","Explosive","Extrasolar","Extraterrestrial","Fieldcraft","Fission","Flying","Furious","Fusion","Galactic","Geared","Godlike","Godly","Hardened","Hasty","Heavenly","Heavy","Heavy","Horrible","Hungry","Incredible","Infinite","Infinite","Intergalactic","Interplanetary","Interstellar","Laser-Guided","Lever-Action","Liquid","Loaded","Loud","Lunar","Magnificent","Makeshift","Malevolent","Maxx","Meaty","Mechanical","Meteoric","Mil-Spec","Military","Mithril","Naked","Octo","Offensive","Omni-Sport","Overclocked","Patrol","Pearly","Peculiar","Phantasmal","Phantom","Plague","Planetary","Poisonous","Polar","Powerful","Precision","Primary","Proverbial","Pump-Action","Punishing","Quick Draw","Rampaging","Revolutionary","Rhetorical","Rowdy","Rude","Rusty","Ruthless","Salty","Sandy","Savage","Serious","Sidereal","Sneaky","Soggy","Solar","Solid","Spicy","Spiritual","Splendid","Sports","Stellar","Superior","Suppressive","Synthetic","Tactical","Tasty","Terrible","Twin","Ultra","Unforgiving","Unstoppable","Venomous","Weird","Winged","Wooden"];

var noun = ["Aegis","Air-Strike","Alien","Artemis","Asteroid","Barbarian","Bard","Bastard","Beestinger","Beholder","Bitch","Black-hole","Bouncer","Boy","Boy","Boy","Boy","Boy","Bulletstorm","Cataclysm","Claw","Cleric","Cloud","Comet","Constellation","Contingency","Crowd Control","D20","Dark-Matter","Death","Defender","Delivery","Delivery","Delivery","Delivery","Detective","Diamond","Dragon","Druid","Elite","Fighter","Fist","Fox","Galaxy","Gamma-Ray","Ghost","Girl","Goblin","Godzilla","Hercules","Hornet","Infinity","Jaeger","Joker","Justice","King","Kitten","Law","Lich","Madhouse","Magus","Massacre","Matter","Meteor","Monk","Moon","Order","Owlbear","Pacifier","Paladin","Paragon","Pearl","People's-Elbow","Pepper","Photosphere","Pile-Driver","Platypus","Protector","Pulsar","Quarter-Pounder","Quartz","Quasar","Queen","Ranger","Rhino","Rogue","Ruby","Sapphire","Satellite","Shadow","Sorcerer","Star","Starburst","Steel","Stomper","Streetsweeper","Striker","Summoner","Supercluster","Talon","Tea & Biscuits","Threat","Thumper","Titan","Void","Whopper","Widow","Witch","Wizard"];

var nounSlashing = ["Buzzblade","Diamond-Edged","Dimensional Slice","Drop Point","Microserrated","Molecular Rift","Serrated","Ultraserrated","Ultrathin","Zero-Edged"];

var nounBludgeoning = ["Battle","Blunt","Combat","Gravity Well","Hardlight","Protector","Repeller","Sentinel","Skirmish","Warborn"];

var nounPiercing = ["Acceleration","Lightspeed","Mach I","Mach II","Mach III","Momentum","Speed-Force","Sub-light","Velocity","Warp-Speed"];

var nounAcid = ["Corroder","Decay","Scorpion","Taipan","Viper","Dart-Frog","Cobra","King-Brown"];

var nounSonic = ["Thunderstrike","LFD","HFD","Banshee","Decibel","Sonic-Boom","Calamity","Hurricane","Howler"];

var nounShock = ["Static ","Storm","Tempest","Lightning","Surge","Giga-Watt","Mega-Watt","Tumblespark"];

var nounFlame = ["Pyro","Incendiary","Inferno","Ember","Blaze","Salamander","Hellhound","Firedrake","Phoenix","Volcano"];

var nounLaser = ["Azimuth","Corona","Aphelion","Perihelion","Parallax","Zenith","Parallax","Nova"];

var nounCryo = ["Chill","Fridge","Frostbite","Hailstorm","Blizzard","Avalanche","Frostdrake","Frost-Giant","Ice-Troll"];

var nounPlasma = ["Red-Star","Orange-Star","Yellow-Star","White-Star","Blue-Star","White-Hot","Solar-Flare","Sun-Storm","Ejecta"];

var manufacturer = ["AbadarCorp","Arabani Arms","Ulrikka","Idari","Eox Armory","Farraddi","Kalt & Ryder","Kosunagi Arsenal","LR Vostan","Stonewall","Weyland Industries","Hyperion","Aegis Solutions","Davetech","Vercite Traders","Vinson Dynamics" ];

var series = ["A3-","AAA-","ACR-","ACW-","AZU-","BAR-","CBR-","CQB-","CSP-","DX-","GR6-","GSG-","IXN-","KFS-","KHE-","KT-","LNR-","MACR-","NDT-","R9-","RHR-","RTA-","SBR-","STH-","TCR-","UTX-","Z5-","ZTN-","ZTR-"];

function getrandomName(){
  var name = [];

  name[1] = randomChoice(manufacturer) + " " + randomChoice(series) + getRandomInt(1, 990).toString() + " ";

  var ten = [];
  //for (var i = 1; i <= 10; i++) {
  //  ten = ten.push(randomChoice(noun));
  //}
  for (i = 0; i < 8; i++) {
    ten.push(randomChoice(noun));
  }
  ten.push("Boy");
  ten = ten.concat(nounFlame);

  type = getRandomInt(1, 2);
  switch (type) {
    case 1:
      name[0] = randomChoice(adjective) + " " + randomChoice(noun);
      break;
    case 2:
      name[0] = randomChoice(adjective) + " " + randomChoice(noun);
      break;
    case 3:
      name[0] = randomChoice(["The ","",""]) + randomChoice(ten)+ " " + randomChoice(ten);
      name[0] =randomChoice(ten) + "-Class Blaster";
      break;
    default:
      console.error("name generation error");
  }
  return name;
}
