//globals
var levelIndexCounter = 2;
var professions = ["Accountant","Actor","Archaeologist","Architect","Artist","Bounty Hunter","Comedian","Con Artist","Cook","Corporate Professional","Courtesan","Counselor","Dancer","Dockworker","Electrician","Farmer","Gambler","General Contractor","Herbalist","Lab Technician","Lawyer","Maintenance Worker","Manager","Mathematician","Mercenary","Merchant","Miner","Musician","Orator","Philosopher","Poet","Politician","Professor","Psychologist","Smuggler","Video Personality","Vidgamer","Writer"]

var spellGems0 = ["Spell Gem (Dancing Lights)","Spell Gem (Daze)","Spell Gem (Detect Affliction)","Spell Gem (Detect Magic)","Spell Gem (Energy Ray)","Spell Gem (Fatigue)","Spell Gem (Ghost Sound)","Spell Gem (Grave Words)","Spell Gem (Mending)","Spell Gem (Psychokinetic Hand)","Spell Gem (Stabilize)","Spell Gem (Telekinetic Projectile)","Spell Gem (Telepathic Message)","Spell Gem (Token Spell)","Spell Gem (Transfer Charge)"];
var spellGems1 = ["Spell Gem (Charm Person)","Spell Gem (Command)","Spell Gem (Comprehend Languages)","Spell Gem (Confusion (Lesser))","Spell Gem (Detect Radiation)","Spell Gem (Detect Tech)","Spell Gem (Detect Thoughts)","Spell Gem (Disguise Self)","Spell Gem (Erase)","Spell Gem (Fear (Level 1))","Spell Gem (Flight (Level 1))","Spell Gem (Grease)","Spell Gem (Hold Portal)","Spell Gem (Holographic Image (Level 1))","Spell Gem (Identify)","Spell Gem (Jolting Surge)","Spell Gem (Keen Senses)","Spell Gem (Life Bubble)","Spell Gem (Magic Missile)","Spell Gem (Mind Link)","Spell Gem (Mind Thrust (Level 1))","Spell Gem (Mystic Cure (Level 1))","Spell Gem (Overheat)","Spell Gem (Reflecting Armor)","Spell Gem (Remove Condition (Lesser))","Spell Gem (Share Language)","Spell Gem (Supercharge Weapon)","Spell Gem (Unseen Servant)","Spell Gem (Wisp Ally)"];
var spellGems2 = ["Spell Gem (Augury)","Spell Gem (Caustic Conversion)","Spell Gem (Command Undead)","Spell Gem (Darkvision)","Spell Gem (Daze Monster)","Spell Gem (Fear (Level 2))","Spell Gem (Flight (Level 2))","Spell Gem (Fog Cloud)","Spell Gem (Force Blast)","Spell Gem (Hold Person)","Spell Gem (Holographic Image (Level 2))","Spell Gem (Hurl Forcedisk)","Spell Gem (Implant Data)","Spell Gem (Inflict Pain)","Spell Gem (Inject Nanobots)","Spell Gem (Invisibility)","Spell Gem (Knock)","Spell Gem (Logic Bomb)","Spell Gem (Make Whole)","Spell Gem (Microbot Assault)","Spell Gem (Mind Thrust (Level 2))","Spell Gem (Mirror Image)","Spell Gem (Mystic Cure (Level 2))","Spell Gem (Recharge)","Spell Gem (Remove Condition)","Spell Gem (Restoration (Lesser))","Spell Gem (Security Seal)","Spell Gem (See Invisibility)","Spell Gem (Shield Other)","Spell Gem (Spider Climb)","Spell Gem (Status)","Spell Gem (Zone of Truth)"];
var spellGems3 = ["Spell Gem (Arcane Sight)","Spell Gem (Arcing Surge)","Spell Gem (Bestow Curse)","Spell Gem (Charm Monster)","Spell Gem (Clairaudience/Clairvoyance)","Spell Gem (Deep Slumber)","Spell Gem (Discharge)","Spell Gem (Dispel Magic)","Spell Gem (Displacement)","Spell Gem (Entropic Grasp)","Spell Gem (Explosive Blast)","Spell Gem (Fear (Level 3))","Spell Gem (Flight (Level 3))","Spell Gem (Handy Junkbot)","Spell Gem (Haste)","Spell Gem (Healing Junkbot)","Spell Gem (Hologram Memory)","Spell Gem (Holographic Image (Level 3))","Spell Gem (Instant Virus)","Spell Gem (Irradiate)","Spell Gem (Mind Thrust (Level 3))","Spell Gem (Mystic Cure (Level 3))","Spell Gem (Nondetection)","Spell Gem (Probability Prediction)","Spell Gem (Psychokinetic Strangulation)","Spell Gem (Ray of Exhaustion)","Spell Gem (Remove","Affliction)","Spell Gem (Resistant Armor (Lesser))","Spell Gem (Slow)","Spell Gem (Speak with Dead)","Spell Gem (Suggestion)","Spell Gem (Synaptic Pulse)","Spell Gem (Tongues)"];
var spellGems4 = ["Spell Gem (Animate Dead)","Spell Gem (Arcane Eye)","Spell Gem (Confusion)","Spell Gem (Corrosive Haze)","Spell Gem (Cosmic Eddy)","Spell Gem (Creation (Level 4))","Spell Gem (Death Ward)","Spell Gem (Destruction Protocol)","Spell Gem (Dimension Door)","Spell Gem (Discern Lies)","Spell Gem (Dismissal (Level 4))","Spell Gem (Divination)","Spell Gem (Enervation)","Spell Gem (Fear (Level 4))","Spell Gem (Flight (Level 4))","Spell Gem (Hold Monster)","Spell Gem (Holographic Image (Level 4))","Spell Gem (Invisibility (Greater))","Spell Gem (Mind Probe)","Spell Gem (Mind Thrust (Level 4))","Spell Gem (Mystic Cure (Level 4))","Spell Gem (Overload Systems)","Spell Gem (Planar Binding (Level 4))","Spell Gem (Reincarnate)","Spell Gem (Remove Radioactivity)","Spell Gem (Resilient Sphere)","Spell Gem (Resistant Armor)","Spell Gem (Restoration)","Spell Gem (Rewire Flesh)","Spell Gem (Soothing Protocol)","Spell Gem (Telepathic Bond)","Spell Gem (Wall of Fire)"];
var spellGems5 = ["Spell Gem (Break Enchantment)","Spell Gem (Call Cosmos)","Spell Gem (Command (Greater))","Spell Gem (Commune with Nature)","Spell Gem (Contact Other Plane)","Spell Gem (Control Machines)","Spell Gem (Creation (Level 5))","Spell Gem (Crush Skull)","Spell Gem (Dismissal (Level 5))","Spell Gem (Dispel Magic (Greater))","Spell Gem (Dominate Person)","Spell Gem (Feeblemind)","Spell Gem (Flight (Level 5))","Spell Gem (Heat Leech)","Spell Gem (Holographic Image (Level 5))","Spell Gem (Holographic Terrain)","Spell Gem (Mind Thrust (Level 5))","Spell Gem (Modify Memory)","Spell Gem (Mislead)","Spell Gem (Mystic Cure (Level 5))","Spell Gem (Mystic Cure (Mass)(Level 5))","Spell Gem (Passwall)","Spell Gem (Planar Binding (Level 5))","Spell Gem (Private Sanctum)","Spell Gem (Prying Eyes)","Spell Gem (Raise Dead)","Spell Gem (Rapid Repair)","Spell Gem (Remove Condition (Greater))","Spell Gem (Resistant Aegis)","Spell Gem (Retrocognition)","Spell Gem (Synapse Overload)","Spell Gem (Synaptic Pulse (Greater))","Spell Gem (Telekinesis)","Spell Gem (Telepathy)","Spell Gem (Teleport)","Spell Gem (Unwilling Guardian)","Spell Gem (Wall of Force)","Spell Gem (Waves of Fatigue)"];
var spellGems6 = ["Spell Gem (Battle Junkbot)","Spell Gem (Chain Surge)","Spell Gem (Control Gravity)","Spell Gem (Control Undead)","Spell Gem (Discharge (Greater))","Spell Gem (Disintegrate)","Spell Gem (Enshrining Refuge)","Spell Gem (Ethereal Jaunt)","Spell Gem (Flesh to Stone)","Spell Gem (Flight (Level 6))","Spell Gem (Gravitational Singularity)","Spell Gem (Holographic Image (Level 6))","Spell Gem (Inflict Pain (Mass))","Spell Gem (Interplanetary Teleport)","Spell Gem (Invisibility (Mass))","Spell Gem (Mind Thrust (Level 6))","Spell Gem (Mystic Cure (Level 6))","Spell Gem (Mystic Cure (Mass)(Level 6))","Spell Gem (Planar Barrier)","Spell Gem (Planar Binding (Level 6))","Spell Gem (Plane Shift)","Spell Gem (Psychic Surgery)","Spell Gem (Regenerate)","Spell Gem (Resistant Armor (Greater))","Spell Gem (Rewire Flesh (Mass))","Spell Gem (Shadow Walk)","Spell Gem (Shadowy Fleet)","Spell Gem (Snuff Life)","Spell Gem (Subjective Reality)","Spell Gem (Suggestion (Mass))","Spell Gem (Sympathetic Vibration)","Spell Gem (Telepathic Jaunt)","Spell Gem (Terraform)","Spell Gem (True Seeing)","Spell Gem (Veil)","Spell Gem (Vision)","Spell Gem (Wall of Steel)"];

