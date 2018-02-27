//globals
var attackIndexCounter = 0;

//This funcion reads the state of all the dropdowns in the wizard, uses that info to retrieve the appropriate data from the data objects, then builds and displays the stat block
function buildStatBlock() {

  //try gathering data
  try {

    //new stat block object
    var statBlock = {};

    //Step 1

    //base array
    var CRDrop = $('[data-id="CRDrop"]').text().trim().replace("CR ","");
    var arrayDrop = $('[data-id="arrayDrop"]').text().trim();

    statBlock.Cr = CRDrop;
    statBlock.Base = arrayDrop;
    //monster XP
    statBlock.Xp = xp[CRDrop];

    var baseStats = [];
    if (arrayDrop == 'Combatant') {
      baseStats = combatantMainStats[CRDrop].concat(combatantAttackStats[CRDrop]);
    } else if (arrayDrop == 'Expert') {
      baseStats = expertMainStats[CRDrop].concat(expertAttackStats[CRDrop]);
    } else if (arrayDrop == 'Spellcaster') {
      baseStats = spellcasterMainStats[CRDrop].concat(spellcasterAttackStats[CRDrop]);
    }

    //assign base stat values
    for (i = 0; i < statLabels.length; i++) {
      statBlock[statLabels[i]] = baseStats[i]
    }

    // step 2 - creature type

    var creatureTypeDrop = $('[data-id="creatureTypeDrop"]').text().trim();

    statBlock.CreatureType = creatureTypeDrop;
    statBlock.CreatureAdjustments = creatureType[creatureTypeDrop].Adjustments;


    //Senses
    if (creatureType[creatureTypeDrop].hasOwnProperty("Senses")){
      statBlock["Senses"] = creatureType[creatureTypeDrop].Senses;
    }

    //otherAbilities
    if (creatureType[creatureTypeDrop].hasOwnProperty("OtherAbilities")){
      statBlock["OtherAbilities"] = creatureType[creatureTypeDrop].OtherAbilities;
    }

    //Immunities
    if (creatureType[creatureTypeDrop].hasOwnProperty("Immunities")){
      statBlock["Immunities"] = creatureType[creatureTypeDrop].Immunities;
    }

    //Options - only applies to construct and animal - so far
    if ($('[data-id="optionDrop"]').length){
      if (creatureTypeDrop == "Animal"){
        statBlock.int = -Number($('[data-id="optionDrop"]').text().trim().replace('Set intelligence -',''));
      } else if (creatureTypeDrop == "Construct") {
        if (!$('[data-id="optionDrop"]').text().trim().includes("Not")){
          statBlock.int = '-';
          statBlock.OtherAbilities = statBlock.OtherAbilities.concat(["Mindless"]);
        }
      } else {console.log("option error")}
    }

    //step 3 - subtype
    var subTypeDrop = $('#creatureSubTypeDrop').val().trim()

    //if option is selected
    if (subTypeDrop != '' && subTypeDrop != 'None'){

      statBlock.SubType = subTypeDrop;

      if (creatureSubType[subTypeDrop].hasOwnProperty("SubRaces")){
        var subRaceDrop = $('#stepThreeOptionDrop').val().trim();
        var subTypeObject = creatureSubType[subTypeDrop].SubRaces[subRaceDrop];
      } else {
        var subTypeObject = creatureSubType[subTypeDrop];
      }

      for (trait in subTypeObject) {

        if (trait != "Description" && trait != "Options"){
          var traitArray = subTypeObject[trait];
          if (statBlock.hasOwnProperty(trait)){
            statBlock[trait] = statBlock[trait].concat(traitArray);
          } else {
            statBlock[trait] = traitArray;
          }

        } else if (trait == "Options") {
          var optionDrop = $('#stepThreeOptionDrop').val().trim();
          optionTrait = subTypeObject.Options[0]

          if(!optionDrop.includes("Not")){
            if (statBlock.hasOwnProperty(optionTrait)){
              statBlock[optionTrait] = statBlock[optionTrait].concat([optionDrop]);
            } else {
              statBlock[optionTrait] = [optionDrop];
            }
          }
        }
      }
    }

    //step 4 -class

    statBlock = getClassStats(statBlock);

    //step 5 - graft
    var graft = $('#graftDrop').val().trim();

    //iterate through selected graft traits
    if (graft != '' && graft != 'None') {

      statBlock.Graft = graft;

      for (var graftType in graftTemplates){
        //iterate traits in all graft types. eg . dragons, simple
        if (graftTemplates[graftType].hasOwnProperty(graft)) {

          for (trait in graftTemplates[graftType][graft]) {

            if (trait != "Description"){//skip descriptions
              var traitArray = graftTemplates[graftType][graft][trait];
              //check if trait is array or object, handle each differently
              if (statBlock.hasOwnProperty(trait)){
                if (Array.isArray(traitArray)){
                  //handle array
                  statBlock[trait] = statBlock[trait].concat(traitArray);
                } else {
                  //handle object
                  statBlock[trait] = $.extend({}, statBlock[trait], traitArray);
                }
              } else {
                //if trait does not already exist, create and assign value
                statBlock[trait] = traitArray;
              }
            }
          }
        }

      }
    }
    //step 6 - special Abilities

    //from grafts
    var graftOther = getGraftAbilities("Other");
    if (graftOther.length > 0) {
      statBlock.OtherAbilitiesGraft = graftOther;
    }

    var graftSpecial = getGraftAbilities("Special");
    if (graftSpecial.length > 0) {
      statBlock.SpecialAbilitiesGraft = graftSpecial;
    }

    //speeds
    //burrow
    if ($('#inputBurrow').length != 0){
      var burrow = 'burrow ' + $('#inputBurrow').val().trim() + ' ft.';

      if (statBlock.hasOwnProperty('Speed')){
        if (!statBlock.Speed.join(',').includes('burrow')){
          statBlock.Speed.push(burrow);
        }
      } else {
        statBlock.Speed = [burrow];
      }
    }
    //climb
    if ($('#inputClimb').length != 0){
      var climb = 'climb ' + $('#inputClimb').val().trim() + ' ft.';

      if (statBlock.hasOwnProperty('Speed')){
        if (!statBlock.Speed.join(',').includes('climb')){
          statBlock.Speed.push(climb);
        }
      } else {
        statBlock.Speed = [climb];
      }
    }
    //fly
    if ($('#inputFly').length != 0){
      var fly = 'fly ' + $('#inputFly').val().trim() + ' ft. (' + $('#flyInputDrop').val().trim() + ')';

      if (statBlock.hasOwnProperty('Speed')){
        if (!statBlock.Speed.join(',').includes('fly')){
          statBlock.Speed.push(fly);
        }
      } else {
        statBlock.Speed = [fly];
      }
    }
    //swim
    if ($('#inputSwim').length != 0){
      var swim = 'swim ' + $('#inputSwim').val().trim() + ' ft.';

      if (statBlock.hasOwnProperty('Speed')){
        if (!statBlock.Speed.join(',').includes('swim')){
          statBlock.Speed.push(swim);
        }
      } else {
        statBlock.Speed = [swim];
      }
    }

    //weaknesses if any
    if ($('#inputWeakness').length != 0){
      statBlock.weaknessAbilities = $('#inputWeakness').val().trim();
    }

    //vulnerabilities if any
    if ($('#inputVulnerability').length != 0){
      var stats = $('#inputVulnerability').val().trim();
      if (stats != '') {
        if (stats.includes(',')){
          var vulners = stats.split(',')
        } else {
          var vulners = [stats];
        }

        if (statBlock.hasOwnProperty('Vulnerable')){
          statBlock.Vulnerable = statBlock.Vulnerable.concat(vulners);
        }
        else {
          statBlock.Vulnerable = vulners;
        }
      }
    }

    //dependencies if any
    if ($('#inputDependency').length != 0){
      var depends = $('#inputDependency').val().trim();
      if (stats != '') {
        if (depends.includes(',')){
          statBlock.Dependencies = depends.split(',')
        } else {
          statBlock.Dependencies = [depends];
        }
      }
    }

    //special abilities selected if any
    var specialList = $('#specialDrop').val().toString().trim();
    if(specialList != ''){
      if (specialList.includes(',')){
        var subArray = specialList.split(',');
      } else {
        var subArray = [specialList];
      }
      //Split adjustments and abilities
      var subArrayAdjustment = [];
      var subArrayAbility = [];

      for (var i = 0; i < subArray.length; i++) {
        if (specialAbilities.Abilities.hasOwnProperty(subArray[i])){
          subArrayAbility.push(subArray[i]);
        } else if (specialAbilities.AdjustmentAbilities.hasOwnProperty(subArray[i])){
          subArrayAdjustment.push(subArray[i]);
        }
      }

      if (subArrayAdjustment.length > 0){
        statBlock.AdjustmentAbilitiesDescription = subArrayAdjustment;
      }
      if (subArrayAbility.length > 0){
        statBlock.SpecialAbilitiesDescription = subArrayAbility;
      }

    }

    //free abilities selected if any
    var freeList = $('#freeDrop').val().toString().trim();
    if(freeList != ''){
      if (freeList.includes(',')){
        var subArray = freeList.split(',');
      } else {
        var subArray = [freeList];
      }
      statBlock.FreeAbilities = subArray
    }


    //step 7 - attacks
    statBlock.attackFocus = $("#attackDrop").val().trim();

    //step 8 - skills and Modifiers

    //overwrite master+ good skills with selected + graft skills
    statBlock.MainAbilityScores = $(".stepSevenAbilityDescription").first().text().replace('Main ability scores: (','').replace(')','').split(',')
    statBlock.MasterSkills = $(".stepSevenMasterDescription").first().text().replace('Master skills: ','').replace(/\*/g,'').split(',');
    statBlock.GoodSkills = $(".stepSevenGoodDescription").first().text().replace('Good skills: ','').replace(/\*/g,'').split(',');

    //step 9 - spells

    //TODO checks only step 3 grafts not step 5
    //get any spelllike abilities from grafts
    var subtype = $('#creatureSubTypeDrop').val().trim();
    if (subtype != '' && subtype != 'None') {
      if (creatureSubType[subtype].hasOwnProperty("Spell-likeAbilities")){
        statBlock.spellLikeFromGrafts = creatureSubType[subtype]["Spell-likeAbilities"];
      }
      if (creatureSubType[subtype].hasOwnProperty("SubRaces")){
        subRaceDrop = $('#stepThreeOptionDrop').val().trim();
        if (creatureSubType[subtype].SubRaces[subRaceDrop].hasOwnProperty("Spell-likeAbilities")){
          statBlock.spellLikeFromGrafts = creatureSubType[subtype].SubRaces[subRaceDrop]["Spell-likeAbilities"];
        }
      }
    }
    //spells from descriptions
    spellArray = [];
    for (var i = 1; i < 4; i++) {//loop three times
      //grab text from descriptions
      var spellSlot = $(".stepEight"+ i.toString() +"Description").first().text()

      //check if there is text there and assign to stat block
      if (spellSlot.length > 2){
        var spells = spellSlot.split(': ');
        var frequency = spells[0];
        //remove connection tag from mytic spell lists
        spells[1] = spells[1].replace(' (from connection)','')
        //make sure values are arrays even if only 1 value
        if (spells[1].includes(',')){
          var subArray = spells[1].split(', ');
        } else {
          var subArray = [spells[1]];
        }
        spellArray[spellArray.length] = [frequency].concat(subArray);
      }
    }
    //if no spells chosen, dont add spell list
    if (spellArray.length != 0){
      statBlock.Spellcasting = spellArray;
    }

    //step 10 - final checks

    statBlock.creatureSize = $('#sizeDrop').val().trim();

  } catch(err) {
    document.getElementById("errorMessage").innerHTML = "statblock data gathering error: " + err.message + '<br><br>' + err.stack;
    $('.alert-this-red').show();
    return false;
  }

  //
  //stat block adjustments
  //

  try {

    //choose creature or class adjustments to apply
    var classDrop = $('#classDrop').val().trim();
    //choose class or creature adjustments not both
    if (classDrop != '' && classDrop != 'None'){
      var precedenceDrop = $('#precedenceDrop').val().trim();
      if (precedenceDrop.includes("Creature")) {
        var adjustments = statBlock.CreatureAdjustments;
      } else if (precedenceDrop.includes("Class")){
        var adjustments = statBlock.ClassAdjustments;
      }
    } else {
      var adjustments = statBlock.CreatureAdjustments;
    }
    //apply
    for (adjustment in adjustments) {
      if (adjustment == "anySave"){
        //use picker
        var savingThrow = $('[data-id="SavingThrowDrop"]').text().trim().replace(' +2','').toLowerCase();
        statBlock[savingThrow] += 2;
      } else if (adjustment == "None") {
        //do nothing
      } else if (statBlock.hasOwnProperty(adjustment)){
        //check if proprty already has entry
        statBlock[adjustment] += adjustments[adjustment];
      } else {
        statBlock[adjustment] = adjustments[adjustment];
      }
    }

    //apply attack mods if any
    if (statBlock.hasOwnProperty('attackMod')){

      statBlock.highAttackBonus = '+' + (Number(statBlock.highAttackBonus.replace('+','')) + statBlock.attackMod).toString();
      statBlock.lowAttackBonus = '+' + (Number(statBlock.lowAttackBonus.replace('+','')) + statBlock.attackMod).toString();
    }

    if (statBlock.hasOwnProperty("skillCheckMod")){
      //increase skill scores
      statBlock.masterSkills[0] = statBlock.masterSkills[0] + statBlock.skillCheckMod;
      statBlock.goodSkills[0] = statBlock.goodSkills[0] + statBlock.skillCheckMod;
    }

    //apply ability mods to selected ability scores
    scoreNames = ['str','dex','con','int','wis','cha'];
    for (i = 0; i < scoreNames.length; i++) {
      if (!statBlock.hasOwnProperty(scoreNames[i])){
        ability = scoreNames[i].capitalise();
        if (statBlock.MainAbilityScores.includes(ability)){
          index = statBlock.MainAbilityScores.indexOf(ability);

          statBlock[scoreNames[i]] = '+' + statBlock['abilityScoreModifier'+ index.toString()].toString();
        } else {
          statBlock[scoreNames[i]] = '+0';
        }
      }
    }

    statBlock.initiative = statBlock.dex

    //add any initiative mods. ie from operative
    if (statBlock.hasOwnProperty("initiativeMod")){
      //increase initiative
      if (statBlock.initiativeMod == "+CR/4"){
        statBlock.initiative =  '+' + (Number(statBlock.initiative.replace('+','')) + Math.floor(Number(statBlock.Cr) / 4)).toString()
      }
    }

    //apply any adjustment ABILITIES
    if (statBlock.hasOwnProperty('AdjustmentAbilitiesDescription')){
      var adjustments = statBlock.AdjustmentAbilitiesDescription
      if (adjustments.includes("Extra Hit Points")){
        //add 20% hitpoints

        statBlock.hitPoints = Math.round(statBlock.hitPoints + (statBlock.hitPoints * 0.2));

      }
      if (adjustments.includes("Skillful")){
        //increase skill scores
        statBlock.masterSkills[0] = statBlock.masterSkills[0] + 1;
        statBlock.goodSkills[0] = statBlock.goodSkills[0] + 1;
      }
      if (adjustments.includes("Save Boost")){
        //increase save values
        var saveInput = $('#BoostDrop').val().trim();
        if (saveInput.startsWith("All")) {
          statBlock.fortitude = statBlock.fortitude + 1;
          statBlock.reflex = statBlock.reflex + 1;
          statBlock.will = statBlock.will + 1;
        } else {
          var pick = saveInput.replace(' +3','').toLowerCase();
          statBlock[pick] = statBlock[pick] + 3;
        }
      }
    }

    //apply DR
    if (statBlock.hasOwnProperty('DR')){
      if (statBlock['DR'].hasOwnProperty('DR')){
        var drsplit = statBlock['DR']['DR'].split('/')
        var drcr = Number(statBlock.Cr.replace('1/2','1').replace('1/3','1'));
        drcr = drcr + Number(drsplit[0].replace('CR',''));
        if (drcr < 1){
          drcr = 1;
        }
        statBlock.DRapplied = drcr.toString() + '/' + drsplit[1];
      }
    }
    if (statBlock.hasOwnProperty('DRtable')){
      var crTable = statBlock.DRtable['CR']
      var drcr = Number(statBlock.Cr.replace('1/2','1').replace('1/3','1'));
      var choice = 'none'
      for (i = 0; i < crTable.length; i++) {
        if (drcr >= crTable[i]) {
          choice = i;
        }
      }
      if (choice != 'none') {
        statBlock.DRapplied = statBlock.DRtable['DR'][choice].toString() + '/' + statBlock.DRtable.type;
      }
    }
    //apply SR
    if (statBlock.hasOwnProperty('SRtable')){
      var crTable = statBlock.SRtable['CR']
      var srcr = Number(statBlock.Cr.replace('1/2','1').replace('1/3','1'));
      var choice = 'none'
      for (i = 0; i < crTable.length; i++) {
        if (srcr >= crTable[i]) {
          choice = i;
        }
      }
      if (choice != 'none') {
        var sr = statBlock.SRtable['SR'][choice];
        if (sr.toString().includes('+CR') ){
          statBlock.SRapplied = (Number(sr.replace('+CR','')) + srcr).toString();
        } else {
          statBlock.SRapplied = sr;
        }
      }
    }
    //apply senses per cr
    if (statBlock.hasOwnProperty('SensesTable')){
      var SensesTable = statBlock.SensesTable;
      var cr = Number(statBlock.Cr.replace('1/2','1').replace('1/3','1'));
      var senseArray = [];
      var currentSense = '';

      for (sense in SensesTable) {
        if (SensesTable[sense] == "always") {
          senseArray.push(sense);
        } else if (cr >= SensesTable[sense]){
          currentSense = sense;
        }
      }
      if (currentSense != ''){
        senseArray.push(currentSense);
      }

      if (senseArray.length > 0){
        if (statBlock.hasOwnProperty('Senses')){
          statBlock.Senses = statBlock.Senses.concat(senseArray);
        } else {
          statBlock.Senses = senseArray;
        }
      }
    }


    //apply any calculated abilities
    if (statBlock.hasOwnProperty('CalculatedAbilities')){
      for (ability in statBlock.CalculatedAbilities){
        //any breath weapons
        if (ability == "Breath weapon") {
          var breathEntry = 'breath weapon';

          var cr = Number(statBlock.Cr.replace('1/2','1').replace('1/3','1'));

          var range1 = Number((statBlock.CalculatedAbilities["Breath weapon"].range.split('+'))[0]);
          var range2 = Math.floor(cr/2) * Number(statBlock.CalculatedAbilities["Breath weapon"].range.split('+')[1].split('per')[0])

          breathEntry += ' (' + (range1+range2).toString() +' ft. '+ statBlock.CalculatedAbilities["Breath weapon"].type;

          var damageDice = (statBlock.CalculatedAbilities["Breath weapon"].damage.split('+'))[0].split('d')[1];
          var damage = 1 + cr

          breathEntry += ', ' + damage.toString() + 'd' + damageDice + ' ' + statBlock.CalculatedAbilities["Breath weapon"].damageType + ', Reflex DC ' +statBlock.abilityDCBase.toString() + ' half, usable every 1d4 rounds)';

          statBlock.OffensiveAbilities = [breathEntry];
        }
        if (ability == "Frightful presence") {

          var cr = Number(statBlock.Cr.replace('1/2','1').replace('1/3','1'));
          if (cr >= statBlock.CalculatedAbilities["Frightful presence"]["CR"]) {
            var auraEntry = 'frightful presence (';
            var fright = statBlock.CalculatedAbilities["Frightful presence"]["range"].split('+');
            auraEntry += (Number(fright[0]) + (10 * cr)).toString()+ ' ft., DC ' + statBlock.abilityDCBase.toString() + ')';
            statBlock.Aura = [auraEntry];
            //TODO only does 10ft * cr will need updating if any grafts change
          }
        }
        if (ability == "Save") {
          for(save in statBlock.CalculatedAbilities["Save"]) {
            statBlock[save] = statBlock[save] + statBlock.CalculatedAbilities["Save"][save];
          }
        }
      }
    }
  } catch(err) {
    document.getElementById("errorMessage").innerHTML = "statblock adjustment error: " + err.message + '<br><br>' + err.stack;
    $('.alert-this-red').show();
    return false;
  }

  //
  //Stat Block Strings
  //

  try {
  //if the string requires more than one line of code then build it before the stat block section

    //build name String
    var nameInput = $('#inputName').val().trim();
    var nameString = '';
    if (nameInput == ''){
      nameString = "CREATURE NAME";
    } else {
      nameString = nameInput;
    }

    //build class type String
    var classTypeString = '';

    var genderString = $('#inputGender').val().trim();

    var subTypeString = '';
    if (statBlock.hasOwnProperty('SubType')){
      subTypeString = statBlock.SubType.toLowerCase();
    }

    var className = $('#classDrop').val().trim();
    if ( className != '' && className != 'None'){
      var classSString = className.toLowerCase()
    } else {
      var classSString = '';
    }

    if (genderString != ''){
      classTypeString = genderString;
    }
    if (subTypeString != ''){
      if (classTypeString != ''){
        classTypeString += ' ';
      }
      classTypeString += subTypeString;
    }
    if (classSString != ''){
      if (classTypeString != ''){
        classTypeString += ' ';
      }
      classTypeString += classSString;
    }
    //don't include subtype by itself
    if (classTypeString == subTypeString){
      classTypeString = '';
    }
    if (classTypeString != ''){
      classTypeString = '<div>'+ classTypeString.capitalise() + '</div>';
    }

    //build creature type String
    if (statBlock.hasOwnProperty('SubType')){
      subTypeString = ' (' + statBlock.SubType.toLowerCase() + ')';
    }

    var alignString = alignments[$('#align1Drop').val().trim() + $('#align2Drop').val().trim()];

    var typeString = '<div>'+ alignString +' ' + statBlock.creatureSize + ' ' + statBlock.CreatureType.toLowerCase() + subTypeString + '</div>';

    //build skills string
    listOfSkills = Object.keys(skillNames);
    var skillString = '';
    for (i = 0; i < listOfSkills.length; i++) {
      if (statBlock.MasterSkills.includes(listOfSkills[i])){
        skillString += ', ' + listOfSkills[i] + ' +' + statBlock.masterSkills[0].toString()
      } else if (statBlock.GoodSkills.includes(listOfSkills[i])){
        skillString += ', ' + listOfSkills[i] + ' +' + statBlock.goodSkills[0].toString()
      }
    }
    skillString = skillString.replace(', ','');
    if (skillString == ''){
      skillString = 'None';
    }

    //build spell casting string
    var spellString = '';

    //racial spell-like abilitiesArray
    if (statBlock.hasOwnProperty('spellLikeFromGrafts')){
      var spells = statBlock.spellLikeFromGrafts;
      spellString += '<div><b>Racial spell-like abilities</b> ';
      for (key in spells) {
        var Key = key;
        if (Key == "atWill"){
          Key = "at will";
        }
        spellString += '; (' + Key + "): " + spells[key].join(', ');
      }
      spellString += '</div>';
      spellString = spellString.replace('; ','')
    }

    //check if creature has spellcasting
    if (statBlock.hasOwnProperty('Spellcasting')){

      //do the spells title
      var typeTitle = '';
      if ($('.casterTypeDescription').text().includes('Mystic')){
        //Mystic
        typeTitle = 'Mystic Spells Known';
      } else if ($('.casterTypeDescription').text().includes('Technomancer')){
        //Technomancer
        typeTitle = 'Technomancer Spells Known';
      } else if ($('[data-id="casterDrop"]').length){
        //Full caster
        if ($('[data-id="casterDrop"]').text().includes("Full")) {
          typeTitle = 'Spells Known';
        } else {
          //spell-like
          typeTitle = 'Spell-like Abilities';
        }
      } else {
        //spell-like
        typeTitle = 'Spell-like Abilities';
      }

      var rangeAttackVal = (statBlock.attackFocus == 'Ranged') ? statBlock.highAttackBonus:statBlock.lowAttackBonus;
      //Caster Level
      var clVal = ordinalNumber(Number(statBlock.Cr));
      spellString += '<div><b>'+typeTitle+'</b> (CL ' + clVal +'; ranged '+rangeAttackVal+')</div>';
      //for each frequency
      for (var i = 0; i < statBlock.Spellcasting.length; i++) {
        spellBlock = statBlock.Spellcasting[i];
        //add new line for each frequency
        spellString += '<div>' + spellBlock[0] + ' - ';
        //for each spell
        for (var j = 1; j < spellBlock.length; j++) {
          spell = spellBlock[j];
          dc = '';
          //check if the spell needs a DC save and add in if necessary
          if (spellsData[spellBlock[j]].hasOwnProperty("SAVEINFO")){
            if (spellsData[spellBlock[j]]["SAVEINFO"] != 'None'){
              dc = ' (DC ' + (Number(spellBlock[0].charAt(0)) + statBlock.spellDC).toString() + ')';
            }
          } else {
            dc = ' (DC ' + (Number(spellBlock[0].charAt(0)) + statBlock.spellDC).toString() + ')';
          }
          spell+=dc;
          if (j > 1){
            spellString += ', ';
          }
          spellString += spell;
        }
        // finalise the spell string

        spellString += '</div>';
      }
    }

    var specialString = '';
    var offensiveAbilities = [];
    var defensiveAbilities = [];
    var otherAbilities = [];
    //build special ability Strings

    if (statBlock.hasOwnProperty('SpecialAbilitiesDescription')  || statBlock.hasOwnProperty('SpecialAbilitiesGraft')){

      specialString += '<div><b>SPECIAL ABILITIES</b></div>';
      specialString += '<hr>';

      var abilitiesArray = [];
      if (statBlock.hasOwnProperty('SpecialAbilitiesDescription')) {
        abilitiesArray = abilitiesArray.concat(statBlock.SpecialAbilitiesDescription);
      }
      if (statBlock.hasOwnProperty('SpecialAbilitiesGraft')) {
        abilitiesArray = abilitiesArray.concat(statBlock.SpecialAbilitiesGraft);
      }
      var abilitiesArray = abilitiesArray.sort();

      for (var i = 0; i < abilitiesArray.length; i++) {
        //chosen abilities
        if (specialAbilities.Abilities.hasOwnProperty(abilitiesArray[i])){
          specialString += '<div><b>'+abilitiesArray[i]+'</b> ';
          specialString += specialAbilities.Abilities[abilitiesArray[i]].Description;
          //print guidelines if any
          if (specialAbilities.Abilities[abilitiesArray[i]].hasOwnProperty("Guidelines")) {
            specialString += ' <b>Guidelines </b>' + specialAbilities.Abilities[abilitiesArray[i]].Guidelines;
          }
          specialString += '</div><br>';
          //add abilities to the correct headings
          var format = specialAbilities.Abilities[abilitiesArray[i]].Format;
          if (format.includes('Defensive Abilities')){
            defensiveAbilities.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,''));
          }
          if (format.includes('Other Abilities')){
            otherAbilities.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,''));
          }

          if (format.includes('Speed')){
            if (statBlock.hasOwnProperty('Speed')){
              statBlock.Speed.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,'').capitalise());
            } else {
              statBlock.Speed = [abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,'').capitalise()];
            }

          }
          if (format.includes('Languages')){
            if (statBlock.hasOwnProperty('Languages')){
              statBlock.Languages.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,'').capitalise());
            } else {
              statBlock.Languages = [abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,'').capitalise()];
            }

          }
          if (format.includes('Senses')){
            if (statBlock.hasOwnProperty('Senses')){
              statBlock.Senses.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,''));
            } else {
              statBlock.Senses = [abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,'')];
            }

          }
          if (format.includes('Melee')){
            /*if (statBlock.hasOwnProperty('MeleeFromAbility')){
              statBlock.MeleeFromAbility = statBlock.MeleeFromAbility.push(format.replace('Melee ','').replace('.',''));
            } else {
              statBlock.MeleeFromAbility = format.replace('Melee ','').replace('.','');
            }*/
          //else if so that swallow whole doesn't mess things up TODO fix
          }else if (format.includes('Offensive Abilities')){
            offensiveAbilities.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,''));
          }
        //graft abilities
        } else if (graftSpecialAbilities.hasOwnProperty(abilitiesArray[i])){
          specialString += '<div><b>'+abilitiesArray[i]+'</b> ';
          specialString += graftSpecialAbilities[abilitiesArray[i]];
          specialString += '</div><br>';
          //add to other abilities
          otherAbilities.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,''));
        }
      }

    }

    //free abilities
    if (statBlock.hasOwnProperty('FreeAbilities')){
      var abilitiesArray = statBlock.FreeAbilities;
      for (var i = 0; i < abilitiesArray.length; i++) {
        if (!Object.keys(specialAbilities.Weaknesses).includes(abilitiesArray[i])){
          var format = specialAbilities.FreeAbilities[abilitiesArray[i]].Format;
          if (format.includes('Other Abilities')){
            otherAbilities.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,''));
          }
          /*if (format.includes('Speed')){
            if (statBlock.hasOwnProperty('Speed')){
              statBlock.Speed.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,'').capitalise());
            } else {
              statBlock.Speed = [abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,'').capitalise()];
            }

          }*/
          if (format.includes('Languages')){
            if (statBlock.hasOwnProperty('Languages')){
              statBlock.Languages.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,'').capitalise());
            } else {
              statBlock.Languages = [abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,'').capitalise()];
            }

          }
          if (format.includes('Senses')){
            if (statBlock.hasOwnProperty('Senses')){
              if (abilitiesArray[i] == 'Blindsense (Ex)'){
                abilitiesArray[i] = 'Blindsense 60 ft.'
              }
              if (abilitiesArray[i] == 'Darkvision (Ex Or Su)'){
                abilitiesArray[i] = 'Darkvision 60 ft.'
              }
              statBlock.Senses.push(abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,''));
            } else {
              statBlock.Senses = [abilitiesArray[i].toLowerCase().replace(/ \(.*\)/g,'')];
            }

          }
        }
      }
    }

    //other abilities from grafts
    if (statBlock.hasOwnProperty('OtherAbilitiesGraft')){
      otherAbilities = otherAbilities.concat(statBlock.OtherAbilitiesGraft)
    }
    //other abilities from sub choices
    if (statBlock.hasOwnProperty('OtherAbilities')){
      var otherotherabilities = statBlock.OtherAbilities;
      var OAString = otherAbilities.join(',').toLowerCase();
      for (var i = 0; i < otherotherabilities.length; i++) {
          if ( !OAString.includes(otherotherabilities[i]) && !OAString.includes(otherotherabilities[i].toLowerCase())){
            otherAbilities.push(otherotherabilities[i]);
          }
      }
      otherAbilities.sort();
    }


    //strings for abilities
    var offensiveAbilitiesString = '';
    var defensiveAbilitiesString = '';
    var otherAbilitiesString = '';

    if (offensiveAbilities.length > 0 || statBlock.hasOwnProperty('OffensiveAbilities')) {
      var offence = [];
      if (offensiveAbilities.length > 0){
        offence = offence.concat(offensiveAbilities);
      }
      if (statBlock.hasOwnProperty('OffensiveAbilities')){
        offence = offence.concat(statBlock.OffensiveAbilities);
      }
      offence.sort()
      var offensiveAbilitiesString = '<div><b>Offensive abilities </b>' + offence.join(', ') + '</div>';
    }
    if (defensiveAbilities.length > 0) {
      var defensiveAbilitiesString = '<b>Defensive abilities </b>' + defensiveAbilities.join(', ');
    }
    if (otherAbilities.length > 0) {
      //sort the array
      var sorted = [];
      for (var i = 0; i < otherAbilities.length; i++) {
          sorted.push(otherAbilities[i].toLowerCase());
      }
      sorted.sort();
      otherAbilities = sorted;
      var otherAbilitiesString = '<div><b>Other abilities </b>' + otherAbilities.join(', ') + '</div>';
    }


    //check if there is any senses
    var sensesString = '';
    if (statBlock.hasOwnProperty('Senses')){
      sensesString = '; <b>Senses</b> '+statBlock.Senses.join(', ').toLowerCase()
    }

    //build attack strings
    var MeleeString = '';
    var RangedString = '';
    //iterate through attack entries
    $("[class^='attackDiv']").each(function(){
        var index = $(this).attr('class').replace('attackDiv','').replace(' brute','')

        var indexParts = index.split('-');
        var name = $('#attackName'+index).val().trim().toLowerCase();
        var bonus = $('#bonus'+index).val().trim();
        var damage = $('#damage'+index).val().trim();
        var attackType = $('#AT'+index+'Drop').val().trim();
        var damageType = $('#DT'+index+'Drop').val().trim();
        var critical = $('#critical'+index).val().trim();
        var end = ' or<br>';

        //handle strength
        if (damage.includes('Str')){
          var damageSplit = damage.split('+');
          var str = Number(statBlock.str.replace('+',''));
          var damageBonus = Number(damageSplit[1])
          damageBonus = damageBonus + str;
          damage = damageSplit[0] + '+' + damageBonus.toString();
        }

        //handle attack mod
        if (statBlock.hasOwnProperty('attackMod')){
          bonus = '+' + (Number(bonus.replace('+','')) + statBlock.attackMod).toString();
        }

        damageType = window[attackType.toLowerCase() + indexParts[0] + 'Types'][damageType];

        if (critical != '') {
          critical = '; critical ' + critical.toLowerCase();
        }

        if (indexParts[0].toString() == 'Melee') {

          if (MeleeString == ''){
            MeleeString = '<div><b>'+ indexParts[0] + '</b> ';
            end = ''
          }

          MeleeString += end + name + ' ' + bonus + ' (' + damage + ' ' + damageType + critical + ')'

        }

        if (indexParts[0].toString() == 'Ranged') {

          if (RangedString == ''){
            RangedString = '<div><b>'+ indexParts[0] + '</b> ';
            end = ''
          }

          RangedString += end + name + ' ' + bonus + ' (' + damage + ' ' + damageType + critical + ')'

        }

    });
    if (MeleeString != ''){
      MeleeString += '</div>';
    }
    if (RangedString != ''){
      RangedString += '</div>';
    }

    // language string
    var languageString = '';
    var languageArray = [];
    var languages = $('#languageDrop').val().toString().trim();
    if (languages != ''){
      languageArray = languageArray.concat(languages.split(','))
    }
    if (statBlock.hasOwnProperty('Languages')){
      languageArray = languageArray.concat(statBlock.Languages);
    }
    if (languageArray.length > 0){
      languageArray.sort();
      languageString = '<div><b>Languages</b> ' + languageArray.join(', ') + '</div>';
    }

    //Extra user fillable entries
    var EcologyString = '';
    var GearString = '';
    var TacticsString = '';
    var extraEntries = $('#OSDrop').val().toString().trim();

    if (extraEntries.includes("Ecology")){
      EcologyString = '<div><b>ECOLOGY</b></div><hr><div>ecology details here e.g. Environment, Organisation</div><br>';
    }
    if (extraEntries.includes("Gear")){
      GearString = '<div><b>Gear</b> list gear here e.g. Armor, Ammunition</div>';
    }
    if (extraEntries.includes("Tactics")){
      TacticsString = '<div><b>TACTICS</b></div><hr><div>tactics details here e.g. During combat, Morale</div><br>';
    }

    //perception string
    if (statBlock.MasterSkills.includes("Perception")){
      var perceptionValue = statBlock.masterSkills[0].toString()
    } else {
      var perceptionValue = statBlock.goodSkills[0].toString()
    }

    //space and reach strings
    var spaceReachString = '';
    if (statBlock.creatureSize != 'Medium' ){
      sizeArray = creatureSize[statBlock.creatureSize];
      var space = '';
      var reach = '';

      if (sizeArray[2] != "5 ft."){
        space = '<b>Space</b> ' + sizeArray[2];
      }
      if (sizeArray[3] != "5 ft."){
        reach = '<b>Reach</b> ' + sizeArray[3];
      }
      spaceReachString += space;
      if (space != '' && reach != '') {
        spaceReachString += '; '
      }
      spaceReachString += reach;
      if (spaceReachString != ''){
        spaceReachString = '<div>' + spaceReachString + '</div>';
      }
    }

    //defences String
    var defencesString = '';
    //defensive abbilities
    defencesString += defensiveAbilitiesString;

    //DR
    if (statBlock.hasOwnProperty('DRapplied')){
      if (defencesString != '') {
        defencesString += '; ';
      }
      defencesString += '<b>DR </b>'+statBlock.DRapplied;
    }
    //immunities
    if (statBlock.hasOwnProperty('Immunities')){
      if (defencesString != '') {
        defencesString += '; ';
      }
      defencesString += '<b>Immunities </b>'+statBlock.Immunities.join(', ');
    }
    //resistances
    if (statBlock.hasOwnProperty('Resistance')){
      if (defencesString != '') {
        defencesString += '; ';
      }
      defencesString += '<b>Resistances </b>'+statBlock.Resistance.join(', ');
    }
    //SR
    if (statBlock.hasOwnProperty('SRapplied')){
      if (defencesString != '') {
        defencesString += '; ';
      }
      defencesString += '<b>SR </b>'+statBlock.SRapplied;
    }
    //weaknesses
    var weaknessString = '';

    if (statBlock.hasOwnProperty('weaknessAbilities')){
      weaknessString += statBlock.weaknessAbilities;
    }

    if (statBlock.hasOwnProperty('Vulnerable')){
      if (weaknessString != '') {
        weaknessString += '; ';
      }
      weaknessString += 'vulnerable to ' + statBlock.Vulnerable.join(', vulnerable to ');
    }

    if (statBlock.hasOwnProperty('Dependencies')){
      if (weaknessString != '') {
        weaknessString += '; ';
      }
      weaknessString += statBlock.Dependencies.join(' dependent, ') + ' dependent';
    }

    if (weaknessString != '') {
      if (defencesString != '') {
        defencesString += '; ';
      }
      defencesString += '<b>Weaknesses </b>' + weaknessString;
    }
    if (defencesString != '') {
      defencesString = '<div>' + defencesString + '</div>';
    }

    //save string
    var saveString = "<div><b>Fort</b> +"+statBlock.fortitude + "; <b>Ref</b> +"+statBlock.reflex+ "; <b>Will</b> +"+statBlock.will;
    if (statBlock.hasOwnProperty('PlusAbilities')){
      saveString += '; ' + statBlock.PlusAbilities.join(', ').replace('+CR','+'+statBlock.Cr.toString());
    }
    saveString += "</div>";

    //speedString
    var speedInput = $('#inputSpeed').val().trim();
    var speedString = '<div><b>Speed</b> '+speedInput+' ft.';
    if (statBlock.hasOwnProperty('Speed')){
      var speeds = statBlock.Speed;
      speeds.sort()
      speedString += ', ' + speeds.join(', ');
    }
    speedString += "</div>";

    classString = '';
    rpBlock='';
    if (statBlock.hasOwnProperty('Class')) {
      classString += '<div><b>' + statBlock.Class.toUpperCase() + ' ABILITIES</b></div>';
      classString += '<hr>';
      rpBlock = ' <b>RP</b> ' + statBlock.ClassResolvePoints;
      classString += '<div><b>Class abilities</b> '.replace('Class',statBlock.Class) + statBlock.ClassAbilities + '</div>';
      if (statBlock.hasOwnProperty('ClassSpecialRules')) {
        classString += '<div><b>Class special rules</b> '.replace('Class',statBlock.Class) + statBlock.ClassSpecialRules + '</div>';
      }
      classString += '<div><b>Class gear</b> '.replace('Class',statBlock.Class) + statBlock.ClassGear + '</div>';
      classString += '<br>';

    }
    //defense title string, this far down because its waiting for RP
    var defenceTitle = leftAndRight('<b>DEFENSE</b>','<b>HP</b> ' + statBlock.hitPoints + rpBlock);

    //Aura string
    auraString = '';
    if (statBlock.hasOwnProperty('Aura')){
      auraString = '<div><b>Aura</b> ' + statBlock.Aura.join(', ') + '</div>'
    }

    //Text string
    textString = '';
    if (statBlock.hasOwnProperty('Text')){
      textString = '<div><b>Text</b> ' + statBlock.Text + '<br></div>'
    }


  //
  //Stat Block
  //

    textBlock = "";
    //description
    textBlock += '<hr>';
    textBlock += leftAndRight('<b>' + nameString + '</b>','<b>CR '+statBlock.Cr+'</b>');
    textBlock += '<hr>';
    textBlock += "<div><b>XP "+statBlock.Xp+"</b></div>";
    textBlock += classTypeString;
    textBlock += typeString;
    textBlock += "<div><b>Init</b> "+statBlock.initiative+sensesString+'; <b>Perception</b> +'+perceptionValue+"</div>";
    textBlock += auraString;
    textBlock += "<br>";

    //Defence
    textBlock += defenceTitle;
    textBlock += "<hr>";
    textBlock += "<div><b>EAC</b> "+statBlock.eac + "; <b>KAC</b> "+statBlock.kac+"</div>";
    textBlock += saveString;
    textBlock += defencesString;
    textBlock += "<br>";

    //Offence
    textBlock += '<div><b>OFFENSE</b></div>';
    textBlock += '<hr>';
    textBlock += speedString;
    textBlock += MeleeString;
    textBlock += RangedString;
    textBlock += spaceReachString;
    textBlock += offensiveAbilitiesString;
    textBlock += spellString;
    textBlock += "<br>";

    //tactics
    textBlock += TacticsString;

    //statistics
    textBlock += '<div><b>STATISTICS</b></div>';
    textBlock += '<hr>';
    textBlock += "<div><b>Str</b> "+statBlock.str + "; <b>Dex</b> "+statBlock.dex+ "; <b>Con</b> "+statBlock.con+ "; <b>Int</b> "+statBlock.int+ "; <b>Wis</b> "+statBlock.wis+ "; <b>Cha</b> "+statBlock.cha+"</div>";
    textBlock += '<div><b>Skills </b>'+skillString+'</div>';
    textBlock += languageString;
    textBlock += otherAbilitiesString;
    textBlock += GearString;
    textBlock += "<br>";

    //ecology
    textBlock += EcologyString;

    //warning
    if (classString != '' || specialString != '' || textString != '') {
      textBlock += '<br>';
      textBlock += '<div><b>Heads up!</b> if there are any required stat block changes below this warning, they will need to be added manually.</div>';
      textBlock += '<br>';
    }
    //extra text
    textBlock += textString;
    //class abilities
    textBlock += classString;
    //special Abilities
    textBlock += specialString;

    //statBlock.CreatureType
    var $StatBlock = $(".summernoteEdit").first();
    $StatBlock.empty();
    $StatBlock.append(textBlock);

    //log event in analytics
    ga('send', 'event', 'Generation', 'monster', statBlock.Cr+":"+statBlock.Base+":"+statBlock.CreatureType);

  } catch(err) {
    document.getElementById("errorMessage").innerHTML = "statblock building error: " + err.message + '<br><br>' + err.stack;
    $('.alert-this-red').show();
    return false;
  }

  /* debugging ouput
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  var print = '';
  for (stat in statBlock){
    if (typeof statBlock[stat] === 'object' && !Array.isArray(statBlock[stat])) {
      for (entry in statBlock[stat]) {
        print += "stat:" + entry +": " +statBlock[stat][entry] + ' <br>'
      }
    } else {
      print += stat +": " +statBlock[stat] + ' <br>'
    }
  }
  $outputArea.append("<p>"+print+"</div>"); */

  return true;

}

