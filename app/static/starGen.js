//Heavenly Bodies

//STARS
var mainStars = ["Red Star","Orange Star","Yellow Star","White Star"];
var giantStars = ["Red Giant","Orange Giant","Yellow Giant","Blue Giant"];
var supergiantStars = ["Red Supergiant","Orange Supergiant","Blue SuperGiant"];
var otherStars = ["Protostar","Neutron Star","Pulsar","Imminent Supernova","White Dwarf","Red Dwarf","Brown Dwarf","Black Hole","Dyson Sphere","High Mass Debris Field"];
var systemlessObjects = ["Ark Ship","Generation Ship","Deep Space Research Station","Starless Planet"]

var starModifiers = ["Binary System","Nebula","Dust Rings","Energy Harvesting Devices","Stellar Engine"];

//PLANETS
var terrestrialLife = ["Garden World","Rocky World","City World","Ocean World","Desert World","Forest World","Ice World","Lava World","Marsh World"];
var terrestrialNonLife = ["Rocky World","Ice World","Iron World","Coreless World","Carbon World","Debris Field","Destroyed World","Protoplanet"];
var artificialWorlds =["Ring World","Cube World","Ark Ship","Disk World","Shield World","Refuelling Station","Offworld Trading Post","Ship Scrapyard"];
var gasGiants = ["Small Gas World","Gas Giant","Hot Gas Giant","Cold Gas Giant"];

var worldModifiers = ["Rings","Super Rings","Terraformed","Terraform in Progress","Force Field","Surrounded by Synthetic Debris","Large Axial Tilt","Perpendicular Rotation"];

//SATELLITES
var lifeMoons = ["Ice Moon","Forest Moon","Marsh Moon","Garden Moon","Rocky Moon","Volcanic Moon"];
var nonLifeMoons = ["Rocky Moon","Ice Moon","Iron Moon","Gas Moon","Captured Asteroid","Destroyed Moon"];
var artificialSatellites = ["Satellite Array","Space Station","Huge Space Station","Space Elevator","Planetary Defence Platform","Research Outpost","Drift Beacon","Artificial Moon","Orbital Drydock","Orbital Mirrors"];

//ATMOSPHERE
var atmosphereType = ["Thin","Normal","Thick","No Atmosphere"];
var atmosphereMods = ["Corrosive","Toxic"];
var safeGases = ["Nitrogen","Oxygen","Argon","Helium","Neon"];
var gasGiantGases = ["Helium","Hydrogen","Methane","Ammonia", "Water Vapour"];
var corrosiveGases = ["Sulphuric Acid","Ammonia"];
var toxicGases = ["Ammonia","Methane","Carbon Monoxide","Carbon Dioxide","Hydrocarbons"];

//BIOMES
var biomes = ["Aerial Terrain","Aquatic Terrain","Desert Terrain","Hill Terrain","Forest Terrain","Mountain Terrain","Marsh Terrain","Urban Terrain"]

var planetBiomes = {
  "Garden World": ["Forest Terrain","Hill Terrain","Marsh Terrain","Aerial Terrain"],
  "Rocky World": ["Desert Terrain","Aerial Terrain","Hill Terrain","Mountain Terrain"],
  "City World": ["Urban Terrain"],
  "Ocean World": ["Aquatic Terrain"],
  "Desert World": ["Desert Terrain"],
  "Forest World": ["Forest Terrain"],
  "Ice World": ["Aquatic Terrain","Desert Terrain","Mountain Terrain"],
  "Lava World": ["Desert Terrain","Hill Terrain","Mountain Terrain"],
  "Marsh World": ["Marsh Terrain"],
  "Iron World": ["Desert Terrain","Hill Terrain","Mountain Terrain","Aerial Terrain"],
  "Coreless World": ["Desert Terrain","Hill Terrain","Mountain Terrain","Aerial Terrain"],
  "Carbon World": ["Desert Terrain","Hill Terrain","Mountain Terrain","Aerial Terrain"],
  "Debris Field": ["-"],
  "Destroyed World": ["Forest Terrain","Desert Terrain","Hill Terrain"],
  "Protoplanet": ["-"],
  "Ring World": ["Forest Terrain","Hill Terrain","Urban Terrain"],
  "Cube World": ["Aquatic Terrain","Forest Terrain","Desert Terrain","Urban Terrain"],
  "Disk World": ["Aquatic Terrain","Forest Terrain","Desert Terrain","Urban Terrain"],
  "Shield World": ["Forest Terrain","Hill Terrain","Urban Terrain"],
  "Ice Moon": ["Aquatic Terrain","Desert Terrain","Mountain Terrain"],
  "Forest Moon": ["Forest Terrain"],
  "Marsh Moon": ["Marsh Terrain"],
  "Garden Moon": ["Forest Terrain","Hill Terrain","Mountain Terrain","Marsh Terrain","Aerial Terrain"],
  "Artificial Moon": ["Forest Terrain","Hill Terrain","Mountain Terrain","Marsh Terrain","Aerial Terrain"],
  "Rocky Moon": ["Desert Terrain","Aerial Terrain","Hill Terrain","Mountain Terrain"],
  "Volcanic Moon": ["Desert Terrain","Hill Terrain"],
  "Iron Moon": ["Desert Terrain","Hill Terrain","Mountain Terrain"],
  "Captured Asteroid": ["-"],
  "Destroyed Moon": ["-"],
  "Starless Planet": ["Aquatic Terrain","Desert Terrain","Hill Terrain","Forest Terrain","Mountain Terrain","Marsh Terrain","Urban Terrain"]
}

