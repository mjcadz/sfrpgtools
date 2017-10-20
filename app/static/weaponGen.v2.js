
var damageType = ["Acid", "Cryo", "Flame", "Laser", "Plasma", "Projectile", "Shock", "Sonic"];
var meleeDamageType = ["Acid", "Cryo", "Flame", "Plasma", "Shock", "Sonic", "Uncat","Uncat"];
var damageTypeAbbrv = {
  "Acid":" A",
  "Bludgeoning": " B",
  "Cryo": " C",
  "Flame": " F",
  "Laser": " F",
  "Plasma": " E & F",
  "Piercing": " P",
  "Projectile": " P",
  "Shock": " E",
  "Slashing": " S",
  "Sonic": " So"
};
var criticalTypeAdvanced = {
  "Acid": ["Corrode"],
  "Cryo": ["Staggered"],
  "Flame": ["Burn","Wound"],
  "Plasma": ["Burn", "Severe Wound"],
  "Uncat": ["-"],
  "Shock": ["Arc"],
  "Sonic": ["Knockdown", "Deafen"]
};
var criticalTypeSmall = {
  "Acid": ["Corrode"],
  "Cryo": ["Staggered"],
  "Flame": ["Burn"],
  "Laser": ["Burn", "Staggered"],
  "Plasma": ["Burn", "Knockdown"],
  "Projectile": ["Knockdown", "-"],
  "Shock": ["Arc"],
  "Sonic": ["Knockdown", "Deafen"]
};
var criticalTypeLong = {
  "Acid": ["Corrode"],
  "Cryo": ["Staggered"],
  "Flame": ["Burn"],
  "Laser": ["Burn", "Staggered", "Wound"],
  "Plasma": ["Burn", "Knockdown", "Corrode"],
  "Projectile": ["Knockdown", "Wound", "-"],
  "Shock": ["Arc"],
  "Sonic": ["Knockdown", "Deafen"]
};
var criticalTypeHeavy = {
  "Acid": ["Corrode"],
  "Cryo": ["Staggered", "Wound"],
  "Flame": ["Burn"],
  "Laser": ["Burn", "Staggered", "Wound", "Severe Wound"],
  "Plasma": ["Burn", "Knockdown", "Corrode"],
  "Projectile": ["Knockdown", "Wound", "-", "Severe Wound"],
  "Shock": ["Arc"],
  "Sonic": ["Knockdown", "Deafen", "Wound"]
};
var criticalTypeSniper = {
  "Acid": ["Corrode", "Wound"],
  "Cryo": ["Staggered", "Wound"],
  "Flame": ["Burn", "Wound"],
  "Laser": ["Burn", "Staggered", "Wound", "Severe Wound"],
  "Plasma": ["Burn", "Knockdown", "Corrode", "Wound"],
  "Projectile": ["Knockdown", "Wound", "Severe Wound"],
  "Shock": ["Arc", "Wound"],
  "Sonic": ["Knockdown", "Deafen", "Wound"]
};

//These three not used, here for reference
var armType = ["smallArm", "longarm", "heavyWeapon", "sniperWeapon"];
var special = ["Analog", "Automatic", "Blast", "Boost", "Bright", "Entangle", "Explode", "Injection", "Line", "Penetrating", "Quick Reload", "Sniper", "Stun", "Unwieldy"];
var criticalType = ["Arc", "Bleed", "Corrode","Burn", "Corrode", "Deafen", "Injection DC +2", "Knockdown", "Severe wound", "Staggered", "Wound"];

var smallSubType = ["Semi-Auto FX Pistol", "FX Machine Pistol", "FX Revolver", "FX Hand-Cannon", "FX Bolt Gun", "FX Blaster"];
var longSubType = ["FX Assault Rifle", "FX Carbine", "FX Scattergun", "FX Submachine Gun", "FX Crossbolter","FX Scout Rifle"];
var heavySubType = ["FX Cannon", "Heavy FX Repeater", "FX Thrower", "FX Railgun", "Smart Gun - FX", "FX Mass Driver"];
var sniperSubType = ["Shirren-eye FX Rifle", "Bolt Action FX Rifle", "Semi-Auto FX Rifle", "Gas-operated FX Rifle","FX Beam Rifle","FX Sports Rifle"];

var boostDice = [
  ["1d4", "1d6"],
  ["1d6", "1d8"],
  ["1d10", "1d12"],
  ["2d6", "2d8"],
  ["3d6", "2d10"]
];

var rangeSmall = [20, 30, 40];
var rangeLong = [30, 40, 50, 60, 70];
var rangeHeavy = [30, 40, 50, 60, 70, 80];
var rangeSniper = [50, 60];

var smallArmEnergyDamageCurve = {
  "1": ["1d3", "1d4"],
  "2": ["1d4", "1d6"],
  "3": ["1d4", "1d6"],
  "4": ["1d6", "1d8"],
  "5": ["1d6", "1d8"],
  "6": ["1d8", "2d4"],
  "7": ["2d4", "2d6"],
  "8": ["2d6", "3d4"],
  "9": ["3d4", "2d8"],
  "10": ["2d8", "4d4"],
  "11": ["4d4", "3d6"],
  "12": ["3d6", "2d10"],
  "13": ["2d10", "5d4"],
  "14": ["5d4", "2d12"],
  "15": ["3d8", "4d6"],
  "16": ["3d10", "5d6"],
  "17": ["4d8", "3d12"],
  "18": ["8d4", "4d10"],
  "19": ["5d8", "9d4"],
  "20": ["10d4", "4d12"]
};

var smallArmKineticDamageCurve = {
  "1": ["1d4", "1d6"],
  "2": ["1d6", "1d8"],
  "3": ["1d8", "2d4"],
  "4": ["2d4", "1d10"],
  "5": ["1d10", "1d12"],
  "6": ["1d12", "2d6"],
  "7": ["2d6", "3d4"],
  "8": ["3d4", "2d8"],
  "9": ["2d8", "4d4"],
  "10": ["4d4", "3d6"],
  "11": ["2d10", "5d4"],
  "12": ["2d12", "3d8"],
  "13": ["3d8", "4d6"],
  "14": ["3d10", "5d6"],
  "15": ["4d8", "3d12"],
  "16": ["6d6", "5d8"],
  "17": ["7d6", "4d12"],
  "18": ["6d8", "5d10"],
  "19": ["8d6", "7d8"],
  "20": ["5d12", "6d10"]
};

