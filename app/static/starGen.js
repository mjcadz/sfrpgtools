//Heavenly Bodies

//STARS
var mainStars = ["Red Star","Orange Star","Yellow Star","White Star","Young Red Star","Young Orange Star","Young Yellow Star"];
var giantStars = ["Red Giant","Orange Giant","Yellow Giant","Blue Giant"];
var supergiantStars = ["Red Supergiant","Orange Supergiant","Blue SuperGiant"];
var dwarfStars = ["White Dwarf","Red Dwarf","Brown Dwarf","Black Dwarf"];
var otherStars = ["Protostar","Neutron Star","Pulsar","Imminent Supernova"];
var otherSystems = ["Black Hole","Ark/Generation Ship","Dyson Sphere","High Mass Debris Field","Deep Space Research Station","Starless Planet"];

var starModifiers = ["Binary System","Nebula","Dust Rings","Asteroid Belt","Energy Harvesting Devices","Stellar Engine"];

//PLANETS
var terrestrialWorlds = ["Garden World","Rocky World","City World","Ocean World","Desert World","Forest World","Ice World","Lava World","Marsh World","Iron World","Coreless World","Carbon World"];
var irregularWorlds =["Debris Field","Destroyed World","Protoplanet","Ring World","Cube World","Disk World","Shield World","Refuelling Station","Offworld Trading Post","Ship Scrapyard"]
var gasGiants = ["Small Gas World","Gas Giant","Hot Gas Giant","Cold Gas Giant"];

var worldModifiers = ["Rings","Super Rings","Terraformed","Terraform in Progress","Force Field","Surrounded by Synthetic Debris","Large Axial Tilt","Perpendicular Rotation","Retrograde Rotation","Eccentric Orbit","Retrograde Orbit"];

//SATELLITES
var moons = ["Rocky Moon","Ice Moon","Forest Moon","Volcanic Moon","Marsh Moon","Garden Moon","Gas Moon"];
var irregularMoons = ["Captured Asteroid","Non-spherical Moon","Destroyed Moon","Ice Ball"];
var artificialSatellites = ["Satellite Array","Space Station","Huge Space Station","Space Elevator","Planetary Defence Platform","Research Outpost","Galactic Navigation Beacon","Artificial Moon","Orbital Drydock","Orbital Mirrors"];

//ATMOSPHERE
var atmosphereType = ["Thin","Normal","Thick","None"];
var atmosphereMods = ["Corrosive","Toxic"];
var safeGases = ["Nitrogen","Oxygen","Argon","Helium","Neon"];
var gasGiantGases = ["Helium","Hydrogen","Methane","Ammonia", "Water Vapour"];
var corrosiveGases = ["Sulphuric Acid","Ammonia"];
var toxicGases = ["Ammonia","Methane","Carbon Monoxide","Carbon Dioxide","Hydrocarbons"];

//BIOMES
var biomes = ["Aerial Terrian","Aquatic Terrian","Desert Terrain","Hill Terrian","Mountain Terrain","Marsh Terrain","Urban Terrain"]


Number.prototype.between = function (min, max) {
    return this > min && this < max;
};


function getStar() {
  var deck = [];
  var pick;

  var num = getRandomInt(1, 100);
  if (num.between(0,71)){
    deck = deck.concat(mainStars);
    deck = deck.concat(mainStars);
    deck = deck.concat(giantStars);
    deck = deck.concat(supergiantStars);
  }
  if (num.between(70,81)){
    deck = deck.concat(dwarfStars);
  }
  if (num.between(80,91)){
    deck = deck.concat(otherStars);
  }
  if (num.between(90,101)){
    deck = deck.concat(otherSystems);
  }

  pick = randomChoice(deck);
  return pick;
}

function getPlanet(position) {
  var deck = [];
  var pick;

  var num = getRandomInt(1, 100);
  if (num.between(0,51)){
    deck = deck.concat(terrestrialWorlds);
  }
  if (num.between(50,81)){
    deck = deck.concat(gasGiants);
  }
  if (num.between(80,101)){
    deck = deck.concat(irregularWorlds);
  }

  if (position === "inner"){
    deck = deck.concat(terrestrialWorlds);
  }
  else if (position === "outer"){
    deck = deck.concat(gasGiants);
    deck = deck.concat(gasGiants);
  }

  pick = randomChoice(deck);

  return pick;
}

function getSatellite() {
  var deck = [];
  var pick;

  var num = getRandomInt(1, 100);
  if (num.between(0,61)){
    deck = deck.concat(moons);
  }
  if (num.between(60,91)){
    deck = deck.concat(artificialSatellites);
  }
  if (num.between(90,101)){
    deck = deck.concat(irregularMoons);
  }

  pick = randomChoice(deck);
  return pick;
}

function getMoons() {
  var moons;
  var num = getRandomInt(1, 100);
  if (num.between(0,21)){
    moons = 0;
  }
  if (num.between(20,81)){
    moons = 1;
  }
  if (num.between(80,91)){
    moons = 2;
  }
  if (num.between(90,96)){
    moons = 3;
  }
  if (num.between(95,101)){
    moons = 4;
  }
  return moons;
}

function getBodies() {
  var bodies =[];
  var i = 0;
  var num = getRandomInt(2, 10);

  for (i = 0; i < num; i++) {
    if (i < num/2 - 1) {
      bodies.push(getPlanet("inner"));
    }
    else if (i > num/2 + 1) {
      bodies.push(getPlanet("outer"));
    }
    else {
      bodies.push(getPlanet());
    }
  }

  return bodies
}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
}

function printSystem() {
  var star = getStar();
  var starLocation;
  var bodies = getBodies();

  var $outputArea = $(".output.area").first();
  $outputArea.empty();

  var num = getRandomInt(1, 100);
  if (num.between(0,81)){
    starLocation = "The Vast";
  }
  if (num.between(80,101)){
    starLocation = "Near Space";
  }

  var list = "<p>"+  star + " Location: " + starLocation;
  var arrayLength = bodies.length;
  var arrayLength2 = moons;
  for (var i = 0; i < arrayLength; i++) {
    list += "<br>";
    list += bodies[i];
    if (!irregularWorlds.includes(bodies[i])){
      var moons = getMoons();
      for (var j = 0; j < moons; j++) {
        list += "<br>&nbsp;&nbsp;" + getSatellite();
      }
    }
  }
  list += "</p>" ;

  $outputArea.append(list);

}

/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
