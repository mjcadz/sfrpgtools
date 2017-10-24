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

var worldModifiers = ["Rings","Super Rings","Terraformed","Terraform in Progress","Force Field","Surrounded by Synthetic Debris","Large Axial Tilt","Perpendicular Rotation","Retrograde Rotation","Eccentric Orbit","Retrograde Orbit"];

//SATELLITES
var lifeMoons = ["Ice Moon","Forest Moon","Marsh Moon","Garden Moon","Rocky Moon","Volcanic Moon"];
var nonLifeMoons = ["Rocky Moon","Ice Moon","Iron Moon","Gas Moon","Captured Asteroid","Destroyed Moon"];
var artificialSatellites = ["Satellite Array","Space Station","Huge Space Station","Space Elevator","Planetary Defence Platform","Research Outpost","Galactic Navigation Beacon","Artificial Moon","Orbital Drydock","Orbital Mirrors"];

//ATMOSPHERE
var atmosphereType = ["Thin","Normal","Thick","No Atmosphere"];
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

function getMoons() {
  deck = [0,1,2,3,4]
  weight = [0.2,0.6,0.1,0.05,0.05]
  return randomWeightedChoice(deck, weight);
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

function getBodyStats (bodies,position) {
  var currentBody = bodies[position];
  var stats = [];
  var index,atmo;
  //Diameter, Mass, Gravity
  var diameter = ["1/5","1/4","1/3","1/2","2/3","1","1","2","5","10","20","32","50","64","100"];
  var mass = ["1/200","1/50","1/20","1/5","1/3","1","1","2","8","16","32","64","100","200","320"];
  var gravity = ["1/10","1/5","1/3","1/2","3/4","1","1","1 1/2","2","2 1/2","3","4","5","6","8"];

  weight = [1,1,2,3,4,8,8,4,3,2,2,1,1,1,1];

  stats.push(randomWeightedChoice(diameter, weight));
  index = diameter.indexOf(stats[0]);
  if (index.between(0,14)){
    index = index + randomChoice([-1,0,+1]);
  }
  stats.push(mass[index]);
  if (index.between(0,13)){
    index = index + randomChoice([-1,0,+1]);
  }
  stats.push(gravity[index]);

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

  stats.push(days);

  //year
  var yearYears = [1,1,2,2,3,3,4,5,6,7,8,9,10,12,14,16,20,25,30,42,67,80,115,209,253,300,350,400,457,500];
  var yearVaries = [0,1,1,2,4,20,45,67,88];
  var yearWeights = [9,8,4,3,3,2,2,2]

  var spacing = Math.round(32 / (bodies.length));
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
  stats.push(finalYear);

  return stats
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
      stats = getBodyStats(bodies,i);

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

  var bodies = getBodies();
  var accordionIndex = 1;
  var starLocation;
  var innerAccordion = "";

  starLocation = randomWeightedChoice(["The Vast","Near Space"], [0.6,0.4]);

  innerAccordion += "<p>Sector: " + starLocation + "</p>";
  innerAccordion += "<p></p>";
  innerAccordion += "<div class=\"panel-group\" id=\"accordion1\">";

  //build panels
  for (var i = 0; i < bodies.length; i++) {
    var title = bodies[i];
    var num = i + 1;
    var index = num.toString();
    var stats = getBodyStats(bodies,i);
    var panelBody = "";

    panelBody += "<p><b>Diameter: </b>x" + stats[0];
    panelBody += "<br><b>Mass: </b>x" + stats[1];
    panelBody += "<br><b>Gravity: </b>x" + stats[2];
    panelBody += "<br><b>Atmosphere: </b>" + stats[3];
    panelBody += "<br><b>Day: </b>" + stats[4];
    panelBody += "&nbsp;&nbsp;<b>Year: </b>" + stats[5] + "</p>";
    panelBody += "<p></p>";

    //build moon panels
    if (!artificialWorlds.includes(bodies[i]) && bodies[i] != "Asteroid Belt"){
      var moonNum = getMoons();
      if (moonNum != 0) {

        accordionIndex += 1;
        panelBody += "<p></p>";
        panelBody += "<p><b>Satellites</b></p>";
        panelBody += "<p></p>";
        panelBody += "<div class=\"panel-group\" id=\"accordion" + accordionIndex + "\">";

        for (var j = 0; j < moonNum; j++) {
          var numj = j + 1;
          var indexj = numj.toString();
          panelBody += buildPanel(getSatellite(), index + indexj, accordionIndex, "moon", false, false);
        }
        panelBody += "</div>";
      }
    }

    innerAccordion += buildPanel(title, index, "1", panelBody, false, false);
  }
  innerAccordion += "</div>";

  accordion = "<div class=\"panel-group\" id=\"accordion\">";
  accordion += buildPanel(getStar(), "", "", innerAccordion, true, true);
  accordion += "</div>";

  $outputArea.append(accordion);

}

function buildPanel (title, index, accordionIndex, panelBody, unCollapse, addButton) {
  var collapse = "";
  if (unCollapse) {
    collapse = " in"
  }
  var panelHeader = "<div class=\"panel-heading\">" +
    "<h4 class=\"panel-title\">"
  if (addButton) {
    panelHeader = "<div class=\"panel-heading clearfix\">" +
    "<button id=\"toggletoggle\" onclick = \"expandAll()\" class=\"btn btn-default pull-right\">Expand All</button>" +
    "<h4 class=\"panel-title pull-left\" style=\"padding-top: 7.5px;\">"
  }

  panel = "<div class=\"panel panel-default\">" +
    panelHeader +
        "<a data-toggle=\"collapse\" data-parent=\"#accordion" + accordionIndex + "\" href=\"#collapse" + index + "\">" +
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

var rand = function(min, max) {
    return Math.random() * (max - min) + min;
};

var randomWeightedChoice = function(list, weight) {
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });

    var random_num = rand(0, total_weight);
    var weight_sum = 0;
    //console.log(random_num)

    for (var i = 0; i < list.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(2);

        if (random_num <= weight_sum) {
            return list[i];
        }
    }

    // end of function
};

//Sets selected dropdown to dropdown display
//BOOTSTRAP 3
$(".dropdown-menu li a").click(function(){
  var selected = $(this).text();
  if (selected.includes("Small") || selected.includes("Medium") || selected.includes("Large")) {
    $(this).closest('.btn-group').find('.dropdown-toggle').html("System Size - " + selected + ' <span class="caret"></span>');
    $(this).closest('.btn-group').find('.dropdown-toggle').val("System Size - " + selected)
  }
  else if (selected.includes("Sparse") || selected.includes("Average") || selected.includes("Teeming")){
    $(this).closest('.btn-group').find('.dropdown-toggle').html("Life - " + selected + ' <span class="caret"></span>');
    $(this).closest('.btn-group').find('.dropdown-toggle').val("Life - " + selected)
  }
});

function expandAll() {
  $('.panel-collapse:not(".in")')
		.collapse('show');

  //$('#toggletoggle')
}

function collapseAll() {
  $('.panel-collapse.in')
    .collapse('hide');
}
