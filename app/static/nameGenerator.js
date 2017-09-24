var adjective = ["Adamantium","Advanced","Aggressive","Amplified","Anti","Anti-Armor","Anti-Personnel","Anti-Tank","Astral","Astronomical","Atomic","Awesome","Basic","Binary","Bloody","Bolt-Action","Booming","Burning","Bushcraft","Carbon","Celestial","Classic","Cleaning","Commanding","Compact","Consealed","Cosmic","Cosmic","Crude","Dangerous","Devastating","Diseased","Drunken","Dynamic","Efficient","Essential","Evo Tactical","Explosive","Extrasolar","Extraterrestrial","Fieldcraft","Fission","Flying","Furious","Fusion","Galactic","Geared","Godlike","Godly","Hardened","Hasty","Heavenly","Heavy","Heavy","Hungry","Incredible","Infinite","Infinite","Intergalactic","Interplanetary","Interstellar","Laser-Guided","Lever-Action","Liquid","Loaded","Loud","Lunar","Makeshift","Malevolent","Maxx","Mechanical","Meteoric","Mil-Spec","Military","Mithril","Naked","Octo","Offensive","Omni-Sport","Overclocked","Patrol","Pearly","Peculiar","Phantasmal","Phantom","Plague","Planetary","Poisonous","Polar","Powerful","Precision","Primary","Proverbial","Pump-Action","Punishing","Quick Draw","Revolutionary","Rhetorical","Rowdy","Rude","Rusty","Ruthless","Salty","Sandy","Savage","Serious","Sidereal","Sneaky","Soggy","Solar","Solid","Spicy","Spiritual","Splendid","Sports","Stellar","Superior","Suppressive","Synthetic","Tactical","Tasty","Terrible","Twin","Ultra","Unforgiving","Unstoppable","Venomous","Weird","Winged","Wooden"];

var noun = ["Aegis","Air-Strike","Alien","Artemis","Asteroid","Barbarian","Bard","Beestinger","Beholder","Bitch","Black-hole","Bouncer","Boy","Boy","Boy","Boy","Boy","Bulletstorm","Cataclysm","Claw","Cleric","Cloud","Comet","Constellation","Contingency","Crowd Control","D20","Dark-Matter","Defender","Delivery","Diamond","Dragon","Druid","Elite","Fighter","Fist","Fox","Galaxy","Gamma-Ray","Ghost","Girl","Goblin","Godzilla","Hercules","Hornet","Infinity","Jaeger","Joker","Justice","King","Kitten","Law","Lich","Madhouse","Magus","Massacre","Matter","Meteor","Monk","Moon","Order","Owlbear","Pacifier","Paladin","Paragon","Pearl","People's-Elbow","Pepper","Photosphere","Pile-Driver","Platypus","Protector","Pulsar","Quarter-Pounder","Quartz","Quasar","Queen","Ranger","Rhino","Rogue","Ruby","Sapphire","Satellite","Shadow","Sorcerer","Star","Starburst","Steel","Stomper","Streetsweeper","Striker","Summoner","Supercluster","Talon","Tea & Biscuits","Threat","Thumper","Titan","Void","Widow","Witch","Wizard"];

var nounAcid = ["Corroder","Scorpion","Taipan","Viper","Dart-Frog","Cobra","King-Brown"];

var nounSonic = ["Thunderstrike","LFD","HFD","Banshee","Decibel","Sonic-Boom","Calamity","Hurricane","Howler"];

var nounShock = ["Static ","Storm","Tempest","Lightning","Surge","Giga-Watt","Mega-Watt","Tumblespark"];

var nounFlame = ["Pyro","Incendiary","Inferno","Ember","Blaze","Salamander","Hellhound","Firedrake","Phoenix","Volcano"];

var nounLaser = ["Azimuth","Corona","Aphelion","Perihelion","Parallax","Zenith","Parallax","Nova"];

var nounCryo = ["Chill","Fridge","Frostbite","Hailstorm","Blizzard","Avalanche","Frostdrake","Frost-Giant","Ice-Troll"];

var nounPlasma = ["Red-Star","Orange-Star","Yellow-Star","White-Star","Blue-Star","White-Hot","Solar-Flare","Sun-Storm","Ejecta"];

var manufacturer = ["AbadarCorp","Arabani Arms","Ulrikka","Idari","Eox Armory","Farraddi","Kalt & Ryder","Kosunagi Arsenal","LR Vostan","Stonewall","Weyland Industries","Hyperion","Aegis Solutions","Davetech","Vercite Traders" ];

var series = ["A3-","AAA-","ACR-","ACW-","AZU-","BAR-","CBR-","CQB-","CSP-","DX-","GR6-","GSG-","IXN-","KFS-","KHE-","KT-","LNR-","MACR-","NDT-","R9-","RHR-","RTA-","SBR-","STH-","TCR-","UTX-","Z5-","ZTN-","ZTR-"];

function getrandomName(){
  var name;

  name = randomChoice(manufacturer) + " " + randomChoice(series) + getRandomInt(1, 990).toString() + " ";

  var ten = [];
  //for (var i = 1; i <= 10; i++) {
  //  ten = ten.push(randomChoice(noun));
  //}
  for (i = 0; i < 10; i++) {
    ten.push(randomChoice(noun));
  }
  ten = ten.concat(nounFlame);

  type = getRandomInt(1, 3);
  switch (type) {
    case 1:
      name = name.concat(randomChoice(["The ","",""]) + randomChoice(adjective) + " " + randomChoice(ten));
      break;
    case 2:
      name = name.concat(randomChoice(nounFlame) + "-class Blaster");
      break;
    case 3:
      name = name.concat(randomChoice(["The ","",""]) + randomChoice(ten)+ " " + randomChoice(ten));
      break;
    default:
      console.error("name generation error");
  }



  var $outputArea = $(".output.area").first();
  $outputArea.empty();

  $outputArea.append("<div>" + name + "</div>");
}
