var indexCounter = 0;


//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});


function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
}

function printPanel(level,type,eac,kac,dex,acheck,speed,slots,bulk) {
  var $outputArea = $(".output.area").first();
  var storeOutput = $( "div.output.area" ).html();
  $outputArea.empty();

  indexCounter += 1;
  indexString = "index" + indexCounter.toString();

  var panelTitle =  "Level " + level;
  var panelBody =   "<h5 class=\"text-muted text-muted-one\">" + type + "</h5>" +
                    "<p><b>Price: </b>"+  //getPrice(level) +
                    "<br><b>EAC: </b>" + eac +
                    "<br><b>KAC: </b>" + kac +
                    "<br><b>Max Dex: </b>" + dex +
                    "<br><b>Armor acheck: </b>" + acheck +
                    "<br><b>Speed: </b>" + speed +
                    "<br><b>Upgrade Slots: </b>" + slots +
                    "<br><b>Bulk: </b>" + bulk + "</p>";


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

function generateArmor() {
  printPanel('1','Light Armor','3','4','3','-2','-5','2','2');
}
