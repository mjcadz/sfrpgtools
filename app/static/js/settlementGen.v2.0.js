var government = ["Anarchy","Autocracy","Council","Magocracy","Military","Oligarchy","Secret Syndicate","Plutocracy","Utopia","True Democracy"];

var alignment = ["CG","NG","LG","CN","N","LN","CE","NE","LE"];

var races = ["android","human","kasatha","lashunta","shirren","vesk","ysoki","dwarf","elf","gnome","half-elf","half-elf","halfling"];

var qualities = {
  "Academic" : "It is often easier to do research in this settlement, which is home to a large school, research facility, or great repository of knowledge.",
  "Bureaucratic" : "The settlement is a nightmarish, confusing, and frustrating maze of red tape and official paperwork.",
  "Cultured": "The settlement is well known for being a place where artistry thrives, such as a community of actors and musicians.",
  "Devout": "The settlement is devoted to a deity (which must be of the same alignment as the community) or follows a religious creed.",
  "Financial Center": "This settlement is home to large banks, trading houses, currency exchanges and other powerful financial and mercantile organizations.",
  "Insular": "The settlement is isolated, perhaps physically. Its citizens are fiercely loyal to one another, often making it difficult to learn secrets about them.",
  "Notorious": "The settlement has a reputation (deserved or not) for being a den of iniquity. It is usualy easier to procure illegal goods and services.",
  "Polluted": "The settlement's magical or high-tech industry has filled the ground and sky with disgusting pollution.",
  "Tech": {
    "Technologically Advanced": "The settlement produces and uses a level of technology that isn't widely seen elsewhere.",
    "Technologically Average": "The level of technology used by the settlement is similar to that found in the majority of other settlements.",
    "Technologically Underdeveloped": "The technology used by the settlement is less advanced than that found elsewhere.",
  },
  "In Recession": "The settlement is experiencing an economic downturn, usually resulting in higher unemployment rates.",
  "Profiteering": "The businesses of this settlement engage in unethical practices in order to make profits.",
  "Secret Location": "The settlement is concealed or hidden in some way, or its precise location is a closely guarded secret.",
  "Modular": "The compartmentalized nature of this settlement's construction allows for relatively easy and quick additions, renovations, and even physical rearrangement. It can also be used to physically seperate parts of the city for quarantine or security purposes",
  "Surrounded by the Past": "The citizens of the settlement live among the vestiges of their distant ancestors, though they can't usually take full advantage of such relics.",
  "Remote": "Reaching this settlement is very difficult, often requiring secret knowledge or very specialized skills.",
};

var cityBySize = {
    "empty":[
      "lost city",
      "ruined city",
      "decrepit space station",
      "missing starship",
      "abandoned township",
      "ancient orbital platform",
      "fallen space station"
    ],
    "tiny":[
      "farm",
      "village",
      "barracks",
      "lone tavern",
      "outpost",
      "research station",
      "camp site",
      "orbital platform",
      "hamlet",
      "fishing village",
      "cave dwelling",
      "asteroid base",
      "prison",
    ],
    "small":[
      "farming community",
      "town",
      "trading post",
      "terraforming platform",
      "barracks",
      "colony",
      "community",
      "biodome",
      "township",
      "outpost",
      "research station",
      "castle town",
      "orbital platform",
      "cave system",
      "fishing village",
      "tunnel system",
      "resort",
      "arcology",
      "military base",
      "asteroid base",
      "space station",
      "bubble-city",
      "flotilla",
      "mining town",
      "prison",
      "labour camp"
    ],
    "medium":[
      "spaceport",
      "trading post",
      "terraforming platform",
      "colony",
      "mining colony",
      "community",
      "occupied city",
      "biodome",
      "township",
      "large town",
      "castle town",
      "floating city",
      "underground city",
      "orbital platform",
      "treetop city",
      "underwater city",
      "cave system",
      "tunnel system",
      "suburb",
      "resort",
      "arcology",
      "port city",
      "colony ship",
      "military base",
      "asteroid base",
      "necroplis",
      "space station",
      "bubble-city",
      "floating city",
      "flotilla",
      "starship",
      "holy city",
    ],
    "large":[
      "city",
      "spaceport",
      "trading post",
      "colony",
      "mining colony",
      "occupied city",
      "biodome",
      "city state",
      "large city",
      "floating city",
      "underground city",
      "treetop city",
      "underwater city",
      "arcology",
      "megaplex",
      "port city",
      "metropolis",
      "colony ship",
      "necroplis",
      "space station",
      "bubble-city cluster",
      "flotilla",
      "starship",
      "holy city",
    ],
    "huge":[
      "megacity",
      "planetwide city",
      "city state",
      "large city",
      "megaplex",
      "metropolis",
      "bubble-city cluster",
      "deep space flotilla",
      "artificial planetoid",
      "planetary super weapon",
      "starship city",
      "dyson sphere",
    ],
};