var spellAmpoule0 = ["Spell Ampoule (Stabilize)"];
var spellAmpoule1 = ["Spell Ampoule (Flight (Level 1))","Spell Ampoule (Keen Senses)","Spell Ampoule (Life Bubble)","Spell Ampoule (Mystic Cure (Level 1))","Spell Ampoule (Remove Condition (Lesser))"];
var spellAmpoule2 = ["Spell Ampoule (Darkvision)","Spell Ampoule (Flight (Level 2))","Spell Ampoule (Invisibility)","Spell Ampoule (Mystic Cure (Level 2))","Spell Ampoule (Remove Condition)","Spell Ampoule (Restoration (Lesser))","Spell Ampoule (Spider Climb)"];
var spellAmpoule3 = ["Spell Ampoule (Displacement)","Spell Ampoule (Flight (Level 3))","Spell Ampoule (Haste)","Spell Ampoule (Mystic Cure (Level 3))","Spell Ampoule (Nondetection)","Spell Ampoule (Remove Affliction)"];

var fusionSeal = {
  "1": 120,
  "2": 360,
  "3": 440,
  "4": 680,
  "5": 720,
  "6": 1040,
  "7": 1560,
  "8": 2300,
  "9": 2600,
  "10": 3580,
  "11": 4880,
  "12": 6920,
  "13": 9760,
  "14": 11700,
  "15": 17800,
  "16": 27000,
  "17": 40500,
  "18": 60300,
  "19": 90000,
  "20": 135000
};

