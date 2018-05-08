
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
  var weapons = $('#weaponPicker').val().trim().replace(" armed","").replace('Any armament',["Not","Lightly","Heavily"].selectRandom())

  console.log(weapons)

  shipBlock.tier = tier
  shipBlock.frame = frame

  var buildPoints;
  var powerCoreUnits;

  buildPoints = shipTiers[tier].SBP;

  //FRAME

  frameObj = shipFrames[frame]

  shipBlock.size = shipSizes[frameObj.size]
  shipBlock.maneuverability = frameObj.maneuverability
  //frame values
  for (value in frameObj.value) {
    shipBlock[value] = frameObj.value[value];
  }
  buildPoints -= frameObj.cost.BP

  //HP INCREASE
  for (var i = 0; i < shipTiers[tier].hpIncrease; i++) {
    shipBlock.HP += shipBlock.HPIncrement
  }

  //POWER CORE

  shipBlock.core = getCores(frameObj.size).selectRandom()
  shipBlock.PCU = shipPowerCores[shipBlock.core].value.PCU

  buildPoints -= shipPowerCores[shipBlock.core].cost.BP
  powerCoreUnits = shipBlock.PCU

  //THRUSTERS
  shipBlock.thrusters = getThrusters(frameObj.size).selectRandom();
  var thrusterObj = shipThrusters[shipBlock.thrusters]

  shipBlock.speed = thrusterObj.value.hexSpeed;
  shipBlock.piloting += thrusterObj.value.piloting;

  buildPoints -= thrusterObj.cost.BP
  powerCoreUnits -= thrusterObj.cost.PCU

  console.log(buildPoints)
  console.log(powerCoreUnits)

  //WEAPONS
  mounts = frameObj.mounts
  mountKeys = Object.keys(mounts)

  if (weapons.includes("Lightly")) {
    mountList = shuffle(["ForwardArc","Turret"]);
  } else if (weapons.includes("Heavily")) {
    mountList = shuffle(["ForwardArc","Turret","PortArc","StarboardArc","AftArc"]);
  } else if (weapons.includes("Not")) {
    mountList = [];
  } else {
    console.log("error")
  }

  shipBlock.mounts = {};
  shipBlock.mounts.Turret = [];
  shipBlock.mounts.ForwardArc = [];
  shipBlock.mounts.AftArc = [];
  shipBlock.mounts.PortArc = [];
  shipBlock.mounts.StarboardArc = [];

  for (var i = 0; i < mountList.length; i++) {
    if (mountKeys.includes(mountList[i])) {

      for (weaponClass in mounts[mountList[i]]) {
        //check if theres enough BP
        if (buildPoints > 0) {

          var weaponNum = mounts[mountList[i]][weaponClass];
          var randWeapons = getRandomInt(1, weaponNum);

          for (var j = 0; j < randWeapons; j++) {
            var weapon = getWeapons(weaponClass.capitalise(),buildPoints).selectRandom()
            shipBlock.mounts[mountList[i]].push(weapon + " (" + shipWeapons[weapon].damage + ")" )
            buildPoints -= shipWeapons[weapon].cost.BP
          }
        }
      }
    }
  }

  //ESSENTIAL SYSTEMS
  var essentialSystems = ["shipArmor","shipComputers","shipDefenses","shipShields","Weapons"]

  //OTHER SYSTEMS
  var otherSystems = ["shipQuarters","shipDriftEngines","shipExpansionBays","shipSecurity","shipSensors"]


  //PRINT
  displayShipBlock(shipBlock)

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

    if (shipBlock.mounts.ForwardArc.length > 0) {
      textBlock += "<div>" + "<b>Attack (Forward)</b> " + shipBlock.mounts.ForwardArc.join(', ') + "</div>";
    }
    if (shipBlock.mounts.PortArc.length > 0) {
      textBlock += "<div>" + "<b>Attack (Port)</b> " + shipBlock.mounts.PortArc.join(', ') + "</div>";
    }
    if (shipBlock.mounts.StarboardArc.length > 0) {
      textBlock += "<div>" + "<b>Attack (Starboard)</b> " + shipBlock.mounts.StarboardArc.join(', ') + "</div>";
    }
    if (shipBlock.mounts.AftArc.length > 0) {
      textBlock += "<div>" + "<b>Attack (Aft)</b> " + shipBlock.mounts.AftArc.join(', ') + "</div>";
    }
    if (shipBlock.mounts.Turret.length > 0) {
      textBlock += "<div>" + "<b>Attack (Turret)</b> " + shipBlock.mounts.Turret.join(', ') + "</div>";
    }

    textBlock += "<div>" + "<b>Power Core</b> " + shipBlock.core + " (" + shipBlock.PCU + " PCU); <b>Drift Engine</b> </div>";
    textBlock += "<div>" + "<b>Systems</b> X; " + "</div>";
    textBlock += "<div>" + "<b>Modifiers</b> X; " + "</div>";
    textBlock += "<div><b>CREW</b></div>";
    textBlock += '<hr>';
    textBlock += "<div>" + "<b>Captain</b> X; " + "</div>";

    var $StatBlock = $(".summernoteEdit").first();
    $StatBlock.empty();
    $StatBlock.append(textBlock);
}

//returns a string div with right aligned and left alignedtext on the same line
function leftAndRight(left,right){
  return '<div class="row"><div class="col-xs-8"><div>' + left + '</div></div><div class="col-xs-4"><div class="text-right">' + right + '</div></div></div>'
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

//return available thrusters
function getThrusters(size) {
  var thrusters = []
  for (thruster in shipThrusters) {
    if (size == shipThrusters[thruster].size) {
      thrusters.push(thruster)
    }
  }
  return thrusters
}

function getWeapons(weaponClass,buildPoints) {
  var weapons = []
  for (weapon in shipWeapons) {
    if (weaponClass == shipWeapons[weapon].class && shipWeapons[weapon].cost.BP <= buildPoints) {
      weapons.push(weapon)
    }
  }
  return weapons
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

//returns a shuffled array
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

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
  $('.btn-save').hide();
  $('.btn-edit').hide();
  $('.btn-image').hide();
  $('.btn-print').hide();
});
