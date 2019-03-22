//CR: Perception DC,	Disable DC,	Init,	EAC,	KAC,	Good Save,	Poor Save, HP,	Attack,	Damage,	Save DC,	Good Skills
var trapStats = {
  "1/2": [17, 12, 4, 9, 13, 3, 0, 12, 9, '2d6', 11],
  "1": [21, 16, 6, 10, 14, 4, 1, 19, 11, '3d6', 12],
  "2": [23, 18, 7, 12, 16, 5, 2, 25, 12, '4d6', 13],
  "3": [24, 19, 8, 13, 17, 6, 3, 38, 13, '6d6', 14],
  "4": [26, 21, 9, 15, 19, 7, 4, 50, 14,'4d10+2', 15],
  "5": [27, 22, 10, 16, 20, 8, 5, 69, 15, '2d12+4', 15],
  "6": [29, 24, 11, 17, 21, 9, 6, 88, 17, '6d12', 16],
  "7": [30, 25, 12, 18, 22, 10, 7, 107, 19, '8d10', 17],
  "8": [32, 27, 14, 19, 23, 11, 8, 125, 20, '8d12', 18],
  "9": [33, 28, 15, 21, 25, 12, 9, 144, 22, '10d10+5', 18],
  "10": [35, 30, 16, 22, 26, 13, 10, 163, 23, '10d12', 19],
  "11": [36, 31, 17, 23, 27, 14, 11, 181, 24, '12d12', 20],
  "12": [38, 33, 19, 25, 29, 15, 12, 200, 27, '12d12+5', 21],
  "13": [39, 34, 20, 26, 30, 16, 13, 225, 28, '14d12', 21],
  "14": [41, 36, 21, 27, 31, 17, 14, 250, 29, '14d12+7', 22],
  "15": [42, 37, 22, 28, 32, 18, 15, 275, 30, '14d12+15', 23],
  "16": [44, 39, 23, 29, 33, 19, 16, 300, 31, '16d12+15', 24],
  "17": [45, 40, 24, 30, 34, 20, 17, 338, 32, '16d12+30', 24],
  "18": [47, 42, 26, 31, 35, 21, 18, 375, 33, '16d12+45', 25],
  "19": [48, 43, 27, 32, 36, 22, 19, 413, 34, '16d12+60', 26],
  "20": [50, 45, 28, 34, 38, 23, 20, 463, 35, '16d12+75', 27]
};