String.prototype.toTitleCase = function() {
  return this.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

//adds a item group to the page. affects APL
function addGroup() {
  //append dropdown html

  $(".groupDisplay").append('<div class="group' + levelIndexCounter.toString() + '"><hr style="margin-top: 8px;"><label><b>Item Group ' + levelIndexCounter.toString() + '</b></label><div class="ItemGroupDropdown' + levelIndexCounter.toString() + '"></div><div class="row"><div class="col-xs-6"><label>Min Level</label><select class="selectpicker show-tick" id="MinPicker' + levelIndexCounter.toString() + '" data-style="btn-default" data-width="100%" data-size="5"><option selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option></select></div><div class="col-xs-6"><label>Max Level</label><select class="selectpicker show-tick" id="MaxPicker' + levelIndexCounter.toString() + '" data-style="btn-default" data-width="100%" data-size="5"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option selected>20</option></select></div></div><label>Max Items From Group</label><select class="selectpicker show-tick" id="MaxNumPicker' + levelIndexCounter.toString() + '" data-style="btn-default" data-width="100%" data-size="6"><option>5</option><option selected>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>20</option></select></div>')
  //initialise dropdowns
  generateCategoryDropdowns()
  $('#MaxPicker' + levelIndexCounter.toString()).selectpicker();
  $('#MinPicker' + levelIndexCounter.toString()).selectpicker();
  $('#MaxNumPicker' + levelIndexCounter.toString()).selectpicker();

  levelIndexCounter += 1
}

//takes a group from the page
function removeGroup() {
  levelIndexCounter -= 1
  if (levelIndexCounter < 2) {
    levelIndexCounter = 2;
  }
  $('.group' + levelIndexCounter.toString() ).last().remove();
  generateCategoryDropdowns()
}

function clearOutput() {
  var $inventoryArea = $(".inventory.area").first();
  $inventoryArea.empty();
}

function generateInventory() {

  var sourcebooks = $('#sourceDrop').val();

  if (sourcebooks.length == 0){
    var $outputArea = $(".inventory.area").first();
    $outputArea.empty();
    $outputArea.append('<p class="text-center">No sources selected</p>');
    return
  }

  //replace book names with shortened name
  sourcebooks = sourcebooks.map(function(x){ return x.replace("Core Rulebook","crb") });
  sourcebooks = sourcebooks.map(function(x){ return x.replace("Alien Archive","aa") });
  sourcebooks = sourcebooks.map(function(x){ return x.replace("Pact Worlds","pw") });

  inventory = {}

  $("[class^='ItemGroupDropdown']").each(function() {

    var dropClass = $(this).attr('class');
    var num = dropClass.replace('ItemGroupDropdown','');

    var groups = $("#groupPicker" + num ).val()
    var min = Number($("#MinPicker" + num ).val())
    var max = Number($("#MaxPicker" + num ).val())
    var maxNum = Number($("#MaxNumPicker" + num ).val())

    inventory = rollInventory(inventory,groups,min,max,maxNum,sourcebooks)

  });

  if (jQuery.isEmptyObject(inventory)){
    var $outputArea = $(".inventory.area").first();
    $outputArea.empty();
    $outputArea.append('<p class="text-center">No categories selected</p>');
    return
  }

  inventoryTable(inventory)

}

function rollInventory(inventory,categories,minLevel,maxLevel,maxItems,sourcebooks) {

  //get equipment from categories
  var types = categories

  var equipment = []
  for (var i = 0;i<types.length;i++){
    for (item in equipmentData[types[i]]) {
      //check sources
      source = equipmentData[types[i]][item]['sourcebook']
      if (sourcebooks.includes(source)) {
        var currentItem = []
        currentItem[0] = item.toTitleCase().replace("Iii","III").replace("Ii","II").replace("Iv","IV").replace("Viii","VIII").replace("Vii","VII").replace("Vi","VI").replace("Fxprofession",randomChoice(professions));//name
        currentItem[5] = types[i] //group
        if (["Computer Countermeasures","Computer Modules","Computer Upgrades"].includes(types[i])){

          currentItem[3] = " ";//bulk
          currentItem[1] = "1"//level
          currentItem[4] = 'CRB ' + equipmentData[types[i]][item]['sourcepage'];//sourcepage
        } else {
          currentItem[1] = equipmentData[types[i]][item]['level']//level
          currentItem[4] = equipmentData[types[i]][item]['sourcebook'].toUpperCase() + ' ' + equipmentData[types[i]][item]['sourcepage'];//sourcepage
          if (["Augmentations","Computers"].includes(types[i])){
            currentItem[3] = " ";//bulk
          } else {
            currentItem[3] = equipmentData[types[i]][item]['bulk'];//bulk
          }
        }
        if (types[i].includes("Fusion Seal")){
          currentItem[0] = currentItem[0].replace('Fusion Seal - ','')
          currentItem[2] = fusionSeal[currentItem[1]].toString();//fusion seal cost
          currentItem[5] = "Fusions"
        } else {
          currentItem[2] = equipmentData[types[i]][item]['cost'];//cost
        }
        //sub in spell names and add extra
        if (currentItem[0].includes("Spell Ampoule")){
          var copy1 = currentItem.slice(0);
          var copy2 = currentItem.slice(0);
          currentItem[0] = currentItem[0].replace("Spell Ampoule (Level 0)",randomChoice(spellAmpoule0)).replace("Spell Ampoule (Level 1)",randomChoice(spellAmpoule1)).replace("Spell Ampoule (Level 2)",randomChoice(spellAmpoule2)).replace("Spell Ampoule (Level 3)",randomChoice(spellAmpoule3));
          copy1[0] = copy1[0].replace("Spell Ampoule (Level 0)",randomChoice(spellAmpoule0)).replace("Spell Ampoule (Level 1)",randomChoice(spellAmpoule1)).replace("Spell Ampoule (Level 2)",randomChoice(spellAmpoule2)).replace("Spell Ampoule (Level 3)",randomChoice(spellAmpoule3));
          copy2[0] = copy2[0].replace("Spell Ampoule (Level 0)",randomChoice(spellAmpoule0)).replace("Spell Ampoule (Level 1)",randomChoice(spellAmpoule1)).replace("Spell Ampoule (Level 2)",randomChoice(spellAmpoule2)).replace("Spell Ampoule (Level 3)",randomChoice(spellAmpoule3));
          equipment.push(copy1);
          equipment.push(copy2);
        }
        if (currentItem[0].includes("Spell Gem")){
          var copy1 = currentItem.slice(0);
          var copy2 = currentItem.slice(0);
          currentItem[0] = currentItem[0].replace("Spell Gem (Level 0)",randomChoice(spellGems0)).replace("Spell Gem (Level 1)",randomChoice(spellGems1)).replace("Spell Gem (Level 2)",randomChoice(spellGems2)).replace("Spell Gem (Level 3)",randomChoice(spellGems3)).replace("Spell Gem (Level 4)",randomChoice(spellGems4)).replace("Spell Gem (Level 5)",randomChoice(spellGems5)).replace("Spell Gem (Level 6)",randomChoice(spellGems6));
          copy1[0] = copy1[0].replace("Spell Gem (Level 0)",randomChoice(spellGems0)).replace("Spell Gem (Level 1)",randomChoice(spellGems1)).replace("Spell Gem (Level 2)",randomChoice(spellGems2)).replace("Spell Gem (Level 3)",randomChoice(spellGems3)).replace("Spell Gem (Level 4)",randomChoice(spellGems4)).replace("Spell Gem (Level 5)",randomChoice(spellGems5)).replace("Spell Gem (Level 6)",randomChoice(spellGems6));
          copy2[0] = copy2[0].replace("Spell Gem (Level 0)",randomChoice(spellGems0)).replace("Spell Gem (Level 1)",randomChoice(spellGems1)).replace("Spell Gem (Level 2)",randomChoice(spellGems2)).replace("Spell Gem (Level 3)",randomChoice(spellGems3)).replace("Spell Gem (Level 4)",randomChoice(spellGems4)).replace("Spell Gem (Level 5)",randomChoice(spellGems5)).replace("Spell Gem (Level 6)",randomChoice(spellGems6));
          equipment.push(copy1);
          equipment.push(copy2);
        }

        equipment.push(currentItem);
      }
    }
  }
  //keep only appropriate level items
  var equipmentLeveled = []

  for (var i = 0; i < equipment.length; i++){
    if (Number(equipment[i][1]) <= maxLevel && Number(equipment[i][1]) >= minLevel) {
      equipmentLeveled.push(equipment[i])
    }
  }

  //get randomised inventory
  var total = 0;
  var itemsPresent = [];

  if (equipmentLeveled.length < maxItems) {
    maxItems = equipmentLeveled.length;
  }

  while (total < maxItems) {

    var selected = equipmentLeveled.selectRandom();

    if (inventory.hasOwnProperty(selected[5])){
      if (itemsPresent.includes(selected[0])) {
        total -= 1;
      } else {
        inventory[selected[5]].push(selected);
        itemsPresent.push(selected[0])
      }
    } else {
      inventory[selected[5]] = [];
      inventory[selected[5]].push(selected);
      itemsPresent.push(selected[0])
    }
    total += 1;
  }

  return inventory;

}

function inventoryTable(itemObject) {
  var $inventoryArea = $(".inventory.area").first();
  $inventoryArea.empty();
  var stripe = false;
  //PRESENT INVENTORY AS table
  firstTitle = Object.keys(itemObject)[0];
  var table = "<div class=\"container table-responsive\"><table class=\"table\"><thead><tr><th>" + firstTitle + "</th><th>Level</th><th>Cost</th><th>Bulk</th><th>Sourcepage</th></tr></thead><tbody>";

  for (itemGroup in itemObject) {
    if (itemGroup != firstTitle){
      //stripe table
      if (stripe) {
        var stripeClass = ' class="success"';
      } else {
        var stripeClass = '';
      }
      stripe = !stripe
      table += '<th colspan="5" scope="colgroup"' + stripeClass + '>' + itemGroup + '</th>'
    }

    for (var i = 0; i < itemObject[itemGroup].length; i++){
      //stripe table
      if (stripe) {
        var stripeClass = ' class="success"';
      } else {
        var stripeClass = '';
      }
      stripe = !stripe
      table += "<tr" + stripeClass + "><td>"+itemObject[itemGroup][i][0]+"</td><td>"+itemObject[itemGroup][i][1]+"</td><td>"+itemObject[itemGroup][i][2]+"</td><td>"+itemObject[itemGroup][i][3]+"</td><td>"+itemObject[itemGroup][i][4]+"</td></tr>";
    }
  }

  table += "</tbody></table></div>";

  var nameString = $('#inputName').val().trim();

  if (nameString != ''){
    table = '<h3 style="color: #666666;" class="text-center">' + nameString + '</h3>' + table
  }

  $inventoryArea.append(table)
}

function generateCategoryDropdowns() {
  //add select options
  var categoryKeys = Object.keys(equipmentData);
  categoryKeys.sort()
  var selectedKeys = [];

  var j = 0;

  $("[id^='groupPicker']").each(function() {
    selectedKeys[j] = $(this).val()
    j += 1;
  });

  //remove all selected cats
  var allSelected = []
  for (i = 0; i < selectedKeys.length; i++) {
    allSelected = allSelected.concat(selectedKeys[i])
  }

  categoryKeys = categoryKeys.filter( function( el ) {
    return !allSelected.includes( el );
  });

  j = 0;

  $("[class^='ItemGroupDropdown']").each(function() {

    var dropClass = $(this).attr('class');
    var num = dropClass.replace('ItemGroupDropdown','');

    //add slected cats
    if (selectedKeys.length > j){
      categoryKeys = categoryKeys.concat(selectedKeys[j])
      categoryKeys.sort()
    }

    var dropHtml = "";
    var selected = "";
    dropHtml += '<select class="selectpicker show-tick" id="groupPicker' + num + '" multiple data-style="btn-default" data-width="100%" data-size="10" data-title="Item categories" data-selected-text-format="static">'
    for (i = 0; i < categoryKeys.length; i++) {
      //console.log(selectedKeys)
      if (selectedKeys.length > j) {
        //console.log(selectedKeys[j])
        if (selectedKeys[j].includes(categoryKeys[i])) {
          selected = ' selected';
        } else {
          selected = '';
        }
      }
      dropHtml += '<option' + selected + ' title="Item categories">' + categoryKeys[i] + '</option>';
    }
    dropHtml += '</select>';

    //remove previously selected cats
    if (selectedKeys.length > j) {
      categoryKeys = categoryKeys.filter( function( el ) {
        return !selectedKeys[j].includes( el );
      });
    }

    var $dropArea = $("." + dropClass).first();
    $dropArea.empty();
    $dropArea.append(dropHtml)

    $('#groupPicker' + num).selectpicker();
    $('#groupPicker' + num).on('hidden.bs.select', generateCategoryDropdowns);

    j += 1;

  });
}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  //$('.selectpicker').selectpicker();
  generateCategoryDropdowns()
});
