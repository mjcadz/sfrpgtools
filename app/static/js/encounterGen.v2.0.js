//globals
var tableIndexCounter = 0;
var levelIndexCounter = 0;
var tableObject = {}

var xp = {
  "0": 0,
  "1/8": 50,
  "1/6": 65,
  "1/4": 100,
  "1/3": 135,
  "1/2": 200,
  "1": 400,
  "2": 600,
  "3": 800,
  "4": 1200,
  "5": 1600,
  "6": 2400,
  "7": 3200,
  "8": 4800,
  "9": 6400,
  "10": 9600,
  "11": 12800,
  "12": 19200,
  "13": 25600,
  "14": 38400,
  "15": 51200,
  "16": 76800,
  "17": 102400,
  "18": 153600,
  "19": 204800,
  "20": 307200,
  "21": 409600,
  "22": 614400,
  "23": 819200,
  "24": 1228800,
  "25": 1638400
};

var groupsPerCR = {
  "0": [1],//same as 1/2
  "1/8": 0,
  "1/6": 0,
  "1/4": 0,
  "1/3": [1],
  "1/2": [1],
  "1": [1,[2,"1/2"],[3,"1/3"]],
  "2": [1,[3,"1/2"]],
  "3": [1,2,[4,"1/2"],[6,"1/3"]],
  "4": [1,2,3,[6,"1/2"],[9,"1/3"]],
  "5": [1,2,4,[8,"1/2"],[12,"1/3"]],
  "6": [1,2,3,4,[12,"1/2"],[18,"1/3"]],
  "7": [1,2,4,8,[16,"1/2"],[24,"1/3"]],
  "8": [1,2,3,4,8,[24,"1/2"]],
  "9": [1,2,4,8,16,[32,"1/2"]],
  "10": [1,2,3,4,8,16],
  "11": [1,2,4,8,16,32],
  "12": [1,2,3,4,8,16,32],
  "13": [1,2,4,8,16,32],
  "14": [1,2,3,4,8,16,32],
  "15": [1,2,4,8,16,32],
  "16": [1,2,3,4,8,16,32],
  "17": [1,2,4,8,16,32],
  "18": [1,2,3,4,8,16,32],
  "19": [1,2,4,8,16,32],
  "20": [1,2,3,4,8,16,32],
  "21": [1,2,4,8,16,32],
  "22": [1,2,3,4,8,16,32],
  "23": [1,2,4,8,16,32],
  "24": [1,2,3,4,8,16,32],
  "25": [1,2,4,8,16,32]
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
  "3" : -3,//only works for even CRs
  "4" : -4,
  "6" : -5,//dosn't give correct XP budget
  "8" : -6,
  "12" : -7,//dosn't give correct XP budget
  "16" : -8,
  "24" : -9,//dosn't give correct XP budget
  "32" : -10
}

function generateEncounter() {

  clearDisplayTable()

  var selectedAPL = calculateAPL();
  var selectedDiff = $('#DifficultyPicker').val().trim();
  var diffNum = difficulty[selectedDiff];
  var encounterCR = selectedAPL + diffNum;

  //include lock values in CR calculations
  var xpBudget = xp[encounterCR.toString()];
  var xpUsed = addXP();
  var xpLeft = xpBudget - xpUsed;

  var x = xpLeft;
  var valueArray = Object.values(xp);
  var closest = valueArray.sort( (a, b) => Math.abs(x - a) - Math.abs(x - b) )[0];

  var tooEasy = false;
  var adjustedCR = Number(getKeyByValue(xp,closest));
  if (encounterCR == 0) {
    tooEasy = true;
  }

  if (adjustedCR != 0 || tooEasy) {

    var possibleCounts = ["1","1"];
    if (adjustedCR > 2) { possibleCounts.push("2"); }
    if (adjustedCR > 4) { possibleCounts.push("4"); }
    var monsterCount = possibleCounts.selectRandom()
    var newCR = adjustedCR + crEquivalencies[monsterCount];
    var splitCR = [];
    for(var i = 0; i < Number(monsterCount); i++) {
        splitCR.push(newCR);
    }

    var displayMonsters = {};
    var previouslySelected = [];

    //get locked creatures
    for (creature in tableObject) {
      previouslySelected.push(creature);
    }

    for(var m = 0; m < splitCR.length; m++) {
      var creatureData = randomCreatureFromCR(splitCR[m],previouslySelected);
      if (creatureData.length != 0) {
        previouslySelected.push(creatureData[0]);
        tableObject[creatureData[0]] = monsterData[creatureData[0]];
        tableObject[creatureData[0]]['number'] = creatureData[1];
        tableObject[creatureData[0]]['groupName'] = creatureData[3];
        tableObject[creatureData[0]]['lockState'] = false;
      }
    }
  }

  displayTable();
  updateAPLDisplay()

  /*
  //get listed environments, debug only
  var env = [];
  for (property in monsterData) {
    var enviro = monsterData[property].planet;
    if (!env.includes(enviro)){
      env.push(enviro)
    }

  }
  env.sort()
  console.log(env)*/

}

