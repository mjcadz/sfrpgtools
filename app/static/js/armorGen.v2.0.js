
var indexCounter = 0;

var basePrice = [260,625,1415,2195,3230,4425,6350,9175,13300,17950,24400,35300,49600,72400,109750,170350,243850,370000,557450,832900];

var priceVariance = {
  "0.7":[-0.6,-0.4,-0.2,0,0.2,0.4,0.6,0.8],
  "0.2":[-0.2,-0.15,-0.1,-0.05,0,0.05,0.1,0.15,0.2],
  "0.15":[-0.15,-0.12,-0.1,-0.05,0,0.05,0.1,0.12,0.15],
  "0.1":[-0.1,-0.08,-0.06,-0.04,-0.02,0,0.02,0.04,0.06,0.08,0.1]
};

function getPrice(level) {
  var price;
  var variance;
  var rounding;
  var finish;
  var base = basePrice[level - 1];
  if (level == 1){
    variance = priceVariance["0.7"].selectRandom() * base;
    rounding = 10;
    finish = [0,5,-5].selectRandom();
  }
  else if (level == 2) {
    variance = priceVariance["0.2"].selectRandom() * base;
    rounding = 10;
    finish = [0,5,-5].selectRandom();
  }
  else if (level >= 3 && level <= 6) {
    variance = priceVariance["0.15"].selectRandom() * base;
    rounding = 100;
    finish = [0,50,-50].selectRandom();
  }
  else if (level >= 7 && level <= 19) {
    variance = priceVariance["0.1"].selectRandom() * base;
    rounding = 100;
    finish = [0,100,-100].selectRandom();
  }
  else if (level == 20) {
    variance = priceVariance["0.2"].selectRandom() * base;
    rounding = 100;
    finish = [0,100,-100].selectRandom();
  }
  price = (Math.floor((base + variance)/rounding)*rounding) + finish
  return price;
}


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
                    "<p><b>Price: </b>"+  getPrice(level) +
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

  var level;
  var eac,kac,acheck,speed,bulk;

  var levelDrop = $('#levelPicker').val().trim();
  var armorDrop = $('#armorPicker').val().trim();

  //level
  if (levelDrop.includes("Any")) {
    level = getRandomInt(1, 20);
  } else if (levelDrop.includes("Tier")){
    tier = parseInt(levelDrop.replace("Tier ", ""));
    level = ((tier - 1) * 4 ) +getRandomInt(1, 4);
  } else if (levelDrop.includes("Level")){
    level = parseInt(levelDrop.replace("Level ", ""));
  } else {
    level = NaN;
    console.log('error getting level');
  }



  //TODO make weighted random selection
  if (level < 3) {
    eac = level + [-1,0].selectRandom();
  } else if (level < 6) {
    eac = level + [-2,-1,0,1].selectRandom();
  } else if (level < 11) {
    eac = level + [-1,0,1].selectRandom();
  } else {
    eac = level + [-1,0,1,2,3].selectRandom();
  }


  if (level < 4) {
    kac = eac + [1,2].selectRandom();
  } else if (level < 6) {
    kac = eac + [1].selectRandom();
  } else {
    kac = eac + [0,1,2].selectRandom();
  }

  acheck = ['-','-','-','-1'].selectRandom();
  speed = '-';
  bulk = ['L','L','1'].selectRandom();

  printPanel(level,'Light Armor',eac,kac,'3',acheck,speed,'2',bulk);
  //printPanel(level,type,eac,kac,dex,acheck,speed,slots,bulk)
}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});