var numberWords = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen"];

var flavourText = ["This world features a prominent ring system composed mainly of ice particles.",
"A ring system made up of dust and ice surrounds this world.",
"This world boasts a perpendicular ring system.",
"A super ring system orbits this world, 200x the diameter of the planet.",
"This world is in the process of being terraformed.",
"This world has undergone terraforming to make it habitable.",
"An ancient terraforming platform lies inactive on the worlds surface.",
"This world is surrounded by an impenetrable force field.",
"Tons upon tons of synthetic debris floats in LEO.",
"The large axial tilt of this world produces violent seasons.",
"This world rotates perpendicular to the solar plane.",
"This world is tidally locked.",
"This world features an eccentric orbit.",
"The orbit of this world is retrograde compared to the other orbiting bodies.",
"This world features retrograde rotation.",
"Ancient alien ruins litter the surface of this world.",
"Dormant alien technology lies on the surface.",
"This world has vast supplies of precious minerals.",
"The surrounding asteroids have been mined dry of all their resources.",
"This world has been stripped of all resources.",
"This world is giving off strange readings.",
"This world is rich in natural resources.",
"Severe storms cover this world.",
"Severe winds, up to 200mph, belt the surface of this world.",
"The weather changes rapidly on this world.",
"This world is on a collision course with another celestial body.",
"Ruins of an ancient civilization can be found here.",
"The surface of this world is orange.",
"The surface of this world is purple.",
"The surface of this world is mint green."];

Number.prototype.between = function (min, max) {
    return this > min && this < max;
};


function getStar() {
  var deck = [];
  var weight = [];
  var pick;

  deck = deck.concat(mainStars);
  deck = deck.concat(giantStars);
  deck = deck.concat(supergiantStars);
  deck = deck.concat(otherStars);
  deck = deck.concat(systemlessObjects);

  weight = weight.concat(getWeightFill(mainStars,3));
  weight = weight.concat(getWeightFill(giantStars,1));
  weight = weight.concat(getWeightFill(supergiantStars,1));
  weight = weight.concat(getWeightFill(otherStars,1));
  weight = weight.concat(getWeightFill(systemlessObjects,1));

  pick = randomWeightedChoice(deck,weight);
  return pick;
}

