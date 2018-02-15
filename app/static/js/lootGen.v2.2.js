

var limitedGroups = ["Solarion Weapon Crystals", "Heavy Weapons", "Advanced Melee Weapons", "Light Armor", "Longarms", "Basic Melee Weapons", "Heavy Armor", "Sniper Weapons", "Small Arms", "Special Weapons", "Grenades"];
var moreGroups = ["Spell Ampoules","Spell Gems","Healing Serum"];
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

var crWealth = {
  "1/3": 150,
  "1/2": 230,
  "1": 460,
  "2": 775,
  "3": 1100,
  "4": 1400,
  "5": 3100,
  "6": 3900,
  "7": 4600,
  "8": 5400,
  "9": 10000,
  "10": 14700,
  "11": 25000,
  "12": 34000,
  "13": 50000,
  "14": 77000,
  "15": 113000,
  "16": 178000,
  "17": 260000,
  "18": 405000,
  "19": 555000,
  "20": 782000
};

var fusionSeal = {
  "1": 132,
  "2": 396,
  "3": 484,
  "4": 748,
  "5": 792,
  "6": 1144,
  "7": 1716,
  "8": 2530,
  "9": 2860,
  "10": 3938,
  "11": 5368,
  "12": 7612,
  "13": 10736,
  "14": 12870,
  "15": 19580,
  "16": 29700,
  "17": 44550,
  "18": 66330,
  "19": 99000,
  "20": 148500
};

var trcount,table,moreTable;

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
}