var tavernGen = ["Tavern","Bar","Club","Dance Hall","Seedy Bar"]
var shopGen = ["Market","Armory","General Store","Data Storage","Computer Repair"]
var otherPlaceGen = ["Church","School of","Guard Post"]

var namesEnd = ["dale", "moor", "ton","more","haunt","rast", " Gate","rise", "town","bound","spire","winter","burg","bourne","water","fire","set", "shore", "ville", "ton", "sley"," End","dawn", "waters", "ridge", "sley", "age", "mere", "shire", "feld", "field", "wall", " Falls", "bury", "ford", "arm", " City", " Fork", "fall", "caster", "moor", "cliff", "sby", "chapel", "blight", " Falls", "bend", "hope", " Point"," Rise", "lone", "side", " Gate", "ham", "melt"];
var namesStart = ["Aeon","Aban","Ale","Ash","End","Bane","Nova","Atmos","Data","Mem","Dream","Ender","Radiation","Fable","Glory","Luna","Mag", "Chrono","Aura","Apollo","Nether","Ark","Alpha","Beta","Gamma","Lore","Enigma","Quiet","Neo","Snow","Awe","Wolf","Bear","Rain","Drought","Voyage","Glimmer","Glitter","Wind","Miracle","Moon","Birds","Necro","Ill","Lost","Crash","Light","Fools","Back","Kill","Cat","Dark","Dread","Ever","Hope","Ember","Happy","Dead","Dog","Dawn","Dire","Ditch","Dirt","Void","Demon","Angel","Cruel","Crumble","Somer","Cloud","Border","Break","Bliss","Doom","Water","Fire","Earth","Boom","Air","Metal","Space","Zero","Black","White","Blue","Red","Yellow","Purple","Green","Gray","Orbit","Outland","Elf","Dwarf","Beast","Pinoeer","Prism","Relic","Scout","Tech","Computer","Settler","Scout","Terra","Cosmo","Shere"]
var names = ["Aegis", "Olympus","Aeon","Miracle","Paradox","Anomaly","Alliance","Helios","Guardian","Memento","Hyperion","Inception","Infinity","Beacon","Genesis","Exposure","Curiosity","Fortuna","Eternity","Atlas","Atrophy","Beggar's End","Havoc", "Promise","Terminus","Seclusion","Serenity","Solitude","Remorse","Jericho","Hub","Nirvana","Pleasure","Paradise","Nemesis","Hope","Harmony","Misery","Karma","Carnage","Cavity","City of Dawn","Closure","Hazard","Deadline","Eden","Elysium","Eternity","Final","Forsaken","Valhalla","Titan","Tranquility","Vestige"]