//returns a string div with right aligned and left alignedtext on the same line
function leftAndRight(left,right){
  return '<div class="row"><div class="col-xs-8"><div>' + left + '</div></div><div class="col-xs-4"><div class="text-right">' + right + '</div></div></div>'
}

//turns a 3 into a 3rd etc.
function ordinalNumber(i) {
    var j = i % 10,
        k = i % 100;
    if (i == 0)  {
        return "0"
    }
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

//get class stats - if class selected, add the required stats to the stat block
function getClassStats(statObject){

  //step 4 - class
  var classDrop = $('#classDrop').val().trim();

  //check if class is selected
  if (classDrop != '' && classDrop != 'None'){

    var cr = Number($('[data-id="CRDrop"]').text().trim().replace("CR ","").replace("1/2","0.5").replace("1/3","0.3"));
    var classObject = classData[classDrop];

    statObject.Class = classDrop;

    //formula for class resolve points
    statObject.ClassResolvePoints = Math.round(cr/5) + 3;

    //read and apply class data
    statObject.ClassAbilities = getClassAbilities(classDrop,cr).description;

    if (classObject.hasOwnProperty("SpecialRules")){
      statObject.ClassSpecialRules = classObject.SpecialRules;
    }
    statObject.ClassAdjustments = classObject.Adjustments;
    if (classObject.hasOwnProperty("MasterSkills")){
      if (statObject.hasOwnProperty("MasterSkills")){
        statObject.MasterSkills = statObject.MasterSkills.concat(classObject.MasterSkills);
      } else {
        statObject.MasterSkills = classObject.MasterSkills;
      }
    }
    if (classObject.hasOwnProperty("GoodSkills")){
      if (statObject.hasOwnProperty("GoodSkills")){
        statObject.GoodSkills = statObject.GoodSkills.concat(classObject.GoodSkills);
      } else {
        statObject.GoodSkills = classObject.GoodSkills;
      }
    }

    //soldier chooses melee or ranged combat focus
    if (classDrop == 'Soldier') {
      var damageStyle = $('#stepFourOptionDrop').val().trim() + 'Style';
      statObject.ClassAbilityScoreModifiers = classObject[damageStyle].AbilityScoreModifiers;
      statObject.ClassGear = classObject[damageStyle].Gear;
    } else {
      statObject.ClassAbilityScoreModifiers = classObject.AbilityScoreModifiers;
      statObject.ClassGear = classObject.Gear;
    }
    //envoy gains extra master skill
    if (classDrop == 'Envoy') {
      var extraSkill = [$('#stepFourOptionDrop').val().trim().toLowerCase()];
      statObject.MasterSkills = statObject.MasterSkills.concat(extraSkill);
    }
  }
  return statObject;
}

//class data contains a table of CR dependent abilities - gets the abilities with the appropriate CR vlue
function getClassAbilities(selectedClass,cr){

  var keyNums = [];
  var crBottom = 0;

  if (cr < 1) {
    cr = 1;
  }

  //get array of CR values
  for (key in classData[selectedClass].AbilitiesByCr){
    keyNums.push(Number(key));
  }
  //sort ascending order - number value
  keyNums.sort(function(a, b){return a-b});
  //find abilities equal to or less than CR
  var arrayLength = keyNums.length;
  for (var i = 0; i < arrayLength; i++) {
    if (keyNums[i] <= cr){
      crBottom = keyNums[i];
    }
  }
  return classData[selectedClass].AbilitiesByCr[crBottom.toString()];
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

//creates text inputs
function generateTextInput(parentID,label,placeholder,textID) {

  var inputHtml = '<div class="form-group">';
  inputHtml += '<label for="' + textID + '">' + label + '</label>';
  inputHtml += '<input type="text" class="form-control" id="' + textID + '" placeholder="' + placeholder + '">';
  inputHtml += '</div>';

  //add to parent div
  document.getElementById(parentID).innerHTML = inputHtml;
}

//creates text inputs for speeds
function generateSpeedTextInput(parentID,label,value,textID,isFly) {

  if (isFly == false){

    var inputHtml = '<div class="row">'
    inputHtml +=    '<div class="col-xs-10">'
    inputHtml +=      '<div class="form-group">'
    inputHtml +=          '<label for="'+textID+'">'+label+'</label>'
    inputHtml +=          '<input type="text" class="form-control" id="'+textID+'" value="' +value + '">'
    inputHtml +=      '</div>'
    inputHtml +=    '</div>'
    inputHtml +=    '<div class="col-xs-2">'
    inputHtml +=        '<div class="form-group">'
    inputHtml +=            '<label>&nbsp;</label>'
    inputHtml +=            '<p>ft.<p>'
    inputHtml +=        '</div>'
    inputHtml +=    '</div>'
    inputHtml +='</div>'

    //add to parent div
    document.getElementById(parentID).innerHTML = inputHtml;

  } else if (isFly == true) {

    var inputHtml = '<div class="row">'
    inputHtml +=        '<div class="col-lg-6">'
    inputHtml +=            '<div class="row">'
    inputHtml +=                '<div class="col-xs-10">'
    inputHtml +=                    '<div class="form-group">'
    inputHtml +=                        '<label for="'+textID+'">'+label+'</label>'
    inputHtml +=                        '<input type="text" class="form-control" id="'+textID+'" value="' +value + '">'
    inputHtml +=                    '</div>'
    inputHtml +=                '</div>'
    inputHtml +=                '<div class="col-xs-2">'
    inputHtml +=                    '<div class="form-group">'
    inputHtml +=                        '<label >&nbsp;</label>'
    inputHtml +=                        '<p>ft.<p>'
    inputHtml +=                    '</div>'
    inputHtml +=                '</div>'
    inputHtml +=             '</div>'
    inputHtml +=         '</div>'
    inputHtml +=         '<div class="col-lg-6">'
    inputHtml +=             '<div id="flyInputDropdown"></div>'
    inputHtml +=         '</div>'
    inputHtml +=     '</div>'

    //add to parent div
    document.getElementById(parentID).innerHTML = inputHtml;

    generateDropdown("flyInputDropdown","fly maneuverability","flyInputDrop","...",['clumsy','average','perfect']);
    $('#flyInputDrop').selectpicker('val', "average");
    $('#flyInputDrop').selectpicker('refresh');

  }


}

//creates bootstrap-select multiple select dropdowns from arrays
function generateMultiDropdown(parentID,label,dropID,title,searchTitle,array,maxOptions) {
  //check if search bar added
  if (searchTitle === 0){
    searTitl = ''
  } else {
    searTitl = 'data-live-search="true" data-live-search-placeholder="'+searchTitle+'" ';
  }
  //check if overall max options
  if (maxOptions === 0){
    dataMax = ''
  } else {
    dataMax = 'data-max-options="'+maxOptions+'" ';
  }

  //add select options
  var dropHtml = "";
  if (label != "") {
    dropHtml += '<label>' + label + '</label>'
  }
  dropHtml += '<select class="selectpicker" id="'+ dropID +'" title="'+title+'" data-style="btn-default" data-width="100%" data-size="10" multiple ' + searTitl + dataMax + 'data-selected-text-format="count">'
  //build list, apply BREAKS or LABELS if words present in array
  for (i = 0; i < array.length; i++) {

    if (array[i] == 'BREAK'){
      dropHtml += '<option data-divider="true"></option>';
    } else if (array[i].includes('LABEL=')) {
      if (array[i].includes('MAX=')){
        var split = array[i].split('MAX=')
        dropHtml += '<optgroup label="' + split[0].replace('LABEL=','') + '" data-max-options="' + split[1] + '">';
      } else {
        dropHtml += '<optgroup label="' + array[i].replace('LABEL=','') + '">';
      }
    } else if (array[i].includes('ENDLABEL')) {
      dropHtml += '</optgroup>';
    }
    else {
      dropHtml += '<option>' + array[i] + '</option>';
    }
  }
  dropHtml += '</select>';
  //append to parent div
  document.getElementById(parentID).innerHTML = dropHtml;
  //initialise dropdown
  $('#'+dropID).selectpicker();
  //bind dropdown click  handler
  $('#'+dropID).on('changed.bs.select', dropClickHandler);
}

//creates bootstrap-select dropdowns from arrays
function generateAttackEntry(style) {

  //validate high stat choice
  if ($('[data-id="attackDrop"]').text().includes("Choose")) {
      $('[data-id="attackDrop"]').addClass('wizard-shadow');
      return;
  }

  var $outputArea = $(".attackContainer").first();

  var crString = $('[data-id="CRDrop"]').text().trim();
  var cr = Number(crString.replace("CR ","").replace("1/2","0.5").replace("1/3","0.3"));
  var array = $('#arrayDrop').val().trim();
  var special = $('#specialDrop').val().toString().trim();

  var attackStats = window[array.toLowerCase()+'AttackStats'][crString.replace("CR ","")];

  var highStat = $('#attackDrop').val().trim();

  if (style == "Melee"){
    var attackPlaceholder = "e.g. Claws";
    var attackDamage = attackStats[4];
    var damageType = Object.keys(kineticMeleeTypes);

    if (highStat == "Melee"){
      var attackBonus = attackStats[0];
    } else if (highStat == "Ranged") {
      var attackBonus = attackStats[1];
    }

  }
  else if (style == "Ranged"){
    var attackPlaceholder = "e.g. Pistol";
    var attackDamage = attackStats[3];
    var damageType = Object.keys(kineticRangedTypes);

    if (highStat == "Ranged"){
      var attackBonus = attackStats[0];
    } else if (highStat == "Melee") {
      var attackBonus = attackStats[1];
    }

  }

  var brute = false; // :(
  var bruteClass = '';
  var bruteLabel = '';
  //apply brute if chosen
  if (special.includes("Brute")){
    brute = true; // :)
    //check if already applied
    $("[class^='attackDiv']").each(function(){
      if ($(this).attr('class').includes('brute')){
        brute = false; // :(
      }
    });
  }

  if (brute) {
    attackBonus = attackStats[1];
    var crlist = Object.keys(combatantMainStats);
    var crindex = crlist.indexOf(crString.replace("CR ",""));
    crindex += 2;
    if(crindex > 26){
      crindex = 26;
    }
    var newCr = crlist[crindex];
    attackStats = window[array.toLowerCase()+'AttackStats'][newCr];
    if (style == "Melee"){
      var attackDamage = attackStats[4];
    }
    if (style == "Ranged"){
      var attackDamage = attackStats[3];
    }
    bruteClass = ' brute';
    bruteLabel = ' - brute attack';
  }

  attackIndexCounter += 1;
  var indexString = style + "-" + attackIndexCounter.toString();

  var attackBody = "<div class=\"attackDiv" + indexString + bruteClass + "\">"
  attackBody +=
      "<h5>"+style+bruteLabel+"</h5>" +
      "<div class=\"row\">" +
          "<div class=\"col-lg-6\">" +
              "<div class=\"form-group\">" +
                  "<label for=\"attackName"+indexString+"\">Attack name</label>" +
                   "<input type=\"text\" class=\"form-control\" id=\"attackName"+indexString+"\" placeholder=\""+attackPlaceholder+"\"  oninput=\"removeHighlight(this.id)\">" +
              "</div>" +
          "</div>" +
          "<div class=\"col-lg-6\">" +
              "<div class=\"row\">" +
                  "<div class=\"col-xs-4\" style=\"padding-right: 0\">" +
                      "<div class=\"form-group\">" +
                          "<label for=\"bonus"+indexString+"\">Bonus</label>" +
                          "<input type=\"text\" class=\"form-control\" id=\"bonus"+indexString+"\" value=\""+attackBonus+"\">" +
                      "</div>" +
                  "</div>" +
                  "<div class=\"col-xs-8\">" +
                      "<div class=\"form-group\">" +
                          "<label for=\"damage"+indexString+"\">Damage</label>" +
                          "<input type=\"text\" class=\"form-control\" id=\"damage"+indexString+"\" value=\""+attackDamage+"\">" +
                      "</div>" +
                  "</div>" +
              "</div>" +
          "</div>" +
          "<div class=\"col-lg-4\">" +
              "<div class=\"form-group\">" +
                  "<label for=\"attacktype"+indexString+"\">Attack type</label>" +
                  "<div id=\"attacktype"+indexString+"\"></div>" +
              "</div>" +
          "</div>" +
          "<div class=\"col-lg-4\">" +
              "<div class=\"form-group\">" +
                  "<label for=\"damagetype"+indexString+"\">Damage type</label>" +
                  "<div id=\"damagetype"+indexString+"\"></div>" +
              "</div>" +
          "</div>" +
          "<div class=\"col-lg-4\">" +
              "<div class=\"form-group\">" +
                  "<label for=\"critical"+indexString+"\">Critical</label>" +
                  "<input type=\"text\" class=\"form-control\" id=\"critical"+indexString+"\" placeholder=\"None\">" +
              "</div>" +
          "</div>" +
      "</div>"

  attackBody += "<br>"
  attackBody += "<button type=\"button\" id=\""+indexString+"\"class=\"btn btn-default btn-sm pull-right\" onclick = \"removeEntry(this.id)\">Remove</button>"
  attackBody += "<br><hr>"
  attackBody += "</div>"

  $outputArea.append(attackBody);

  generateDropdown("attacktype"+indexString,"","AT"+indexString+"Drop","...",["Energy","Kinetic"]);
  $('#AT'+indexString+'Drop').selectpicker('val', "Kinetic");
  $('#AT'+indexString+'Drop').selectpicker('refresh');
  generateDropdown("damagetype"+indexString,"","DT"+indexString+"Drop","...",damageType);
  $('#DT'+indexString+'Drop').selectpicker('val', damageType[0]);
  $('#DT'+indexString+'Drop').selectpicker('refresh');

}

function removeEntry(index) {
  $(".attackDiv"+index).remove();
}

function removeHighlight(index) {
  $("#"+index).removeClass('wizard-shadow');
}

function clearAttacks() {
  var $outputArea = $(".attackContainer").first();
  $outputArea.empty();
  indexCounter = 0;
}

//disables / enables dropdown . bool True = disabled
function disableDropdown(id,bool){
  $('#'+id).prop('disabled', bool);
}

//finds the right sub object from key
function findObjectFromKey(upperObject,key){
  //get appropriate object

  len = Object.keys(upperObject).length
  var sub = "";
  for (var i = 0; i < len; i++) {
    sub = Object.keys(upperObject)[i]
    if (upperObject[sub].hasOwnProperty(key)) {
      var foundObject = upperObject[sub];
    }
  }
  return foundObject;
}

//grabs any additional abilities from the creature subtype
function getAdditionalAbilities(){
  //check step 3 subtype graft skills
  var skillList = {};
  var subtype = $('#creatureSubTypeDrop').val().trim();
  if (subtype != '' && subtype != 'None') {
    if (creatureSubType[subtype].hasOwnProperty("AdditionalAbilities")){
      skillList = creatureSubType[subtype]["AdditionalAbilities"];
    } else if (creatureSubType[subtype].hasOwnProperty("SubRaces")){
      subRaceDrop = $('#stepThreeOptionDrop').val().trim();
      if (creatureSubType[subtype].SubRaces[subRaceDrop].hasOwnProperty("AdditionalAbilities")){
        skillList = creatureSubType[subtype].SubRaces[subRaceDrop]["AdditionalAbilities"];
      }
    }
  }
  return skillList;
}

//gets the already selected abilities from grafts for step seven
function getGraftAbilities(type){

  //current type choices - Other, Special

  var abilityString = type + "Abilities";

  //check step 3 subtype graft skills
  var Abilities = [];
  var subtype = $('#creatureSubTypeDrop').val().trim();
  if (subtype != '' && subtype != 'None') {
    if (creatureSubType[subtype].hasOwnProperty(abilityString)){
      Abilities = Abilities.concat(creatureSubType[subtype][abilityString]);
    }
    if (creatureSubType[subtype].hasOwnProperty("SubRaces")){
      subRaceDrop = $('#stepThreeOptionDrop').val().trim();
      if (creatureSubType[subtype].SubRaces[subRaceDrop].hasOwnProperty(abilityString)){
        Abilities = Abilities.concat(creatureSubType[subtype].SubRaces[subRaceDrop][abilityString]);
      }
    }
  }
  //check step 4 class graft
  var classDrop = $('#classDrop').val().trim();
  if (classDrop != '' && classDrop != 'None') {
    if (classData[classDrop].hasOwnProperty(abilityString)){
      Abilities = Abilities.concat(classData[classDrop][abilityString]);
    }
  }
  //check step 5 graft
  var graft = $('#graftDrop').val().trim();
  if (graft != '' && graft != 'None') {
    for (var subgraft in graftTemplates){
      if (graftTemplates[subgraft].hasOwnProperty(graft)){
        if (graftTemplates[subgraft][graft].hasOwnProperty(abilityString)){
          Abilities = Abilities.concat(graftTemplates[subgraft][graft][abilityString]);
        }
      }
    }
  }

  //capitalise to match data array entries
  for (var i = 0; i < Abilities.length; i++) {
    Abilities[i]  = Abilities[i].capitalise();
  }

  //remove duplicates
  var unique = Abilities.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  })

  unique = unique.sort();

  return unique;

}

