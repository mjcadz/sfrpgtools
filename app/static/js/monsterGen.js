//This funcion reads the state of all the dropdowns in the wizard, uses that info to retrieve the appropriate data from the data objects, then builds the chosen stat block
function buildStatBlock() {

  var statBlock = {};

  //Step 1

  //base array
  var CRDrop = $('[data-id="CRDrop"]').text().trim().replace("CR ","");
  var arrayDrop = $('[data-id="arrayDrop"]').text().trim();

  statBlock.Cr = CRDrop;
  statBlock.Base = arrayDrop;

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

  statBlock.OtherAbilitiesGraft = getGraftAbilities("Other");
  statBlock.SpecialAbilitiesGraft = getGraftAbilities("Special");
  statBlock.OtherAbilitiesDescription = $('#freeDrop').val().toString().trim();
  statBlock.SpecialAbilitiesDescription = $('#specialDrop').val().toString().trim();

  //step 7 - skills and Modifiers

  //overwrite master+ good skills with selected + graft skills
  statBlock.MainAbilityScores = $(".stepSevenAbilityDescription").first().text().replace('Main ability scores: (','').replace(')','').split(',')
  statBlock.MasterSkills = $(".stepSevenMasterDescription").first().text().replace('Master skills: ','').replace(/\*/g,'').split(',');
  statBlock.GoodSkills = $(".stepSevenGoodDescription").first().text().replace('Good skills: ','').replace(/\*/g,'').split(',');

  //step 8 - spells

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
  for (var i = 1; i < 4; i++) {//loop three times
    //grab text from descriptions
    var spellSlot = $(".stepEight"+ i.toString() +"Description").first().text()
    //check if there is text there and assign to stat block
    if (spellSlot.length > 2){
      var spells = spellSlot.split(': ');
      var freq = spells[0].replace(' ','');
      statBlock['Spells'+freq] = spells[1].split(', ');
    }
  }

  //step 9 - final checks

  //stat block adjustments

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
  $outputArea.append("<p>"+print+"</p>");

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
    statObject.ClassAbilities = getClassAbilities(classDrop,cr);

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
function generateDropdown(parentID,dropID,title,array) {
  //add select options
  var dropHtml = '<select class="selectpicker show-tick" id="'+ dropID +'" title="'+title+'" data-style="btn-default" data-width="100%" data-size="13">'
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

//creates bootstrap-select multiple select dropdowns from arrays
function generateMultiDropdown(parentID,dropID,title,searchTitle,array,maxOptions) {
  //check if search bar added
  if (searchTitle === 0){
    searTitl = ''
  } else {
    searTitl = 'data-live-search="true" data-live-search-placeholder="'+searchTitle+'" ';
  }
  //add select options
  var dropHtml = '<select class="selectpicker" id="'+ dropID +'" title="'+title+'" data-style="btn-default" data-width="100%" data-size="13" multiple ' + searTitl + 'data-max-options="'+maxOptions+'" data-selected-text-format="count">'
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
  //append to parent div
  document.getElementById(parentID).innerHTML = dropHtml;
  //initialise dropdown
  $('#'+dropID).selectpicker();
  //bind dropdown click  handler
  $('#'+dropID).on('changed.bs.select', dropClickHandler);
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
    if (classData[classDrop].hasOwnProperty(skillString)){
      skillList = skillList.concat(classData[classDrop][skillString]);
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
          $('#stepFourSave').text(selected+":"+"None"+":"+"chosen");
          var $descriptionArea = $(".stepFourDescription").first();
          $descriptionArea.empty();
          $("#stepFourOptionalDropdown").first().empty();
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

      var $descriptionArea = $(".stepSixDescriptionThree").first();
      $descriptionArea.empty();
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

      goodSkillNum = Number($('#goodNumSave').text());
      generateMultiDropdown("goodSkillsDropdown","goodDrop","Select good skills",0,skillList,goodSkillNum);
      goodSelected = $('#stepSevenGoodSave').text();
      if ( goodSelected != ''){
        $('#goodDrop').selectpicker('val', goodSelected.split(','));
      }

      //graft skills string
      var graftString = '';
      if (masterGraftSkills.length > 0) {
        graftString = masterGraftSkills.join().replace(/,/g,'*,')+'*,';
      }

      var $descriptionArea = $(".stepSevenMasterDescription").first();
      $descriptionArea.empty();
      $descriptionArea.append("<p><b>Master skills:</b> "+graftString+selected+"</p>");

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

      masterSkillNum = Number($('#masterNumSave').text());
      generateMultiDropdown("masterSkillsDropdown","masterDrop","Select master skills",0,skillList,masterSkillNum);
      masterSelected = $('#stepSevenMasterSave').text();
      if ( masterSelected != ''){
        $('#masterDrop').selectpicker('val', masterSelected.split(','));
      }

      //graft skills string
      var graftString = '';
      if (goodGraftSkills.length > 0) {
        graftString = goodGraftSkills.join().replace(/,/g,'*,')+'*,';
      }

      var $descriptionArea = $(".stepSevenGoodDescription").first();
      $descriptionArea.empty();
      $descriptionArea.append("<p><b>Good skills:</b> "+graftString+selected+"</p>");

      $('#stepSevenGoodSave').text(selected);
    } else if (id=='scoresDrop') {

      var $descriptionArea = $(".stepSevenAbilityDescription").first();
      $descriptionArea.empty();
      if (selected.toString().trim().split(",").length > 2){
        $descriptionArea.append("<p><b>Main ability scores:</b> ("+selected.toString()+")</p>");
      }

    } else if (id=='spells1Drop') {
      selected = selected.toString().trim()
      saved = $('#stepEightSave').text().split(',');
      var $descriptionArea = $(".stepEight1Description").first();
      $descriptionArea.empty();
      if (selected != ''){
        $descriptionArea.append("<p><b>"+saved[1]+":</b> "+selected.replace(',',', ')+"</p>");
      }

    } else if (id=='spells2Drop') {
      selected = selected.toString().trim()
      saved = $('#stepEightSave').text().split(',');
      var $descriptionArea = $(".stepEight2Description").first();
      $descriptionArea.empty();
      if (selected != ''){
        $descriptionArea.append("<p><b>"+saved[2]+":</b> "+selected.replace(',',', ')+"</p>");
      }

    } else if (id=='spells3Drop') {
      selected = selected.toString().trim()
      saved = $('#stepEightSave').text().split(',');
      var $descriptionArea = $(".stepEight3Description").first();
      $descriptionArea.empty();
      if (selected != ''){
        $descriptionArea.append("<p><b>"+saved[3]+":</b> "+selected.replace(',',', ')+"</p>");
      }

    } else if (id == 'casterDrop'){


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

      showSpellDropdowns(caster,'None');

    } else if (id == 'secondaryDrop'){


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

      showSpellDropdowns(secondary,'None');

    }

    $('[data-id="'+$(e.currentTarget).attr('id')+'"]').removeClass('wizard-shadow');//remove validation highlight
}

//populates the dropdowns on step eight, either spell-like, secondary magic, or full caster abilities
function showSpellDropdowns(caster,className){

  var crString = $('[data-id="CRDrop"]').text().trim().replace('CR ','');

  if (caster != 'once-per-day' && caster != 'once-per-freq'){

    var i = 0;
    var spellObject = spellCounts[crString][caster];
    var save = "dummy";

    for (castCat in spellObject){
      i += 1;
      var spellNum = spellObject[castCat][0];
      var spellLevel = spellObject[castCat][1].toString();
      var spellList = getSpellsByLevel(spellLevel,className);

      var $descriptionAbility = $(".stepEight"+i).first();
      $descriptionAbility.empty();
      $descriptionAbility.append(("<p><b>"+castCat+":</b> Select up to "+spellNum+" "+spellLevel+"th level spells.</p>").replace("0th","zero").replace("1th","1st").replace("2th","2nd").replace("3th","3rd"));

      generateMultiDropdown("spells"+i+"Dropdown","spells"+i+"Drop","Select level "+spellLevel+" spells","Search spells",spellList,spellNum);
      save += ","+castCat;
    }
  } else {

    var i = 0;
    var spellObject = spellCounts[crString]['spell-like'];
    var save = "dummy";

    for (castCat in spellObject){
      i += 1;
      var spellNum = spellObject[castCat][0];
      if (caster == 'once-per-freq') {
        spellNum = 1;
      }
      var spellLevel = spellObject[castCat][1].toString();
      var spellList = getSpellsByLevel(spellLevel,className);
      if (caster == 'once-per-day'){
        if (castCat == "1/day"){
          i = 1;
          var $descriptionAbility = $(".stepEight"+i).first();
          $descriptionAbility.empty();
          $descriptionAbility.append(("<p><b>"+castCat+":</b> Select up to "+spellNum+" "+spellLevel+"th level spells.</p>").replace("0th","zero").replace("1th","1st").replace("2th","2nd").replace("3th","3rd"));

          generateMultiDropdown("spells"+i+"Dropdown","spells"+i+"Drop","Select level "+spellLevel+" spells","Search spells",spellList,spellNum);
          save += ","+castCat;

        }
      } else {
        var $descriptionAbility = $(".stepEight"+i).first();
        $descriptionAbility.empty();
        $descriptionAbility.append(("<p><b>"+castCat+":</b> Select up to "+spellNum+" "+spellLevel+"th level spells.</p>").replace("0th","zero").replace("1th","1st").replace("2th","2nd").replace("3th","3rd"));

        generateMultiDropdown("spells"+i+"Dropdown","spells"+i+"Drop","Select level "+spellLevel+" spells","Search spells",spellList,spellNum);
        save += ","+castCat;

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
    generateDropdown("stepTwoOptionalDropdown","SavingThrowDrop","Choose saving throw",["Fortitude +2","Reflex +2","Will +2"]);
  }  else if (creatureType[selected].hasOwnProperty("Options")) {
    if (selected == "Animal"){
      generateDropdown("stepTwoOptionalDropdown","optionDrop","Choose option",creatureType[selected].Options);
    } else if (selected == "Construct"){
      generateDropdown("stepTwoOptionalDropdown","optionDrop","Choose option",creatureType[selected].Options);
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
      generateDropdown("stepThreeOptionalDropdown","stepThreeOptionDrop","Choose option",creatureSubType[selected].Options.slice(1,3));
    } else if (creatureSubType[selected].hasOwnProperty("SubRaces")) {
      generateDropdown("stepThreeOptionalDropdown","stepThreeOptionDrop","Choose race",Object.keys(creatureSubType[selected].SubRaces));
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


  //set secondary dropdowns
  if ($('#stepFourSave').text() != selected+":"+selectedArray+":"+"None"){
    if (selected == "Soldier"){
      generateDropdown("stepFourOptionalDropdown","stepFourOptionDrop","Choose attack focus",["Melee","Ranged"]);
    } else if (selected == "Envoy"){
      generateDropdown("stepFourOptionalDropdown","stepFourOptionDrop","Choose additional master skill",["Bluff", "Diplomacy" ,"Intimidate"]);
    } else {
      $("#stepFourOptionalDropdown").first().empty();
    }
  }
  $('#stepFourSave').text(selected+":"+selectedArray+":"+"None");

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

//prototype to capitalise only the first char in a string
String.prototype.capitalise = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
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
        generateDropdown("CRDropdown","CRDrop","Choose challenge rating",CRLabels);
        generateDropdown("arrayDropdown","arrayDrop","Choose base",Object.keys(stepOneDescription).sort());
        //step2
        generateDropdown("creatureTypeDropdown","creatureTypeDrop","Choose creature type",Object.keys(creatureType).sort());
        //Step5
        generateDropdown("graftDropdown","graftDrop","Optional template graft",getGraftArray());
    },

    //runs when next button pressed. Sorted by tab index. each tab only executes its own code.
    //validation is also done on selected tabs, makes sure any dropdowns that require a choice have made a choice
    onNext: function(tab, navigation, index) {
        //Validation tab 1
        if (index == 1) {

            //hide the alert
            $('.alert-this').hide();

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
                  generateDropdown("graftDropdown","graftDrop","Optional template graft",getGraftArray());
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

                    generateDropdown("creatureSubtypeDropdown","creatureSubTypeDrop",titleBar,SubTypeArray);
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

              generateDropdown("classDropdown","classDrop","Optional class graft",classArray);

              var $descriptionArea = $(".stepFourDescription").first();
              $descriptionArea.empty();

              var prev = $('#stepFourSave').text().trim().split(":");
              //var prev2 = $('#stepFourSave2').text().trim().split(":");

              if (prev[0] != 'None' && prev[1] == arrayDrop) {
                $('#classDrop').selectpicker('val', prev[0]);
                stepFourDescription(prev[0],prev[1]);
              } else if (prev[2] == 'chosen'){
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

            if ($('[data-id="stepFourOptionDrop"]').length){
              if ($('[data-id="stepFourOptionDrop"]').text().includes("Choose")) {
                  $('[data-id="stepFourOptionDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if (validated) {

            } else {
                return false;
            }
        }
        //Validation tab 4 - class
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
                generateMultiDropdown("freeAbilityDropdown","freeDrop","Select free abilities","Search abilities",FreeAbilities,10);
                generateMultiDropdown("specialAbilityDropdown","specialDrop","Select special abilities","Search abilities",SpecialAbilities,maxOptions);
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

            if (validated) {

              var type = $('[data-id="creatureTypeDrop"]').text().trim();
              var typeOption = $('[data-id="optionDrop"]').text().trim().toString();
              var classDrop = $('#classDrop').val().toString().trim();
              var classScores = 'None';
              //check if soldier for damage focus
              if ($('[data-id="stepFourOptionDrop"]').length && classDrop == 'Soldier'){
                var damageStyle = $('#stepFourOptionDrop').val().trim() + 'Style';
              } else {
                var damageStyle = 'Style';
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

                  var dropdown = '<select class="selectpicker" id="scoresDrop" title="Choose top ability scores"data-style="btn-default" data-width="100%" data-size="13" multiple data-max-options="3">' + str + dex + con + int + wis + cha + '</select>'
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
                generateMultiDropdown("masterSkillsDropdown","masterDrop","Select master skills",0,masterSkills,masterSkillNum);
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
                generateMultiDropdown("goodSkillsDropdown","goodDrop","Select good skills",0,goodSkills,goodSkillNum);
                $('#goodNumSave').text(goodSkillNum);

                //empty descriptions and fill with skills
                $(".stepSevenMasterDescription").first().empty();
                $(".stepSevenGoodDescription").first().empty();

                if (masterGraftSkills.length > 0){
                  $(".stepSevenMasterDescription").first().append("<p><b>Master skills:</b> "+masterGraftSkills.join().replace(/,/g,'*,')+"*</p>");
                  $(".stepSevenAsterix").first().empty();
                  $(".stepSevenAsterix").first().append("<p>*selected by graft</p>");
                }
                if (goodGraftSkills.length > 0){
                  $(".stepSevenGoodDescription").first().append("<p><b>Good skills:</b> "+goodGraftSkills.join().replace(/,/g,'*,')+"*</p>");
                  $(".stepSevenAsterix").first().empty();
                  $(".stepSevenAsterix").first().append("<p>*selected by graft</p>");
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
              var dropText = $('[data-id="scoresDrop"]').text().trim();
              if (dropText.split(",").length < 3) {
                  $('[data-id="scoresDrop"]').addClass('wizard-shadow');
                  validated = false;
              }
            }

            if (validated) {

              //setup tab 8 - spells

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
                  graftSpells = {};
                }
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
                  graftString = "<p>"+"Spell-like Abilities from creature graft:"+"</p>";
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
                    generateDropdown("casterTypeDropdown","casterDrop","Choose casting type",["Spell-like abilities","Full caster"]);
                  };
                } else if( graftSpelllike ){
                  //spell-like abilities from graft abilities
                  descSpell = "This creature has spell-like abilities.";
                  showSpellDropdowns("spell-like",'None');
                } else if(special == "Secondary Magic"){
                  //spell-like abilities from secondary magic special ability
                  descSpell = "This creature has limited spell-like abilities via the Secondary Magic ability.";
                  generateDropdown("casterTypeDropdown","secondaryDrop","Choose limited spells",["Only once-per-day spells","Only one spell per frequency (at will, 1/day, etc.)"]);
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

        //Validation tab 8
        if (index == 8) {

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
              var classDrop = $('#classDrop').val().trim();
              if (classDrop != '' && classDrop != 'None'){
                generateDropdown("precedenceDropdown","precedenceDrop","Choose stat adjustments",["Creature stat adjustments","Class stat adjustments"]);
              } else {
                $("#precedenceDropdown").first().empty();
              }
            } else {
                return false;
            }
        }
        //Validation tab 9
        if (index == 9) {

          //final tab validation
          var validated = true;

          if ($('[data-id="precedenceDrop"]').length){
            if ($('[data-id="precedenceDrop"]').text().includes("Choose")) {
                $('[data-id="precedenceDrop"]').addClass('wizard-shadow');
                validated = false;
            }
          }
          if (validated){
            //call statBlock builder on finish
            $('#summernote').summernote({
              toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'clear', 'color']],
                ['fontsize', ['fontsize']],
                ['insert', ['link','hr','picture']],
                ['misc', ['fullscreen','codeview']]
              ]
            });
            buildStatBlock();
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
//finish function - fires when the finish button is pushed
$('.btn-finish').click(function() {

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
})

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
})