function getPlanet(position) {
  var deck = [];
  var weight = [];
  var weight1,weight2,weight3,weight4;
  var pick;
  var lifeDrop = $('#lifeDrop').text().toString();

  deck = deck.concat(terrestrialLife);
  deck = deck.concat(terrestrialNonLife);
  deck = deck.concat(artificialWorlds);
  deck = deck.concat(gasGiants);

  if (lifeDrop.includes("Sparse")){
    weight1 = getWeightFill(terrestrialLife,1);
    weight2 = getWeightFill(terrestrialNonLife,5);
    weight3 = getWeightFill(artificialWorlds,1);
    weight4 = getWeightFill(gasGiants,6);
    if (position === "inner"){
      weight2.fill(weight2[0]+2);
    }

  } else if (lifeDrop.includes("Average")){
    weight1 = getWeightFill(terrestrialLife,1);
    weight2 = getWeightFill(terrestrialNonLife,1);
    weight3 = getWeightFill(artificialWorlds,1);
    weight4 = getWeightFill(gasGiants,2);
    if (position === "inner"){
      weight1.fill(weight1[0]+2);
      weight2.fill(weight2[0]+2);
    }

  } else if (lifeDrop.includes("Teeming")){
    weight1 = getWeightFill(terrestrialLife,3);
    weight2 = getWeightFill(terrestrialNonLife,1);
    weight3 = getWeightFill(artificialWorlds,3);
    weight4 = getWeightFill(gasGiants,3);
    if (position === "inner"){
      weight1.fill(weight1[0]+2);
      weight2.fill(weight2[0]+2);
    }

  }

  if (position === "outer"){
    weight4.fill(weight4[0]+4);
  }

  weight = weight.concat(weight1).concat(weight2).concat(weight3).concat(weight4);
  deck = deck.concat(["Asteroid Belt"]);
  weight = weight.concat([3]);
  pick = randomWeightedChoice(deck,weight);

  return pick;
}

function getSatellite() {
  var deck = [];
  var weight = [];
  var pick;
  var lifeDrop = $('#lifeDrop').text().toString();

  deck = deck.concat(lifeMoons);
  deck = deck.concat(nonLifeMoons);
  deck = deck.concat(artificialSatellites);

  if (lifeDrop.includes("Sparse")){
    weight = weight.concat(getWeightFill(lifeMoons,1));
    weight = weight.concat(getWeightFill(nonLifeMoons,6));
    weight = weight.concat(getWeightFill(artificialSatellites,0.5));

  } else if (lifeDrop.includes("Average")){
    weight = weight.concat(getWeightFill(lifeMoons,1));
    weight = weight.concat(getWeightFill(nonLifeMoons,1));
    weight = weight.concat(getWeightFill(artificialSatellites,0.5));

  } else if (lifeDrop.includes("Teeming")){
    weight = weight.concat(getWeightFill(lifeMoons,3));
    weight = weight.concat(getWeightFill(nonLifeMoons,1));
    weight = weight.concat(getWeightFill(artificialSatellites,2));

  }

  pick = randomWeightedChoice(deck, weight);
  return pick;
}

function getMoonBodies() {
  var deck = [0,1,2,3,4];
  var weight = [0.2,0.6,0.1,0.05,0.05]
  var num = randomWeightedChoice(deck, weight);

  var bodies =[];
  var i = 0;

  for (i = 0; i < num; i++) {
    bodies.push(getSatellite());
  }
  return bodies;
}