//gets the already selected skills from grafts for step seven
function getGraftSkills(type){

  var skillString = type + "Skills";

  //check step 3 subtype graft skills
  var skillList = [];
  var subtype = $('#creatureSubTypeDrop').val().trim();
  if (subtype != '' && subtype != 'None') {
    if (creatureSubType[subtype].hasOwnProperty(skillString)){
      skillList = skillList.concat(creatureSubType[subtype][skillString]);
    }
    if (creatureSubType[subtype].hasOwnProperty("SubRaces")){
      subRaceDrop = $('#stepThreeOptionDrop').val().trim();
      if (creatureSubType[subtype].SubRaces[subRaceDrop].hasOwnProperty(skillString)){
        skillList = skillList.concat(creatureSubType[subtype].SubRaces[subRaceDrop][skillString]);
      }
    }
  }
  //check step 4 class graft
  var classDrop = $('#classDrop').val().trim();
  if (classDrop != '' && classDrop != 'None') {

    //operative and mystic skills depend on class choices
    if (classDrop == "Mystic" || classDrop == "Operative") {
      if (classData[classDrop].hasOwnProperty(skillString)){
        var connectionDrop = $('#stepFourOptionDrop').val().trim();
        skillList = skillList.concat(classData[classDrop][skillString][connectionDrop]);
      }
    } else {
      if (classData[classDrop].hasOwnProperty(skillString)){
        skillList = skillList.concat(classData[classDrop][skillString]);
      }
    }



  }
  //check step 5 graft
  var graft = $('#graftDrop').val().trim();
  if (graft != '' && graft != 'None') {
    for (var subgraft in graftTemplates){
      if (graftTemplates[subgraft].hasOwnProperty(graft)){
        if (graftTemplates[subgraft][graft].hasOwnProperty(skillString)){
          skillList = skillList.concat(graftTemplates[subgraft][graft][skillString]);
        }
      }
    }
  }

  //capitalise to match data array entries
  for (var i = 0; i < skillList.length; i++) {
    skillList[i]  = skillList[i].capitalise();
  }

  //remove duplicates
  var unique = skillList.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  })

  unique = unique.sort();

  return unique;

}

