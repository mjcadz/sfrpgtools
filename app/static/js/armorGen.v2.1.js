var numerals = ['','I','II','III','IV','V','VI']

var armorNameLight1 = [
  "AbadarCorp",
  "Ace-tech",
  "Apollo",
  "Aritificial",
  "Armored",
  "Beast Hide",
  "Carbon",
  "Complex",
  "Elven",
  "Environmental",
  "Estex",
  "Explorer",
  "Free Booter",
  "Hazmat",
  "Hunters",
  "Icon",
  "Kasatha",
  "Lashunta",
  "Leather",
  "Light",
  "Micromesh",
  "Nanotube",
  "Padded",
  "Racing",
  "Reactive",
  "Security",
  "Specialist",
  "Ultralight",
  "Utility",
  "Variable",
  "Ysoki",
  "Zephyr",
]

var armorNameLight2 = [
  "A","B","C","D",
  "Absorber",
  "Armor",
  "Attire",
  "Bodysuit",
  "Clothing",
  "Crash Gear",
  "Flight Suit",
  "Hardlight Plate",
  "Jacket",
  "Jumpsuit",
  "Microcord",
  "Microweave",
  "Night Shirt",
  "Safeguard",
  "Series",
  "Shield",
  "Shirt",
  "Skin",
  "Stationwear",
  "Suit",
  "Tempweave",
  "Thinsuit",
  "Travel Wear",
  "Undersuit",
  "Unisuit",
  "Vest"
]

var armorNameHeavy1 = [
  "Aegis",
  "Anti-k",
  "Ares",
  "Armored",
  "Battle",
  "Ceremonial",
  "Energised",
  "Extra",
  "Full Body",
  "Fused",
  "Golemforged",
  "Hard Weave",
  "Heavy",
  "Metal",
  "Modular",
  "Nuar",
  "Re-entry",
  "Reflective",
  "Reinforced",
  "Riot",
  "Superdense",
  "Synthetic",
  "Temporal",
  "Titan",
  "Vesk",
  "Voidforged",
  "Voidshield",
  "Warrior"

]

var armorNameHeavy2 = [
  "Armor",
  "Assault Suit",
  "Assistive Armor",
  "Battle Suit",
  "Breatplate",
  "Bulwark",
  "Coldsuit",
  "Divesuit",
  "Drop Suit",
  "Exoskeleton",
  "Flight Suit",
  "Mircochain Mail",
  "Monolith",
  "Overplate",
  "Plate",
  "Plating",
  "Ringwear",
  "Series",
  "Shield",
  "Shock Plate",
  "Shock Suit",
  "Space Suit",
  "Suit",
  "Supermesh",
  "Super Suit",
  "Thinplate"
]

var flavorTextLight = [
  "Is made from a high tech material that looks and feels like a t-shirt",
  "Has light plating hidden underneath the environmental suit",
  "Feels like wearing nothing at all. Nothing at all",
  "Is magically enchanted to appear to be mere clothing",
  "Shimmers, but only in pale light",
  "Has holes in the sleeves where your elbows would be",
  "Is tearaway armor",
  "Is extremely breathable",
  "Has an arm sleeve you can place your datapad into for working out",
  "Comes with a hood",
  "Has oversized sleeves",
  "Has a long train, similar to a wedding dress",
  "Is made of the finest silks",
  "Never gets dirty",
  "Is so not the sort of thing your mother would approve of you wearing out of the house",
  "Is pearlescent and changes colour as it moves",
  "Comes with a matching cape",
  "Is skin-tight",
  "Has no sleeves"

]
var flavorTextAll = [
  "Was hand crafted with great care ",
  "Is mostly grey and metallic with a utilitarian look.",
  "Reeks with the stench of unfamiliar alien sweat",
  "Has been fitted for an uncommon body type, and will need to be refitted",
  "Is painted and dyed with nonreflective colors",
  "Retains far too much heat",
  "Speaks a random noun every few minutes",
  "Look like old Steward surplus",
  "Is covered in pockets",
  "Can heal itself of small tears and rips",
  "Has the name ‘Bucky’ written on it’s tag",
  "Has a self-fastening zip which works by tapping a small touch-sensitive button",
  "Is waterproof and never gets wet",
  "Has a pocket which glows with the Starfinder Society emblem",
  "Has a long belt which can be used as a rope",
  "Comes with a matching beret",
  "Smells like new",
  "Has a large playing card of a joker stitched on its back",
  "Is adorned with small metallic skulls",
  "Belongs in a Revelaz music dance club",
  "Is as black as space itself",
  "Has various religious symbols on it",
  "Has cracks all over it that were repaired",
  "Comes with a fanny pack",
  "Has been charred by fire ",
  "Is covered in blaster holes",
  "Is just a little bit too small ",
  "Is blue with silver accents",
  "Is red with yellow accents",
  "Is green with gold accents",
  "Is covered in nicks and scratches",
  "Is as pristine as the day it left the factory",
  "Has the name “Mungus” scrawled on the collar"
]

