//globals
var tableIndexCounter = 0;
var levelIndexCounter = 0;

var alignments = {
  "LG":["Lawful","Good"],
  "LN":["Lawful","Neutral"],
  "LE":["Lawful","Evil"],
  "NG":["Neutral","Good"],
  "N":"Neutral",
  "NE":["Neutral","Evil"],
  "CG":["Chaotic","Good"],
  "CN":["Chaotic","Neutral"],
  "CE":["Chaotic","Evil"]
};

var difficulty = {
  "Easy":-1,
  "Average":0,
  "Challenging":1,
  "Hard":2,
  "Epic":3,
};

function generateEncounter() {

  var selectedAPL = getAPL();
  var selectedDiff = $('#DifficultyPicker').val().trim();
  var diffNum = difficulty[selectedDiff];
  var encounterCR = selectedAPL + diffNum;
  var xpBudget = xp[encounterCR.toString()]

  var mode = $('#ModeRadio').find(".btn.active").find("input").attr('name').trim();

  //var filter = { size: ["large"], organization:["pair"]};
  var filter = buildFilter();

  var crFilter = ["1/8","1/6","1/4","1/3","1/2"]
  for (i = 1; i <= encounterCR; i++) {
    crFilter.push(i.toString())
  }
  filter["cr"] = crFilter

  var filteredMonsters = filterObject(monsterData,filter)
  var displayMonsters = {}

  while (xpBudget > 0) {

    var key = randomKey(filteredMonsters)

    displayMonsters[key] = filteredMonsters[key];
    xpBudget = xpBudget - xp[displayMonsters[key].cr]

  }


  displayResults(displayMonsters,selectedAPL,selectedDiff);

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

function getAPL() {

  var players = [];
  var playersTotal = 0;
  var levels = [];
  var aplnum = 0;

  $("[id^='PlayerPicker']").each(function(){
      var currentPlayers = Number($(this).val().trim())
      players.push(currentPlayers);
      playersTotal += currentPlayers
  });
  $("[id^='LevelPicker']").each(function(){
      levels.push(Number($(this).val().trim()))
  });

  for (i = 0; i < players.length; i++) {
    aplnum += players[i] * levels[i];
  }

  var apl = Math.round(aplnum/playersTotal)

  if (playersTotal < 4){
    apl -= 1;
  }
  if (playersTotal > 5){
    apl += 1;
  }
  return apl;

}

function buildFilter(){

  var filter = {};

  var combatType = $('#CombatTypePicker').val().toString().toLowerCase().trim();
  var size = $('#SizePicker').val().toString().toLowerCase().trim();
  var type = $('#CreatureTypePicker').val().toString().toLowerCase().trim();
  var environment = $('#EnvironmentPicker').val().toString().toLowerCase().trim();

  var alignment = $('#AlignmentPicker').val().toString().toLowerCase().trim();
  alignment = alignment.replace('lawful good','LG').replace('lawful neutral','LN').replace('lawful evil','LE');
  alignment = alignment.replace('neutral good','NG').replace('neutral','N').replace('neutral evil','NE');
  alignment = alignment.replace('chaotic good','CG').replace('chaotic neutral','CN').replace('chaotic evil','CE');


  if (combatType != '') {
    if (combatType.includes(',')){
      filter['combatType'] = combatType.split(',');
    } else {
      filter['combatType'] = [combatType];
    }
  }

  if (size != '') {
    if (size.includes(',')){
      filter['size'] = size.split(',');
    } else {
      filter['size'] = [size];
    }
  }

  if (type != '') {
    if (type.includes(',')){
      filter['type'] = type.split(',');
    } else {
      filter['type'] = [type];
    }
  }

  if (alignment != '') {
    if (alignment.includes(',')){
      filter['alignment'] = alignment.split(',');
    } else {
      filter['alignment'] = [alignment];
    }
  }

  if (environment != '') {
    if (environment.includes(',')){
      filter['environment'] = environment.split(',');
    } else {
      filter['environment'] = [environment];
    }
  }

  //console.log(filter)
  return filter;
}

function filterObject(obj,filterBy){

  var keys = Object.keys(filterBy)
  var filteredObject = obj;
  var object = obj;

  for (i = 0; i < keys.length; i++) {
    filteredObject = {};
    var value = filterBy[keys[i]]
    for (j = 0; j < value.length; j++) {
      for (property in object) {
        //check if object value is string
        if (typeof object[property][keys[i]] === 'string'){
          if (object[property][keys[i]] == value[j]) {
            if (!filteredObject.hasOwnProperty(property)){
              filteredObject[property] = monsterData[property]
            }
          }
        }
        //check if object value is array
        else if (object[property][keys[i]].constructor === Array){
          if (object[property][keys[i]].includes(value[j])) {
            if (!filteredObject.hasOwnProperty(property)){
              filteredObject[property] = monsterData[property]
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

function displayResults(obj,apl,difficulty) {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();

  var tableHTML = '<table class="table table-striped"><thead><tr><th>Lock</th><th>Creature</th><th>CR</th><th>Type</th><th>Sourcepage</th></tr></thead><tbody>';
  for (creature in obj) {

    var index = 'index' + tableIndexCounter.toString();
    lockToggle = '<i style="padding-left: 5px;" id="'+index+'" onclick = "toggleLockIcon(this.id)" class="fas fa-lg fa-unlock"></i>';
    tableHTML += '<tr><td>' + lockToggle + '</td><td>' + creature + '</td><td>' + obj[creature].cr + '</td><td>' + obj[creature].type + '</td><td>' + obj[creature].source + ' p.' + obj[creature].page + '</td></tr>';
    tableIndexCounter += 1;
  }
  tableHTML += '</tbody></table>';

  //$outputArea.append('<h4>APL: ' + apl.toString() + '&nbsp;&nbsp;Difficulty: ' + difficulty.toString() + '</h4>');
  $outputArea.append(tableHTML);
}

function toggleLockIcon(index){
  $('#' + index).toggleClass('fa-unlock fa-lock');
}

//returns random property from an object
function randomKey (obj) {
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
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
  levelIndexCounter += 1
  $(".playerCol").append('<select class="selectpicker show-tick removablePlayer" id="PlayerPicker' + levelIndexCounter.toString() + '" data-style="btn-default" data-width="100%" data-size="10"><option>1</option><option>2</option><option>3</option><option selected>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option></select>' );
  $(".levelCol").append('<select class="selectpicker show-tick removableLevel" id="LevelPicker' + levelIndexCounter.toString() + '" data-style="btn-default" data-width="100%" data-size="10"><option><selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option></select>' );

  $('#PlayerPicker' + levelIndexCounter.toString()).selectpicker();
  $('#LevelPicker' + levelIndexCounter.toString()).selectpicker();
}

function removeLevel(){
  levelIndexCounter -= 1
  if (levelIndexCounter < 0) {
    levelIndexCounter = 0;
  }
  $('.bootstrap-select.removablePlayer').last().remove();
  $('.bootstrap-select.removableLevel').last().remove();
}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});