function getBodies() {
  var bodies =[];
  var i = 0;
  var sizeDrop = $('#sizeDrop').text().toString();

  if (sizeDrop.includes("Small")){
    var num = getRandomInt(2, 5);
  } else if (sizeDrop.includes("Medium")){
    var num = getRandomInt(5, 10);
  } else if (sizeDrop.includes("Large")){
    var num = getRandomInt(10, 16);
  }


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

function getBodyStats (bodies,position,moon) {
  var currentBody = bodies[position];
  var stats = [];
  var index,atmo;

  if (currentBody == "Asteroid Belt"){
    stats.push("Millions of asteroids, each up to 1000 km across");//diameter
    stats.push("x2 total (less than x1/100 for any single asteroid)");//mass
    stats.push("Varies");//gravity
    stats.push("Special");//atmosphere
    stats.push("Varies");//day
    stats.push("Varies");//year
    stats.push("-");//biome
  }
  else if (["Ark Ship","Generation Ship","Deep Space Research Station"].includes(currentBody)){
    stats.push(randomChoice(["2","3","4","5","6"]) + " miles");//diameter
    stats.push("less than x1/100");//mass
    stats.push(randomChoice(["-","x1/2 (artificial)","x1 (artificial)","x1 1/2 (artificial)","x2 (artificial)"]));//gravity
    stats.push(randomChoice(["No Atmosphere","Normal","Normal"]));//atmosphere
    stats.push("-");//day
    stats.push("-");//year
    stats.push("Urban Terrain");//biome
  }
  else if (["Debris Field","Destroyed World","Destroyed Moon"].includes(currentBody)){
    stats.push("Chunks of rock, metal, and ice, each up to 600 miles across");//diameter
    if (currentBody.includes("Moon")){
     stats.push(randomChoice(["1/5","x1/2","x1/4","x1/3"]) + " total (less than x1/100 for any single chunk)");//mass
    }else{
      stats.push(randomChoice(["x1","x2","x3","x10","x5","x1/2","x1/3"]) + " total (less than x1/100 for any single chunk)");//mass
    }
    stats.push("Varies");//gravity
    stats.push("Special");//atmosphere
    stats.push("Varies");//day
    finalYear = getBodyYear(bodies.length,position);
    stats.push(finalYear);//year
    stats.push("Varies");//biome

  }
  else if (["Ring World","Ark Ship","Refuelling Station","Offworld Trading Post","Ship Scrapyard","Satellite Array","Space Station","Huge Space Station","Space Elevator","Planetary Defence Platform","Research Outpost","Drift Beacon","Orbital Drydock","Orbital Mirrors"].includes(currentBody)){
    if (["Ship Scrapyard","Satellite Array","Space Elevator","Drift Beacon"].includes(currentBody)) {
      stats.push("-");//diameter
      stats.push("-");//mass
      stats.push("-");//gravity
      stats.push("-");//atmosphere

    }
    else{
      stats.push(randomChoice(["2","3","4","5","6"]) + " miles");//diameter
      stats.push("less than x1/100");//mass
      stats.push(randomChoice(["-","x1/2 (artificial)","x1 (artificial)","x1 1/2 (artificial)","x2 (artificial)"]));//gravity
      stats.push(randomChoice(["No Atmosphere","Normal","Normal"]));//atmosphere
      }
    stats.push(randomChoice(["1 day (artificial)","1 day (artificial)","20 hours","5 hours","8 hours","43 hours","1 day","4 days","16 days","12 days"]));//day

    //year
    finalYear = getBodyYear(bodies.length,position);
    stats.push(finalYear);//year

    if (["Ship Scrapyard","Satellite Array","Drift Beacon","Orbital Mirrors"].includes(currentBody)) {
      stats.push("-");//biome
    } else {
      stats.push("Urban Terrain");//biome
    }

  }
  else{
    //Diameter, Mass, Gravity
    if (moon) { //moon stats
      var diameter = ["1/80","1/50","1/25","1/20","1/10","1/8","1/6","1/5","1/4","1/4","1/3","1/2"];
      var mass = ["1/100","1/80","1/50","1/32","1/25","1/24","1/20","1/16","1/10","1/5","1/4","1/3"];
      var gravity = ["1/10","1/5","1/4","1/3","1/2","1/2","2/3","3/4","1","1","1 1/2","2"];
      var maxIndex = 13;
      weight = [1,1,2,2,3,3,3,4,6,8,3,1];
      var flavour = (randomChoice(flavourText)).replace("world","moon");
    } else { //planet stats
      var diameter = ["1/5","1/4","1/3","1/2","2/3","1","1","2","5","10","20","32","50","64","100"];
      var mass = ["1/200","1/50","1/20","1/5","1/3","1","1","2","8","16","32","64","100","200","320"];
      var gravity = ["1/10","1/5","1/3","1/2","3/4","1","1","1 1/2","2","2 1/2","3","4","5","6","8"];
      var maxIndex = 14;
      weight = [1,1,2,3,4,8,8,4,3,2,2,1,1,1,1];
      var flavour = randomChoice(flavourText);
    }

    var diam,mas,grav;
    diam = randomWeightedChoice(diameter, weight);
    index = diameter.indexOf(diam);
    if (index.between(0,maxIndex)){
      index = index + randomChoice([-1,0,+1]);
    }
    mas = mass[index];
    if (index.between(0,maxIndex-1)){
      index = index + randomChoice([-1,0,+1]);
    }
    grav = gravity[index];

    stats.push("x"+diam);
    stats.push("x"+mas);
    stats.push("x"+grav);

    //Atmosphere
    var atmo,mod,weight,weight1;
    var atmosphere= ["No Atmosphere","Thin","Normal","Thick"];
    var mods = ["none","Corrosive","Toxic"];
    var normalOrNoneAtmo = ["Refuelling Station","Offworld Trading Post","Ark Ship"];
    var noAtmo = ["Ship Scrapyard"];
    var lifeDrop = $('#lifeDrop').text().toString();

    if (lifeDrop.includes("Sparse")){
      weight = [2,1,1,1];
      weight1 = [3,1,1];

    } else if (lifeDrop.includes("Average")){
      weight = [1,1,1,1];
      weight1 = [5,1,1];

    } else if (lifeDrop.includes("Teeming")){
      weight = [1,2,3,2];
      weight1 = [8,1,1];
    }
    atmo = randomWeightedChoice(atmosphere, weight);
    mod = randomWeightedChoice(mods, weight1);
    if (atmo != "No Atmosphere" && mod != "none"){
      if(atmo == "Normal"){
        atmo = mod;
      }
      else{
        atmo = mod + " and " + atmo;
      }
    }

    if (currentBody.includes("Gas")){
      atmo = "Special";
    }
    if (normalOrNoneAtmo.includes(currentBody)){
      atmo = randomChoice(["No Atmosphere","Normal"]);
    }
    if (noAtmo.includes(currentBody)){
      atmo = "No Atmosphere";
    }

    stats.push(atmo);

    //Day
    var dayHours = [6,10,12,15,18,25,26,27,28,40,47];
    var dayDays = [1,1,1,2,5,6,7,12,21,26,30];
    var weight = [1,8,8];
    var artificalDay = ["Refuelling Station","Offworld Trading Post","Ark Ship","Space Station","Huge Space Station","Research Outpost"];
    var days = randomWeightedChoice(["-",randomChoice(dayHours)+" hours",randomChoice(dayDays)+" days"],weight);

    if (artificalDay.includes(currentBody)){
      days = randomChoice([days,"1 day (artificial)"])
    }
    if (currentBody == "Starless Planet"){
      days = "-";
    }
    stats.push(days);

    //year
    if (currentBody == "Starless Planet"){
      finalYear = "-";
    }
    else {
      finalYear = getBodyYear(bodies.length,position);
    }
    stats.push(finalYear);

    //biome
    if (currentBody.includes("Gas")){
      biome = "Aerial Terrain";
    }
    else{
      //alert(currentBody +planetBiomes[currentBody] )
      biome = randomChoice(planetBiomes[currentBody]);
    }
    stats.push(biome);
    stats.push(flavour)
  }

  return stats
}
function getBodyYear(length,position){
  var yearYears = [1,1,2,2,3,3,4,5,6,7,8,9,10,12,14,16,20,25,30,42,67,80,115,209,253,300,350,400,457,500];
  var yearVaries = [0,1,1,2,4,20,45,67,88];
  var yearWeights = [9,8,4,3,3,2,2,2];

  var spacing = Math.round(32 / (length));
  var interval = spacing * position;
  var indexChoice = [];
  for (var i = 0; i < spacing; i++) {
   indexChoice.push(i); //fill array in numerical order
  }
  var finalIndex = interval + randomChoice(indexChoice);
  var finalYear;
  var finalInt;
  var variance = randomWeightedChoice(yearVaries,yearWeights);
  if (finalIndex < 6){
    finalInt = getRandomInt(90,300);
    finalYear = finalInt.toString() + " Days";
  }
  else {
    finalInt = yearYears[finalIndex - 6] + variance;
    finalYear = finalInt.toString() + " Years";
  }
  return finalYear;
}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
}