var longarmEnergyDamageCurve = {
  "1": ["1d6", "1d8"],
  "2": ["1d6", "1d8"],
  "3": ["1d6", "1d8"],
  "4": ["1d8", "2d4"],
  "5": ["1d10", "1d12"],
  "6": ["1d12", "2d6"],
  "7": ["2d6", "3d4"],
  "8": ["2d8", "4d4"],
  "9": ["3d6", "2d10"],
  "10": ["2d10", "5d4"],
  "11": ["5d4", "2d12"],
  "12": ["4d6", "3d10"],
  "13": ["5d6", "7d4"],
  "14": ["4d8", "8d4"],
  "15": ["6d6", "4d10"],
  "16": ["10d4", "6d8"],
  "17": ["8d6", "5d12"],
  "18": ["6d10", "10d6"],
  "19": ["8d8", "6d12"],
  "20": ["9d8", "8d10"]
};

var longarmKineticDamageCurve = {
  "1": ["1d6", "1d8"],
  "2": ["1d6", "1d8"],
  "3": ["1d8", "1d10"],
  "4": ["1d10", "1d12"],
  "5": ["1d12", "2d6"],
  "6": ["3d4", "2d8"],
  "7": ["2d8", "4d4"],
  "8": ["3d6", "2d10"],
  "9": ["5d4", "2d12"],
  "10": ["3d8", "4d6"],
  "11": ["6d4", "3d10"],
  "12": ["5f6", "7d4"],
  "13": ["4d8", "3d12"],
  "14": ["4d10", "7d6"],
  "15": ["6d8", "8d6"],
  "16": ["7d8", "5d12"],
  "17": ["10d6", "6d12"],
  "18": ["9d8", "10d8"],
  "19": ["9d10", "8d12"],
  "20": ["12d8", "10d10"]
};

var heavyEnergyDamageCurve = {
  "1": ["1d6", "1d8"],
  "2": ["1d8", "1d10"],
  "3": ["1d8", "1d10"],
  "4": ["1d10", "1d12"],
  "5": ["1d12", "2d6"],
  "6": ["2d6", "2d8"],
  "7": ["2d8", "3d6"],
  "8": ["3d6", "2d10"],
  "9": ["2d10", "2d12"],
  "10": ["2d12", "3d8"],
  "11": ["3d8", "4d6"],
  "12": ["4d6", "3d10"],
  "13": ["5d6", "4d8"],
  "14": ["3d12", "6d6"],
  "15": ["4d10", "7d6"],
  "16": ["4d12", "5d10"],
  "17": ["5d12", "10d6"],
  "18": ["8d8", "6d12"],
  "19": ["9d8", "8d10"],
  "20": ["10d8", "7d12"]
};
var heavyKineticDamageCurve = {
  "1": ["1d10", "1d10"],
  "2": ["1d10", "1d12"],
  "3": ["1d12", "4d4"],
  "4": ["4d4", "3d6"],
  "5": ["3d6", "2d10"],
  "6": ["2d10", "5d4"],
  "7": ["5d4", "2d12"],
  "8": ["2d12", "4d6"],
  "9": ["4d6", "3d10"],
  "10": ["3d10", "3d12"],
  "11": ["3d12", "4d10"],
  "12": ["4d10", "4d12"],
  "13": ["4d12", "5d10"],
  "14": ["5d10", "8d6"],
  "15": ["7d8", "5d12"],
  "16": ["10d6", "8d8"],
  "17": ["7d10", "6d12"],
  "18": ["7d12", "8d12"],
  "19": ["12d8", "10d10"],
  "20": ["9d12", "12d10"]
};

var sniperDamageCurve = {
  "1": ["1d10"],
  "2": ["1d10"],
  "3": ["1d10"],
  "4": ["1d10"],
  "5": ["2d10"],
  "6": ["2d10"],
  "7": ["2d10"],
  "8": ["2d10"],
  "9": ["3d10"],
  "10": ["3d10"],
  "11": ["3d10"],
  "12": ["4d10"],
  "13": ["4d10"],
  "14": ["5d10"],
  "15": ["5d10"],
  "16": ["6d10"],
  "17": ["6d10"],
  "18": ["8d10"],
  "19": ["8d10"],
  "20": ["10d10"]
};

var basicMeleeDamageCurve = {
  "1":["1d4", "1d6"],
  "2":["1d4", "1d6"],
  "3":["1d4", "1d6"],
  "4":["1d6", "1d8"],
  "5":["1d6", "1d8"],
  "6":["1d6", "1d8"],
  "7":["2d4", "1d10"],
  "8":["1d12", "2d6"],
  "9":["3d4", "2d8"],
  "10":["2d8", "4d4"],
  "11":["3d6", "2d10"],
  "12":["5d4", "3d8"],
  "13":["4d6", "6d4"],
  "14":["5d6", "3d12"],
  "15":["4d10", "9d4"],
  "16":["7d6", "10d4"],
  "17":["4d12", "6d8"],
  "18":["8d6", "5d12"],
  "19":["10d6", "8d8"],
  "20":["6d12", "12d6"]
};

var advMeleeEnergyDamageCurve = {
  "1":["1d4", "1d6"],
  "2":["1d4", "1d6"],
  "3":["1d6", "1d8"],
  "4":["1d6", "1d8"],
  "5":["1d8", "1d10"],
  "6":["1d10", "1d12"],
  "7":["1d12", "2d6"],
  "8":["3d4", "2d8"],
  "9":["2d8", "2d8"],
  "10":["3d6", "2d10"],
  "11":["2d10", "5d4"],
  "12":["4d6", "6d4"],
  "13":["5d6", "4d8"],
  "14":["4d8", "3d12"],
  "15":["4d10", "10d4"],
  "16":["8d6", "6d10"],
  "17":["10d6", "8d8"],
  "18":["8d8", "7d10"],
  "19":["6d12", "9d8"],
  "20":["8d10", "10d8"]
};

