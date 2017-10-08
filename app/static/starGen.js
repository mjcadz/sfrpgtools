//Heavenly Bodies

//STARS
var mainStars = ["Red Star","Orange Star","Yellow Star","White Star","Young Red Star","Young Orange Star","Young Yellow Star"];
var giantStars = ["Red Giant","Orange Giant","Yellow Giant","Blue Giant"];
var supergiantStars = ["Red Supergiant","Orange Supergiant","Blue SuperGiant"];
var dwarfStars = ["White Dwarf","Red Dwarf","Brown Dwarf","Black Dwarf"];
var otherStars = ["Protostar","Neutron Star","Pulsar","Imminent Supernova"];
var otherSystems = ["Black Hole","Ark/Generation Ship","Dyson Sphere","High Mass Debris Field","Deep Space Research Station","Starless Planet"];

var starModifiers = ["Binary System","Nebula","Dust Rings","Asteroid Belt","Energy Harvesting Devices"];

//PLANETS
var terrestrialPlanets = ["Silicate Planet","Super Silicate Planet","Iron Planet","Coreless Planet","Carbon Planet"];
var silicateSubTypes = ["Garden Planet","Rocky Planet","City Planet","Ocean Planet","Desert Planet","Forest Planet","Icy Planet","Molten Planet","Swamp Planet"];
var gasPlanets = ["Gas Planet","Gas Giant","Hot Gas Giant","Cold Gas Giant"];
var otherPlanets = ["Debris Field","Destroyed Planet","Rocky Planetoid","Ice Planetoid","Protoplanet","Ring World","Cube World","Refuelling Station","Offworld Trading Post"];

var planetmodifiers = ["Rings","Super Rings","Terraformed","Terraform in Progress","Shielded","Force Field","Surrounded by Synthetic Debris","Large Axial Tilt","Eccentric Orbit","Retrograde Rotation"];

//SATELLITES
var moons = ["Rocky Moon","Icy Moon","Forest Moon","Volcanic Moon","Swamp Moon","Garden Moon"];
var irregularMoons = ["Captured Asteroid","Irregular Shaped Moon","Destroyed Moon"];
var artificialSatellites = ["Satellite Array","Space Station","Huge Space Station","Space Elevator","Planetary Defence Platform","Research Outpost","Galactic Navigation Beacon"];

//ATMOSPHERE
var atmosphereType = ["Thin","Normal","Thick","None"];
var atmosphereMods = ["Corrosive","Toxic"];
var safeGases = ["Nitrogen","Oxygen","Argon","Helium","Neon"];
var gasGiantGases = ["Helium","Hydrogen","Methane","Ammonia", "Water Vapour"];
var corrosiveGases = ["Sulphuric Acid","Ammonia"];
var toxicGases = ["Ammonia","Methane","Carbon Monoxide","Carbon Dioxide","Hydrocarbons"];



function getStar() {
  var deck = [];
  var pick;

  deck = deck.concat(mainStars);
  deck = deck.concat(mainStars);
  deck = deck.concat(giantStars);
  deck = deck.concat(supergiantStars);
  deck = deck.concat(dwarfStars);
  deck = deck.concat(otherStars);
  deck = deck.concat(otherSystems);

  pick = randomChoice(deck);
  return pick;
}

function getPlanet() {
  var deck = [];
  var pick;

  deck = deck.concat(terrestrialPlanets);
  deck = deck.concat(gasPlanets);
  deck = deck.concat(otherPlanets);

  pick = randomChoice(deck);
  pick = pick.replace("Silicate Planet",randomChoice(silicateSubTypes));
  return pick;
}

function getSatellite() {
  var deck = [];
  var pick;

  deck = deck.concat(moons);
  deck = deck.concat(irregularMoons);
  deck = deck.concat(artificialSatellites);

  pick = randomChoice(deck);
  return pick;
}

function getSystem() {
  var system =[];

  system.push(getStar());
  system.push(getPlanet());
  system.push(getPlanet());
  system.push(getPlanet());
  system.push(getSatellite());

  return system
}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
}

function printSystem() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();

  var system = getSystem();

  $outputArea.append( "<p>"+  system[0] +
                      "<br>"+ system[1] +
                      "<br>"+ system[2] +
                      "<br>"+ system[3] +
                      "<br>"+ system[4] + "</p>"
  );

}
