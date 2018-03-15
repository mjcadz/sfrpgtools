function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
}

function showAdvanced() {
  $('#advanced').collapse('show')
}

function hideAdvanced() {
  $('#advanced').collapse('hide')
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
