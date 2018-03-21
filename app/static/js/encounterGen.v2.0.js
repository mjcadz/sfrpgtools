//globals
var tableIndexCounter = 0;
var levelIndexCounter = 0;

var alignments = {
  "LG": ["Lawful", "Good"],
  "LN": ["Lawful", "Neutral"],
  "LE": ["Lawful", "Evil"],
  "NG": ["Neutral", "Good"],
  "N": "Neutral",
  "NE": ["Neutral", "Evil"],
  "CG": ["Chaotic", "Good"],
  "CN": ["Chaotic", "Neutral"],
  "CE": ["Chaotic", "Evil"]
};

var difficulty = {
  "Easy": -1,
  "Average": 0,
  "Challenging": 1,
  "Hard": 2,
  "Epic": 3,
};

var crEquivalencies = {
  "1" : 0,
  "2" : -2,
  "3" : -3,
  "4" : -4,
  "6" : -5,
  "8" : -6,
  "12" : -7,
  "16" : -8,
  "24" : -9,
  "32" : -10
}

smallCRs = {
  "1/2" : 2,
  "1/3" : 3,
  "1/4" : 4,
  "1/6" : 6,
  "1/8" : 8
}

function generateEncounter() {

  var selectedAPL = calculateAPL();
  var selectedDiff = $('#DifficultyPicker').val().trim();
  var diffNum = difficulty[selectedDiff];
  var encounterCR = selectedAPL + diffNum;
  var xpBudget = xp[encounterCR.toString()];

  var mode = $('#ModeRadio').find(".btn.active").find("input").attr('name').trim();

  //var filter = { size: ["large"], organization:["pair"]};
  var filter = buildFilter();

  //var crFilter = ["1/8", "1/6", "1/4", "1/3", "1/2"];
  //for (i = 1; i <= encounterCR; i++) {
  //  crFilter.push(i.toString());
  //}
  //filter["cr"] = crFilter

  ["1","2","3","4","6","8","12","16","24","32"]

  var nums = ["1", "2"]
  var orgs = ["solitary","pair"];
  var numMonsters = nums.selectRandom();
  var organization = orgs[nums.indexOf(numMonsters)]

  filter["cr"] = [encounterCR + crEquivalencies[numMonsters]];
  console.log(filter["cr"])

  var filteredMonsters = filterObject(monsterData, filter)
  var displayMonsters = {}

  //check organisation
  do {
    var key = randomKey(filteredMonsters)
  }
  while (!filteredMonsters[key].organization.includes(organization));

  displayMonsters[key] = filteredMonsters[key];

  //while (xpBudget > 0) {
  //  xpBudget = xpBudget - xp[displayMonsters[key].cr]
  //}
  console.log(displayMonsters)
  displayResults(displayMonsters,numMonsters);

  /* get listed environments, debug only
  var env = [];
  for (property in monsterData) {
    var enviro = monsterData[property].environment;
    if (!env.includes(enviro)){
      env.push(enviro)
    }

  }
  env.sort()
  console.log(env)
  */

}

function calculateAPL() {

  var players = [];
  var playersTotal = 0;
  var levels = [];
  var levelSum = 0;

  $("[id^='PlayerPicker']").each(function() {
    var currentPlayers = Number($(this).val().trim())
    players.push(currentPlayers);
    playersTotal += currentPlayers
  });
  $("[id^='LevelPicker']").each(function() {
    levels.push(Number($(this).val().trim()))
  });

  for (i = 0; i < players.length; i++) {
    levelSum += players[i] * levels[i];
  }
  var apl = Math.round(levelSum / playersTotal)

  if (playersTotal < 4 && apl > 1) {
    apl -= 1;
  }
  if (playersTotal > 5 && apl < 20) {
    apl += 1;
  }
  return apl;

}