var advMeleeKineticDamageCurve = {
  "1":["1d4", "1d6"],
  "2":["1d6", "1d8"],
  "3":["1d6", "1d8"],
  "4":["1d8", "1d10"],
  "5":["1d8", "1d10"],
  "6":["1d10", "1d12"],
  "7":["1d12", "2d6"],
  "8":["4d4", "3d6"],
  "9":["2d10", "2d12"],
  "10":["4d6", "3d10"],
  "11":["7d4", "4d8"],
  "12":["3d12", "7d6"],
  "13":["10d4", "6d8"],
  "14":["8d6", "7d8"],
  "15":["9d6", "5d12"],
  "16":["7d10", "6d12"],
  "17":["8d10", "10d8"],
  "18":["9d10", "8d12"],
  "19":["10d10", "9d12"],
  "20":["10d12", "12d10"]
};

var basePrice = [260,625,1415,2195,3230,4425,6350,9175,13300,17950,24400,35300,49600,72400,109750,170350,243850,370000,557450,832900];

var priceVariance = {
  "0.7":[-0.4,-0.3,-0.2,-0.1,0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8],
  "0.2":[-0.2,-0.15,-0.1,-0.05,0,0.05,0.1,0.15,0.2],
  "0.15":[-0.15,-0.12,-0.1,-0.05,0,0.05,0.1,0.12,0.15],
  "0.1":[-0.1,-0.08,-0.06,-0.04,-0.02,0,0.02,0.04,0.06,0.08,0.1]
};

var indexCounter = 0;

function sayHello() {
    //get radio button values
   var val = $('#weaponType label.active input').val();
   var val2 = $('#weaponTier label.active input').val();

   //print to div output area
   var $outputArea = $(".output.area").first();
	 $outputArea.empty();

   $outputArea.append("<div>" + val + " "+ val2 + "</div>");

}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
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

/**
 * Nondestructively remove any blank entry from an array.
 * @param array array
 * @return array
 */
function removeBlankValues(array) {
  var splicedArray = array.slice(0);
  while (splicedArray.indexOf("") !== -1) {
    var index = splicedArray.indexOf("");
    splicedArray.splice(index, 1);
  }

  return splicedArray;
}

/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPrice(level) {
  var price;
  var variance;
  var rounding;
  var finish;
  var base = basePrice[level - 1];
  if (level == 1){
    variance = randomChoice(priceVariance["0.7"]) * base;
    rounding = 10;
    finish = randomChoice([0,5,-5]);
  }
  else if (level == 2) {
    variance = randomChoice(priceVariance["0.2"]) * base;
    rounding = 10;
    finish = randomChoice([0,5,-5]);
  }
  else if (level >= 3 && level <= 6) {
    variance = randomChoice(priceVariance["0.15"]) * base;
    rounding = 100;
    finish = randomChoice([0,50,-50]);
  }
  else if (level >= 7 && level <= 19) {
    variance = randomChoice(priceVariance["0.1"]) * base;
    rounding = 100;
    finish = randomChoice([0,100,-100]);
  }
  else if (level == 20) {
    variance = randomChoice(priceVariance["0.2"]) * base;
    rounding = 100;
    finish = randomChoice([0,100,-100]);
  }
  price = (Math.floor((base + variance)/rounding)*rounding) + finish
  return price;
}

function getCritDice(critical,level){
  if (critical === "Burn" || critical === "Arc" || critical === "Corrode" || critical === "Bleed") {
    var num, die;
    switch (level) {
      case 1: case 2: case 3: case 4: case 5: case 6:
      case 7: case 8: case 9: case 10: case 11:
        num = 1;
        die = randomChoice(["4", "6"]);
        break;
      case 12: case 13: case 14: case 15:
        num = 2;
        die = randomChoice(["4", "6", "8"]);
        break;
      case 16: case 17: case 18:
        num = 3;
        die = randomChoice(["4", "6", "8"]);
        break;
      case 19: case 20:
        num = 4;
        die = randomChoice(["4", "6", "8"]);
        break;
      default:
        console.error("Invalid level when trying to determine critical.");
        num = "?";
        die = "?";
    }
    critical = critical + " " + num + "d" + die;
  }
  return critical;
}

function printNeat(level,gunName,type,damage,range,critical,capacity,usage,special,bulk) {
  var $outputArea = $(".output.area").first();
  var storeOutput = $( "div.output.area" ).html();
  $outputArea.empty();
  var nameDrop = $('#nameDrop').text();

  indexCounter += 1;
  indexString = "index" + indexCounter.toString();


  $outputArea.append("<div class=\"" + indexString + "\">");
  var $index = $("."+indexString).first();
  $index.append("<hr>");
  if (nameDrop.includes("Off")) {
    $index.append("<h4>Level " + level + " " + gunName + "</h4>");
    $index.append("<h6 class=\"text-muted\">" + type + "</h6>");
    $index.append( "<p>Price: "+  getPrice(level) +
                        "<br>Damage: " + damage +
                        "<br>Range: " + range + " ft." +
                        "<br>Critical: " + critical +
                        "<br>Capacity: " + capacity +
                        "<br>Usage: " + usage +
                        "<br>Bulk: " + bulk +
                        "<br>Special: " + special + "</p>");

  } else if (nameDrop.includes("On")){
    var weaponName = getrandomName(gunName);
    $index.append("<h4>" + weaponName[2] + " " + weaponName[0] + "</h4>");
    $index.append("<h6 class=\"text-muted\">" + weaponName[1] + " - " + gunName + "</h4>");
    $index.append("<h6 class=\"text-muted\">" + type + "</h6>");
    $index.append( "<p>Level: " + level +
                        "<br>Price: "+  getPrice(level) +
                        "<br>Damage: " + damage +
                        "<br>Range: " + range + " ft." +
                        "<br>Critical: " + critical +
                        "<br>Capacity: " + capacity +
                        "<br>Usage: " + usage +
                        "<br>Bulk: " + bulk +
                        "<br>Special: " + special + "</p>");
  }
  $index.append("<button type=\"button\" id=\""+indexString+"\"class=\"btn btn-outline-secondary btn-sm\" onclick = \"removeEntry(this.id)\">Remove</button>");

  if (storeOutput != ""){
    $outputArea.append(storeOutput);
  }
}