//gets the graft spell-like abilitys
function getGraftSpelllikeAbilities(){

  //check step 3 subtype graft skills
  var spelllike = {}

  var subtype = $('#creatureSubTypeDrop').val().trim();
  if (subtype != '' && subtype != 'None') {
    if (creatureSubType[subtype].hasOwnProperty("Spell-likeAbilities")){
      spelllike = creatureSubType[subtype]["Spell-likeAbilities"];
    }
    if (creatureSubType[subtype].hasOwnProperty("SubRaces")){
      subRaceDrop = $('#stepThreeOptionDrop').val().trim();
      if (creatureSubType[subtype].SubRaces[subRaceDrop].hasOwnProperty("Spell-likeAbilities")){
        spelllike = creatureSubType[subtype].SubRaces[subRaceDrop]["Spell-likeAbilities"];
      }
    }
  }

  //check step 5 graft
  var graft = $('#graftDrop').val().trim();
  if (graft != '' && graft != 'None') {
    for (var subgraft in graftTemplates){
      if (graftTemplates[subgraft].hasOwnProperty(graft)){
        if (graftTemplates[subgraft][graft].hasOwnProperty("Spell-likeAbilities")){
          spelllike = graftTemplates[subgraft][graft]["Spell-likeAbilities"];
        }
      }
    }
  }
  //if any spell like attributes found
  return spelllike;

}