var trapTypes = {
  "Pit Trap": {
    "type": "analog",
    "disable": ["Engineering", "open trap door"],
    "trigger": "location",
    "reset": "manual",
    "effect": "20-ft. deep pit (FXDAMAGE falling damage); Reflex DC FXSAVE avoids; multiple targets (all targets in a 10-ft. square area)",
    "explanation": "A trap door with a deep pit underneath."
  },
  "Laser Blast Trap": {
    "type": "technological",
    "disable": ["Engineering", "disable motion sensors"],
    "trigger": "location",
    "reset": "1 minute",
    "effect": "laser +FXATTACK ranged (FXDAMAGE F)",
    "explanation": "When sensors detect movement in the trapped room, a wall panel opens and a mounted laser rifle opens fire on the triggering creature."
  },
  "Jolting Console Trap": {
    "type": "technological",
    "disable": ["Engineering", "disable shock plates"],
    "trigger": "touch",
    "reset": "immediate",
    "bypass": "wireless key card reader (Computers DC FXDISABLE to hack)",
    "effect": "arc of electricity (FXDAMAGE E); Reflex DC FXSAVE half",
    "explanation": "When an unsuspecting creature touches the trapped console, the console sparks with electricity, shocking the triggering creature."
  },
  "Mind Spores Trap": {
    "type": "hybrid",
    "disable": ["Engineering", "jam vent closed"],
    "trigger": "location",
    "reset": "1 hour",
    "effect": "spores (-4 penalty to Intelligence, Wisdom, and Charisma based ability checks, skill checks, and saving throws for 1d4 hours; this is a mind-affecting effect); Will DC FXSAVE negates; multiple targets (all targets in 30-ft. cone)",
    "explanation": "When sensors detect movement, a vent releases a spray of spores that affect the triggering creature's mental processes."
  },
  "Hacker's Curse Trap": {
    "type": "hybrid",
    "disable": ["Computers", "rewrite virus code"],
    "trigger": "touch",
    "reset": "1 minute",
    "effect": "curse (technological items become cursehacked; this is a curse effect); Will DC FXSAVE negates (items of 8th level or above only; lower-level items receive no save); multiple targets (tech items carried by all creatures within 60 ft. of console",
    "explanation": "When an unauthorized user attempts to hack the trapped computer console, a magical curse script downloads into nearby technological items, which become cursehacked. A creature using a cursehacked item takes a -4 penalty to attack rolls (if it's a weapon), AC (if it's a suit of armor), skill checks (if it's involved in attempting the skill check), and so on. The virus replicates in other technological items if they touch either a cursehacked item or a creature carrying or wearing one. This curse remains until removed by remove affliction or similar magic or by a successful Computers DC 35 check that takes 10 minutes for a single item."
  },
  "Explosive Detonation Trap": {
    "type": "technological",
    "disable": ["Engineering", "defuse explosive"],
    "trigger": "proximity (thermal, 5 feet)",
    "reset": "none",
    "effect": "explosion (FXDAMAGE F); Reflex DC FXSAVE half; multiple targets (all targets within 20-ft. radius)",
    "explanation": "When the trap detects a living creature within 5 feet, it explodes."
  },
  "Nanoflechette Launcher Trap": {
    "type": "technological",
    "disable": ["Engineering", "close one aperture"],
    "trigger": "location",
    "reset": "1 minute",
    "init": true,
    "duration": "10 rounds",
    "effect": "nanoflechettes +FXATTACK ranged (FXDAMAGE P); multiple targets (all targets in room)",
    "explanation": "When sensors detect movement in the trapped room, the doors seal and five wall apertures open on its initiative count to launch nanoflechettes at everyone in the room. The trap fires nanoflechettes for 10 rounds, unless all the apertures have been closed or destroyed. An aperture has EAC FXEAC, KAC FXKAC, Fort + FXGOOD. Ref + FXPOOR, hardness 10, and FXHPDIV5 Hit Points."
  },
  "Obedience Implant Trap": {
    "type": "hybrid",
    "disable": ["Engineering", "disable lancet", "Mysticism", "render implant ineffective"],
    "trigger": "proximity (visual, 10 feet)",
    "reset": "manual",
    "effect": "lancet +FXATTACK melee (FXDAMAGE P plus dominate person); Will DC FXSAVE negates dominate person effect",
    "explanation": "When the trap sees a creature within 10 feet, a lancet implants a magic microchip in the triggering creature, which falls under the telepathic control of the trap's creator, as per dominate person (but affecting any creature). Removing the chip safely requires a 1-minute surgical procedure and a successful Medicine DC 28 check. Failure deals 3d6 slashing damage and leaves the implant in place. An implanted chip prevents magical means of ending the spell effect. Any later successful save (such as to resist a command) renders the spell effect dormant for 1 round rather than ending it."
  },
  "Disintegration Chamber Trap": {
    "type": "technological",
    "disable": ["Engineering", "disable beam"],
    "trigger": "location",
    "reset": "1 minute",
    "effect": "disintegration beam (FXDAMAGE); Fortitude DC FXSAVE half damage; onset delay (1 round); multiple targets (all targets in room)",
    "explanation": "When organic matter enters the trapped room, a disintegration beam permeates it 1 round later, atomizing everything within."
  },
  "Soul Upload Trap": {
    "type": "hybrid",
    "disable": ["Computers", "disrupt system's upload capacity", "Mysticism", "scramble magic"],
    "trigger": "location",
    "reset": "immediate",
    "effect": "death, soul uploaded into data module, Will DC FXSAVE negates; onset delay (1 minute); multiple targets (all targets in room)",
    "explanation": "One minute after living creatures enter the trapped room, they are bombarded with energy that digitizes and removes their souls, leaving their bodies lifeless husks. The digitized souls are uploaded into data modules linked to the room's computer system. Hacking the system via a successful Computers check can release trapped souls, but it usually has a wipe module. A failed attempt might purge the souls. Casting raise dead on an affected body requires a successful DC 32 caster level check or the spell fails."
  },
  "Reverse Gravity Trap": {
    "type": "technological",
    "disable": ["Engineering", "disable gravity pump"],
    "trigger": "proximity (thermal, 5 feet)",
    "reset": "1 minute",
    "effect": "slammed on roof (FXDAMAGE falling damage); Reflex DC FXSAVE half damage; multiple targets (all targets in room)",
    "explanation": "Stepping near the sensor of this trap will reverse gravity in the room, slamming everyone onto the roof."
  },
  "Pulled Back Branch Trap": {
    "type": "analog",
    "disable": ["Engineering", "release branch"],
    "trigger": "location",
    "reset": "manual",
    "effect": "slapped in face (FXDAMAGE B); Reflex DC FXSAVE avoids",
    "explanation": "Its a pulled back branch"
  },
  "Point Defense Cannon Trap": {
    "type": "technological",
    "disable": ["Engineering", "disable one cannon"],
    "trigger": "location",
    "reset": "1 minute",
    "bypass": "wireless key card reader (Computers DC FXDISABLE to hack)",
    "init": true,
    "duration": "3 rounds",
    "effect": "chain cannon +FXATTACK ranged (FXDAMAGE P); multiple targets (all targets in room)",
    "explanation": "When sensors detect movement in the trapped room, the doors seal and 2 cannons mounted on opposite walls start firing at everyone in the room. The trap fires for 3 rounds, unless both cannons have been disabled or destroyed. Each cannon has EAC FXEAC, KAC FXKAC, Fort + FXGOOD. Ref + FXPOOR, and FXHPDIV2 Hit Points."
  },
  "Heated Door Knob Trap": {
    "type": "technological",
    "disable": ["Engineering", "disable heating mechanism"],
    "trigger": "touch",
    "reset": "immediately",
    "effect": "burn flesh (FXDAMAGE F, Burn 1d8)",
    "explanation": "When the door knob is touched it causes some nasty fire damage, enough to damage through suits and armor."
  },
  "Janitor Robot Trap": {
    "type": "technological",
    "disable": ["Engineering", "disable robot"],
    "trigger": "location",
    "init": true,
    "reset": "1 minute",
    "effect": "garbage crusher +FXATTACK melee (FXDAMAGE B)",
    "explanation": "Entering the trapped room causes an old janitor robot to activate, after which it relentlessly chases down anyone in the room at 10ft per round, if it comes within 5 feet of a creature it will attack with its garbage crusher"
  },
  "Paint Can Pendulum Trap": {
    "type": "analog",
    "disable": ["Engineering", "untie paint can"],
    "trigger": "location (doorway)",
    "reset": "manual",
    "effect": "swinging paint can (FXDAMAGE B); Reflex DC FXSAVE avoids",
    "explanation": "A paint can is tied to a long piece of string which is tied to a door frame. Triggering this trap causes the paint can to swing like a pedulum into the creature that triggered it. Paint can is filled with depleted uranium for extra mass."
  },
  "Save Or Die Trap": {
    "type": "magical",
    "disable": ["Mysticism", "skirt death"],
    "trigger": "proximity (5 feet)",
    "reset": "manual",
    "effect": "death; Fortitude DC FXSAVE saves",
    "explanation": "Chaotic GMs only. The forces of the universe attempt to nullify the existence of the creature that triggers this trap."
  },
  "Atmosphere Evacuation Trap": {
    "type": "technological",
    "disable": ["Engineering", "seal vents"],
    "trigger": "location",
    "reset": "none",
    "effect": "vacuum; all atmosphere vented is from the room; onset delay (1 minute)",
    "explanation": "1 minute after entering the trapped room the doors seal and all atmosphere is vented from the room creating a vacuum"
  },
  "Faulty Medical Station Trap": {
    "type": "technological",
    "disable": ["Computers", "rewrite bad code"],
    "trigger": "touch (with patient in bay)",
    "reset": "none",
    "effect": "non vital organ removal (FXDAMAGE S); Reflex DC FXSAVE avoids",
    "explanation": "Looks like a fully functional medical station, using it will cause the station to attempt to remove the patients non vital organs. If it disabled it functions as a medical lab (with room for only 1 patient)"
  },
  "Rampant AI Trap": {
    "type": "technological",
    "disable": ["Computers", "lock ports"],
    "trigger": "touch",
    "reset": "none",
    "effect": "rampant AI (technological items become disabled); Will DC FXSAVE negates; multiple targets (tech items carried by all creatures within 60 ft. of console/data module",
    "explanation": "When a craeture attempts to hack the trapped computer console or reads a trapped data module, a rampant AI downloads into nearby technological items, which become disabled. These items will no longer work and will act as if they were never equiped. The AI spreads other technological items if they touch. The AI remains until removed by a successful Computers DC 35 check that takes 10 minutes for a single item."
  },
  "Spell Gem Trap": {
    "type": "magical",
    "disable": ["Mysticism", "remove gem"],
    "trigger": "proximity (5 feet)",
    "reset": "none",
    "effect": "spell gem effect",
    "explanation": "A spell gem is placed on this trap. A living creature coming within 5 feet of this trap will activate the spell gem and the stored spell is cast, targetting the closet creature. Successfully disabling this trap grants the disabler access to the spell gem."
  },
  "Radiation Soak Trap": {
    "type": "technological",
    "disable": ["Engineering", "disable control panel"],
    "trigger": "location",
    "reset": "1 minute",
    "effect": "radiation burns (FXDAMAGE); radiation sickness (FXDAMAGE, Nauseated) damage taken after 1 hour and then every hour until creature is treated in a medical lab; Fortitude DC FXSAVE negates; multiple targets (all targets in 30-ft. cone)",
    "explanation": "This trap will soak the trapped area in radiation. Creatures take immediate burn damage and then radiation sickness damage every hour until treated in a medical lab. creatures become nauseated every time raditation sickness damage is taken."
  },
  "Psychological Horror Trap": {
    "type": "hybrid",
    "disable": ["Engineering","disable hologram projector","Mysticism", "block mind reader"],
    "trigger": "location",
    "reset": "1 hour",
    "effect": "primal fear (FXDAMAGE) target becomes Panicked; Fortitude DC FXSAVE negates",
    "explanation": "This trap will attempt to find the targets greatest fear and then projects it as a hologram while simultaneously weakening the affected creatures ability to handle fear."
  },
  "Countdown Trap": {
    "type": "technological",
    "disable": ["Engineering","disable hologram projector"],
    "trigger": "location",
    "reset": "1 hour",
    "effect": "after button is pushed 5 times, plasma launcher +FXATTACK ranged (FXDAMAGE E&F); multiple targets (all targets in room)",
    "explanation": "This is a room with a single button on a pedestal in the middle and a large display panel on the wall. Entering the room causes the doors to seal and a countdown to start flashing on the screen. If the countdown reaches zero the doors simply open. Pressing the button resets the countdown. If the button is pushed 5 times the trap is sprung."
  },
  "Portal Trap": {
    "type": "magical",
    "disable": ["Mysticism", "close portal"],
    "trigger": "touch",
    "reset": "1 hour",
    "effect": "teleportation, target is teleported 100-ft. (rounded down to avoid walls etc) in a random direction (roll 1d8); Reflex DC FXSAVE avoids",
    "explanation": "A teleportation portal is hidden under a false floor panel, steeping on the panel will cause it to fall away and any creature on the space will fall into a teleportation portal"
  },
  "Rolling Boulder Trap": {
    "type": "analog",
    "disable": ["Engineering", "secure boulder"],
    "trigger": "location",
    "init": true,
    "reset": "none",
    "effect": "roll over (FXDAMAGE B, knocked prone); Reflex DC FXSAVE avoids",
    "explanation": "Triggering this trap causes a huge boulder to start rolling down a hallway at 40-ft. per round. Catching a creature requires the creature to make a reflex save, taking damage on a fail."
  },
  "Sonic Blast Trap": {
    "type": "technological",
    "disable": ["Engineering", "disable motion sensors"],
    "trigger": "location",
    "reset": "1 minute",
    "effect": "sonic blast +FXATTACK ranged (FXDAMAGE So, deafened)",
    "explanation": "When sensors detect movement in the trapped room, a wall panel opens and a mounted sonic weapon fires on the triggering creature."
  },
  "Debilitation Beam Trap": {
    "type": "hybrid",
    "disable": ["Engineering", "disable sensor array"],
    "trigger": "location",
    "reset": "1 minute",
    "effect": "debilitation beam +FXATTACK ranged (roll 1d10[ blinded, confused, dazed, deafened, exhausted, frightened, nauseated, panicked, sickened, stunned ] )",
    "explanation": "Triggering this trap causes the creature to be blasted with a mix of sounds, lights, heat, and magic which inflicts a random condition on a successful hit."
  },
  "Exploding Console Trap": {
    "type": "technological",
    "disable": ["Engineering", "defuse explosives"],
    "trigger": "touch",
    "reset": "none",
    "effect": "explosion (FXDAMAGE F); Reflex DC FXSAVE half; multiple targets (all targets in a 20-ft. square area)",
    "explanation": "When an unsuspecting creature touches the trapped console, the console explodes."
  },
  "Undying Love Trap": {
    "type": "magic",
    "disable": ["Mysticism", "deny love"],
    "trigger": "touch",
    "reset": "1 hour",
    "effect": "The target falls in love with the very next thing that they see, and will do anything to be close to their desire",
    "explanation": "I feel it in my fingers, I feel it in my toes. Well, love is all around me and so the feeling grows."
  },
};

