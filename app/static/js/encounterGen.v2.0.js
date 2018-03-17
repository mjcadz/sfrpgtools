//globals
var tableIndexCounter = 0;

function generateEncounter() {

  //var filter = { size: ["large"], organization:["pair"]};
  var filter = buildFilter();
  var filteredMonsters = filterObject(monsterData,filter)

  //var creature = randomProperty (filteredMonsters);
  displayTable(filteredMonsters);


}

function buildFilter(){

  var filter = {};

  var combatType = $('#CombatTypePicker').val().toString().toLowerCase().trim();
  var size = $('#SizePicker').val().toString().toLowerCase().trim();
  var type = $('#CreatureTypePicker').val().toString().toLowerCase().trim();

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

  console.log(filter)
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

function displayTable(obj) {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();

  var lockArray = []
  var tableHTML = '<table class="table table-striped"><thead><tr><th>Lock</th><th>Creature</th><th>CR</th><th>Type</th><th>Sourcepage</th></tr></thead><tbody>';
  for (creature in obj) {

    var index = 'index' + tableIndexCounter.toString();
    lockArray.push(index);
    lockToggle = '<i style="padding-left: 5px;" id="'+index+'" class="toggleLock fas fa-lg fa-unlock"></i>';
    tableHTML += '<tr><td>' + lockToggle + '</td><td>' + creature + '</td><td>' + obj[creature].cr + '</td><td>' + obj[creature].type + '</td><td>' + obj[creature].source + ' p.' + obj[creature].page + '</td></tr>';
    tableIndexCounter += 1;
  }
  tableHTML += '</tbody></table>';

  $outputArea.append(tableHTML);

  //make locks clickable
  for (i = 0; i < lockArray.length; i++) {


  }
  $('#' + lockArray[0]).click(function() {
    $('#' + lockArray[0]).toggleClass('fa-unlock fa-lock');
  });
}

//returns random property from an object
function randomProperty (obj) {
    var keys = Object.keys(obj);
    var key = keys[ keys.length * Math.random() << 0];
    var returnObject = obj[key];
    //add name key as a property
    returnObject.name = key;
    return returnObject;
}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
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

//runs when page is loaded
$( document ).ready(function() {


  //initialise pickers
  $('.selectpicker').selectpicker();
});
