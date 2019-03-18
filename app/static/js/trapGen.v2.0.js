//CR: Perception DC,	Disable DC,	Init,	EAC,	KAC,	Good Save,	Poor Save, HP,	Attack,	Damage,	Save DC,	Good Skills
var trapStats = {
  "1/2": [17, 12, 4, 9, 13, 3, 0, 12, 9, '2d6', 11],
  "1": [21, 16, 6, 10, 14, 4, 1, 19, 11, '3d6', 12],
  "2": [23, 18, 7, 12, 16, 5, 2, 25, 12, '4d6', 13],
  "3": [24, 19, 8, 13, 17, 6, 3, 38, 13, '6d6', 14],
  "4": [26, 21, 9, 15, 19, 7, 4, 50, 14,'4d10+2', 15],
  "5": [27, 22, 10, 16, 20, 8, 5, 69, 15, '2d12+4', 15],
  "6": [29, 24, 11, 17, 21, 9, 6, 88, 17, '6d12', 16],
  "7": [30, 25, 12, 18, 22, 10, 7, 107, 19, '8d10', 17],
  "8": [32, 27, 14, 19, 23, 11, 8, 125, 20, '8d12', 18],
  "9": [33, 28, 15, 21, 25, 12, 9, 144, 22, '10d10+5', 18],
  "10": [35, 30, 16, 22, 26, 13, 10, 163, 23, '10d12', 19],
  "11": [36, 31, 17, 23, 27, 14, 11, 181, 24, '12d12', 20],
  "12": [38, 33, 19, 25, 29, 15, 12, 200, 27, '12d12+5', 21],
  "13": [39, 34, 20, 26, 30, 16, 13, 225, 28, '14d12', 21],
  "14": [41, 36, 21, 27, 31, 17, 14, 250, 29, '14d12+7', 22],
  "15": [42, 37, 22, 28, 32, 18, 15, 275, 30, '14d12+15', 23],
  "16": [44, 39, 23, 29, 33, 19, 16, 300, 31, '16d12+15', 24],
  "17": [45, 40, 24, 30, 34, 20, 17, 338, 32, '16d12+30', 24],
  "18": [47, 42, 26, 31, 35, 21, 18, 375, 33, '16d12+45', 25],
  "19": [48, 43, 27, 32, 36, 22, 19, 413, 34, '16d12+60', 26],
  "20": [50, 45, 28, 34, 38, 23, 20, 463, 35, '16d12+75', 27]
};

var trapTypes = {
  "Pit Trap": {
    "Type": "analog",
    "Disable": "engineering: open trap door",
    "Trigger": "location",
    "Reset": "manual"
  }
};

xp = {
  "1/2": "200",
  "1": "400",
  "2": "600",
  "3": "800",
  "4": "1,200",
  "5": "1,600",
  "6": "2,400",
  "7": "3,200",
  "8": "4,800",
  "9": "6,400",
  "10": "9,600",
  "11": "12,800",
  "12": "19,200",
  "13": "25,600",
  "14": "38,400",
  "15": "51,200",
  "16": "76,800",
  "17": "102,400",
  "18": "153,600",
  "19": "204,800",
  "20": "307,200"
};

var indexCounter = 0;

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
}

function printPanel(trap,level) {
  var $outputArea = $(".output.area").first();
  var storeOutput = $( "div.output.area" ).html();
  $outputArea.empty();

  indexCounter += 1;
  indexString = "index" + indexCounter.toString();

  var panelTitle =  "CR " + level + " " + trap;
  var panelBody =   "<h5 class=\"text-muted text-muted-one\">butts</h5>" +
                    "<p><b>Price: </b>" +
                    "<br><b>EAC: </b>" +
                    "<br><b>KAC: </b>" +
                    "<br><b>Max Dex Bonus: </b>" +
                    "<br><b>Armor Check Penalty: </b>" +
                    "<br><b>Speed Adjustment: </b>" +
                    "<br><b>Upgrade Slots: </b>" +
                    "<br><b>Bulk: </b>" + "</p>" +

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

function generateTrap() {

  var trap = "Laser";

  var trapDrop = $('#trapPicker').val().trim();

  //level
  if (trapDrop.includes("Any")) {
    level = getRandomInt(1, 20);
  } else if (trapDrop.includes("CR")){
    level = parseInt(trapDrop.replace("CR ", ""));
  } else {
    level = NaN;
    console.log('error getting level');
  }

  printPanel(trap,level);

  //log event in analytics
  //ga('send', 'event', 'Generation', 'trap');
}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});