function printMeleeNeat(level,weaponName,type,damage,critical,bulk,special) {
  var $outputArea = $(".output.area").first();
  var storeOutput = $( "div.output.area" ).html();
  $outputArea.empty();
  var nameDrop = $('#nameDrop').text();
  indexCounter += 1;
  indexString = "index" + indexCounter.toString();

  $outputArea.append("<div class=\"" + indexString + "\">");
  var $index = $("."+indexString).first();

  $index.append("<hr>");
  if (nameDrop.includes("Off")) {
    $index.append("<h4>Level " + level + " " + weaponName + "</h4>");
    $index.append("<h6 class=\"text-muted\">" + type + "</h6>");
    $index.append( "<p>Price: "+  getPrice(level) +
                        "<br>Damage: " + damage +
                        "<br>Critical: " + critical +
                        "<br>Bulk: " + bulk +
                        "<br>Special: " + special + "</p>");

  } else if (nameDrop.includes("On")){
    var gName = getrandomName(weaponName);
    $index.append("<h4>" + gName[0] + " " + gName[3] + "</h4>");
    $index.append("<h6 class=\"text-muted\">" + gName[1] + " - " + weaponName + "</h6>");
    $index.append("<h6 class=\"text-muted\">" + type + "</h6>");
    $index.append( "<p>Level: " + level +
                        "<br>Price: "+  getPrice(level) +
                        "<br>Damage: " + damage +
                        "<br>Critical: " + critical +
                        "<br>Bulk: " + bulk +
                        "<br>Special: " + special + "</p>");
  }
  $index.append("<button type=\"button\" id=\""+indexString+"\"class=\"btn btn-outline-secondary btn-sm\" onclick = \"removeEntry(this.id)\">Remove</button>");

  if (storeOutput != ""){
      $outputArea.append(storeOutput);
  }
}

function removeEntry(index) {
  $("."+index).remove();
}

function basicMelee(level) {
  var damage;
  var handed;
  var bulk;
  var type;
  var critical;
  var special = [];

  var basicMeleeType = ["Knife","Baton","Duelling Sword","Battleglove","Space Mace","Spear","Kasathan Bladestaff","Staff"];
  var weaponName = randomChoice(basicMeleeType);

  if (level <= 10){
    special.push("Analog");
  }
  else  {
    if (weaponName === "Duelling Sword" || weaponName === "Battleglove" || weaponName === "Space Mace") {
      special.push(randomChoice(["Powered (capacity 20, usage 1)","Analog"]));
    }
    else {
      special.push("Analog");
    }
  }

  if (weaponName === "Knife") {
    damage = basicMeleeDamageCurve[level][0] + " S";
    handed = "one";
    bulk = "L";
    critical = "-";
    special.push("Operative");
  }
  else if (weaponName === "Baton") {
    damage = randomChoice(basicMeleeDamageCurve[level]) + " B"
    handed = "one";
    bulk = "L";
    critical = "-";
    special.push("Operative");
  }
  else if (weaponName === "Duelling Sword") {
    damage = basicMeleeDamageCurve[level][1] + " S";
    handed = "one";
    bulk = "L";
    critical = "-";
  }
  else if (weaponName === "Battleglove") {
    damage = randomChoice(basicMeleeDamageCurve[level]) + " B";
    handed = "one";
    bulk = "L";
    critical = "-";
  }
  else if (weaponName === "Space Mace") {
    damage = randomChoice(basicMeleeDamageCurve[level]) + " B";
    handed = "one";
    bulk = "L";
    critical = "Staggered";
  }
  else if (weaponName === "Spear") {
    damage = randomChoice(basicMeleeDamageCurve[level]) + " P";
    handed = "two";
    bulk = "1";
    critical = "-";
    special.push("Block");
    special.push("thrown (20 ft.)");
  }
  else if (weaponName === "Kasathan Bladestaff") {
    damage = basicMeleeDamageCurve[level][1]  + " S";
    handed = "two";
    bulk = "1";
    critical = "-";
    special.push("Block");
  }
  else if (weaponName === "Staff") {
    damage = randomChoice(basicMeleeDamageCurve[level]) + " B";
    handed = "two";
    bulk = "1";
    critical = "Knockdown";
    special.push("Block");
  }

  special = removeBlankValues(special);
  var printSpecial = special.join(", ");
  type = "Basic melee - " + handed + "-handed";

  printMeleeNeat(level,weaponName,type,damage,critical,bulk,printSpecial);

}