function buildFilter() {

  var filter = {};

  var combatType = $('#CombatTypePicker').val().toString().toLowerCase().trim();
  var size = $('#SizePicker').val().toString().toLowerCase().trim();
  var type = $('#CreatureTypePicker').val().toString().toLowerCase().trim();
  var environment = $('#EnvironmentPicker').val().toString().toLowerCase().trim();

  var alignment = $('#AlignmentPicker').val().toString().toLowerCase().trim();
  alignment = alignment.replace('lawful good', 'LG').replace('lawful neutral', 'LN').replace('lawful evil', 'LE');
  alignment = alignment.replace('neutral good', 'NG').replace('neutral', 'N').replace('neutral evil', 'NE');
  alignment = alignment.replace('chaotic good', 'CG').replace('chaotic neutral', 'CN').replace('chaotic evil', 'CE');


  if (combatType != '') {
    if (combatType.includes(',')) {
      filter['combatType'] = combatType.split(',');
    } else {
      filter['combatType'] = [combatType];
    }
  }

  if (size != '') {
    if (size.includes(',')) {
      filter['size'] = size.split(',');
    } else {
      filter['size'] = [size];
    }
  }

  if (type != '') {
    if (type.includes(',')) {
      filter['type'] = type.split(',');
    } else {
      filter['type'] = [type];
    }
  }

  if (alignment != '') {
    if (alignment.includes(',')) {
      filter['alignment'] = alignment.split(',');
    } else {
      filter['alignment'] = [alignment];
    }
  }

  if (environment != '') {
    if (environment.includes(',')) {
      filter['environment'] = environment.split(',');
    } else {
      filter['environment'] = [environment];
    }
  }

  //console.log(filter)
  return filter;
}

function filterObject(obj, filterBy) {

  var keys = Object.keys(filterBy)
  var filteredObject = obj;
  var object = obj;

  for (i = 0; i < keys.length; i++) {
    filteredObject = {};
    var value = filterBy[keys[i]]
    for (j = 0; j < value.length; j++) {
      for (property in object) {
        //check if object value is string
        if (typeof object[property][keys[i]] === 'string') {
          if (object[property][keys[i]] == value[j]) {
            if (!filteredObject.hasOwnProperty(property)) {
              filteredObject[property] = object[property]
            }
          }
        }
        //check if object value is array
        else if (object[property][keys[i]].constructor === Array) {
          if (object[property][keys[i]].includes(value[j])) {
            if (!filteredObject.hasOwnProperty(property)) {
              filteredObject[property] = object[property]
            }
          }
        }
      }
    }
    object = filteredObject;
  }
  console.log(filteredObject)
  return filteredObject;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function displayResults(obj,num) {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();

  var tableHTML = '<table class="table table-striped"><thead><tr><th>Lock</th><th>#</th><th>Creature</th><th>CR</th><th>Type</th><th>Type</th></tr></thead><tbody>';
  for (creature in obj) {

    var creaturePrint = creature;
    if (num == 2) {
      creaturePrint += ' Pair'
    }

    var index = 'index' + tableIndexCounter.toString();
    lockToggle = '<i style="padding-left: 5px; cursor: pointer" id="' + index + '" onclick = "toggleLockIcon(this.id)" class="fas fa-lg fa-unlock"></i>';
    tableHTML += '<tr><td>' + lockToggle + '</td><td>' + num + '</td><td>' + creaturePrint + '</td><td>' + obj[creature].cr + '</td><td>' + obj[creature].type + '</td><td>' + obj[monster].source + ' p.' + obj[monster].page + '</td></tr>';
    tableIndexCounter += 1;
  }
  tableHTML += '</tbody></table>';

  //$outputArea.append('<h4>APL: ' + apl.toString() + '&nbsp;&nbsp;Difficulty: ' + difficulty.toString() + '</h4>');
  $outputArea.append(tableHTML);
}

function displayMonsterPicker() {
  var filter = buildFilter();

  var $outputArea = $("#pickerZone").first();
  $outputArea.empty();

  if (jQuery.isEmptyObject(filter)) {
    $outputArea.append('<p class="text-center">Select Filters</p>');
  } else {
    var filteredMonsters = filterObject(monsterData, filter);
    if (jQuery.isEmptyObject(filteredMonsters)) {
      $outputArea.append('<p class="text-center">No creatures found</p>');
      return
    }

    var tableHTML = '<div style="max-height: 300px; overflow: auto;"><table class="table table-striped"><thead><tr><th>Lock</th><th>Creature</th><th>CR</th><th>Type</th><th>Sourcepage</th></tr></thead><tbody>';
    for (monster in filteredMonsters) {

      addition = '<i style="padding-left: 5px; cursor: pointer; id="' + monster + '" onclick = "addMonster(this.id)" class="fas fa-lg fa-plus"></i>';
      tableHTML += '<tr><td>' + addition + '</td><td>' + monster + '</td><td>' + filteredMonsters[monster].cr + '</td><td>' + filteredMonsters[monster].type + '</td><td>' + filteredMonsters[monster].source + ' p.' + filteredMonsters[monster].page + '</td></tr>';
      tableIndexCounter += 1;
    }
    tableHTML += '</tbody></table></div>';
    $outputArea.append(tableHTML);
  }
}

function toggleLockIcon(index) {
  $('#' + index).toggleClass('fa-unlock fa-lock');
}

//returns random property from an object
function randomKey(obj) {
  var keys = Object.keys(obj);
  return keys[keys.length * Math.random() << 0];
  //return = obj[key];
}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  tableIndexCounter = 0;
}