var tavernPrefixes = [
'Angry','Arcane','Babbling','Blackened','Blind','Bloody','Nanotech','Blushing','Broken','Antigrav','Carved','Celestial','Chaotic','Charming','Concussive','Sentient','Crimson','Dancing','Dark','Deaf','Demonic','Dire','Dirty','Draconic','Dragon\'s','Drunken','Superluminal','Dull','Electric','Fighting','Filthy','Flaming','Flying','Forceful','Forged','Forgotten','Fractured','Frightened','Gnarled','Golden','Happy','Hidden','Holy','Hungry','Icy','Invisible','Iron','Jade','Jagged','Joyful','Jumping','Keen','Knotted','Laughing','Lawful','Lawless','Quantum','Autonomous','Sonic','Thermal','Lonely','Lost','Lucky','Metal',"Sapient",'Miniature','Terraformed','Monstrous','Mossy','Musty','Necrotic','Nervous','Old','Pious','Platinum','Poisoned','Polished','Priceless','Prone','Purple','Radiant','Raging','Rusty','Sad','Shining','Sleeping','Steel','Sultry','Sweet','Tiny','Toothless','Tranquil','Twisted','Unholy','Electrostatic','Unlucky','Unsoiled','Violent','Violet','White','Wicked','Winged','Wise','Wounded','Yawning',"Fusion"
]
var tavernSuffixes = [
'Aboleth','Angel','Anvil','Bullet','Doshko','Drifter','Beacon','Bear','Droid','Blade','Starship','Star','Station','Chain','Chest','Circle','Cloak','Clover','Credit','Crowbar','Crown','Comet','Asteroid','Planet','Dagger','Devil','Door','Dove','Dragon','Drow','Dwarf','Edge','Elemental','Soldier','Technomancer','Mystic','Operative','Mechanic','Databank','Solarian','Envoy','Drone','Robot','Longhammer','Lashunta','Kasathan','Ysoki','Vesk','Shirren','Android','Gnome','Goat','Goblin','Hag','Halfling','Hammer','Hoard','Jelly','King','Ladder','Lamp','Lantern','Lemon','Lich','Blaster','Loot','Mage','Map','Laser','Melon','Nuar','Nail','Nightmare','Plasma','Ooze','Orb','Battery','Pitcher','Plate','Polyhedral','Datapad','Computer','Datacore','Queen','Quiver','Rat','Respite','Rest','Ring','Robe','Rope','Sack','Spacer','Sanctum','Shadow','Ship','Slumber','Sphere','Generator','Force Field','Square','Stone','Sword','Armor','Jewel','Vortex','Blackhole','Railgun','Thruster','Tackle','Jump Jet','Tail','Titan','Shield','Grenade','Crew','Power Core','Circuit','Sensor','Jetpack','Singularity','Cargo','Trap','Tree','Triangle','Portal','Unicorn','Whistle','Wizard']

var indexCounter = 0;

function getPopulation(size) {
  var pop = 0;
  switch (size) {
    case "empty":
        pop = 0;
        break;
    case "tiny":
        pop = getRandomInt(2, 200);//two to two hundred
        break;
    case "small":
        pop = getRandomInt(200, 20000);//two hundred to twenty thousand
        pop = Math.round(pop/10)*10;
        break;
    case "medium":
        pop = getRandomInt(20000, 2000000);//twenty thousand to two million
        pop = Math.round(pop/100)*100;
        break;
    case "large":
        pop = getRandomInt(2000000, 200000000);//two million to two hundred million
        pop = Math.round(pop/1000)*1000;
        break;
    case "huge":
        pop = getRandomInt(200000000, 20000000000);//two hundred million to twenty billion
        pop = Math.round(pop/1000000)*1000000;
        break;
  }
  return pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");//add commas as necessary
;
}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
}