function advancedMelee(level) {
  var damage;
  var damageShorthand;
  var handed;
  var bulk;
  var type;
  var critical;
  var special = [];

  var advancedMeleeType = ["FX Sword","FX Gauntlet","FX Hammer","FX-edged Handaxe","FX Truncheon","FX Doshko","FX-edged Greatsword","FX Pike","FX Longhammer"];
  var weaponType = randomChoice(advancedMeleeType);

  var damageType = randomChoice(meleeDamageType);

  var weaponName = weaponType.replace("FX", damageType).replace("Uncat ", "").replace("Uncat-edged ", "");

  if (weaponType === "FX Sword") {
    if (weaponName ==="Sword"){
      weaponName = "Longsword";
    }
    if (damageType === "Uncat"){
      damageShorthand = damageTypeAbbrv["Slashing"];
      critical = (randomChoice(["-","Bleed"]));
      special.push("Analog");
    } else {
      special.push("Powered (capacity "+randomChoice(["20","40"])+", usage "+randomChoice(["1","2","4"])+")");
    }
    handed = "one";
    bulk = "1";
  }
  else if (weaponType === "FX Gauntlet") {
    if (damageType === "Uncat"){
      damageShorthand = damageTypeAbbrv["Bludgeoning"];
      critical = (randomChoice(["-","Knockdown"]));
      special.push("Analog");
    } else {
      special.push("Powered (capacity "+randomChoice(["20","40"])+", usage "+randomChoice(["1","2","4"])+")");
    }
    handed = "one";
    bulk = "1";
  }
  else if (weaponType === "FX Hammer") {
    if (damageType === "Uncat"){
      damageShorthand = damageTypeAbbrv["Bludgeoning"];
      critical = (randomChoice(["-","Staggered"]));
      special.push("Analog");
    } else {
      special.push("Powered (capacity "+randomChoice(["20","40"])+", usage "+randomChoice(["1","2","4"])+")");
    }
    handed = "one";
    bulk = "1";
  }
  else if (weaponType === "FX-edged Handaxe") {
    if (damageType === "Uncat"){
      damageShorthand = damageTypeAbbrv["Slashing"];
      critical = (randomChoice(["-","-","Bleed","Wound"]));
      special.push("Analog");
    } else {
      special.push("Powered (capacity "+randomChoice(["20","40"])+", usage "+randomChoice(["1","2","4"])+")");
    }

    handed = "one";
    bulk = "1";
  }
  else if (weaponType === "FX Truncheon") {
    if (damageType === "Uncat"){
      damageShorthand = damageTypeAbbrv["Bludgeoning"];
      critical = (randomChoice(["-","Staggered","Wound"]));
      special.push("Analog");
    } else {
      special.push("Powered (capacity "+randomChoice(["20","40"])+", usage "+randomChoice(["1","2","4"])+")");
    }

    handed = "one";
    bulk = "1";
  }
  else if (weaponType === "FX Doshko") {
    if (damageType === "Uncat"){
      damageShorthand = damageTypeAbbrv["Piercing"];
      critical = (randomChoice(["-"]));
      special.push("Analog");
      special.push("Unwieldy");
    } else {
      special.push("Powered (capacity "+randomChoice(["20","40"])+", usage "+randomChoice(["1","2","4"])+")");
    }
    handed = "two";
    bulk = "1";
  }
  else if (weaponType === "FX-edged Greatsword") {
    if (damageType === "Uncat"){
      damageShorthand = damageTypeAbbrv["Slashing"];
      critical = (randomChoice(["-","Wound","Bleed"]));
      special.push("Analog");
    } else {
      special.push("Powered (capacity "+randomChoice(["20","40"])+", usage "+randomChoice(["1","2","4"])+")");
    }
    special.push("Unwieldy");
    handed = "two";
    bulk = "2";

  }
  else if (weaponType === "FX Pike") {
    if (damageType === "Uncat"){
      damageShorthand = damageTypeAbbrv["Piercing"];
      critical = (randomChoice(["-","Bleed"]));
      special.push("Analog");
    } else {
      special.push("Powered (capacity "+randomChoice(["20","40"])+", usage "+randomChoice(["1","2","4"])+")");
    }
    handed = "two";
    bulk = "2";
    special.push("Reach");
  }
  else if (weaponType === "FX Longhammer") {
    if (damageType === "Uncat"){
      damageShorthand = damageTypeAbbrv["Bludgeoning"];
      critical = (randomChoice(["-","Knockdown"]));
      special.push("Analog");
    } else {
      special.push("Powered (capacity "+randomChoice(["20","40"])+", usage "+randomChoice(["1","2","4"])+")");
    }
    handed = "two";
    bulk = "2";
    special.push("Reach");
    special.push("Unwieldy");
  }

  special = removeBlankValues(special);
  var printSpecial = special.join(", ");
  type = "Advanced melee - " + handed + "-handed";
  if (damageType === "Uncat"){
    if (weaponType === "FX Doshko" || weaponType === "FX Longhammer") {
      damage = advMeleeKineticDamageCurve[level][1] + damageShorthand;
    } else {
      damage = randomChoice(advMeleeKineticDamageCurve[level]) + damageShorthand;
    }
  } else {
    damageShorthand = damageTypeAbbrv[damageType];
    critical = randomChoice(criticalTypeAdvanced[damageType]);
    if (weaponType === "FX Doshko" || weaponType === "FX Longhammer") {
      damage = advMeleeKineticDamageCurve[level][1] + damageShorthand;
    } else {
      damage = randomChoice(advMeleeEnergyDamageCurve[level]) + damageShorthand;
    }
  }
  critical = getCritDice(critical,level);

  printMeleeNeat(level,weaponName,type,damage,critical,bulk,printSpecial);

}