var flavorTextHeavy = [
  "Absorbs the bulk of kinetic damage through energy dampeners",
  "Feels strangely light weight when worn",
  "Looks battle worn, adorning scars and tears deep into its plating",
  "Resembles the scales of the Triaxian Dragonlord Dretchnyliax",
  "Was obviously owned by a vesk, who decorated it with trophies of his kills",
  "Has a built in air conditioner",
  "Was painted a desert camo paint job",
  "Has a large smiling face on the front torso, and a frowning face on the back",
  "Is dented on the right shoulder pad",
  "Seems to be fitted to hold a jetpack with ease",
  "Has many magazine slots",
  "Has the phrase “Please Stop Me” etched on the chest piece",
  "Is covered in some sort of dried liquid, probably blood, yeah, thats blood",
  "Really brings out the wearers eyes, or more specifically the killing intent in them",
  "Has a huge dent in it’s chest that’s been hammered out",
  "Is made from the hull of a starship",
  "Protects well but looks like trash cans glued together",
  "Is gold in colour save for a red arm guard and silver leg piece",
  "Fits too tightly around the middle",
  "Is crafted to resemble a highly muscled torso, complete with nipples",
  "Has the words ‘Vesk Killer’ painted on it’s shoulder with a tally count beneath",
  "Has a large glowing crystal in it’s chest which seems purely decorative",
  "Has an broken data pad incorporated into the left arm",
  "Is slightly sticky on the inside",
  "Is corrupted by rust",
  "Has “Property of Absalom Station Security” stamped on the collar"
]

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

/**
 * Get the weapon's tier based on its item level.
 * @param level number
 *   An integer from 1 to 20.
 * @return number
 */
function getTier(level) {
  switch (level) {
    case 1: case 2: case 3: case 4:
      return 1;
    case 5: case 6: case 7: case 8:
      return 2;
    case 9: case 10: case 11: case 12:
      return 3;
    case 13: case 14: case 15: case 16:
      return 4;
    case 17: case 18: case 19: case 20:
      return 5;
    default:
      return NaN;
  }
}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
}

function printPanel(level,name,type,eac,kac,dex,acheck,speed,slots,bulk) {
  var $outputArea = $(".output.area").first();
  var storeOutput = $( "div.output.area" ).html();
  $outputArea.empty();

  indexCounter += 1;
  indexString = "index" + indexCounter.toString();

  var panelTitle =  "Level " + level + " " + name;
  var panelBody =   "<h5 class=\"text-muted text-muted-one\">" + type + "</h5>" +
                    "<p><b>Price: </b>"+  getPrice(level) +
                    "<br><b>EAC: </b>" + eac +
                    "<br><b>KAC: </b>" + kac +
                    "<br><b>Max Dex Bonus: </b>" + dex +
                    "<br><b>Armor Check Penalty: </b>" + acheck +
                    "<br><b>Speed Adjustment: </b>" + speed +
                    "<br><b>Upgrade Slots: </b>" + slots +
                    "<br><b>Bulk: </b>" + bulk + "</p>" +
                    "<h5 class=\"text-muted text-muted-one\"><i>This " + type.toLowerCase() + " " + flavorTextAll.concat(type == "Light armor" ? flavorTextLight : flavorTextHeavy).selectRandom().toLowerCase() + "</i></h5>"

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

  var level,tier,name;
  var armor,eac,kac,acheck,dex,speed,slots,bulk;

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
  //tier
  tier = getTier(level);

  //level
  if (armorDrop.includes("Any")) {
    armor = ["Light armor","Heavy armor"].selectRandom();
  } else {
    armor = armorDrop;
  }

  if (armor == "Light armor") {

    //name
    name = armorNameLight1.selectRandom() + " " + armorNameLight2.selectRandom();
    name += ['',' ' + numerals[tier + [-1,0,1].selectRandom()]].selectRandom();

    //EAC
    if (level < 3) {
      eac = level + [-1,0].selectRandom();
    } else if (level < 6) {
      eac = level + [-2,-1,0].selectRandom();
    } else if (level < 11) {
      eac = level + [-1,0,1].selectRandom();
    } else {
      eac = level + [-1,0,1,2,3].selectRandom();
    }

    //KAC
    if (level < 4) {
      kac = eac + [1,2].selectRandom();
    } else if (level < 6) {
      kac = eac + [1].selectRandom();
    } else {
      kac = eac + [0,1,2].selectRandom();
    }

    //Max Dex
    dex = 2 + tier + [0,1,2,3].selectRandom();
    if (dex > 8){
      dex = 8;
    }

    //upgrade slots
    slots = tier + [-1,0,0,1,(-1*tier)].selectRandom();
    //armor check
    acheck = ['-','-','-','-1'].selectRandom();
    //speed adjustment
    speed = '-';
    //bulk
    bulk = ['L','L','1'].selectRandom();
  }
  else if (armor == "Heavy armor"){

    //name
    name = armorNameHeavy1.selectRandom() + " " + armorNameHeavy2.selectRandom();
    name += ['',' ' + numerals[tier + [-1,0,1].selectRandom()]].selectRandom();

    //EAC
    if (level < 3) {
      eac = level + [0,1,2].selectRandom();
    } else if (level < 6) {
      eac = level + [2,3,4,5].selectRandom();
    } else if (level < 11) {
      eac = level + [3,4,5].selectRandom();
    } else {
      eac = level + [4,5,6].selectRandom();
    }

    //KAC
    if (level < 4) {
      kac = eac + [1,2].selectRandom();
    } else if (level < 12) {
      kac = eac + [1,2,1,2,3].selectRandom();
    } else {
      kac = eac + [1,2,3,1,2,3,4].selectRandom();
    }

    //Max Dex
    dex = tier + [-1,0,1].selectRandom();
    if (dex > 5){
      dex = 5;
    }

    //upgrade slots
    slots = tier + [-1,0,1,2].selectRandom();
    //armor check
    acheck = ['-','-2','-2','-3','-3','-4','-5'].selectRandom();
    //speed adjustment
    speed = ['-','-5 ft.','-5 ft.','-10 ft.','-10 ft.'].selectRandom();
    //bulk
    bulk = [1,2,2,3,3].selectRandom();

  }

  printPanel(level,name,armor,eac,kac,dex,acheck,speed,slots,bulk);

  //log event in analytics
  ga('send', 'event', 'Generation', 'armor', armor);
}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});