function printPanel(alignment,population,type,government,qualities) {
  var $outputArea = $(".output.area").first();
  var storeOutput = $( "div.output.area" ).html();
  $outputArea.empty();

  indexCounter += 1;
  indexString = "index" + indexCounter.toString();

  var settlement = [];
  settlement.push(names.selectRandom());
  settlement.push(namesStart.selectRandom() + namesEnd.selectRandom());
  settlement.push(namesStart.selectRandom() + namesEnd.selectRandom());

  var panelTitle =  settlement.selectRandom();
  var panelBody =   "<p>" + alignment + " " + type +
                    "<br><b>Population </b>" + population +
                    "<br><b>Government </b>" + government.toLowerCase() +
                    "<br><b>Qualities </b>" + qualities.join(', ').toLowerCase() +
                    "<br><b>Maximum Item Level </b>" + "16th" + "</p>";
  panelBody += "<p>The " + tavernPrefixes.selectRandom() + " " + tavernSuffixes.selectRandom() + "</p>"
  panelBody += "<p>The " + tavernSuffixes.selectRandom() + " & " + tavernSuffixes.selectRandom() + "</p>"

  $outputArea.append("<div class=\"panel " + indexString + "\">");
  var $panel = $(".panel."+indexString).first();
  $panel.append("<div class=\"panel-heading panel-bottom\"><h4>" + panelTitle + "</h4></div>");
  $panel.append("<div class=\"panel-body "+ indexString + "\">");
  var $index = $(".panel-body."+indexString).first();
  $index.append(panelBody);
  $index.append("<button type=\"button\" id=\""+indexString+"\"class=\"btn btn-default btn-sm btn-notblack pull-right\" onclick = \"removeEntry(this.id)\">Remove</button>");

  if (storeOutput != ""){
    $outputArea.append(storeOutput);
  }
}

function removeEntry(index) {
  $(".panel."+index).remove();
}

function sortNumber(a,b) {
    return b - a;
}

//removes the selected element from selected array
function removeElement(array,element) {

  var index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;

}

function popPercentages() {
  //split 100 into random sum parts
  var parts = 1;
  var maxparts = [2,3,4,5,6].selectRandom();
  var n = 100;
  var randomSumParts = [];
  while (n > 0) {
    parts += 1
    var s = Math.round(Math.random() * (n - 1)) + 1;
    randomSumParts.push(s);
    n -= s;
    if (parts == maxparts && n > 0){
      randomSumParts.push(n);
      n = 0;
    }
  }
  //sort array
  randomSumParts.sort(sortNumber);
  var otherPart = randomSumParts.selectRandom()
  randomSumParts = removeElement(randomSumParts,otherPart)
  randomSumParts.push(otherPart)

  //add string parts
  var possibleRaces = []
  possibleRaces = possibleRaces.concat(races)
  var popString = " ("
  for (var j = 0; j < randomSumParts.length - 1 ; j++) {
    var selectrace = possibleRaces.selectRandom()
    possibleRaces = removeElement(possibleRaces,selectrace)
    popString += randomSumParts[j].toString() + '% ' +selectrace +', '
  }
  popString += randomSumParts[randomSumParts.length - 1].toString() + '% other)'
  return popString
}

function generateSettlement() {

  //size & type
  var sizeDrop = $('#sizePicker').val().trim();
  if (sizeDrop.includes("Any")) {
    var sizeKeys = Object.keys(cityBySize);
    var sizePick = sizeKeys.selectRandom();
  } else {
    var sizePick = sizeDrop.toLowerCase();
  }
  var randType = cityBySize[sizePick].selectRandom();

  //alignment
  var randAlign = alignment.selectRandom();

  //government
  var randGov = government.selectRandom();

  //qualities
  var qualNum = [1,2,3].selectRandom();
  var randQuals = [];
  var qualKeys = Object.keys(qualities);

  for(var i = 0; i < qualNum; i++) {
      var newQual = qualKeys.selectRandom();
      if (newQual == "Tech") {
        newQual = Object.keys(qualities.Tech).selectRandom()
      }
      if (!randQuals.includes(newQual)){
        randQuals.push(newQual);
      }
  }

  //population
  var randPop = 0;
  if (["lone tavern","camp site","farm"].includes(randType)) {
    randPop = getRandomInt(2, 20).toString();
    randPop += " (100% " + races.selectRandom() + ")"
  } else if (["planetwide city"].includes(randType)) {
    randPop = getRandomInt(20000000000, 2000000000000);
    randPop = Math.round(randPop/1000000000)*1000000000;
    randPop = randPop.toString() + popPercentages()
  } else {
    randPop = getPopulation(sizePick)
    if (Number(randPop.replace(/,/g , "")) > 20){
      randPop += popPercentages()
    } if (Number(randPop.replace(/,/g , "")) > 0) {
      randPop += " (100% " + races.selectRandom() + ")"
    }
  }


  //display
  printPanel(randAlign,randPop,randType,randGov,randQuals)

}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});