function smallArm(level) {

  var tier = getTier(level);
  var randomDamageType = randomChoice(damageType);
  var gunType = randomChoice(smallSubType);
  var printLevel = level;

  // Hand-Cannon has higher damage compared to other typed
  if (gunType === "FX Hand-Cannon" && level !== 20) {
    level += 1;
  }
  if (gunType === "FX Blaster" && randomDamageType === "Projectile") {
    randomDamageType = "Laser";
  }

  var damage;
  if (randomDamageType === "Projectile") {
    damage = randomChoice(smallArmKineticDamageCurve[level]) + damageTypeAbbrv[randomDamageType];
  } else {
    damage = randomChoice(smallArmEnergyDamageCurve[level]) + damageTypeAbbrv[randomDamageType];
  }

  var gunName = gunType.replace("FX", randomDamageType).replace("Projectile ", "");

  var special = [];
  var ammo = [];

  // Range
  var rangeo = 0;
  rangeo = randomChoice(rangeSmall);
  rangeo += (10 * tier);
  if (tier === 5) {
    rangeo -= 10;
  }
  if (randomDamageType === "Laser") {
    rangeo += 20;
  }
  if (rangeo > 100) {
    rangeo = 100;
  }

  // Ammo // Special
  if (gunType === "FX Revolver") {
    ammo.push(randomChoice(["6 rounds", "8 rounds"]));
    ammo.push("1");
    special.push(randomChoice([
      "Boost " + randomChoice(boostDice[tier-1]),
      "Bright",
      "Quick Reload",
      "Stun",
      "-"
    ]));
  }
  else if (gunType === "FX Hand-Cannon") {
    var specialloc = randomChoice(["Blast", "Line"]);
    if (specialloc === "Blast"){
      rangeo = 10 + (tier * 5) + randomChoice([0, 5]);
      if (rangeo > 30) {
        rangeo = 30;
      }
    }
    else if (specialloc === "Line") {
      rangeo = 10 + (tier * 10) + randomChoice([-5,0, 5]);
      if (rangeo > 60) {
        rangeo = 60;
      }
    }
    special.push(specialloc);
    special.push("Unwieldy");
    ammo.push("1 shell");
    ammo.push("1");
  }
  else if (gunType === "Semi-Auto FX Pistol") {
    var semiAuto1 = [
      randomChoice(["20", "20", "40", "80"]) + " charges",
      randomChoice(["1", "1", "2", "4"])
    ];
    var semiAuto2= [randomChoice(["10", "12", "16", "18"]) + " rounds", "1"];
    ammo = randomChoice([semiAuto1, semiAuto2]);
    special.push(randomChoice([
      "Boost "+ randomChoice(boostDice[tier-1]),
      "Bright",
      "Quick Reload",
      "Stun",
      "-"
    ]));
  }
  else if (gunType === "FX Machine Pistol") {
    var semiAuto1 = [
      randomChoice(["20", "20", "40", "40"]) + " charges",
      randomChoice(["1", "1", "2", "4"])
    ];
    var semiAuto2 = [randomChoice(["10", "12", "12", "24", "48"]) + " rounds", "1"];
    ammo = randomChoice([semiAuto1, semiAuto2]);
    special.push("Automatic");
  }
  else if (gunType === "FX Bolt Gun") {
    ammo = [randomChoice(["10", "12", "24", "32"]) + " rounds", randomChoice(["1", "2"])];
    special.push(randomChoice([
      "Boost "+ randomChoice(boostDice[tier-1]),
      "Bright",
      "Quick Reload",
      "Stun"
    ]));
  }
  else if (gunType === "FX Blaster") {
    ammo = [
      randomChoice(["20", "40", "80", "100"]) + " charges",
      randomChoice(["1", "4", "5", "10"])
    ];
    special.push(randomChoice([
      "Boost "+ randomChoice(boostDice[tier-1]),
      "Bright",
      "Quick Reload",
      "Stun"
    ]));
  }

  if (special.join(", ") === "Analog, -") {
    special = ["Analog"];
  }

  special = removeBlankValues(special);
  var printSpecial = special.join(", ");
  // Critical
  var critical = randomChoice(criticalTypeSmall[randomDamageType]);

  // possibility of no critical in low tiers
  if (tier <= 2) {
    critical = randomChoice([critical, critical, "-"]);
  }
  critical = getCritDice(critical,level);

  bulk = "L"
  type = "Small arm - one-handed"

  printNeat(printLevel,gunName,type,damage,rangeo,critical,ammo[0],ammo[1],printSpecial,bulk)

}

function longarm(level) {

  var tier = getTier(level);
  var randomDamageType = randomChoice(damageType);
  var gunType = randomChoice(longSubType);
  var printLevel = level;

  // Rifle has higher damage compared to other types
  if (gunType === "FX Assault Rifle" && level != 20) {
    level += 1;
  }
  if (gunType === "FX Scout Rifle" && level != 1) {
    level -= 1;
  }

  var damage;
  if (randomDamageType === "Projectile") {
    damage = randomChoice(longarmKineticDamageCurve[level]) + damageTypeAbbrv[randomDamageType];
  } else {
    damage = randomChoice(longarmEnergyDamageCurve[level]) + damageTypeAbbrv[randomDamageType];
  }

  var gunName = gunType.replace("FX", randomDamageType).replace("Projectile ", "");

  var special = [];
  var ammo = [];
  var bulk;

  // Range
  var rangeo = 0;
  rangeo = randomChoice(rangeLong);
  rangeo += (10 * tier);
  if (randomDamageType === "Laser") {
    rangeo += 20;
  }
  if (rangeo > 120) {
    rangeo = 120;
  }

  // Special
  special.push(randomChoice(["Analog", "", ""]));

  // Ammo
  if (gunType === "FX Assault Rifle") {
    var semiAuto1 = [
      randomChoice(["60", "80", "100"]) + " charges",
      randomChoice(["1", "2", "4", "10"])
    ];
    var semiAuto2 = [randomChoice(["6", "12", "18"]) + " rounds", "1"];
    ammo = randomChoice([semiAuto1, semiAuto2]);
    special.push(randomChoice([
      "Automatic",
      "Penetrating",
      "-"
    ]));
    bulk = randomChoice(["1","1","2"]);
  }
  else if (gunType === "FX Carbine") {
    var semiAuto1 = [randomChoice(["60", "80", "100"]) + " charges",randomChoice(["1", "2", "4", "10"])];
    var semiAuto2 = [randomChoice(["12", "24", "48"]) + " rounds", "1"];
    ammo = randomChoice([semiAuto1, semiAuto2]);
    special.push(randomChoice([
      "Quick Reload",
      "Boost " + randomChoice(boostDice[tier-1]),
      "Stun",
      "-"
    ]));
    rangeo -= 30;
    if (rangeo < 40) {
      rangeo = 40;
    }
    bulk = "L";
  }
  else if (gunType === "FX Scattergun") {
    special.push("Blast");
    rangeo = 10 + (tier * 5) + randomChoice([0, 5]);
    if (rangeo > 30) {
      rangeo = 30;
    }
    ammo.push(randomChoice([
      "1 shell",
      "2 shells",
      "6 shells",
      "12 shells"
    ]));
    ammo.push("1");
    bulk = "1";
  }
  else if (gunType === "FX Submachine Gun") {
    special.push("Automatic");
    var semiAuto1 = [
      randomChoice(["20", "40"]) + " charges",
      randomChoice(["1", "1", "2", "4"])
    ];
    var semiAuto2 = [randomChoice(["10", "12", "12", "24", "48"]) + " rounds", "1"];
    ammo = randomChoice([semiAuto1, semiAuto2]);
    bulk = randomChoice(["1", "1", "2"]);
  }
  else if (gunType === "FX Crossbolter") {
    special.push("Unwieldy");
    ammo.push(randomChoice([
      "1 arrow",
      "2 arrows",
      "4 arrows",
      "8 arrows"
    ]));
    ammo.push("1");
    bulk = "1";
  }
  else if (gunType === "FX Scout Rifle") {
    rangeo = 120
    ammo = [randomChoice(["6", "8", "10", "12",]) + " rounds", "1"];
    bulk = "1";
    special.push(randomChoice([
      "Boost " + randomChoice(boostDice[tier-1]),
      "Bright",
      "Quick Reload",
      "-"
    ]));
  }

  if (special.join(", ") === "Analog, -") {
    special = ["Analog"];
  }

  special = removeBlankValues(special);
  var printSpecial = special.join(", ");

  // Critical
  var critical = randomChoice(criticalTypeLong[randomDamageType]);
  // possibility of no critical in low tiers
  if (tier <= 2) {
    critical = randomChoice([critical, critical, "-"]);
  }
  critical = getCritDice(critical,level);

  type = "Longarm - two-handed"
  printNeat(printLevel,gunName,type,damage,rangeo,critical,ammo[0],ammo[1],printSpecial,bulk)

}