function printSystem() {
  var star = getStar();
  var starLocation;
  var stats;


  var $outputArea = $(".output.area").first();
  $outputArea.empty();

  deck = ["The Vast","Near Space"]
  weight = [0.8,0.2]
  starLocation = randomWeightedChoice(deck, weight);

  var list = "<p>"+  star + " Location: " + starLocation;

  if (!systemlessObjects.includes(star)){

    //get array of system bodies
    var bodies = getBodies();

    for (var i = 0; i < bodies.length; i++) {
      list += "<br>";
      list += bodies[i];
      //do stats
      stats = getBodyStats(bodies,i,false);

      //list += "<br>&nbsp;&nbsp;Diameter: x" + stats[0];
      //list += "<br>&nbsp;&nbsp;Mass: x" + stats[1];
      //list += "<br>&nbsp;&nbsp;Gravity: x" + stats[2];
      //list += "<br>&nbsp;&nbsp;Atmosphere: " + stats[3];
      //list += "<br>&nbsp;&nbsp;Day: " + stats[4];
      //list += "<br>&nbsp;&nbsp;Year: " + stats[5];
      //do moons
      //if (!artificialWorlds.includes(bodies[i]) && bodies[i] != "Asteroid Belt"){
        //var moons = getMoons();
        //for (var j = 0; j < moons; j++) {
          //list += "<br>&nbsp;&nbsp;" + getSatellite();
        //}
      //}
    }
    list += "</p>" ;
  }

  $outputArea.append(list);

}