//Handle the clicks from dropdowns - function is divided by dropdown id. each dropdown will only execute the code for its own id
function dropClickHandler(e, clickedIndex, newValue, oldValue) {
    //get the item that wa selected on the dropdown click + the dropdowns id
    var selected = $(e.currentTarget).val();
    var id = $(e.currentTarget).attr('id');

    if (id=='arrayDrop') {

        var $descriptionArea = $(".stepOneDescription").first();
        $descriptionArea.empty();
        $descriptionArea.append("<p>"+stepOneDescription[selected]+"</p>");

    } else if (id=='creatureTypeDrop') {

      stepTwoDescription(selected);

    } else if (id=='creatureSubTypeDrop') {

      stepThreeDescription(selected)

    } else if (id=='classDrop') {

        //see if base array needs to change to apply class. via modal
        if (selected != "None") {

          var selectedArray;
          if (classCombatant.includes(selected)){
            selectedArray = 'Combatant';
          } else if (classExpert.includes(selected)){
            selectedArray = 'Expert';
          } else if (classSpellcaster.includes(selected)){
            selectedArray = 'Spellcaster';
          }

          //comapre current with selected
          var currentArray = $('#arrayDrop').val().trim()

          if (selectedArray != currentArray) {
            //if required is not slected, offer to change it via modal
            $('#stepFourSave2').text(selected+":"+selectedArray);
            var $modal = $(".modal-body.classModal").first();
            $modal.empty();
            $modal.append("<p>This class graft requires the <b>"+selectedArray+"</b> base.</p>");
            //show modal. defined in html
            $('#classModal').modal('show');
          } else {
            stepFourDescription(selected,selectedArray);
          }

        } else {
          $('#stepFourSave').text(selected+":"+"None"+":"+"None"+":"+"chosen");
          var $descriptionArea = $(".stepFourDescription").first();
          $descriptionArea.empty();
          var $descriptionArea = $(".classFeaturesDescription").first();
          $descriptionArea.empty();
          $("#stepFourOptionalDropdown").first().empty();
          $("#stepFourOptionalDropdownTwo").first().empty();
          $("#stepFourOptionalDropdownThree").first().empty();
          $("#stepFourOptionalDropdownFour").first().empty();
        }
    } else if (id=='graftDrop') {

      //re enable any disabled dropdowns
      disableDropdown('creatureSubTypeDrop',false); //enabling dropdowns
      disableDropdown('creatureTypeDrop',false);

      if (selected != "None") {

        var graftObject = findObjectFromKey(graftTemplates,selected);

        var cr = Number($('[data-id="CRDrop"]').text().trim().replace("CR ","").replace("1/2","0.5").replace("1/3","0.3"));

        //check minimum cr is met
        if (graftObject[selected].hasOwnProperty("CRMin")){
          var crmin = graftObject[selected].CRMin;
        } else {
          var crmin = 0;
        }
        //if met continue
        if (cr >= crmin) {

          // check if requirements are met, if not offer to change via modal
          if (graftObject[selected].hasOwnProperty("RequiredSubType") || graftObject[selected].hasOwnProperty("RequiredCreatureType")) {
            var sub = "None";
            var creature = "None";
            //check for sub type required match
            if (graftObject[selected].hasOwnProperty("RequiredSubType")){
              sub = graftObject[selected].RequiredSubType;
              modalMessage = "<p>This graft requires the <b>"+sub+"</b> subtype.</p>";
            }
            //check for creature type required match
            if (graftObject[selected].hasOwnProperty("RequiredCreatureType")){
              creature = graftObject[selected].RequiredCreatureType;
              modalMessage = "<p>This graft requires the <b>"+creature+"</b> creature type.</p>";
              if (sub != "None"){
                modalMessage = "<p>This graft requires the <b>"+creature+"</b> creature type and the <b>"+sub+"</b> subtype.</p>";
              }
            }

            //#show modal - defined in html
            $('#stepFiveSave2').text(selected+":"+sub+":"+creature);
            var $modal = $(".modal-body.graftModal").first();
            $modal.empty();
            $modal.append(modalMessage);
            $('#graftModal').modal('show');
          } else {

            stepFiveDescription(selected)

          }
        } else {
          //show modal
          var $modal = $(".modal-body.crModal").first();
          $modal.empty();
          $modal.append("<p>The current <b>"+$('[data-id="CRDrop"]').text().trim()+"</b> is not high enough for this graft.</p>");
          $('#crModal').modal('show');
          //change back to previous
          var prev = $('#stepFiveSave').text().trim();
          $('#graftDrop').selectpicker('val', prev);
        }
      } else {
        stepFiveDescription(selected)
      }
    } else if (id=='freeDrop') {

      var $descriptionArea = $(".stepSixDescriptionTwo").first();
      $descriptionArea.empty();

      //
      //Speeds
      //

      //show burrow speed
      if (selected.toString().includes('Burrow (Ex)')){
        if ($('#inputBurrow').length == 0){
          generateSpeedTextInput("burrowTextInput","Burrow speed","30","inputBurrow",false)
        }
      } else {
        $("#burrowTextInput").first().empty();
      }

      //show climb speed
      if (selected.toString().includes('Climb (Ex)')){
        if ($('#inputClimb').length == 0){
          generateSpeedTextInput("climbTextInput","Climb speed","20","inputClimb",false)
        }
      } else {
        $("#climbTextInput").first().empty();
      }

      //show fly speed
      if (selected.toString().includes('Fly (Ex Or Su)')){
        if ($('#inputFly').length == 0){
          generateSpeedTextInput("flyTextInput","Fly speed","60","inputFly",true)
        }
      } else {
        $("#flyTextInput").first().empty();
      }

      //show swim speed
      if (selected.toString().includes('Swim (Ex)')){
        if ($('#inputSwim').length == 0){
          generateSpeedTextInput("swimTextInput","Swim speed","30","inputSwim",false)
        }
      } else {
        $("#swimTextInput").first().empty();
      }

      //
      //Weaknesses
      //

      //show other weakness input if selected
      if (selected.toString().includes('Other Weakness (Specified)')){
        if ($('#inputWeakness').length == 0){
          generateTextInput("weaknessTextInput","Specify other weakness","e.g. salt water","inputWeakness");
        }
      } else {
        $("#weaknessTextInput").first().empty();
      }

      //show other vulerabilities if selected
      if (selected.toString().includes('Vulnerability (Specified)')){
        if ($('#inputVulnerability').length == 0){
          generateTextInput("vulnerabilityTextInput","Specify vulnerabilities","e.g. cold, critical hits, enchantments","inputVulnerability");
        }
      } else {
        $("#vulnerabilityTextInput").first().empty();
      }

      //show other vulerabilities if selected
      if (selected.toString().includes('Dependency (Specified)')){
        if ($('#inputDependency').length == 0){
          generateTextInput("dependencyTextInput","Specify dependencies","e.g. water, atmosphere","inputDependency");
        }
      } else {
        $("#dependencyTextInput").first().empty();
      }



      if (selected != '') {

        multi = selected.toString().split(",");
        var descriptionText = "<p>";
        for (var i = 0; i < multi.length; i++) {
          var abilityObject = findObjectFromKey(specialAbilities,multi[i]);
          descriptionText += "<b>" + multi[i] + "</b> - " + abilityObject[multi[i]].Description + '<br>';
        }
        descriptionText += "</p>";
        $descriptionArea.append(descriptionText);
      }
    } else if (id=='specialDrop') {
      //show descriptions of selected special abilities
      $descriptionArea = $(".saveBoostDropdown").first().empty();
      var $descriptionArea = $(".stepSixDescriptionThree").first();
      $descriptionArea.empty();

      //display extra options for save boost if selected
      if (selected.toString().includes('Save Boost')){
        if ($('#BoostDrop').length == 0){
          generateDropdown("saveBoostDropdown","Save boost","BoostDrop","Choose save boost",["All saving throws +1","Fortitude +3","Reflex +3","Will +3"]);
        }
      } else {
        $("#saveBoostDropdown").first().empty();
      }

      if (selected != '') {

        multi = selected.toString().split(",");
        var descriptionText = "<p>";
        for (var i = 0; i < multi.length; i++) {
          var abilityObject = findObjectFromKey(specialAbilities,multi[i]);
          descriptionText += "<b>" + multi[i] + "</b> - " + abilityObject[multi[i]].Description + '<br>';
        }
        descriptionText += "</p>";
        $descriptionArea.append(descriptionText);
      }
    } else if (id=='masterDrop') {

      selected = selected.toString().trim()
      var goodGraftSkills = getGraftSkills("Good");
      var masterGraftSkills = getGraftSkills("Master");
      var GraftSkills = goodGraftSkills.concat(masterGraftSkills);

      if (selected.includes(',')){
        var selectArray = selected.split(',');
      } else {
        selectArray = [selected];
      }
      selectArray = selectArray.concat(GraftSkills);


      var skillList = Object.keys(skillNames)
      for (var i = 0; i < selectArray.length; i++) {
        skillList = removeElement(skillList,selectArray[i]);
      }
      skillList = removeElement(skillList,'Perception');//perception removed because it is a good skill by default

      //populate profession dropdown if necessary
      if (selectArray.includes("Profession")) {
        //generate if not already there
        if (!$('[data-id="masterProfDrop"]').length){
          generateDropdown("masterProfessionDropdown","Profession","masterProfDrop","Choose profession",professionSkills);
        }
      } else {
        //remove profession dropdown
        $("#masterProfessionDropdown").empty();
      }

      goodSkillNum = Number($('#goodNumSave').text());
      generateMultiDropdown("goodSkillsDropdown","","goodDrop","Select good skills",0,skillList,goodSkillNum);
      goodSelected = $('#stepSevenGoodSave').text();
      if ( goodSelected != ''){
        $('#goodDrop').selectpicker('val', goodSelected.split(','));
      }

      //graft skills string
      var graftString = '';
      if (masterGraftSkills.length > 0) {
        graftString = masterGraftSkills.join().replace(/,/g,'*,')+'*,';
      }

      description = "<p><b>Master skills:</b> "+graftString+selected+"</p>"

      //apply the correct profession text
      if ($('[data-id="masterProfDrop"]').length){
        if (!$('[data-id="masterProfDrop"]').text().includes("Choose")) {
            description = description.replace(/((Profession)( \(.*\))?)+/g,$('#masterProfDrop').val().trim());
        }
      }

      var $descriptionArea = $(".stepSevenMasterDescription").first();
      $descriptionArea.empty();
      $descriptionArea.append(description);

      $('#stepSevenMasterSave').text(selected);

    } else if (id=='goodDrop') {

      selected = selected.toString().trim()
      var goodGraftSkills = getGraftSkills("Good");
      var masterGraftSkills = getGraftSkills("Master");
      var GraftSkills = goodGraftSkills.concat(masterGraftSkills);

      if (selected.includes(',')){
        var selectArray = selected.split(',');
      } else {
        selectArray = [selected];
      }
      selectArray = selectArray.concat(GraftSkills);

      var skillList = Object.keys(skillNames)
      for (var i = 0; i < selectArray.length; i++) {
        skillList = removeElement(skillList,selectArray[i]);
      }

      //populate profession dropdown if necessary
      if (selectArray.includes("Profession")) {
        //generate if not already there
        if (!$('[data-id="goodProfDrop"]').length){
          generateDropdown("goodProfessionDropdown","Profession","goodProfDrop","Choose good profession",professionSkills);
        }
      } else {
        //remove profession dropdown
        $("#goodProfessionDropdown").empty();
      }

      masterSkillNum = Number($('#masterNumSave').text());
      generateMultiDropdown("masterSkillsDropdown","","masterDrop","Select master skills",0,skillList,masterSkillNum);
      masterSelected = $('#stepSevenMasterSave').text();
      if ( masterSelected != ''){
        $('#masterDrop').selectpicker('val', masterSelected.split(','));
      }

      //graft skills string
      var graftString = '';
      if (goodGraftSkills.length > 0) {
        graftString = goodGraftSkills.join().replace(/,/g,'*,')+'*,';
      }

      description = "<p><b>Good skills:</b> "+graftString+selected+"</p>"

      //apply the correct profession text
      if ($('[data-id="goodProfDrop"]').length){
        if (!$('[data-id="goodProfDrop"]').text().includes("Choose")) {
            description = description.replace(/((Profession)( \(.*\))?)+/g,$('#goodProfDrop').val().trim());
        }
      }

      var $descriptionArea = $(".stepSevenGoodDescription").first();
      $descriptionArea.empty();
      $descriptionArea.append(description);

      $('#stepSevenGoodSave').text(selected);
    } else if (id=='masterProfDrop') {
      //apply the correct profession text
      var description = $(".stepSevenMasterDescription").html();
      description = description.replace(/((Profession)( \(.*\))?)+/g,selected);
      $(".stepSevenMasterDescription").html(description);

    } else if (id=='goodProfDrop') {
      //apply the correct profession text
      var description = $(".stepSevenGoodDescription").html();
      description = description.replace(/((Profession)( \(.*\))?)+/g,selected);
      $(".stepSevenGoodDescription").html(description);

    } else if (id=='scoresDrop') {
      //get ability modifiers in the correct order

      selected = selected.toString().trim();

      //build an array from selected items. including 0 and 1 items
      if (selected.includes(',')){
        var mods = selected.split(",");
      } else if  (selected == ''){
        var mods = [];
      } else {
        var mods = [selected];
      }

      saved = $('#stepSevenSaveThree').text()
      //build an array from previously saved items. including 0 and 1 items
      if (saved.includes(',')){
        var abils = saved.split(",");
      } else if (saved == ''){
        var abils = [];
      }else {
        var abils = [saved];
      }

      if (mods.length > abils.length) {
        //if number of selected items greater than saved items, figure out which one is new and push it to the saved list
        for (var i = 0; i < abils.length; i++) {
          mods = removeElement(mods,abils[i])
        }
        abils = abils.concat(mods);
      } else if (mods.length < abils.length) {
        //if number of selected items is less than saved items, figure out which item has been unselected and remove it from the saved list
        var abilities = abils.slice();
        for (var i = 0; i < mods.length; i++) {
          abilities = removeElement(abilities,mods[i])
        }
        abils = removeElement(abils,abilities[0]);
      }
      //save result
      $('#stepSevenSaveThree').text(abils)
      //display the saved list if three modifiers have been selected
      var $descriptionArea = $(".stepSevenAbilityDescription").first();
      $descriptionArea.empty();
      if (abils.length > 2){
        $descriptionArea.append("<p><b>Main ability scores:</b> ("+abils.join(',')+")</p>");
      }

    } else if (id=='spells1Drop') {
      //display which spells have been selected in save slot 1
      selected = selected.toString().trim()
      saved = $('#stepEightSave').text().split(',');
      var $descriptionArea = $(".stepEight1Description").first();
      $descriptionArea.empty();

      var currentLevel = ordinalNumber(Number(saved[2]));
      var classDrop = $('#classDrop').val().trim();
      if (selected != ''){
        //list mystic connection spells or list spells as normal
        if (classDrop == 'Mystic' && currentLevel != "0") {
          var connectionDrop = $('#stepFourOptionDrop').val().trim();
          var chosenSpell = allClassFeatures["Mystic"]["Connections"][connectionDrop]["Spells"][currentLevel][0];
          $descriptionArea.append("<p><b>"+ordinalNumber(Number(saved[2]))+" ("+saved[1]+"):</b> "+ chosenSpell + " (from connection), " +selected.replace(/,/g,', ')+"</p>");
        } else {
          $descriptionArea.append("<p><b>"+ordinalNumber(Number(saved[2]))+" ("+saved[1]+"):</b> "+selected.replace(/,/g,', ')+"</p>");
        }
      }

    } else if (id=='spells2Drop') {
      //display which spells have been selected in save slot 2
      selected = selected.toString().trim()
      saved = $('#stepEightSave').text().split(',');
      var $descriptionArea = $(".stepEight2Description").first();
      $descriptionArea.empty();
      var currentLevel = ordinalNumber(Number(saved[4]));
      var classDrop = $('#classDrop').val().trim();
      if (selected != ''){
        //list mystic connection spells or list spells as normal
        if (classDrop == 'Mystic' && currentLevel != "0") {
          var connectionDrop = $('#stepFourOptionDrop').val().trim();
          var chosenSpell = allClassFeatures["Mystic"]["Connections"][connectionDrop]["Spells"][currentLevel][0];
          $descriptionArea.append("<p><b>"+ordinalNumber(Number(saved[4]))+" ("+saved[3]+"):</b> "+ chosenSpell + " (from connection), " +selected.replace(/,/g,', ')+"</p>");
        } else {
          $descriptionArea.append("<p><b>"+ordinalNumber(Number(saved[4]))+" ("+saved[3]+"):</b> "+selected.replace(/,/g,', ')+"</p>");
        }
      }

    } else if (id=='spells3Drop') {
      //display which spells have been selected in save slot 3
      selected = selected.toString().trim()
      saved = $('#stepEightSave').text().split(',');
      var $descriptionArea = $(".stepEight3Description").first();
      $descriptionArea.empty();
      var currentLevel = ordinalNumber(Number(saved[6]));
      var classDrop = $('#classDrop').val().trim();
      if (selected != ''){
        //list mystic connection spells or list spells as normal
        if (classDrop == 'Mystic' && currentLevel != "0") {
          var connectionDrop = $('#stepFourOptionDrop').val().trim();
          var chosenSpell = allClassFeatures["Mystic"]["Connections"][connectionDrop]["Spells"][currentLevel][0];
          $descriptionArea.append("<p><b>"+ordinalNumber(Number(saved[6]))+" ("+saved[5]+"):</b> "+ chosenSpell + " (from connection), " +selected.replace(/,/g,', ')+"</p>");
        } else {
          $descriptionArea.append("<p><b>"+ordinalNumber(Number(saved[6]))+" ("+saved[5]+"):</b> "+selected.replace(/,/g,', ')+"</p>");
        }
      }

    } else if (id == 'casterDrop'){

      //generate spell selection dropdowns depending on if spell-like or full casting abilities have been selected

      var caster = $('#casterDrop').val().trim();

      if (caster == "Spell-like abilities"){
        caster = 'spell-like';
      } else if (caster =="Full caster"){
        caster = 'caster';
      }

      //clear all spells related divs
      $("#spells1Dropdown").first().empty();
      $("#spells2Dropdown").first().empty();
      $("#spells3Dropdown").first().empty();
      $(".stepEight1").first().empty();
      $(".stepEight2").first().empty();
      $(".stepEight3").first().empty();
      $(".stepEight1Description").first().empty();
      $(".stepEight2Description").first().empty();
      $(".stepEight3Description").first().empty();

      //generate spell dropdowns
      showSpellDropdowns(caster,'None');

    } else if (id == 'secondaryDrop'){

      //generate spell selection dropdowns for Secondary magic ability

      var secondary = '';

      if (selected.includes('once-per-day')){
        secondary = 'once-per-day';
      } else if (selected.includes('frequency')){
        secondary = 'once-per-freq';
      }

      //clear all spells related divs
      $("#spells1Dropdown").first().empty();
      $("#spells2Dropdown").first().empty();
      $("#spells3Dropdown").first().empty();
      $(".stepEight1").first().empty();
      $(".stepEight2").first().empty();
      $(".stepEight3").first().empty();
      $(".stepEight1Description").first().empty();
      $(".stepEight2Description").first().empty();
      $(".stepEight3Description").first().empty();

      //generate dropdowns
      showSpellDropdowns(secondary,'None');

    } else if (id == 'attackDrop'){

      var crString = $('[data-id="CRDrop"]').text().trim();
      var array = $('#arrayDrop').val().trim();
      var attackStats = window[array.toLowerCase()+'AttackStats'][crString.replace("CR ","")];

      if (selected == 'Ranged') {
        var rangedBonus = attackStats[0];
        var meleeBonus = attackStats[1];
      } else if (selected == 'Melee') {
        var rangedBonus = attackStats[1];
        var meleeBonus = attackStats[0];
      }

      //all that startswith selectors
      $("[id^='bonusRanged']").val(rangedBonus);
      $("[id^='bonusMelee']").val(meleeBonus);


    } else if (id.startsWith('AT')){
      //handle individual attack damage type
      var indexString = id.replace('AT','').replace('Drop','');
      var indexParts = indexString.split('-');

      var crString = $('[data-id="CRDrop"]').text().trim();
      var array = $('#arrayDrop').val().trim();

      var attackStats = window[array.toLowerCase()+'AttackStats'][crString.replace("CR ","")];

      //fix attack stats if brute attacks
      if ($('.attackDiv'+indexString).attr('class').includes('brute')){
        var crlist = Object.keys(combatantMainStats);
        var crindex = crlist.indexOf(crString.replace("CR ",""));
        crindex += 2;
        if(crindex > 26){
          crindex = 26;
        }
        var newCr = crlist[crindex];
        attackStats = window[array.toLowerCase()+'AttackStats'][newCr];
      }

      if (selected == "Kinetic"){
        if (indexParts[0] == 'Ranged'){
          var damageType = Object.keys(kineticRangedTypes);
          var damage = attackStats[3];
        } else if (indexParts[0] == 'Melee'){
          var damageType = Object.keys(kineticMeleeTypes);
          var damage = attackStats[4];
        }
      }
      if (selected == 'Energy'){
        if (indexParts[0] == 'Ranged'){
          var damageType = Object.keys(energyRangedTypes);
          var damage = attackStats[2];
        } else if (indexParts[0] == 'Melee'){
          var damageType = Object.keys(energyMeleeTypes);
          var damage = attackStats[5];
          if (damage == '-') {
            damage = attackStats[4];
          }
        }
      }

      //set damage
      $('#damage'+indexString).val(damage);

      //set damage type dropdown
      generateDropdown("damagetype"+indexString,"","DT"+indexString+"Drop","...",damageType);
      $('#DT'+indexString+'Drop').selectpicker('val', damageType[0]);
      $('#DT'+indexString+'Drop').selectpicker('refresh');


    } else if (id == 'artificialDrop'){
      //hande the mechanic class drone/exocortex choices

      var crString = $('[data-id="CRDrop"]').text().trim();
      var cr = Number(crString.replace("CR ","").replace("1/2","0.5").replace("1/3","0.3"));
      var classFeatures = getClassAbilities("Mechanic",cr);
      var $descriptionOneArea = $(".classFeaturesDescription").first();
      $descriptionOneArea.empty();

      var droneCr = cr - 2;
      if (droneCr < 1){
        droneCr = 1;
      }

      if (selected == "Drone") {
        $descriptionOneArea.append("<p><b>" + crString + " " + "Mechanic Abilities: </b>" + classFeatures.description + "<br><br>For a mechanic creature with a drone, build the drone as a separate technological construct of CR " + droneCr.toString() + " or use an existing technological construct with a CR " + droneCr.toString() + ". The drone does not get a full suite of actions on its own; each round, the mechanic creature and the drone can each take a move action, a swift action, and a reaction, but only one of them can take a standard action or combine its move and standard actions into a full action. The drone doesn’t have its own CR, it doesn’t contribute to the CR of the encounter, and PCs receive no XP for defeating a drone." + "</p>");
      } else if (selected == "Exocortex") {
        $descriptionOneArea.append("<p><b>" + crString + " " + "Mechanic Abilities: </b>" + classFeatures.exocortex.join(", ").capitalise() + ", " + classFeatures.description.toLowerCase() + "</p>");
      }

    }
    //remove any highlight that has been applied for form validation
    $('[data-id="'+$(e.currentTarget).attr('id')+'"]').removeClass('wizard-shadow');
}