function heavyWeapon(level) {

  var tier = getTier(level);
  var randomDamageType = randomChoice(damageType);
  var gunType = randomChoice(heavySubType);
  var printLevel = level;
  var damage;

  // Railgun increase damage compared to other types
  if (gunType === "FX Railgun" && level != 20) {
    level += 1;
  }
  if (gunType === "FX Thrower" && randomDamageType === "Projectile") {
    randomDamageType = "Laser";
  }



  if (randomDamageType === "Projectile") {
    damage = randomChoice(heavyKineticDamageCurve[level]) + damageTypeAbbrv[randomDamageType];
  } else {
    damage = randomChoice(heavyEnergyDamageCurve[level]) + damageTypeAbbrv[randomDamageType];
  }
  var gunName = gunType.replace("FX", randomDamageType).replace("Projectile ", "").replace(" - Projectile", "");

  var special = [];
  var ammo = [];

  // Range
  var rangeo = 0;
  rangeo = randomChoice(rangeHeavy);
  rangeo += (10 * tier);
  if (randomDamageType === "Laser") {
    rangeo += 30;
  }
  if (rangeo > 120) {
    rangeo = 120;
  }

  special.push(randomChoice([
    "Analog",
    "",
    "",
    ""
  ]));

  if (gunType === "FX Cannon") {
    ammo = [
      randomChoice(["40", "80", "100"]) + " charges",
      randomChoice(["2", "4", "5", "10"])
    ];
    var radius = 5 * tier;
    rangeo -= 30;
    if (rangeo < 30) {
      rangeo = 30;
    }
    special.push("Explode (" + radius + " ft.)");
    special.push("Unwieldy");
  }
  else if (gunType === "Heavy FX Repeater") {
    var semiAuto1= [
      randomChoice(["60", "80", "100"]) + " charges",
      randomChoice(["1", "2", "4", "10"])
    ];
    var semiAuto2= [randomChoice(["12", "24", "48"]) + " rounds", "1"];
    ammo = randomChoice([semiAuto1, semiAuto2]);
    special.push("Automatic");
    special.push(randomChoice(["Penetrating", ""]));
    rangeo -= 30;
  }
  else if (gunType === "FX Thrower") {
    var specialloc = randomChoice(["Blast", "Line"]);
    if (specialloc === "Blast"){
      rangeo = 10 + (tier * 5) + randomChoice([0, 5]);
      if (rangeo > 30) {
        rangeo = 30;
      }
    }
    else if (specialloc === "Line") {
      rangeo = 10 + (tier * 15) + randomChoice([-5,0, 5]);
      if (rangeo > 80) {
        rangeo = 80;
      }
    }
    special.push(specialloc);
    special.push("Unwieldy");
    ammo = [
      randomChoice(["60", "80", "100"]) + " charges",
      randomChoice(["2", "4", "10"])
    ];
  }
  else if (gunType === "FX Railgun") {
    rangeo = 15 + (tier * 15) + randomChoice([-5,0, 5]);
    if (rangeo > 80) {
      rangeo = 80;
    }
    special.push("Line");
    special.push("Penetrating");
    special.push("Unwieldy");
    var semiAuto1= [
      randomChoice(["20", "40"]) + " charges",
      randomChoice(["2", "4", "10"])
    ];
    var semiAuto2= [randomChoice(["8", "12", "18", "24"]) + " rounds", "1"]
    ammo = randomChoice([semiAuto1, semiAuto2]);
  }
  else if (gunType === "Smart Gun - FX") {
    var semiAuto1= [
      randomChoice(["60", "80", "100"]) + " charges",
      randomChoice(["2", "4", "10"])
    ];
    var semiAuto2= [randomChoice(["12", "24", "48"]) + " rounds", "1"];
    ammo = randomChoice([semiAuto1, semiAuto2]);
    special.push("Automatic");
    special.push(randomChoice(["Penetrating", ""]));
    special.push("Stun");
  }
  if (gunType === "FX Mass Driver") {
    ammo = [
      randomChoice(["40", "60", "80"]) + " charges",
      randomChoice(["5", "10"])
    ];
    var radius = 5 * tier;
    special.push("Explode (" + radius + " ft.)");
    special.push("Unwieldy");
  }

  var bulk = randomChoice(["2", "2", "3"]);
  if (special.join(", ") === "Analog, -") {
    special = ["Analog"];
  }

  // Critical
  var critical = randomChoice(criticalTypeHeavy[randomDamageType]);
  // possibility of no critical in low tiers
  if (tier <= 2) {
    critical = randomChoice([critical, critical, "-"]);
  }

  special = removeBlankValues(special);
  var printSpecial = special.join(", ");
  critical = getCritDice(critical,level);

  type = "Heavy - two-handed"

  printNeat(printLevel,gunName,type,damage,rangeo,critical,ammo[0],ammo[1],printSpecial,bulk)

}