//collapse functions
function showAdvanced() {
  $('#advanced').collapse('show')
}

function hideAdvanced() {
  $('#advanced').collapse('hide')
  hideMonsterPicker()
}

function showMonsterPicker() {
  $('#pickerButton').text('Hide monster picker');
  $('#monsterPicker').collapse('show');
  $('#pickerButton').attr('onclick', 'hideMonsterPicker()')
}

function hideMonsterPicker() {
  $('#pickerButton').text('Show monster picker');
  $('#monsterPicker').collapse('hide');
  $('#pickerButton').attr('onclick', 'showMonsterPicker()');
}

function addLevel() {
  //append dropdown html
  levelIndexCounter += 1
  $(".playerCol").append('<select class="selectpicker show-tick removablePlayer" id="PlayerPicker' + levelIndexCounter.toString() + '" data-style="btn-default" data-width="100%" data-size="10"><option>1</option><option>2</option><option>3</option><option selected>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option></select>');
  $(".levelCol").append('<select class="selectpicker show-tick removableLevel" id="LevelPicker' + levelIndexCounter.toString() + '" data-style="btn-default" data-width="100%" data-size="10"><option><selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option></select>');
  //initialise dropdowns
  $('#PlayerPicker' + levelIndexCounter.toString()).selectpicker();
  $('#LevelPicker' + levelIndexCounter.toString()).selectpicker();
  //update APL on changes
  $('#PlayerPicker' + levelIndexCounter.toString()).on('changed.bs.select', updateAPLDisplay);
  $('#LevelPicker' + levelIndexCounter.toString()).on('changed.bs.select', updateAPLDisplay);

  updateAPLDisplay();
}

function removeLevel() {
  levelIndexCounter -= 1
  if (levelIndexCounter < 0) {
    levelIndexCounter = 0;
  }
  $('.bootstrap-select.removablePlayer').last().remove();
  $('.bootstrap-select.removableLevel').last().remove();

  updateAPLDisplay();
}

function updateAPLDisplay() {
  var apl = calculateAPL()
  var displayText = 'APL <b style="font-size: 16px;">' + apl.toString() + '</b>';

  $('#aplDisplay').html(displayText);
}

//runs when page is loaded
$(document).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();

  $('#PlayerPicker0').on('changed.bs.select', updateAPLDisplay);
  $('#LevelPicker0').on('changed.bs.select', updateAPLDisplay);

  $('#CombatTypePicker').on('changed.bs.select', displayMonsterPicker);
  $('#AlignmentPicker').on('changed.bs.select', displayMonsterPicker);
  $('#SizePicker').on('changed.bs.select', displayMonsterPicker);
  $('#CreatureTypePicker').on('changed.bs.select', displayMonsterPicker);
  $('#EnvironmentPicker').on('changed.bs.select', displayMonsterPicker);


});