//populates the dropdowns on step eight, either spell-like, secondary magic, or full caster abilities
function showSpellDropdowns(caster,className){

  var crString = $('[data-id="CRDrop"]').text().trim().replace('CR ','');

  if (caster != 'once-per-day' && caster != 'once-per-freq'){

    var i = 0;
    var spellObject = spellCounts[crString][caster]; //return cr and type specific spell categories and numbers
    var save = "dummy";

    //do all casting categories eg 1/day
    for (castingCategory in spellObject){
      i += 1;
      var spellNum = spellObject[castingCategory][0];
      var spellLevel = spellObject[castingCategory][1].toString();
      var spellList = getSpellsByLevel(spellLevel,className);

      //mystic connections have required spells per level
      if (className == 'Mystic') {
        var connectionDrop = $('#stepFourOptionDrop').val().trim();
        var currentLevel = ordinalNumber(Number(spellLevel));
        if (currentLevel != "0"){
          var chosenSpell = allClassFeatures["Mystic"]["Connections"][connectionDrop]["Spells"][currentLevel][0];
          spellList = removeElement(spellList,chosenSpell);
          console.log(spellNum)
          spellNum = spellNum - 1;
          console.log(spellNum)

          var $descriptionArea = $(".stepEight" + i + "Description").first();
          $descriptionArea.empty();
          $descriptionArea.append("<p><b>"+currentLevel+" ("+castingCategory+"):</b> "+ chosenSpell + " (from connection)"+"</p>");

        }
      }

      var $descriptionAbility = $(".stepEight"+i).first();
      $descriptionAbility.empty();
      $descriptionAbility.append("<p><b>"+castingCategory+":</b> Select up to "+spellNum+", "+ordinalNumber(Number(spellLevel))+" level spells.</p>");

      generateMultiDropdown("spells"+i+"Dropdown","","spells"+i+"Drop","Select level "+spellLevel+" spells","Search spells",spellList,spellNum);
      save += ","+castingCategory+","+spellLevel;
    }
  } else {

    var i = 0;
    var spellObject = spellCounts[crString]['spell-like'];
    var save = "dummy";

    for (castingCategory in spellObject){
      i += 1;
      var spellNum = spellObject[castingCategory][0];
      if (caster == 'once-per-freq') {
        spellNum = 1;
      }
      var spellLevel = spellObject[castingCategory][1].toString();
      var spellList = getSpellsByLevel(spellLevel,className);
      if (caster == 'once-per-day'){
        if (castingCategory == "1/day"){
          i = 1;
          var $descriptionAbility = $(".stepEight"+i).first();
          $descriptionAbility.empty();
          $descriptionAbility.append("<p><b>"+castingCategory+":</b> Select up to "+spellNum+", "+ordinalNumber(Number(spellLevel))+" level spells.</p>");

          generateMultiDropdown("spells"+i+"Dropdown","","spells"+i+"Drop","Select level "+spellLevel+" spells","Search spells",spellList,spellNum);
          save += ","+castingCategory;

        }
      } else {
        var $descriptionAbility = $(".stepEight"+i).first();
        $descriptionAbility.empty();
        $descriptionAbility.append("<p><b>"+castingCategory+":</b> Select up to "+spellNum+", "+ordinalNumber(Number(spellLevel))+" level spells.</p>");

        generateMultiDropdown("spells"+i+"Dropdown","","spells"+i+"Drop","Select level "+spellLevel+" spells","Search spells",spellList,spellNum);
        save += ","+castingCategory+","+spellLevel;

      }
    }


  }
  $('#stepEightSave').text(save);

}

//DECRIPTION FUNCTIONS
//set the descriptions for their step , usually called of a dropdown select trigger

function stepTwoDescription(selected){

  var $descriptionArea = $(".stepTwoDescription").first();
  var description = creatureType[selected].Description;
  var searchMask = new RegExp(selected+'s?', "i");//match case insensitive
  var selectedMatch = description.match(searchMask);

  $descriptionArea.empty();
  $descriptionArea.append("<p>"+description.replace(searchMask,'<b>'+selectedMatch+'</b>')+"</p>");
  //check if type needs choices
  if (creatureType[selected].Adjustments.hasOwnProperty("anySave")){
    generateDropdown("stepTwoOptionalDropdown","Saving throw","SavingThrowDrop","Choose saving throw",["Fortitude +2","Reflex +2","Will +2"]);
  }  else if (creatureType[selected].hasOwnProperty("Options")) {
    if (selected == "Animal"){
      generateDropdown("stepTwoOptionalDropdown","Animal intelligence","optionDrop","Choose option",creatureType[selected].Options);
    } else if (selected == "Construct"){
      generateDropdown("stepTwoOptionalDropdown","Construct mindless","optionDrop","Choose option",creatureType[selected].Options);
    }
  } else {
    $("#stepTwoOptionalDropdown").first().empty();
  }

}

function stepThreeDescription(selected){
  var $descriptionArea = $(".stepThreeDescription").first();
  $descriptionArea.empty();
  if (selected != "None") {
    var description = creatureSubType[selected].Description
    var searchMask = new RegExp(selected+'s?', "i");//match case insensitive
    var selectedMatch = description.match(searchMask);

    $descriptionArea.append("<p>"+description.replace(searchMask,'<b>'+selectedMatch+'</b>')+"</p>");
    //check if type needs choices
    if (creatureSubType[selected].hasOwnProperty("Options")) {
      generateDropdown("stepThreeOptionalDropdown","Option","stepThreeOptionDrop","Choose option",creatureSubType[selected].Options.slice(1,3));
    } else if (creatureSubType[selected].hasOwnProperty("SubRaces")) {
      generateDropdown("stepThreeOptionalDropdown","Race","stepThreeOptionDrop","Choose race",Object.keys(creatureSubType[selected].SubRaces));
    } else {
      $("#stepThreeOptionalDropdown").first().empty();
    }
  } else {
    $("#stepThreeOptionalDropdown").first().empty();
  }
}


function stepFourDescription(selected,selectedArray) {
  var $descriptionArea = $(".stepFourDescription").first();
  $descriptionArea.empty();
  var description = classData[selected].Description
  var searchMask = new RegExp(selected+'s?', "i");//match case insensitive
  var selectedMatch = description.match(searchMask);

  $descriptionArea.append("<p>"+description.replace(searchMask,'<b>'+selectedMatch+'</b>')+"</p>");

  var crString = $('[data-id="CRDrop"]').text().trim();
  var cr = Number(crString.replace("CR ","").replace("1/2","0.5").replace("1/3","0.3"));
  var classFeatures = getClassAbilities(selected,cr);
  var $descriptionOneArea = $(".classFeaturesDescription").first();
  $descriptionOneArea.empty();

  $descriptionOneArea.append("<p><b>" + crString + " " + selected + " Abilities: </b>" + classFeatures.description + "</p>");

  //set secondary dropdowns
  if ($('#stepFourSave').text() != selected+":"+selectedArray+":"+crString+":"+"None"){
    if (selected == "Soldier"){

      //Soldier

      styleKeys = Object.keys(allClassFeatures["Soldier"]["Fighting style"]).sort();

      generateDropdown("stepFourOptionalDropdown","Attack focus","stepFourOptionDrop","Choose attack focus",["Melee","Ranged"]);
      //choose primary fighting style
      generateDropdown("stepFourOptionalDropdownTwo","Primary fighting style","stepFourOptionDropTwo","Choose fighting style",styleKeys);
      if (classFeatures["Fighting style"].hasOwnProperty("second")) {
        //secondary style
        generateDropdown("stepFourOptionalDropdownThree","Secondary fighting style","stepFourOptionDropThree","Choose fighting style",styleKeys);
      } else {
        $("#stepFourOptionalDropdownThree").first().empty();
      }
      //choose gear boosts
      if (classFeatures.hasOwnProperty("Gear boost")) {
        var boosts = Object.keys(allClassFeatures["Soldier"]["Gear Boost"]).sort();
        generateMultiDropdown("stepFourOptionalDropdownFour","Gear boosts","stepFourOptionDropFour","Choose gear boosts","Search boosts",boosts,classFeatures["Gear boost"]);
      } else {
        $("#stepFourOptionalDropdownFour").first().empty();
      }

    } else if (selected == "Envoy"){

      //Envoy

      //choose envoy improvisations
      improvKeys = Object.keys(classFeatures.improvisations)
      var improvisationArray = [];

      for (var i = 0; i < improvKeys.length; i++) {
          improvisationArray = improvisationArray.concat(['LABEL=' + improvKeys[i] +'-levelMAX=' + classFeatures.improvisations[improvKeys[i]]]);
          improvisationArray = improvisationArray.concat(Object.keys(allClassFeatures["Envoy"]["Envoy Improvisations"][improvKeys[i]]).sort());
          improvisationArray = improvisationArray.concat(['ENDLABEL']);
      }
      generateDropdown("stepFourOptionalDropdown","Additional master skill","stepFourOptionDrop","Choose additional master skill",["Bluff", "Diplomacy" ,"Intimidate"]);
      generateMultiDropdown("stepFourOptionalDropdownTwo","Envoy improvisations","stepFourOptionDropTwo","Choose improvisations","Search improvisations",improvisationArray,0);
      $("#stepFourOptionalDropdownThree").first().empty();
      $("#stepFourOptionalDropdownFour").first().empty();

    } else if (selected == "Solarian") {

      //Solarian

      generateDropdown("stepFourOptionalDropdown","Solar manifestation","stepFourOptionDrop","Choose manifestation",["Solar armor","Solar weapon"]);

      if (classFeatures.hasOwnProperty("revelations")) {
        //choose solar evelations
        revelKeys = Object.keys(classFeatures.revelations);
        var revelationArray = [];

        for (var i = 0; i < revelKeys.length; i++) {
            revelationArray = revelationArray.concat(['LABEL=' + revelKeys[i] +'-levelMAX=' + classFeatures.revelations[revelKeys[i]]]);
            revelationArray = revelationArray.concat(Object.keys(allClassFeatures["Solarian"]["Stellar Revelations"][revelKeys[i]]).sort());
            revelationArray = revelationArray.concat(['ENDLABEL']);
        }
        generateMultiDropdown("stepFourOptionalDropdownTwo","Stellar revelations","stepFourOptionDropTwo","Choose revelations","Search revelations",revelationArray,0);
      } else {
        $("#stepTwoOptionalDropdownThree").first().empty();
      }
      $("#stepFourOptionalDropdownThree").first().empty();
      $("#stepFourOptionalDropdownFour").first().empty();


    } else if (selected == "Technomancer") {

      //Technomancer

      if (classFeatures.hasOwnProperty("Magic hack")) {
        //choose magic hacks
        hackKeys = Object.keys(classFeatures["Magic hack"]);
        var hackArray = [];

        for (var i = 0; i < hackKeys.length; i++) {
            hackArray = hackArray.concat(['LABEL=' + hackKeys[i] +'-levelMAX=' + classFeatures["Magic hack"][hackKeys[i]]]);
            hackArray = hackArray.concat(Object.keys(allClassFeatures["Technomancer"]["Magic Hacks"][hackKeys[i]]).sort());
            hackArray = hackArray.concat(['ENDLABEL']);
        }
        generateMultiDropdown("stepFourOptionalDropdown","Magic hacks","stepFourOptionDrop","Choose hacks","Search hacks",hackArray,0);
      } else {
        $("#stepTwoOptionalDropdown").first().empty();
      }
      $("#stepFourOptionalDropdownTwo").first().empty();
      $("#stepFourOptionalDropdownThree").first().empty();
      $("#stepFourOptionalDropdownFour").first().empty();

    } else if (selected == "Operative") {

      //Operative

      specialKeys = Object.keys(allClassFeatures["Operative"]["Operative Specializations"]).sort();
      //choose specialisation
      generateDropdown("stepFourOptionalDropdown","Operative specialization","stepFourOptionDrop","Choose specialization",specialKeys);

      if (classFeatures.hasOwnProperty("exploit")) {
        //choose exploits
        exploitKeys = Object.keys(classFeatures["exploit"]);
        var exploitArray = [];

        for (var i = 0; i < exploitKeys.length; i++) {
            exploitArray = exploitArray.concat(['LABEL=' + exploitKeys[i] +'-levelMAX=' + classFeatures["exploit"][exploitKeys[i]]]);
            exploitArray = exploitArray.concat(Object.keys(allClassFeatures["Operative"]["Operative Exploits"][exploitKeys[i]]).sort());
            exploitArray = exploitArray.concat(['ENDLABEL']);
        }
        generateMultiDropdown("stepFourOptionalDropdownTwo","Operative exploits","stepFourOptionDropTwo","Choose exploits","Search exploits",exploitArray,0);
      } else {
        $("#stepTwoOptionalDropdownTwo").first().empty();
      }
      $("#stepFourOptionalDropdownThree").first().empty();
      $("#stepFourOptionalDropdownFour").first().empty();

    } else if (selected == "Mechanic") {

      //MECHANIC

      //choose artificial inteligence
      generateDropdown("stepFourOptionalDropdown","Artificial intelligence","artificialDrop","Choose intelligence",["Drone","Exocortex"]);

      if (classFeatures.hasOwnProperty("trick")) {
        //choose exploits
        trickKeys = Object.keys(classFeatures["trick"]);
        var trickArray = [];

        for (var i = 0; i < trickKeys.length; i++) {
            trickArray = trickArray.concat(['LABEL=' + trickKeys[i] +'-levelMAX=' + classFeatures["trick"][trickKeys[i]]]);
            trickArray = trickArray.concat(Object.keys(allClassFeatures["Mechanic"]["Mechanic Tricks"][trickKeys[i]]).sort());
            trickArray = trickArray.concat(['ENDLABEL']);
        }
        generateMultiDropdown("stepFourOptionalDropdownTwo","Mechanic tricks","stepFourOptionDropTwo","Choose tricks","Search tricks",trickArray,0);
      } else {
        $("#stepTwoOptionalDropdownTwo").first().empty();
      }
      $("#stepFourOptionalDropdownThree").first().empty();
      $("#stepFourOptionalDropdownFour").first().empty();

    } else if (selected == "Mystic") {

      //Mystic

      connectionKeys = Object.keys(allClassFeatures["Mystic"]["Connections"]).sort();
      //choose connection
      generateDropdown("stepFourOptionalDropdown","Mystic connection","stepFourOptionDrop","Choose connection",connectionKeys);

      $("#stepFourOptionalDropdownTwo").first().empty();
      $("#stepFourOptionalDropdownThree").first().empty();
      $("#stepFourOptionalDropdownFour").first().empty();

    } else {
      $("#stepFourOptionalDropdown").first().empty();
      $("#stepFourOptionalDropdownTwo").first().empty();
      $("#stepFourOptionalDropdownThree").first().empty();
      $("#stepFourOptionalDropdownFour").first().empty();
    }
  }
  $('#stepFourSave').text(selected+":"+selectedArray+":"+crString+":"+"None");

}

function stepFiveDescription(selected) {

  var $descriptionArea = $(".stepFiveDescription").first();
  $descriptionArea.empty();

  if (selected != "None") {
    var graftObject = findObjectFromKey(graftTemplates,selected);

    var $descriptionArea = $(".stepFiveDescription").first();
    var description = graftObject[selected].Description;
    var searchMask = new RegExp(selected+'s?', "i");//match case insensitive
    var selectedMatch = description.match(searchMask);
    $descriptionArea.append("<p>"+description.replace(searchMask,'<b>'+selectedMatch+'</b>')+"</p>");
  }
  $('#stepFiveSave').text(selected);
}

//removes the selected element from selected array
function removeElement(array,element) {

  var index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;

}

//builds array/ labels from the graft data entry for step 5. adds label for each key
function getGraftArray() {
  var graftArray = ['None'];
  var keys = Object.keys(graftTemplates)
  for (var i = 0; i < keys.length; i++) {
      graftTitle = keys[i].replace('Grafts',' grafts').capitalise();

      graftArray = graftArray.concat(['LABEL=' + graftTitle]);
      graftArray = graftArray.concat(Object.keys(graftTemplates[keys[i]]).sort());
      graftArray = graftArray.concat(['ENDLABEL']);

  }
  return graftArray;
}