xp = {
  "1/2": "200",
  "1": "400",
  "2": "600",
  "3": "800",
  "4": "1,200",
  "5": "1,600",
  "6": "2,400",
  "7": "3,200",
  "8": "4,800",
  "9": "6,400",
  "10": "9,600",
  "11": "12,800",
  "12": "19,200",
  "13": "25,600",
  "14": "38,400",
  "15": "51,200",
  "16": "76,800",
  "17": "102,400",
  "18": "153,600",
  "19": "204,800",
  "20": "307,200"
};

var indexCounter = 0;

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
}

function printPanel(trap,cr) {
  var $outputArea = $(".output.area").first();
  var storeOutput = $( "div.output.area" ).html();
  $outputArea.empty();

  indexCounter += 1;
  indexString = "index" + indexCounter.toString();

  var panelTitle =  "CR " + cr + " " + trap;
  var panelBody =   "<h5 class=\"text-muted\"><i>" + trapTypes[trap].explanation + "</i></h5>" +
                    "<p><b>XP " + xp[cr] + "</b>" +
                    "<br><b>Type </b>" + trapTypes[trap].type + "; <b>Perception </b> DC " + trapStats[cr][0] +
                    getDisable(trap) +
                    "<br><b>Trigger </b>" + trapTypes[trap].trigger + getInit(trap) + getDuration(trap) + "; <b>Reset </b>" + trapTypes[trap].reset +
                    getBypass(trap) +
                    "<br><b>Effect </b>" + trapTypes[trap].effect + "</p>"

panelBody = panelBody.replace('FXDAMAGE',trapStats[cr][9]).replace('FXSAVE',trapStats[cr][10]).replace('FXATTACK',trapStats[cr][8]).replace('FXDISABLE',trapStats[cr][1]).replace('FXEAC',trapStats[cr][3]).replace('FXKAC',trapStats[cr][4]).replace('FXGOOD',trapStats[cr][5]).replace('FXPOOR',trapStats[cr][6])
panelBody = panelBody.replace('FXHPDIV5',calcHP(cr,5)).replace('FXHPDIV2',calcHP(cr,2));

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

function getBypass(trap) {
  if (trapTypes[trap].hasOwnProperty('bypass')) {
    return "; <b>Bypass </b>" + trapTypes[trap].bypass
  }
  return "";
}

function getInit(trap) {
  if (trapTypes[trap].hasOwnProperty('init')) {
    return "; <b>Init </b>+" + trapStats[cr][2]
  }
  return "";
}

function getDuration(trap) {
  if (trapTypes[trap].hasOwnProperty('duration')) {
    return "; <b>Duration </b>" + trapTypes[trap].duration
  }
  return "";
}

function getDisable(trap) {
  var disable = "; <b>Disable </b> " + trapTypes[trap].disable[0] + " DC " + trapStats[cr][1] + " (" + trapTypes[trap].disable[1] + ")"
  if (trapTypes[trap].disable.length > 2) {
    disable = disable + " or " + trapTypes[trap].disable[2] + " DC " + trapStats[cr][1] + " (" + trapTypes[trap].disable[3] + ")"
  }
  return disable
}

function calcHP(cr,dividedby) {
  return Math.round((Number(trapStats[cr][7])/dividedby))
}

function removeEntry(index) {
  $(".panel."+index).remove();
}

function generateTrap() {

  var trap = Object.getOwnPropertyNames(trapTypes).selectRandom();
  console.log(Object.getOwnPropertyNames(trapTypes))

  var crDrop = $('#trapPicker').val().trim();

  //level
  if (crDrop.includes("Any")) {
    cr = Object.getOwnPropertyNames(trapStats).selectRandom();
  } else if (crDrop.includes("CR")){
    cr = crDrop.replace("CR ", "");
  } else {
    level = NaN;
    console.log('error getting level');
  }

  printPanel(trap,cr);

  //log event in analytics
  //ga('send', 'event', 'Generation', 'trap');
}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});