function printSystem2() {

  var $outputArea = $(".output.area").first();
  $outputArea.empty();

  var star = getStar();
  var accordionIndex = 1;
  var starLocation, travelTime;
  var innerAccordion = "";

  starLocation = randomWeightedChoice(["The Vast","Near Space"], [0.6,0.4]);
  if (starLocation == "The Vast"){
    travelTime = diceRoll('5d6') + " Days";
  } else if (starLocation == "Near Space") {
    travelTime = diceRoll('3d6') + " Days";
  }

  innerAccordion += "<p><b>Sector:</b> " + starLocation;
  innerAccordion += "<br><b>Drift Travel:</b> " + travelTime;

  if (!systemlessObjects.includes(star)){

    var bodies = getBodies();
    innerAccordion += "<br><b>Orbiting Bodies:</b> " + bodies.length.toString() + "</p>";
    innerAccordion += "<p></p>";
    innerAccordion += "<div class=\"panel-group\" id=\"accordion1\">";

    //build panels
    for (var i = 0; i < bodies.length; i++) {
      var title = bodies[i];
      var num = i + 1;
      var index = num.toString();
      var stats = getBodyStats(bodies,i,false);
      var panelBody = "";

      if (stats.length == 8){
        panelBody += "<p>"+stats[7]+"</p>";
      }

      panelBody += "<p><b>Main biome: </b>" + stats[6];
      panelBody += "<br><b>Diameter: </b>" + stats[0];
      panelBody += "<br><b>Mass: </b>" + stats[1];
      panelBody += "<br><b>Gravity: </b>" + stats[2];
      panelBody += "<br><b>Atmosphere: </b>" + stats[3];
      panelBody += "<br><b>Day: </b>" + stats[4];
      panelBody += "&nbsp;&nbsp;<b>Year: </b>" + stats[5] + "</p>";
      panelBody += "<p></p>";

      //build moon panels
      if (!artificialWorlds.includes(bodies[i]) && bodies[i] != "Asteroid Belt"){

        var moonBodies = getMoonBodies();

        if (moonBodies.length > 0) {

          accordionIndex += 1;
          panelBody += "<p></p>";
          panelBody += "<p><b>Satellites:</b></p>";
          panelBody += "<p></p>";
          panelBody += "<div class=\"panel-group\" id=\"accordion" + accordionIndex + "\">";

          for (var j = 0; j < moonBodies.length; j++) {
            var numj = j + 1;
            var indexj = numj.toString();
            //
            var moonStats = getBodyStats(moonBodies,j,true);
            var moonPanel = "";

            if (["Space Elevator","Satellite Array","Drift Beacon"].includes(moonBodies[j])){
              moonPanel += "<p></p>"
            }
            else {
              if (moonStats.length == 8){
                moonPanel += "<p>"+moonStats[7]+"</p>";
              }

              moonPanel += "<p><b>Main biome: </b>" + moonStats[6];
              moonPanel += "<br><b>Diameter: </b>" + moonStats[0];
              moonPanel += "<br><b>Mass: </b>" + moonStats[1];
              moonPanel += "<br><b>Gravity: </b>" + moonStats[2];
              moonPanel += "<br><b>Atmosphere: </b>" + moonStats[3];
              if (["Refuelling Station","Ark Ship","Offworld Trading Post","Space Station","Huge Space Station","Research Outpost"].includes(moonBodies[j])){
                moonPanel += "<br><b>Day: </b>" + moonStats[4];
              }
              moonPanel += "</p>";
            }
            //
            panelBody += buildPanel(moonBodies[j], index + indexj, accordionIndex, moonPanel, false, false);
          }
          panelBody += "</div>";
        } else {
          panelBody += "<p></p>";
          panelBody += "<p><b>No satellites</b></p>";
          panelBody += "<p></p>";
        }
      }

      innerAccordion += buildPanel(title, index, "1", panelBody, false, false);
    }
    innerAccordion += "</div>";
  }
  else{
    alert(star)
    var stats = getBodyStats([star],0,false);
    innerAccordion += "<br><b>Main biome: </b>" + stats[6];
    innerAccordion += "<br><b>Diameter: </b>" + stats[0];
    innerAccordion += "<br><b>Mass: </b>" + stats[1];
    innerAccordion += "<br><b>Gravity: </b>" + stats[2];
    innerAccordion += "<br><b>Atmosphere: </b>" + stats[3];
    innerAccordion += "<br><b>Day: </b>" + stats[4];
    innerAccordion += "&nbsp;&nbsp;<b>Year: </b>" + stats[5] + "</p>";
  }

  accordion = "<hr><div class=\"panel-group\" id=\"accordion\">";
  accordion += buildPanel(star, "", "", innerAccordion, true, true);
  accordion += "</div>";

  $outputArea.append(accordion);

  //set icon changes on collapse trigger
  $(".collapse").on('shown.bs.collapse', function(e){
    $(e.target).parent().find('.chevron').first().removeClass( "fa-chevron-down" ).addClass( "fa-chevron-up" );
  });
  $(".collapse").on('hidden.bs.collapse', function(e) {
    $(e.target).parent().find('.chevron').first().removeClass( "fa-chevron-up" ).addClass( "fa-chevron-down" );
  });
}

