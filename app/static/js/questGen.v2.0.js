var indexCounter = 0;

var starshipProblems = {
  "Stowaway": "A FXCREATURE has stowed away aboard the ship, the extra mass is causing flight solution errors, players must locate the disturbance and fix the path planning",
  "System Problems": "FXSYSTEM has malfunctioned, causing safety circuits to trip all over the ship, players must fix the problem using limited resources before"
}

var starshipProblems = [
  ""
]

var starshipConsequences = [
  "life support shuts down completely"
]

// FX CREATURE FXSYSTEM

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
}

function printPanel(quest) {
  var $outputArea = $(".output.area").first();
  var storeOutput = $( "div.output.area" ).html();
  $outputArea.empty();

  indexCounter += 1;
  indexString = "index" + indexCounter.toString();

  var panelTitle =  quest;
  var panelBody =   "<p><b>" + quest + "</b>" + "</p>"

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

function generateQuest() {

  var questDrop = $('#questPicker').val().trim();

  printPanel(questDrop);

  //log event in analytics
  //ga('send', 'event', 'Generation', 'trap', cr);
}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});