function clearDisplayTable() {
  $(".fa-unlock").each(function() {
    var index = $(this).attr('id').trim().split('index')
    var id = 'index' + index[1];
    var monster = index[0].replace('LOCK','');
    delete tableObject[monster];

  });
  displayTable();
  updateAPLDisplay();
}

function randomCreatureFromCR(challengeRating,previouslySelected) {

  var filter = buildFilter();

  var limitedNums = groupsPerCR[challengeRating.toString()];
  limitedNums = removeElements(limitedNums,[1,2]);

  var nums = [1]
  if (challengeRating > 2) { nums.push(2); }
  if (limitedNums.length != 0){
    nums.push(limitedNums.selectRandom())
    nums.push(limitedNums.selectRandom())
  }
  nums = shuffle(nums);

  var setBreak = false;
  var finalNum = '';
  var finalCreature = '';
  var finalGroup = '';
  var finalArray = [];

  //loop through monster numbers looking for matches
  for (var z = 0; z < nums.length; z++) {
    //add CR to filters and shuffle filtered monster keys
    if (challengeRating == 0) {
        filter["cr"] = ["1/2"];
        nums[z] = "1";
    } else {
      if (nums[z].constructor === Array) {
        filter["cr"] = [nums[z][1]];
        nums[z] = (nums[z][0]).toString();
      } else {
        filter["cr"] = [(Number(challengeRating) + crEquivalencies[nums[z]]).toString()];
        nums[z] = nums[z].toString()
      }
    }

    var filteredMonsters = filterObject(monsterData, filter);
    var monsterKeys = Object.keys(filteredMonsters)
    monsterKeys = removeElements(monsterKeys,previouslySelected);
    monsterKeys = shuffle(monsterKeys);
    var validNums = Object.keys(crEquivalencies);

    //loop through monsters looking for organisation match
    for (var j = 0; j < monsterKeys.length; j++) {
      var orgs = filteredMonsters[monsterKeys[j]].organization

      if (orgs == "any") {
        var numOrgs = [nums[z]];
        var groupWords = [''];
      } else {

        var numOrgs = [];
        var groupWords = [];
        for (var k = 0; k < orgs.length; k++) {

          if (orgs[k] == "solitary") {
            numOrgs.push("1")
            groupWords.push("solitary")
          } else if (orgs[k] == "pair") {
            numOrgs.push("2")
            groupWords.push("pair")
          } else {
            //larger organisations
            if (!orgs[k].includes('+') && orgs[k].includes('-')){ //TODO binomial TODO multicreature dips
              var result = orgs[k].match(/[0-9]+-[0-9]+/g);
              var groupName = orgs[k].replace('(' + result + ')','')
              result = result[0].split('-')
              for (var k = Number(result[0]); k < Number(result[1]) + 1; k++) {
                if (validNums.includes(k.toString())) {
                  numOrgs.push(k.toString());
                  groupWords.push(groupName)
                }
              }
            }
          }
        }
      }
      if (numOrgs.includes(nums[z])) {
        finalNum = nums[z];
        finalCreature = monsterKeys[j];
        finalGroup = groupWords[numOrgs.indexOf(nums[z])]
        setBreak = true;
        break
      }
    }
    if (setBreak == true) {
      break;
    }

  }
  if (finalCreature != '') {
    finalArray.push(finalCreature)
  }
  if (finalNum != '') {
    finalArray.push(Number(finalNum))
  }
  if (finalGroup != '') {
    finalArray.push(finalGroup)
  }
  return finalArray
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

  for (var i = 0; i < players.length; i++) {
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

function removeElements(array,elements) {
  var removeArray = array;
  for (var j = 0; j < elements.length; j++) {

    var index = removeArray.indexOf(elements[j]);
    if (index > -1) {
      removeArray.splice(index, 1);
    }
  }
  return removeArray;
}

function buildFilter() {

  var filter = {};

  var source = $('#SourcePicker').val().toString().trim();
  source = source.replace('Alien Archive','AA,CRB').replace('Dead Suns 1-4','DS1,DS2,DS3,DS4').replace('Pact Worlds','PW')

  if (source != '') {
    if (source.includes(',')) {
      filter['source'] = source.split(',');
    } else {
      filter['source'] = [source];
    }
  } else {
    filter['source'] = ['None'];
  }

  var mode = $('#ModeRadio').find(".btn.active").find("input").attr('name').trim();

  if (mode == 'advanced') {

    var combatType = $('#CombatTypePicker').val().toString().toLowerCase().trim();
    var size = $('#SizePicker').val().toString().toLowerCase().trim();
    var type = $('#CreatureTypePicker').val().toString().toLowerCase().trim();
    var environment = $('#EnvironmentPicker').val().toString().toLowerCase().trim();
    var planet = $('#PlanetPicker').val().toString().trim();

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

    if (planet != '') {
      if (planet.includes(',')) {
        filter['planet'] = planet.split(',');
      } else {
        filter['planet'] = [planet];
      }
    }
  }
  return filter;
}

function filterObject(obj, filterBy) {

  var keys = Object.keys(filterBy)
  var filteredObject = obj;
  var object = obj;

  for (var i = 0; i < keys.length; i++) {
    filteredObject = {};
    if (typeof filterBy[keys[i]] === 'string') {
      var value = [filterBy[keys[i]]]
    } else {
      var value = filterBy[keys[i]]
    }

    for (var j = 0; j < value.length; j++) {
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

function displayTable() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();

  if (jQuery.isEmptyObject(tableObject)) {
    $outputArea.append('<p class="text-center">No suitable creatures found</p>');
    return
  }

  var mode = $('#ModeRadio').find(".btn.active").find("input").attr('name').trim();
  if (mode == 'advanced') {
    var plusMinusTitle = '<th></th>';
  } else {
    var plusMinusTitle = '';
  }

  var tableHTML = '<div class="container table-responsive"><table id="outputTable" class="table table-striped"><thead><tr><th>Lock</th><th>#</th><th>Creature</th><th>CR</th><th>Alignment</th><th>Size</th><th>Type</th><th>Source</th>' + plusMinusTitle + '</tr></thead><tbody>';
  for (creature in tableObject) {
    var creaturePrint = creature;
    var index = 'index' + tableIndexCounter.toString();

    if (mode == 'advanced') {
      var plusMinus = '<i style="padding-right: 10px; cursor: pointer;" id="PLUS' + creature + index + '" onclick = "plusMonster(this.id)" class="fas fa-lg fa-plus"></i><i style="cursor: pointer;" id="MINUS' + creature + index + '" onclick = "minusMonster(this.id)" class="fas fa-lg fa-minus"></i>';
    } else {
      var plusMinus = ''
    }

    if (tableObject[creature]['lockState']) {
      lockToggle = '<i style="padding-left: 5px; cursor: pointer" id="LOCK' + creature + index + '" onclick = "toggleLockIcon(this.id)" class="fas fa-lg fa-lock"></i>';
    } else {
      lockToggle = '<i style="padding-left: 5px; cursor: pointer" id="LOCK' + creature + index + '" onclick = "toggleLockIcon(this.id)" class="fas fa-lg fa-unlock"></i>';
    }

    tableHTML += '<tr id="ROW' + index + '"><td>' + lockToggle + '</td><td id="NUM' + index + '">' + tableObject[creature].number + '</td><td id="MON' + creature + index + '">' + creaturePrint + '</td><td id="CR' + index + '">' + tableObject[creature].cr + '</td><td>' + tableObject[creature].alignment + '</td><td>' + tableObject[creature].size + '</td><td>' + tableObject[creature].type + '</td><td>' + tableObject[creature].source + ' p.' + tableObject[creature].page + '</td><td>' + plusMinus + '</td></tr>';
    tableIndexCounter += 1;
  }
  tableHTML += '</tbody></table></div>';

  $outputArea.append(tableHTML);
}

function displayMonsterPicker() {
  var filter = buildFilter();

  var $outputArea = $("#pickerZone").first();
  $outputArea.empty();
  var searchTerm = $('#inputSearch').val().trim();

  if (Object.keys(filter).length == 1 && searchTerm == '') {
    $outputArea.append('<p class="text-center">Search or select filters</p>');
  } else {

    var filteredMonsters = filterObject(monsterData, filter);
    if (jQuery.isEmptyObject(filteredMonsters)) {
      $outputArea.append('<p class="text-center">No creatures found</p>');
      return
    }

    monsterKeys = Object.keys(filteredMonsters);

    if (searchTerm != '') {
      monsterKeys = searchArray(monsterKeys,searchTerm)
    }

    if (monsterKeys.length == 0) {
      $outputArea.append('<p class="text-center">No creatures found</p>');
      return
    }

    monsterKeys.sort()

    var tableHTML = '<div class="container table-responsive" style="max-height: 300px; overflow: auto;"><table class="table table-striped"><thead><tr><th>Add</th><th>Creature</th><th>CR</th><th>Type</th><th>Sourcepage</th></tr></thead><tbody>';
    for (i = 0; i < monsterKeys.length; i++) {

      monster = monsterKeys [i];
      addition = '<i style="padding-left: 5px; cursor: pointer;" id="' + monster + '" onclick = "plusMonster(this.id)" class="fas fa-lg fa-plus"></i>';
      tableHTML += '<tr><td>' + addition + '</td><td>' + monster + '</td><td>' + filteredMonsters[monster].cr + '</td><td>' + filteredMonsters[monster].type + '</td><td>' + filteredMonsters[monster].source + ' p.' + filteredMonsters[monster].page + '</td></tr>';

    }
    tableHTML += '</tbody></table></div>';
    $outputArea.append(tableHTML);
  }
}

function getKeyByValue(object,value) {
    for( var prop in object ) {
        if( object.hasOwnProperty( prop ) ) {
             if( object[ prop ] === value )
                 return prop;
        }
    }
}

function plusMonster(id) {
  var monster = id.split('index')[0].replace('PLUS','');

  if (tableObject.hasOwnProperty(monster)) {
    //increase monster count
    var index = $("[id^='MON" + monster + "']").attr('id').trim().replace(monster,'').replace('MON','');
    //check lock state
    if( !$("[id='LOCK" + monster + index + "'].fa-lock").length ) {
      var currentNum = tableObject[monster]['number'];
      currentNum += 1;
      tableObject[monster]['number'] = currentNum;
      displayTable();
      updateAPLDisplay();
    }
  } else {
    //add new monster
    tableObject[monster] = monsterData[monster];
    tableObject[monster]['number'] = 1;
    displayTable();
    updateAPLDisplay();
  }
}

function minusMonster(id) {
  var monster = id.split('index')[0].replace('MINUS','');
  var index = id.replace(monster,'').replace('MINUS','');
  //check lock state
  if( !$("[id='LOCK" + monster + index + "'].fa-lock").length ) {
    //decrease monster count
    if (tableObject.hasOwnProperty(monster)) {
      var currentNum = tableObject[monster]['number'];
      currentNum -= 1;
      if (currentNum > 0) {
        tableObject[monster]['number'] = currentNum;
      } else {
        delete tableObject[monster];
      }
      displayTable();
      updateAPLDisplay();

    }
  }
}

function toggleLockIcon(index) {
  $("[id='" + index + "']").toggleClass('fa-unlock fa-lock');
  var monster = index.split('index')[0].replace('LOCK','');
  if( $("[id='" + index + "'].fa-lock").length ) {
    tableObject[monster]['lockState'] = true;
  } else {
    tableObject[monster]['lockState'] = false;
  }

}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  tableIndexCounter = 0;
  updateAPLDisplay()
}

//collapse functions
function showAdvanced() {
  $('#advanced').collapse('show')
  $('#advanced2').collapse('show')
  setTimeout(function(){//wait for DOM shit
    displayTable()
  }, 50);

}

function hideAdvanced() {
  $('#advanced').collapse('hide')
  $('#advanced2').collapse('hide')
  hideMonsterPicker()
  setTimeout(function(){//wait for DOM shit
    displayTable()
  }, 50);

}

function showMonsterPicker() {
  $('#pickerButton').text('Hide creature picker');
  $('#monsterPicker').collapse('show');
  $('#pickerButton').attr('onclick', 'hideMonsterPicker()')
}

function hideMonsterPicker() {
  $('#pickerButton').text('Show creature picker');
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

function addXP() {
  if (jQuery.isEmptyObject(tableObject)) {
    return 0;
  } else {
    xpSum = 0;
    for (creature in tableObject) {
      xpSum += tableObject[creature]['number'] * xp[tableObject[creature]['cr']];
    }
    return xpSum;
  }
}

function updateAPLDisplay() {
  var apl = calculateAPL()
  var selectedDiff = $('#DifficultyPicker').val().trim();
  var diffNum = difficulty[selectedDiff];
  var encounterCR = apl + diffNum;
  if (encounterCR == 0) {encounterCR = "1/2"}
  var xpBudget = xp[encounterCR.toString()];
  var xpUsed = addXP();

  $('#aplDisplay').html('APL: <b>' + apl.toString() + '</b>');
  $('#crDisplay').html('Encounter CR: <b>' + encounterCR.toString() + '</b>');
  $('#xpDisplay').html('XP Budget: <b id="xpBold">' + xpUsed + '/' + xpBudget + '</b>');

  if (xpUsed > xpBudget) {
    $('#xpBold').addClass('highlight-shadow');
  } else {
    $('#xpBold').removeClass('highlight-shadow');
  }
}

function dismissAlert() {
  $('.alert-this').hide()
  sessionStorage.showAlert = 'key2';
}

function searchArray(array,searchTerm) {
  foundIn = [];
  for (i = 0; i < array.length; i++) {
    if (array[i].toLowerCase().includes(searchTerm.toLowerCase())) {
      foundIn.push(array[i]);
    }
  }
  return foundIn
}

//callback for search
$('#inputSearch').on('input',function(e){
    displayMonsterPicker()
});

//runs when page is loaded
$(document).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();

  $('#PlayerPicker0').on('changed.bs.select', updateAPLDisplay);
  $('#LevelPicker0').on('changed.bs.select', updateAPLDisplay);
  $('#DifficultyPicker').on('changed.bs.select', updateAPLDisplay);

  $('#CombatTypePicker').on('changed.bs.select', displayMonsterPicker);
  $('#AlignmentPicker').on('changed.bs.select', displayMonsterPicker);
  $('#SizePicker').on('changed.bs.select', displayMonsterPicker);
  $('#CreatureTypePicker').on('changed.bs.select', displayMonsterPicker);
  $('#EnvironmentPicker').on('changed.bs.select', displayMonsterPicker);
  $('#PlanetPicker').on('changed.bs.select', displayMonsterPicker);

  if (sessionStorage.showAlert != 'key2') {
    $('.alert-this').show();
  }
});