//retrieves the spells of a specific level from the spalls dat objects
function getSpellsByLevel(levelString,className){
  var list = [];
  if (className == 'None'){
    for (spellName in spellsData){
      if (spellsData[spellName].LEVEL == levelString){
        list.push(spellName)
      }
    }
  } else if (className == 'Mystic' || className == 'Technomancer'){
    for (spellName in spellsData){
      if (spellsData[spellName].LEVEL == levelString && spellsData[spellName].CLASSES.includes(className)){
        list.push(spellName)
      }
    }
  }
  return list;

}

//checks if object is empty
function isObjectEmpty(myObject) {
    for(var key in myObject) {
        if (myObject.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}


// Bootstrap Wizard Initialization - contains callbacks for initialisation and next button  pushes
$('.wizard-card').bootstrapWizard({
    'tabClass': 'nav nav-pills',
    'nextSelector': '.btn-next',
    'previousSelector': '.btn-previous',

    //runs when wizard initialised
    onInit: function(tab, navigation, index) {

        //create initial dropdowns from data arrays - static dropdowns only
        //step1
        generateDropdown("CRDropdown","Challenge rating","CRDrop","Choose CR",CRLabels);
        generateDropdown("arrayDropdown","Base array","arrayDrop","Choose base",Object.keys(stepOneDescription).sort());
        //step2
        generateDropdown("creatureTypeDropdown","Creature type","creatureTypeDrop","Choose creature type",Object.keys(creatureType).sort());
        //Step5
        generateDropdown("graftDropdown","Template graft","graftDrop","Optional template graft",getGraftArray());
        //Attacks
        generateDropdown("MainAttackDropdown","Attack focus","attackDrop","Choose main attack focus",["Melee","Ranged"]);

        //save button is initially hidden
        $('.btn-save').hide();
        //only show the alert once for the duration of the session
        if (sessionStorage.showAlert != 'key') {
          $('.alert-this').show();
        }
    },

    //runs when next button pressed. Sorted by tab index. each tab only executes its own code.
    //validation is also done on selected tabs, makes sure any dropdowns that require a choice have made a choice
    onNext: function(tab, navigation, index) {
        //Validation tab 1
        if (index == 1) {

            //hide the alert if shown once
            //$('.alert-this').hide();

            var validated = true;

            if ($('[data-id="CRDrop"]').text().includes("Choose")) {
                $('[data-id="CRDrop"]').addClass('wizard-shadow');
                validated = false;
            }
            if ($('[data-id="arrayDrop"]').text().includes("Choose")) {
                $('[data-id="arrayDrop"]').addClass('wizard-shadow');
                validated = false;
            }

            if (validated) {

              //refresh graft drop if needed (dependent on CR)
              var crString = $('[data-id="CRDrop"]').text().trim();
              var cr = Number(crString.replace("CR ","").replace("1/2","0.5").replace("1/3","0.3"));
              var array = $('#arrayDrop').val().trim();
              var graft = $('#graftDrop').val().trim();

              if (graft != '' && graft != 'None'){
                var crmin = 0;
                //check all graft sub keys for CRMin
                for (var subgraft in graftTemplates){
                  if (graftTemplates[subgraft].hasOwnProperty(graft)){
                    if (graftTemplates[subgraft][graft].hasOwnProperty("CRMin")){
                      crmin = graftTemplates[subgraft][graft].CRMin;
                    }
                  }
                }

                if (cr < crmin) {
                  //reset dropdown if cr below minimum
                  generateDropdown("graftDropdown","Template graft","graftDrop","Optional template graft",getGraftArray());
                  stepFiveDescription('None')
                }
              }

            } else {
                return false;
            }
        }
        //creature type
        if (index == 2) {
            var validated = true;

            if ($('[data-id="creatureTypeDrop"]').text().includes("Choose")) {
                $('[data-id="creatureTypeDrop"]').addClass('wizard-shadow');
                validated = false;
            }
            if ($('[data-id="SavingThrowDrop"]').length){
              if ($('[data-id="SavingThrowDrop"]').text().includes("Choose")) {
                  $('[data-id="SavingThrowDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }
            if ($('[data-id="optionDrop"]').length){
              if ($('[data-id="optionDrop"]').text().includes("Choose")) {
                  $('[data-id="optionDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if (validated) {

                //check if step 3 drop needs to be generated
                var creatureTypeStepThree = $('[data-id="creatureTypeDrop"]').text().trim()
                if ($('#stepThreeSave').text().trim() != creatureTypeStepThree){
                    //generate step three dropdowns - creature subtype
                    var titleBar ="Choose creature subtype";
                    if (['Outsider','Humanoid','Construct','Vermin'].includes(creatureTypeStepThree)){
                      var SubTypeArray = ['LABEL='+creatureTypeStepThree+' specific options'];
                      SubTypeArray = SubTypeArray.concat(window['subType'+creatureTypeStepThree]);
                      SubTypeArray = SubTypeArray.concat(['ENDLABEL']);
                      if (creatureTypeStepThree != 'Construct'){
                        titleBar ="Optional subtype graft";
                        SubTypeArray = ['None'].concat(SubTypeArray);
                        SubTypeArray = SubTypeArray.concat(['LABEL=General options']);
                        SubTypeArray = SubTypeArray.concat(subTypeAll.sort());
                        SubTypeArray = SubTypeArray.concat(['ENDLABEL']);
                      }
                    } else {
                      titleBar ="Optional creature subtype";
                      SubTypeArray = ['None','BREAK'].concat(subTypeAll.sort());
                    }

                    generateDropdown("creatureSubtypeDropdown","Creature subtype","creatureSubTypeDrop",titleBar,SubTypeArray);
                    var $descriptionArea = $(".stepThreeDescription").first().empty();
                    $("#stepThreeOptionalDropdown").first().empty();
                    $('#stepThreeSave').text(creatureTypeStepThree);

                }
            } else {
                return false;
            }
        }
        // subtype
        if (index == 3) {
            var validated = true;

            if ($('[data-id="creatureSubTypeDrop"]').text().includes("Choose")) {
                $('[data-id="creatureSubTypeDrop"]').addClass('wizard-shadow');
                validated = false;
            }
            if ($('[data-id="stepThreeOptionDrop"]').length){
              if ($('[data-id="stepThreeOptionDrop"]').text().includes("Choose")) {
                  $('[data-id="stepThreeOptionDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if (validated) {
              //setup tab 4 - class

              //put current class first in list
              var arrays = ['Combatant','Expert','Spellcaster'];
              var arrayDrop = $('#arrayDrop').val().trim();
              arrays = removeElement(arrays,arrayDrop);

              //build class list, current base array on top
              var classArray = ['None', 'LABEL='+ arrayDrop +' classes'].concat(window['class'+arrayDrop]).concat(['ENDLABEL']);
              classArray = classArray.concat(['LABEL='+ arrays[0] +' classes']).concat(window['class'+arrays[0]]).concat(['ENDLABEL']);
              classArray = classArray.concat(['LABEL='+ arrays[1] +' classes']).concat(window['class'+arrays[1]]).concat(['ENDLABEL']);

              generateDropdown("classDropdown","Class graft","classDrop","Optional class graft",classArray);

              var $descriptionArea = $(".stepFourDescription").first();
              $descriptionArea.empty();

              var prev = $('#stepFourSave').text().trim().split(":");
              //var prev2 = $('#stepFourSave2').text().trim().split(":");

              if (prev[0] != 'None' && prev[1] == arrayDrop) {
                $('#classDrop').selectpicker('val', prev[0]);
                stepFourDescription(prev[0],prev[1]);
              } else if (prev[3] == 'chosen'){
                $('#classDrop').selectpicker('val', "None");
                $('#stepFourSave').text("None:None");
              } else if (prev[1] != arrayDrop) {
                $('#stepFourSave').text("None:None");
              }


            } else {
                return false;
            }
        }
        //Validation tab 4 - class
        if (index == 4) {

            var validated = true;

            //verify that class extra options have been selected

            if ($('[data-id="stepFourOptionDrop"]').length){
              if ($('[data-id="stepFourOptionDrop"]').text().includes("Choose")) {
                  $('[data-id="stepFourOptionDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }
            if ($('[data-id="stepFourOptionDropTwo"]').length){
              if ($('[data-id="stepFourOptionDropTwo"]').text().includes("Choose")) {
                  $('[data-id="stepFourOptionDropTwo"]').addClass('wizard-shadow');
                  validated = false;
              }
            }
            if ($('[data-id="stepFourOptionDropThree"]').length){
              if ($('[data-id="stepFourOptionDropThree"]').text().includes("Choose")) {
                  $('[data-id="stepFourOptionDropThree"]').addClass('wizard-shadow');
                  validated = false;
              }
            }
            if ($('[data-id="stepFourOptionDropFour"]').length){
              if ($('[data-id="stepFourOptionDropFour"]').text().includes("Choose")) {
                  $('[data-id="stepFourOptionDropFour"]').addClass('wizard-shadow');
                  validated = false;
              }
            }
            if ($('[data-id="artificialDrop"]').length){
              if ($('[data-id="artificialDrop"]').text().includes("Choose")) {
                  $('[data-id="artificialDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if (validated) {

            } else {
                return false;
            }
        }
        //Validation tab 5 - template
        if (index == 5) {

            var validated = true;

            if (validated) {

              var crString = $('[data-id="CRDrop"]').text().trim();
              var cr = Number(crString.replace("CR ","").replace("1/2","0.5").replace("1/3","0.3"));
              var array = $('#arrayDrop').val().trim();
              var subtype = $('#creatureSubTypeDrop').val().trim();
              var graft = $('#graftDrop').val().trim();
              var classDrop = $('#classDrop').val().trim();

              //check if configuration has changed
              if ($('#stepSixSave').text() != crString + ":" + array + ":" + graft + ":" + classDrop + ":" + subtype) {
                //step6 generation - dependent on CR
                //remove any previously generated dropdowns

                $("#burrowTextInput").first().empty();
                $("#climbTextInput").first().empty();
                $("#flyTextInput").first().empty();
                $("#swimTextInput").first().empty();
                $("#dependencyTextInput").first().empty();
                $("#weaknessTextInput").first().empty();
                $("#vulnerabilityTextInput").first().empty();
                $("#saveBoostDropdown").first().empty();

                maxOptions = window[array.toLowerCase()+'MainStats'][crString.replace("CR ","")][11];//get max options from array

                //check for additional specials from grafts
                var additionalSpecial = getAdditionalAbilities()
                if (additionalSpecial.hasOwnProperty("SpecialAbilities")) {
                  maxOptions += additionalSpecial["SpecialAbilities"];
                }

                var FreeAbilities = [];
                FreeAbilities = FreeAbilities.concat(['LABEL=Free abilities']);
                FreeAbilities = FreeAbilities.concat(Object.keys(specialAbilities.FreeAbilities).sort());
                FreeAbilities = FreeAbilities.concat(['ENDLABEL']);
                FreeAbilities = FreeAbilities.concat(['LABEL=Weaknesses']);
                FreeAbilities = FreeAbilities.concat(Object.keys(specialAbilities.Weaknesses).sort());
                FreeAbilities = FreeAbilities.concat(['ENDLABEL']);

                var SpecialAbilities = [];
                SpecialAbilities = SpecialAbilities.concat(['LABEL=Adjustment abilities']);
                SpecialAbilities = SpecialAbilities.concat(Object.keys(specialAbilities.AdjustmentAbilities).sort());
                SpecialAbilities = SpecialAbilities.concat(['ENDLABEL']);
                SpecialAbilities = SpecialAbilities.concat(['LABEL=Special abilities']);
                SpecialAbilities = SpecialAbilities.concat(Object.keys(specialAbilities.Abilities).sort());
                SpecialAbilities = SpecialAbilities.concat(['ENDLABEL']);
                //get graft abilities
                var otherString = getGraftAbilities("Other").join(', ');
                var specialString = getGraftAbilities("Special").join(', ');
                var graftString = (otherString.length > 0 ? otherString : '') + (specialString.length > 0 && otherString.length > 0 ? ', ' : '') + (specialString.length > 0 ? specialString : '');

                //clear description areas
                $(".stepSixDescriptionTwo").first().empty();
                $(".stepSixDescriptionThree").first().empty();

                var $descriptionArea = $(".stepSixDescription").first();
                $descriptionArea.empty();
                if (graftString.length > 2){
                  $descriptionArea.append("<p><b>Abilities from grafts:</b> "+graftString+"</p>");
                }

                //generate dropdowns for special and free abilities
                generateMultiDropdown("freeAbilityDropdown","","freeDrop","Select free abilities","Search abilities",FreeAbilities,100);
                generateMultiDropdown("specialAbilityDropdown","","specialDrop","Select special abilities","Search abilities",SpecialAbilities,maxOptions);
                var $descriptionArea = $(".stepSixAbilities").first();
                $descriptionArea.empty();
                $descriptionArea.append("<p>Select up to <b>" + maxOptions.toString() + "</b> special abilities</p>");

              }
              $('#stepSixSave').text(crString + ":" + array + ":" + graft + ":" + classDrop + ":" + subtype);

            } else {
                return false;
            }
        }
        //validation step 6 - special abilities
        if (index == 6) {

            var validated = true;

            if ($('[data-id="BoostDrop"]').length){
              if ($('[data-id="BoostDrop"]').text().includes("Choose")) {
                  $('[data-id="BoostDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if (validated) {

              var type = $('[data-id="creatureTypeDrop"]').text().trim();
              var typeOption = $('[data-id="optionDrop"]').text().trim().toString();
              var classDrop = $('#classDrop').val().toString().trim();
              var classScores = 'None';
              //check if soldier for damage focus
              if ($('[data-id="stepFourOptionDrop"]').length && classDrop == 'Soldier'){
                var damageStyle = $('#stepFourOptionDrop').val().trim() + 'Style';

                //also set attack focus in attack sections
                disableDropdown('attackDrop',false);
                $('#attackDrop').selectpicker('val', $('#stepFourOptionDrop').val().trim());
                $('#attackDrop').selectpicker('refresh');
                disableDropdown('attackDrop',true);


              } else {
                var damageStyle = 'Style';
                disableDropdown('attackDrop',false);
              }

              if (classDrop != '' && classDrop != 'None') {
                if (classDrop == 'Soldier') {
                  classScores = classData[classDrop][damageStyle].AbilityScoreModifiers;
                } else {
                  classScores = classData[classDrop].AbilityScoreModifiers;
                }
                classScores = classScores[0] + ',' + classScores[1] + ',' + classScores[2];
              }

              //Ability Scores //only generate once
              if ($('#stepSevenSave').text() != type + ":" + typeOption + ":" + classDrop + ":" + damageStyle) {

                $(".stepSevenAbilityDescription").first().empty();
                $("#AbilityScoresDropdown").first().empty();


                if (classScores == 'None') {

                  //reset scores save
                  $('#stepSevenSaveThree').text('');

                  var str ='<option>Str</option>';
                  var dex ='<option>Dex</option>';
                  var con ='<option>Con</option>';
                  var int ='<option>Int</option>';
                  var wis ='<option>Wis</option>';
                  var cha ='<option>Cha</option>';

                  //make creature type changes to ability scores TODO change this so that it reads the selected subtypes instead of being hard coded
                  if (type == "Ooze") {
                    int = '<option style="color: #9a9a9a;pointer-events: none">Int already set ( - )</option>'
                  } else if (type == "Construct") {
                    con = '<option style="color: #9a9a9a;pointer-events: none">Con already set ( - )</option>'
                    if (!$('[data-id="optionDrop"]').text().trim().includes("Not")){
                      int = '<option style="color: #9a9a9a;pointer-events: none">Int already set ( - )</option>'
                    }
                  } else if (type == "Animal") {
                    intNum = $('[data-id="optionDrop"]').text().trim().replace('Set intelligence ','')
                    int = '<option style="color: #9a9a9a;pointer-events: none">Int already set ( '+intNum+' )</option>'

                  } else if (type == "Undead") {
                    con = '<option style="color: #9a9a9a;pointer-events: none">Con already set ( - )</option>'

                  } else if (type == "Vermin") {
                    int = '<option style="color: #9a9a9a;pointer-events: none">Int already set ( - )</option>'

                  }

                  var dropdown = '<select class="selectpicker" id="scoresDrop" title="Choose top ability scores"data-style="btn-default" data-width="100%" data-size="13" multiple data-max-options="3" data-selected-text-format="count > 0">' + str + dex + con + int + wis + cha + '</select>'
                  document.getElementById('AbilityScoresDropdown').innerHTML = dropdown;
                  //initialise dropdown
                  $('#scoresDrop').selectpicker();
                  //bind dropdown click  handler
                  $('#scoresDrop').on('changed.bs.select', dropClickHandler);

                  var $descriptionAbility = $(".stepSevenAbility").first();
                  $descriptionAbility.empty();
                  $descriptionAbility.append("<p>Select top three ability scores (highest first).</p>");

                } else {

                  var $descriptionAbility = $(".stepSevenAbility").first();
                  $descriptionAbility.empty();
                  $descriptionAbility.append("<p>Ability scores have been selected by <b>"+classDrop+"</b> class graft.</p>");

                  var $descriptionArea = $(".stepSevenAbilityDescription").first();
                  $descriptionArea.empty();
                  $descriptionArea.append("<p><b>Main ability scores:</b> ("+classScores+")</p>");


                }

                $('#stepSevenSave').text(type + ":" + typeOption + ":" + classDrop + ":" + damageStyle);
              }

              //skills generation - step 7

              var crString = $('[data-id="CRDrop"]').text().trim();
              var array = $('#arrayDrop').val().trim();
              var graft = $('#graftDrop').val().trim();
              var classDrop = $('#classDrop').val().trim();

              //if mystic or operative be more specific
              if (classDrop == "Mystic" || classDrop == "Operative") {
                var connectionDrop = $('#stepFourOptionDrop').val().trim();
                classDrop = classDrop + connectionDrop;
              }

              var subtype = $('#creatureSubTypeDrop').val().trim();

              //check if envoy for extra master skill
              if ($('[data-id="stepFourOptionDrop"]').length && classDrop == 'Envoy'){
                var extraMaster = [$('#stepFourOptionDrop').val().trim()];
              } else {
                var extraMaster = [];
              }

              //check if configuration has changed
              if ($('#stepSevenSaveTwo').text() != crString + ":" + array + ":" + graft + ":" + classDrop + ":" + subtype + ":" + extraMaster) {

                //get any skills from grafts if necessary
                var masterGraftSkills = getGraftSkills("Master");
                var goodGraftSkills = getGraftSkills("Good");
                //if envoy grab extra skill from dropdown
                if ($('[data-id="stepFourOptionDrop"]').length && classDrop == 'Envoy'){
                  masterGraftSkills = masterGraftSkills.concat(extraMaster);
                }

                //combine
                var GraftSkills = masterGraftSkills.concat(goodGraftSkills);

                //Master Skills
                masterMod = window[array.toLowerCase()+'MainStats'][crString.replace("CR ","")][12][0];
                masterSkillNum = window[array.toLowerCase()+'MainStats'][crString.replace("CR ","")][12][1];

                //remove skills already chosen by grafts
                var masterSkills = Object.keys(skillNames);
                for (var i = 0; i < GraftSkills.length; i++) {
                  masterSkills = removeElement(masterSkills,GraftSkills[i]);
                }

                //set description and generate dropdown
                var $descriptionMaster = $(".stepSevenMaster").first();
                $descriptionMaster.empty();
                $descriptionMaster.append("<p>Select up to <b>" + masterSkillNum + "</b> master skills.</p>");
                $('#stepSevenMasterSave').text('')
                generateMultiDropdown("masterSkillsDropdown","","masterDrop","Select master skills",0,masterSkills,masterSkillNum);
                $('#masterNumSave').text(masterSkillNum);

                //Good Skills
                goodMod = window[array.toLowerCase()+'MainStats'][crString.replace("CR ","")][13][0];
                goodSkillNum = window[array.toLowerCase()+'MainStats'][crString.replace("CR ","")][13][1];

                //check for additional skills from grafts
                var additionalGood = getAdditionalAbilities()
                if (additionalGood.hasOwnProperty("GoodSkills")) {
                  goodSkillNum += additionalGood["GoodSkills"];
                }

                //remove skills already chosen by grafts
                var goodSkills = Object.keys(skillNames)
                for (var i = 0; i < GraftSkills.length; i++) {
                  goodSkills = removeElement(goodSkills,GraftSkills[i]);
                }
                goodSkills = removeElement(goodSkills,'Perception');//remove perception from good skills
                //add relevant abilityscores to

                //set description and generate dropdown
                var $descriptionGood = $(".stepSevenGood").first();
                $descriptionGood.empty();
                $descriptionGood.append("<p>Select up to <b>" + goodSkillNum + "</b> good skills.</p>");
                $('#stepSevenGoodSave').text('');
                generateMultiDropdown("goodSkillsDropdown","","goodDrop","Select good skills",0,goodSkills,goodSkillNum);
                $('#goodNumSave').text(goodSkillNum);

                //empty descriptions and fill with skills
                $(".stepSevenMasterDescription").first().empty();
                $(".stepSevenGoodDescription").first().empty();

                if (masterGraftSkills.length > 0){
                  $(".stepSevenMasterDescription").first().append("<p><b>Master skills:</b> "+masterGraftSkills.join().replace(/,/g,'*,')+"*</p>");
                  $(".stepSevenAsterix").first().empty();
                  $(".stepSevenAsterix").first().append("<p>*selected by grafts</p>");
                }
                if (goodGraftSkills.length > 0){
                  $(".stepSevenGoodDescription").first().append("<p><b>Good skills:</b> "+goodGraftSkills.join().replace(/,/g,'*,')+"*</p>");
                  $(".stepSevenAsterix").first().empty();
                  $(".stepSevenAsterix").first().append("<p>*selected by grafts</p>");
                }
                //save the current configuration
                $('#stepSevenSaveTwo').text(crString + ":" + array + ":" + graft + ":" + classDrop + ":" + subtype + ":" + extraMaster);
              }


            } else {
                return false;
            }
        }
        //Validation tab 7 - skills
        if (index == 7) {

            var validated = true;

            if ($('[data-id="scoresDrop"]').length){
              var dropText = $('#scoresDrop').val().toString().trim();;
              if (dropText.split(",").length < 3) {
                  $('[data-id="scoresDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if ($('[data-id="masterProfDrop"]').length){
              if ($('[data-id="masterProfDrop"]').text().includes("Choose")) {
                  $('[data-id="masterProfDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if ($('[data-id="goodProfDrop"]').length){
              if ($('[data-id="goodProfDrop"]').text().includes("Choose")) {
                  $('[data-id="goodProfDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if (validated) {

              var crString = $('[data-id="CRDrop"]').text().trim();
              $(".attackCR").html('<h5>'+crString+'</h5>')

            } else {
                return false;
            }
        }
        //Validation tab 8 - attacks
        if (index == 8) {

            var validated = true;

            //validate high stat choice
            if ($('[data-id="attackDrop"]').length){
              if ($('[data-id="attackDrop"]').text().includes("Choose")) {
                  $('[data-id="attackDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            //iterate all attack names
            $("[id^='attackName']").each(function(){
                if ($(this).val() == ''){
                  $(this).addClass('wizard-shadow');
                  validated = false
                } else {
                  $(this).removeClass('wizard-shadow');
                }
            });

            if (validated) {

              //setup tab 9 - spells

              //grab spell objects from graft if any
              var graftSpells = getGraftSpelllikeAbilities()

              var array = $('#arrayDrop').val().trim();
              var special = $('#specialDrop').val().toString().trim();
              var graft = $('#graftDrop').val().trim();
              var subtype = $('#creatureSubTypeDrop').val().trim();
              var classDrop = $('#classDrop').val().trim();

              var crString = $('[data-id="CRDrop"]').text().trim().replace('CR ','');
              var cr = Number(crString.replace("1/2","0.5").replace("1/3","0.3"));

              if (special.includes("Secondary Magic")){
                special = "Secondary Magic";
              } else {
                special = "None"
              }
              //TODO this will need to be fixed if graft type ever has CR and other abilities
              var graftSpelllike = false;
              if (graftSpells.hasOwnProperty("CR")) {
                var crmatch = graftSpells["CR"];
                if (cr >= crmatch){
                  graftSpelllike = true;
                }
                graftSpells = {};
              }

              if ($('#stepEightTwoSave').text() != array+":"+special+":"+crString+":"+subtype+":"+graft+":"+classDrop){

                //clear page
                $("#casterTypeDropdown").first().empty();
                $("#spells1Dropdown").first().empty();
                $("#spells2Dropdown").first().empty();
                $("#spells3Dropdown").first().empty();
                $(".stepEight1").first().empty();
                $(".stepEight2").first().empty();
                $(".stepEight3").first().empty();
                $(".stepEight0Description").first().empty();
                $(".stepEight1Description").first().empty();
                $(".stepEight2Description").first().empty();
                $(".stepEight3Description").first().empty();

                //check if there are graft spell-like abilities and print if necessary
                if (!isObjectEmpty(graftSpells)){
                  var $description = $(".stepEight0Description").first();
                  $description.empty();
                  graftString = "<p>"+"Racial spell-like abilities:"+"</p>";
                  for (key in graftSpells) {
                    var Key = key;
                    if (Key == "atWill"){
                      Key = "at will";
                    }
                    graftString += "<p><b>" + Key + ":</b> " + graftSpells[key].join(', ') + "</p>";
                  }

                  $description.append(graftString);

                };

                var $descriptionSpell = $(".casterTypeDescription").first();
                $descriptionSpell.empty();

                if (array == "Spellcaster"){
                  //spell caster base array
                  if (classDrop == 'Mystic' || classDrop == 'Technomancer'){
                    //spelcaster classes
                    descSpell = "This creature has the " + classDrop + " class. Spell choices are only from the " + classDrop + " spell list.";
                    showSpellDropdowns("caster",classDrop);
                  } else {
                    //spellcasters can choose between full caster or spell-like abilities
                    descSpell = "This creature is a spellcaster.";
                    generateDropdown("casterTypeDropdown","Casting type","casterDrop","Choose casting type",["Spell-like abilities","Full caster"]);
                  };
                } else if( graftSpelllike ){
                  //spell-like abilities from graft abilities
                  descSpell = "This creature has spell-like abilities.";
                  showSpellDropdowns("spell-like",'None');
                } else if(special == "Secondary Magic"){
                  //spell-like abilities from secondary magic special ability
                  descSpell = "This creature has limited spell-like abilities via the Secondary Magic ability.";
                  generateDropdown("casterTypeDropdown","Limited spells","secondaryDrop","Choose limited spells",["Only once-per-day spells","Only one spell per frequency (at will, 1/day, etc.)"]);
                } else {
                  //no spells brah
                  descSpell = "Spell casting is reserved for creatures with the spellcaster base and creatures with spell-like abilities";
                };

                $descriptionSpell.append("<p>"+descSpell+"</p>");
                $('#stepEightTwoSave').text(array+":"+special+":"+crString+":"+subtype+":"+graft+":"+classDrop);
              }

            } else {
                return false;
            }
        }

        //Validation tab 9 - Spells
        if (index == 9) {

            var validated = true;

            if ($('[data-id="casterDrop"]').length){
              if ($('[data-id="casterDrop"]').text().includes("Choose")) {
                  $('[data-id="casterDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if ($('[data-id="secondaryDrop"]').length){
              if ($('[data-id="secondaryDrop"]').text().includes("Choose")) {
                  $('[data-id="secondaryDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if (validated) {
              //genrate final checks

              var classDrop = $('#classDrop').val().trim();
              if (classDrop != '' && classDrop != 'None'){
                var type = $('#creatureTypeDrop').val().trim();
                generateDropdown("precedenceDropdown","Main stat adjustments","precedenceDrop","Choose stat adjustments",["Creature ("+type+") stat adjustments","Class ("+classDrop+") stat adjustments"]);
              } else {
                $("#precedenceDropdown").first().empty();
              }

              //generate Languages
              var languages = [];
              languages = languages.concat(['LABEL=Common']);
              languages = languages.concat(commonLanguages.sort());
              languages = languages.concat(['ENDLABEL']);
              languages = languages.concat(['LABEL=Uncommon']);
              languages = languages.concat(uncommonLanguages.sort());
              languages = languages.concat(['ENDLABEL']);

              generateMultiDropdown("languageDropdown","Languages (if any)","languageDrop","Select languages",0,languages,100);

              //generate user fillable sections
              generateMultiDropdown("optionalSectionsDropdown","Extra stat block entries (user fillable)","OSDrop","Select entries",0,["Ecology","Gear","Tactics"],100);

              //geneate alignments

              //generate alignment
              generateDropdown("Alignment1Dropdown","Alignment","align1Drop","Choose alignmnet",["Lawful","Neutral","Chaotic"]);
              generateDropdown("Alignment2Dropdown","&nbsp;","align2Drop","Choose alignmnet",["Good","Neutral","Evil"]);

              //check if any alignments apply from template graft
              var setAlignment = '';
              var graft = $('#graftDrop').val().trim();
              if (graft != '' && graft != 'None') {
                for (var subgraft in graftTemplates){
                  if (graftTemplates[subgraft].hasOwnProperty(graft)){
                    if (graftTemplates[subgraft][graft].hasOwnProperty("Alignment")){
                      setAlignment = graftTemplates[subgraft][graft]["Alignment"];
                    }
                  }
                }
              }

              if (setAlignment != '') {
                //part 1
                var set1 = '';
                var part1 = ["Lawful","Neutral","Chaotic"]
                for (i = 0; i < part1.length; i++) {
                  if (setAlignment.includes(part1[i])){
                    set1 = part1[i];
                  }
                }
                if (set1 != ''){
                  $('#align1Drop').selectpicker('val', set1);
                  $('#align1Drop').selectpicker('refresh');
                  disableDropdown('align1Drop',true);
                }
                //part 2
                var set2 = '';
                var part2 = ["Good","Neutral","Evil"]
                for (i = 0; i < part2.length; i++) {
                  if (setAlignment.includes(part2[i])){
                    set2 = part2[i];
                  }
                }
                if (set2 != ''){
                  $('#align2Drop').selectpicker('val', set2);
                  $('#align2Drop').selectpicker('refresh');
                  disableDropdown('align2Drop',true);
                }

              } else {
                //default alignment us chaotic neutral
                $('#align1Drop').selectpicker('val', "Chaotic");
                $('#align1Drop').selectpicker('refresh');
                $('#align2Drop').selectpicker('val', "Neutral");
                $('#align2Drop').selectpicker('refresh');
              }

              //size dropdown
              var sizeSelect = "Medium";
              if (graft == "Giant (CR 1+)") {
                sizeSelect = "Large";
              }
              if (graft == "Miniature") {
                sizeSelect = "Tiny";
              }

              generateDropdown("sizeDropdown","Size","sizeDrop","...",Object.keys(creatureSize));
              $('#sizeDrop').selectpicker('val', sizeSelect);
              $('#sizeDrop').selectpicker('refresh');




            } else {
                return false;
            }
        }
        //Validation tab 10
        if (index == 10) {

          //final tab validation
          var validated = true;

          if ($('[data-id="precedenceDrop"]').length){
            if ($('[data-id="precedenceDrop"]').text().includes("Choose")) {
                $('[data-id="precedenceDrop"]').addClass('wizard-shadow');
                validated = false;
            }
          }

          if ($('[data-id="align1Drop"]').length){
            if ($('[data-id="align1Drop"]').text().includes("Choose")) {
                $('[data-id="align1Drop"]').addClass('wizard-shadow');
                validated = false;
            }
          }

          if ($('[data-id="align2Drop"]').length){
            if ($('[data-id="align2Drop"]').text().includes("Choose")) {
                $('[data-id="align2Drop"]').addClass('wizard-shadow');
                validated = false;
            }
          }

          if (validated){
            return buildStatBlock();
          } else {
            return false;
          }
        }
    },

    // toggle next/finish button on last tab
    onTabShow: function(tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index + 1;

        var $wizard = navigation.closest('.wizard-card');

        // If it's the last tab then hide the last button and show the finish instead
        if ($current >= $total) {
            $($wizard).find('.btn-next').hide();
            $($wizard).find('.btn-finish').show();
        } else {
            $($wizard).find('.btn-next').show();
            $($wizard).find('.btn-finish').hide();
        }

        //set progress bar to correct percentage
        if ($current == 1) {
          var $percent = 0;
        } else {
          var $percent = (($current-1)/($total-1)) * 100;
        }

		    $($wizard).find('.progress-bar').css({width:$percent+'%'});
    }
});

//finish function - fires when the finish button is pushed//now reset button
$('.btn-finish').click(function() {
  $('#ResetModal').modal('show');
});

$('.btn-reset').click(function() {
  document.location.reload();
});

//button click for modal
$('.btn-change').click(function(){

   val=$(this).text()
   if(val=='Change'){
     //change base array
     var newChoice = $('#stepFourSave2').text().trim().split(':');
     $('#arrayDrop').selectpicker('val', newChoice[1]);
     //change step1 description too
     var $descriptionArea = $(".stepOneDescription").first();
     $descriptionArea.empty();
     $descriptionArea.append("<p>"+stepOneDescription[newChoice[1]]+"</p>");
     $('#classDrop').selectpicker('val', newChoice[0]);
     stepFourDescription(newChoice[0],newChoice[1]);

   } else if (val=='No thanks'){
     //change back to previous
     var prev = $('#stepFourSave').text().trim().split(':');
     $('#classDrop').selectpicker('val', prev[0]);
     //stepFourDescription(prev[0],prev[1]);
   }
});

//button click for modal
$('.btn-graft').click(function(){

   val=$(this).text()
   if(val=='Change'){
     //change base array
     var newChoice = $('#stepFiveSave2').text().trim().split(":");

     if (newChoice[1] != "None"){
       $('#creatureSubTypeDrop').selectpicker('val', newChoice[1]);
       stepThreeDescription(newChoice[1]);
       disableDropdown('creatureSubTypeDrop',true);
     }
     if (newChoice[2] != "None"){
       $('#creatureTypeDrop').selectpicker('val', newChoice[2]);
       stepTwoDescription(newChoice[2]);
       disableDropdown('creatureTypeDrop',true);
     }

     $('#graftDrop').selectpicker('val', newChoice[0]);
     stepFiveDescription(newChoice[0]);

     $('#stepFiveSave').text(newChoice[0]);

   } else if (val=='No thanks'){
     //change back to previous
     var prev = $('#stepFiveSave').text().trim();
     $('#graftDrop').selectpicker('val', prev);
   }
});

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

function dismissAlert() {
  $('.alert-this').hide()
  sessionStorage.showAlert = 'key';
}

function dismissErrorAlert() {
  $('.alert-this-red').hide()
}