function sniperWeapon(level) {

  var tier = getTier(level);
  var randomDamageType = randomChoice(damageType);
  var gunType = randomChoice(sniperSubType);
  var printLevel = level;

  // Shirren-eye Rifle increase damage compared to other types
  if (gunType === "Shirren-eye FX Rifle" && level != 20) {
    level += 1;
  }
  if (gunType === "FX Beam Rifle" && randomDamageType === "Projectile") {
    randomDamageType = "Laser";
  }
  var damage = randomChoice(sniperDamageCurve[level]) + damageTypeAbbrv[randomDamageType];

  var gunName = gunType.replace("FX", randomDamageType).replace("Projectile ", "");

  var special = [];
  var ammo = [];

  // Range
  var rangeo = 0;
  rangeo = randomChoice(rangeSniper);
  rangeo += (10 * tier);
  if (randomDamageType === "Laser" || randomDamageType === "Projectile") {
    rangeo += 20;
  }
  if (rangeo > 100) {
    rangeo = 100;
  }

  if (randomDamageType === "Projectile") {
    special.push(randomChoice(["Analog", ""]));
  }

  if (gunType === "Shirren-eye FX Rifle") {
    ammo = [randomChoice(["4", "6", "8"]) + " rounds", "1"];
  }
  else if (gunType === "Bolt Action FX Rifle") {
    ammo = ["1 round", "1"];
  }
  else if (gunType === "Semi-Auto FX Rifle") {
    var semiAuto1 = [
      randomChoice(["20", "40", "60", "80"]) + " charges",
      randomChoice(["5", "10", "20"])
    ];
    var semiAuto2 = [randomChoice(["4", "8", "12", "16"]) + " rounds", "1"];
    ammo = randomChoice([semiAuto1, semiAuto2]);
  }
  else if (gunType === "Gas-operated FX Rifle") {
    var semiAuto1 = [
      randomChoice(["20", "40"]) + " charges",
      randomChoice(["2", "4", "10"])
    ];
    var semiAuto2 = [randomChoice(["4", "8", "12"]) + " rounds", "1"];
    ammo = randomChoice([semiAuto1, semiAuto2]);
  }
  else if (gunType === "FX Beam Rifle") {
    ammo = [
      randomChoice(["20", "40", "60"]) + " charges",
      randomChoice(["2", "4", "10"])
    ];
    special.push("Bright");
  }
  else if (gunType === "FX Sports Rifle") {
    ammo = [randomChoice(["4", "8", "12"]) + " rounds", "1"];
    special.push("Stun");
  }

  // add sniper range
  var radius = 250 * tier;
  if (radius > 1000) {
    radius = 1000;
  }
  special.push(randomChoice(["Penetrating", ""]));
  special.push("Sniper (" + radius + " ft.)");
  special.push("Unwieldy");

  var bulk = randomChoice(["1", "2"]);
  if (special.join(", ") === "Analog, -") {
    special = ["Analog"];
  }

  special = removeBlankValues(special);
  var printSpecial = special.join(", ");

  // Critical
  var critical = randomChoice(criticalTypeSniper[randomDamageType]);
  // possibility of no critical in low tiers
  if (tier <= 2) {
    critical = randomChoice([critical, "-"]);
  }
  critical = getCritDice(critical,level);

  type = "Sniper - two-handed"

  printNeat(printLevel,gunName,type,damage,rangeo,critical,ammo[0],ammo[1],printSpecial,bulk)
}

function generateWeapon() {

  var level;
  var type;
  var typeString;

  //get vars from page
  var levelDrop = $('#levelDrop').text();
  var typeDrop = $('#weaponDrop').text();

  //sort level
  if (levelDrop.includes("Any")) {
    level = getRandomInt(1, 20);
  } else if (levelDrop.includes("Tier")){
    tier = parseInt(levelDrop.replace("Tier ", ""));
    level = ((tier - 1) * 4 ) +getRandomInt(1, 4);
  } else if (levelDrop.includes("Level")){
    level = parseInt(levelDrop.replace("Level ", ""));
  } else {
    level = NaN;
  }

  //sort weapon
  if (typeDrop.includes("Any")) {
    type = getRandomInt(1, 6);
  } else if (typeDrop.includes("Basic melee")){
    type = 1;
  } else if (typeDrop.includes("Advanced melee")){
    type = 2;
  } else if (typeDrop.includes("Small arm")){
    type = 3;
  } else if (typeDrop.includes("Longarm")){
    type = 4;
  } else if (typeDrop.includes("Heavy")){
    type = 5;
  } else if (typeDrop.includes("Sniper")){
    type = 6;
  } else {
    type = NaN;
  }

  //generate
  switch (type) {
    case 1:
      basicMelee(level);
      typeString = "Basic Melee";
      break;
    case 2:
      advancedMelee(level);
      typeString = "Advanced Melee";
      break;
    case 3:
      smallArm(level);
      typeString = "Smallarm";
      break;
    case 4:
      longarm(level);
      typeString = "Long Arm";
      break;
    case 5:
      heavyWeapon(level);
      typeString = "Heavy";
      break;
    case 6:
      sniperWeapon(level);
      typeString = "Sniper";
      break;
    default:
      typeString = "Error";
      console.error("generation error");
  }
  //log event in analytics
  ga('send', 'event', 'Generation', 'weapon', typeString);
}

//Sets selected dropdown to dropdown display
//BOOTSTRAP 3
$(".dropdown-menu li a").click(function(){
  var selected = $(this).text();
  if (selected.includes("On") || selected.includes("Off")) {
    $(this).closest('.btn-group').find('.dropdown-toggle').html("Name Generator " + selected + ' <span class="caret"></span>');
    $(this).closest('.btn-group').find('.dropdown-toggle').val("Name Generator " + selected)
  }
  else {
    $(this).closest('.btn-group').find('.dropdown-toggle').html(selected + ' <span class="caret"></span>');
    $(this).closest('.btn-group').find('.dropdown-toggle').val(selected)
  }
});