//the loot generator
function generateLoot() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  var myjson = equipmentData;

  var itemGroup,itemName,itemAttr;
  var itemArray = [];
  var item = [];

  var aplmod = Number($('#APLDrop').text().replace("Average Party Level - ","").trim());
  var crmod = ($('#CRDrop').text().replace("Challenge Rating - ","")).trim();
  var moremod = ($('#moreDrop').text().replace("More ","")).trim();
  var wealth = crWealth[crmod];

  //
  //BUILD LIST
  //

  itemArray = getDataArray("All",myjson)

  //
  //CHOOSE ITEMS AND BUILD TABLE
  //

  var thisItem,tr;
  var wealthCount = wealth;
  var credits,upbs;
  var deck,weight;
  table = "<div class=\"container table-responsive\"><table class=\"table table-striped\"><thead><tr><th>#</th><th>Item</th><th>Level</th><th>Bulk</th><th>Cost</th><th>Sourcepage</th></tr></thead><tbody>";
  moreTable = "";
  trcount = 0

  //RESOLVE MORE ITEMS

  moreTable = "";

  //more ammo
  if (moremod == "ammo") {
    var ammoItems;
    ammoItems = getDataArray(["Ammunition","Special Ammunition"],myjson);
     for (var i = randomWeightedChoice([2,3,4,5,6],[1,3,2,1,1]); i > 0; i--){
       if (wealthCount > 0) {
         thisItem = randomChoice(ammoItems);
         addTableItem(thisItem,true);
         wealthCount -= Number(thisItem[2]);
       }
     }
  }

  //more armor
  if (moremod == "armor") {
    var armorItems;
    armorItems = getDataArray(["Light Armor","Heavy Armor"],myjson);
     for (var i = randomWeightedChoice([2,3,4,5,6],[1,3,2,1,1]); i > 0; i--){
       if (wealthCount > 0) {
         thisItem = randomChoice(armorItems);
         addTableItem(thisItem,true);
         wealthCount -= Number(thisItem[2]);
       }
     }
  }

  //more grenades
  if (moremod == "grenades") {
    var grenadeItems;
    grenadeItems = getDataArray(["Grenades"],myjson);
     for (var i = randomWeightedChoice([2,3,4,5],[1,3,2,1]); i > 0; i--){
       if (wealthCount > 0) {
         thisItem = randomChoice(grenadeItems);
         addTableItem(thisItem,true);
         wealthCount -= Number(thisItem[2]);
       }
     }
  }

  //more heals
  if (moremod == "heals") {
    var healsItems;
    healsItems = getDataArray(["Healing Serum","Medical Gear"],myjson);
     for (var i = randomWeightedChoice([2,3,4,5],[1,3,2,1]); i > 0; i--){
       if (wealthCount > 0) {
         thisItem = randomChoice(healsItems);
         addTableItem(thisItem,true);
         wealthCount -= Number(thisItem[2]);
       }
     }
  }

  //more magic
  if (moremod == "magic") {
    var magicItems;
    magicItems = getDataArray(["Spell Ampoules","Spell Gems", "Magic Items"],myjson);
     for (var i = randomWeightedChoice([2,3,4,5],[1,3,2,1]); i > 0; i--){
       if (wealthCount > 0) {
         thisItem = randomChoice(magicItems);
         //sub in spell names
         if (thisItem[0].includes("Spell Ampoule")){
           thisItem[0] = thisItem[0].replace("Spell Ampoule (Level 0)",randomChoice(spellAmpoule0)).replace("Spell Ampoule (Level 1)",randomChoice(spellAmpoule1)).replace("Spell Ampoule (Level 2)",randomChoice(spellAmpoule2)).replace("Spell Ampoule (Level 3)",randomChoice(spellAmpoule3));
         }
         if (thisItem[0].includes("Spell Gem")){
           thisItem[0] = thisItem[0].replace("Spell Gem (Level 0)",randomChoice(spellGems0)).replace("Spell Gem (Level 1)",randomChoice(spellGems1)).replace("Spell Gem (Level 2)",randomChoice(spellGems2)).replace("Spell Gem (Level 3)",randomChoice(spellGems3)).replace("Spell Gem (Level 4)",randomChoice(spellGems4)).replace("Spell Gem (Level 5)",randomChoice(spellGems5)).replace("Spell Gem (Level 6)",randomChoice(spellGems6));
         }
         addTableItem(thisItem,true);
         wealthCount -= Number(thisItem[2]);
       }
     }
  }

  //more tech
  if (moremod == "tech") {
    var techItems;
    techItems = getDataArray(["Technological Items","Hybrid Items"],myjson);
     for (var i = randomWeightedChoice([2,3,4,5],[1,3,2,1]); i > 0; i--){
       if (wealthCount > 0) {
         thisItem = randomChoice(techItems);
         addTableItem(thisItem,true);
         wealthCount -= Number(thisItem[2]);
       }
     }
  }

  //more upgrades
  if (moremod == "upgrades") {
    var upgradeItems;
    upgradeItems = getDataArray(["Armor Upgrades","Fusion Seals","Solarion Weapon Crystals"],myjson);
     for (var i = randomWeightedChoice([2,3,4,5],[1,3,2,1]); i > 0; i--){
       if (wealthCount > 0) {
         thisItem = randomChoice(upgradeItems);
         addTableItem(thisItem,true);
         wealthCount -= Number(thisItem[2]);
       }
     }
  }

  //more weapons
  if (moremod == "weapons") {
    var weaponsItems;
    weaponsItems = getDataArray(["Heavy Weapons","Advanced Melee Weapons","Basic Melee Weapons","Longarms","Sniper Weapons","Small Arms","Special Weapons"],myjson);
     for (var i = randomWeightedChoice([2,3,4,5],[1,3,2,1]); i > 0; i--){
       if (wealthCount > 0) {
         thisItem = randomChoice(weaponsItems);
         addTableItem(thisItem,true);
         wealthCount -= Number(thisItem[2]);
       }
     }
  }

  //check if credits are applicable
  if (moremod != "No credits") {
    //get credits
    deck = (moremod == "credits") ? [0.5,0.6,0.7,0.8,0.9] : [0,0.1,0.2,0.3,0.4,0.5];//increase nums if more credits is selected
    weight = (moremod == "credits") ? [1,1,1,1,1] : [5,1,1,1,1,1];
    credits = wealth * randomWeightedChoice(deck,weight);
    credits = Math.round(credits / 50)*50;
    if (credits != 0) {
      //add to table
      if (wealthCount > 0) {
        table += "<tr><td>"+credits.toString() +"</td><td>Credits</td><td></td><td></td><td></td><td></td></tr>"
        wealthCount -= credits;
      }
    }

    //get upbs
    deck = (moremod == "tech") ? [0.5,0.6,0.7,0.8,0.9] : [0,0.1,0.2,0.3,0.4,0.5];
    weight = (moremod == "tech") ? [1,1,1,1,1] : [5,1,1,1,1,1];
    upbs = wealth * randomWeightedChoice(deck, weight);
    upbs = Math.round(upbs / 50)*50;
    if (upbs != 0) {
      //add to table
      if (wealthCount > 0) {
        table += "<tr><td>"+upbs.toString() +"</td><td>UPBs</td><td></td><td></td><td></td><td></td></tr>";
        wealthCount -= upbs;
      }
    }
  }

  table += moreTable;//add the more items after UPBs and creds

  //table workshop
  while (wealthCount > 0) {
      //pick random item
      thisItem = randomChoice(itemArray);
      if (thisItem[0].includes("Fusion Seal")){//too many fusion seals
        thisItem = randomChoice(itemArray);
      }
      //sub in spell names
      if (thisItem[0].includes("Spell Ampoule")){
        thisItem[0] = thisItem[0].replace("Spell Ampoule (Level 0)",randomChoice(spellAmpoule0)).replace("Spell Ampoule (Level 1)",randomChoice(spellAmpoule1)).replace("Spell Ampoule (Level 2)",randomChoice(spellAmpoule2)).replace("Spell Ampoule (Level 3)",randomChoice(spellAmpoule3));
      }
      if (thisItem[0].includes("Spell Gem")){
        thisItem[0] = thisItem[0].replace("Spell Gem (Level 0)",randomChoice(spellGems0)).replace("Spell Gem (Level 1)",randomChoice(spellGems1)).replace("Spell Gem (Level 2)",randomChoice(spellGems2)).replace("Spell Gem (Level 3)",randomChoice(spellGems3)).replace("Spell Gem (Level 4)",randomChoice(spellGems4)).replace("Spell Gem (Level 5)",randomChoice(spellGems5)).replace("Spell Gem (Level 6)",randomChoice(spellGems6));
      }

      addTableItem(thisItem,false);

      wealthCount -= Number(thisItem[2]);
  }
  table += "</tbody></table></div>";

  //stripe the table
  var even = false;
  var trNum = (table.match(new RegExp("<tr>", "g")) || []).length;
  //alert(table.indexOf("<tr>"));
  table = table.replace("<tr>","<tr >");
  for (var i = trNum;i>0;i--){
    if (even) {
      table = table.replace("<tr>","<tr class=\"success\">");
      even = false;
    } else {
      table = table.replace("<tr>","<tr >");
      even = true;
    }
  }

  //push table to html
  $outputArea.append(table);

  ga('send', 'event', 'Generation', 'loot', aplmod.toString());
}