function buildPanel (title, index, accordionIndex, panelBody, unCollapse, addButton) {
  var collapse = "";
  if (unCollapse) {
    collapse = " in always"
  }
  var panelHeader = "<div class=\"panel-heading clearfix\" data-toggle=\"collapse\" data-parent=\"#accordion" + accordionIndex + "\" href=\"#collapse" + index + "\">" +
    "<i class=\"fa fa-chevron-down pull-right chevron\" aria-hidden=\"true\"></i>" +
    "<h4 class=\"panel-title pull-left\">"
  if (addButton) {
    panelHeader = "<div class=\"panel-heading clearfix\">" +
    "<button id=\"toggletoggle\" onclick = \"expandAll()\" class=\"btn btn-default btn-sm btn-notblack pull-right\">Expand All</button>" +
    "<h4 class=\"panel-title pull-left\" style=\"padding-top: 7.5px;\">"
  }

  panel = "<div class=\"panel\">" +
    panelHeader +
        "<a>" +
        title + "</a>" +
      "</h4>" +
    "</div>" +
    "<div id=\"collapse" + index + "\" class=\"panel-collapse collapse" + collapse + "\">" +
      "<div class=\"panel-body\">" + panelBody + "</div>" +
    "</div>" +
  "</div>";
  return panel;
}


/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//return array full of weights the same length as the array parsed
function getWeightFill(arrayLength,fill) {
  var filled = [];
  filled.length = arrayLength.length;
  filled.fill(fill);
  return filled;
}

//Sets selected dropdown to dropdown display
//BOOTSTRAP 3
$(".dropdown-menu li a").click(function(){
  var selected = $(this).text();
  if (selected.includes("Small") || selected.includes("Medium") || selected.includes("Large")) {
    $(this).closest('.btn-group').find('.dropdown-toggle').html('<span class="pull-left">System Size - ' + selected + '</span><span class="caret"></span>');
    $(this).closest('.btn-group').find('.dropdown-toggle').val("System Size - " + selected);
  }
  else if (selected.includes("Sparse") || selected.includes("Average") || selected.includes("Teeming")){
    $(this).closest('.btn-group').find('.dropdown-toggle').html('<span class="pull-left">Life - ' + selected + '</span><span class="caret"></span>');
    $(this).closest('.btn-group').find('.dropdown-toggle').val("Life - " + selected);
  }
});

function expandAll() {
  $('.panel-collapse:not(".in")')
		.collapse('show');

  document.getElementById('toggletoggle').onclick = function() { collapseAll(); }
  $('#toggletoggle').html("Collapse All");
  $('#toggletoggle').val("Collapse All");
}

function collapseAll() {
  $('.panel-collapse.in:not(".always")')
    .collapse('hide');
  document.getElementById('toggletoggle').onclick = function() { expandAll(); }
  $('#toggletoggle').html("Expand All");
  $('#toggletoggle').val("Expand All");

}
