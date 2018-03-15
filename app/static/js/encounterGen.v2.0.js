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

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});