function addTableItem (item,trueTable){
  //if item already in list increment number
  if (trueTable){
    if (moreTable.includes(item[0])) {
      var n = moreTable.indexOf(item[0]) - 10;
      var m = Number(moreTable.charAt(n));
      moreTable = moreTable.replace("<td>"+m.toString()+"</td><td>" + item[0],"<td>"+(m+1).toString()+"</td><td>" + item[0]);

    } else { //else just add to moreTable
      moreTable += "<tr><td>1</td>"+"<td>"+item[0]+"</td><td>"+item[1]+"</td><td>"+item[3]+"</td><td>"+item[2]+"</td><td>"+item[4]+"</td></tr>";
    }
  } else {
    if (table.includes(item[0])) {
      var n = table.indexOf(item[0]) - 10;
      var m = Number(table.charAt(n));
      table = table.replace("<td>"+m.toString()+"</td><td>" + item[0],"<td>"+(m+1).toString()+"</td><td>" + item[0]);

    } else { //else just add to table
      table += "<tr><td>1</td>"+"<td>"+item[0]+"</td><td>"+item[1]+"</td><td>"+item[3]+"</td><td>"+item[2]+"</td><td>"+item[4]+"</td></tr>";
    }
  }

}

function getDataArray(groups,json){
  var dataArray = [];
  var item = [];
  var itemGroup,itemName;
  var itemLevel, minLevel,aplmod;


  aplmod = Number($('#APLDrop').text().replace("Average Party Level - ","").trim());

  for (itemGroup in json) {
    if (groups.includes(itemGroup) || groups.includes("All")) {
      for (itemName in json[itemGroup]) {
        item = [];
        itemLevel = Number(json[itemGroup][itemName]['level']);
        //set minimum level for weapons and armor
        minLevel = limitedGroups.includes(itemGroup) ? aplmod - 2 : 0;

        if ( itemLevel <= aplmod+1 && itemLevel >= minLevel ){
          item[0] = itemName.replace("Iii","III").replace("Ii","II").replace("Iv","IV").replace("Viii","VIII").replace("Vii","VII").replace("Vi","VI").replace("Fxprofession",randomChoice(professions));//name
          item[1] = json[itemGroup][itemName]['level'];//level

          if (itemName.includes("Fusion Seal")){
            sealLevel = (aplmod+randomChoice([0,1])).toString();
            sealLevel = (Number(sealLevel) > 20) ? "20" : sealLevel;
            sealLevel = (Number(sealLevel) < Number(item[1])) ? item[1] : sealLevel

            item[2] = fusionSeal[sealLevel];//fusion seal cost
            sealText = (item[1] == sealLevel) ? " (level " + item[1] +")" : " (level " + item[1] + "-" + sealLevel+")"//check if same number
            item[0] = item[0] + sealText;//add seal level to name
            item[1] = sealLevel;
          } else {
            item[2] = json[itemGroup][itemName]['cost'];//cost
          }

          item[3] = json[itemGroup][itemName]['bulk'];//bulk
          item[4] = json[itemGroup][itemName]['sourcepage'];//sourcepage
          dataArray.push(item);
          //extra entries for these groups
          if (moreGroups.includes(itemGroup)){
            dataArray.push(item);
            dataArray.push(item);
          }
        }
      }
    }
  }
  return dataArray;
}

//Sets selected dropdown to dropdown display
//BOOTSTRAP 3
$(".dropdown-menu li a").click(function(){
  var selected = $(this).text();
  if (selected.includes("APL")) {
    $(this).closest('.btn-group').find('.dropdown-toggle').html('<span class="pull-left">Average Party Level - ' + selected.replace("APL ","") + '</span><span class="caret"></span>');
    $(this).closest('.btn-group').find('.dropdown-toggle').val("Average Party Level - " + selected.replace("APL ",""));
  }
  else if (selected.includes("CR")){
    $(this).closest('.btn-group').find('.dropdown-toggle').html('<span class="pull-left">Challenge Rating - ' + selected.replace("CR ","") + '</span><span class="caret"></span>');
    $(this).closest('.btn-group').find('.dropdown-toggle').val("Challenge Rating - " + selected.replace("CR ",""));
  }
  else if (selected.includes("More") || selected.includes("Random") || selected.includes("No")){
    $(this).closest('.btn-group').find('.dropdown-toggle').html('<span class="pull-left">'+selected+'</span><span class="caret"></span>');
    $(this).closest('.btn-group').find('.dropdown-toggle').val(selected);
  }
});
