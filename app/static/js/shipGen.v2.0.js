//Handle the clicks from dropdowns - function is divided by dropdown id. each dropdown will only execute the code for its own id
function dropClickHandler(e, clickedIndex, newValue, oldValue) {
    //get the item that wa selected on the dropdown click + the dropdowns id
    var selected = $(e.currentTarget).val();
    var id = $(e.currentTarget).attr('id');

    if (id=='frameDrop') {

    }
}

//creates bootstrap-select dropdowns from arrays
function generateDropdown(parentID,label,dropID,title,array) {
  //add select options
  var dropHtml = "";
  if (label != "") {
    dropHtml += '<label>' + label + '</label>'
  }
  dropHtml += '<select class="selectpicker show-tick" id="'+ dropID +'" title="'+title+'" data-style="btn-default" data-width="100%" data-size="10">'
  //build list, apply BREAKS or LABELS if words present in array
  for (i = 0; i < array.length; i++) {
    if (array[i] == 'BREAK'){
      dropHtml += '<option data-divider="true"></option>';
    } else if (array[i].includes('LABEL=')) {
      dropHtml += '<optgroup label="' + array[i].replace('LABEL=','') + '">';
    } else if (array[i].includes('ENDLABEL')) {
      dropHtml += '</optgroup>';
    }
    else {
      dropHtml += '<option>' + array[i] + '</option>';
    }
  }
  dropHtml += '</select>';
  //add to parent div
  document.getElementById(parentID).innerHTML = dropHtml;
  //initialise dropdown
  $('#'+dropID).selectpicker();
  //bind dropdown click  handler
  $('#'+dropID).on('changed.bs.select', dropClickHandler);
}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  $('.btn-edit').hide();
  $('.btn-image').hide();
  $('.btn-print').hide();
}

function generateShip() {

  $('.btn-edit').show();
  $('.btn-image').show();
  $('.btn-print').show();

  var shipBlock = {};

  var tier = $('#tierPicker').val().trim().replace('Tier ','').replace('Any tier',Object.keys(shipTiers).selectRandom());
  var frame = $('#framePicker').val().trim().replace('Any frame',Object.keys(shipFrames).selectRandom())

  shipBlock.tier = tier
  shipBlock.frame = frame

  var buildPoints = shipTiers[tier].SBP;

  //FRAME

  frameObj = shipFrames[frame]

  buildPoints -= frameObj.cost.BP
  shipBlock.size = shipSizes[frameObj.size]
  shipBlock.maneuverability = frameObj.maneuverability
  //values
  for (value in frameObj.value) {
    shipBlock[value] = frameObj.value[value];
  }

  //CORE

  shipBlock.core = getCores(frameObj.size).selectRandom()
  buildPoints -= shipPowerCores[shipBlock.core].cost.BP
  shipBlock.PCU = shipPowerCores[shipBlock.core].value.PCU
  //console.log(shipBlock.core)
  //console.log(shipBlock.PCU)

  //SPEED

  shipBlock.speed = 8;

  //HP increase
  for (var i = 0; i < shipTiers[tier].hpIncrease; i++) {
    shipBlock.HP += shipBlock.HPIncrement
  }

  displayShipBlock(shipBlock)

}

//return the cores for a particular ship size. integer
function getCores(size) {
  var cores = []
  for (core in shipPowerCores) {
    if (size <= shipPowerCores[core].maxSize && size >= shipPowerCores[core].minSize) {
      cores.push(core)
    }
  }
  return cores
}

function displayShipBlock(shipBlock) {
    //
    //Ship Block
    //

    textBlock = "";
    //description
    textBlock += '<hr>';
    textBlock += leftAndRight('<b>' + "Name" + '</b>','<b>TIER '+ shipBlock.tier +'</b>');
    textBlock += '<hr>';
    textBlock += "<div>" + shipBlock.size + " " + shipBlock.frame.toLowerCase() + "</div>";
    textBlock += "<div>" + "<b>Speed</b> " + shipBlock.speed + "; " + "<b>Maneuverability</b> average (2 turn); " + "<b>Drift</b> 2" + "</div>";
    textBlock += "<div>" + "<b>AC</b> 22; " + "<b>TL</b> 22" + "</div>";
    textBlock += "<div>" + "<b>HP </b>" + shipBlock.HP + "; " + "<b>DT</b> " + shipBlock.DT + "; <b>CT</b> " + shipBlock.CT + "</div>";
    textBlock += "<div>" + "<b>Shields</b> X; " + "</div>";
    textBlock += "<div>" + "<b>Attack (Forward)</b> X; " + "</div>";
    textBlock += "<div>" + "<b>Systems</b> X; " + "</div>";
    textBlock += "<div>" + "<b>Modifiers</b> X; " + "</div>";
    textBlock += "<div><b>CREW</b></div>";
    textBlock += '<hr>';
    textBlock += "<div>" + "<b>Captain</b> X; " + "</div>";

    //statBlock.CreatureType
    var $StatBlock = $(".summernoteEdit").first();
    $StatBlock.empty();
    $StatBlock.append(textBlock);
}

//returns a string div with right aligned and left alignedtext on the same line
function leftAndRight(left,right){
  return '<div class="row"><div class="col-xs-8"><div>' + left + '</div></div><div class="col-xs-4"><div class="text-right">' + right + '</div></div></div>'
}

//show the summernote edit box wrapped around the statblock text
function editBlock() {
  $('.btn-save').show();
  $('.btn-edit').hide();
  $('.btn-image').hide();
  $('.btn-print').hide();
  $('#overEdit').css({'margin-left': '0em', 'margin-right': '0em'});
  $('.summernoteEdit').summernote({
    focus: true,
    toolbar: [
      // [groupName, [list of button]]
      ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'clear', 'color']],
      ['fontsize', ['fontsize']],
      ['insert', ['link','hr','picture']],
      ['misc', ['fullscreen','codeview',]],
    ],
    print: {
        'stylesheetUrl': 'static/css/print.css'
    }
  });
};

//remove the edit box and show straight html
function saveBlock() {
  $('.btn-save').hide();
  $('.btn-edit').show();
  $('.btn-image').show();
  $('.btn-print').show();
  $('#overEdit').css({'margin-left': '4.5em', 'margin-right': '1em'});
  var markup = $('.summernoteEdit').summernote('code');
  $('.summernoteEdit').summernote('destroy');
};

//generate image from statblock so user can save
function blockToImage() {
  html2canvas(document.querySelector("#capture")).then(canvas => {

    canvas.toBlob(function(blob) {
    	saveAs(blob, "statblock.png");
    });
  });
};

//print the statblock
function printBlock() {
    window.print();
};

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
  $('.btn-save').hide();
  $('.btn-edit').hide();
  $('.btn-image').hide();
  $('.btn-print').hide();
});
