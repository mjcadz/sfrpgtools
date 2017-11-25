
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

  //Options - only applies to construct and animal
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

        var traitArray = creatureSubType[subTypeDrop][trait];
        if (statBlock.hasOwnProperty(trait)){
          statBlock[trait] = statBlock[trait].concat(traitArray);
        } else {
          statBlock[trait] = traitArray;
        }

      } else if (trait == "Options") {
        var optionDrop = $('#stepThreeOptionDrop').val().trim();
        optionTrait = creatureSubType[subTypeDrop].Options[0]

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
    alert (adjustment);
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
    print += stat +": " +statBlock[stat] + ' <br>'
  }
  $outputArea.append("<p>"+print+"</p>");

}

//get class stats
function getClassStats(statObject){

  //step 4 - class
  var classDrop = $('#classDrop').val().trim();


  //if envoy is selected
  if (classDrop != '' && classDrop != 'None'){

    var cr = Number($('[data-id="CRDrop"]').text().trim().replace("CR ","").replace("1/2","0.5").replace("1/3","0.3"));
    var classObject = classData[classDrop];

    statObject.ClassResolvePoints = Math.round(cr/5) + 3;
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

    if (classDrop == 'Soldier') {
      statObject.ClassAbilityScoreModifiers = classObject.Melee.AbilityScoreModifiers;
      statObject.ClassGear = classObject.Melee.Gear;
    } else {
      statObject.ClassAbilityScoreModifiers = classObject.AbilityScoreModifiers;
      statObject.ClassGear = classObject.Gear;
    }
  }
  return statObject;

}

//gets class abilities by Cr
function getClassAbilities(selectedClass,cr){

  var keyNums = [];
  var crBottom = 0;
  for (key in classData[selectedClass].AbilitiesByCr){
    keyNums.push(Number(key));
  }
  //sort ascending order
  keyNums.sort(function(a, b){return a-b});
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
  var dropHtml = '<select class="selectpicker show-tick" id="'+ dropID +'" title="'+title+'" data-style="btn-default" data-width="100%" data-size="13">'
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
  document.getElementById(parentID).innerHTML = dropHtml;
  //initialise dropdown
  $('#'+dropID).selectpicker();
  //bind dropdown click  handler
  $('#'+dropID).on('changed.bs.select', dropClickHandler);
}

//disables / enables dropdown eg toggleDropdown(id,toggle)
function disableDropdown(id,bool){
  $('#'+id).prop('disabled', bool);
}

//handle clicks of dropdowns
function dropClickHandler(e, clickedIndex, newValue, oldValue) {
    var selected = $(e.currentTarget).val();
    var id = $(e.currentTarget).attr('id');

    if (id=='arrayDrop') {

        var $descriptionArea = $(".stepOneDescription").first();
        $descriptionArea.empty();
        $descriptionArea.append("<p>"+stepOneDescription[selected]+"</p>");

    } else if (id=='creatureTypeDrop') {

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

    } else if (id=='creatureSubTypeDrop') {

      stepThreeDescription(selected)

    } else if (id=='classDrop') {

        //var $descriptionArea = $(".stepFourDescription").first();
        //$descriptionArea.empty();
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
            $('#stepFourSave2').text(selected+":"+selectedArray);
            var $modal = $(".modal-body.classModal").first();
            $modal.empty();
            $modal.append("<p>This class graft requires the <b>"+selectedArray+"</b> base.</p>");
            $('#classModal').modal('show');
          } else {
            stepFourDescription(selected,selectedArray)
            generateDropdown("precedenceDropdown","precedenceDrop","Choose which stat adjustments will be used",["Creature stat adjustments","Class stat adjustments"]);

          }

        } else {
          $('#stepFourSave').text(selected+":"+"None"+":"+"chosen");
          var $descriptionArea = $(".stepFourDescription").first();
          $descriptionArea.empty();
          $("#precedenceDropdown").first().empty();
        }
    } else if (id=='graftDrop') {
      if (selected != "None") {
        var cr = Number($('[data-id="CRDrop"]').text().trim().replace("CR ","").replace("1/2","0.5").replace("1/3","0.3"));

        //check minimum cr is met
        if (grafts[selected].hasOwnProperty("CRMin")){
          var crmin = grafts[selected].CRMin;
        } else {
          var crmin = 0;
        }
        //if met continue
        if (cr >= crmin) {

          disableDropdown('creatureSubTypeDrop',false);

          if (grafts[selected].hasOwnProperty("SubTypeGraft")) {
            $('#stepFiveSave2').text(selected+":"+grafts[selected].SubTypeGraft);
            var $modal = $(".modal-body.graftModal").first();
            $modal.empty();
            $modal.append("<p>This graft requires the <b>"+grafts[selected].SubTypeGraft+"</b> subtype.</p>");
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
    }
    $('[data-id="'+$(e.currentTarget).attr('id')+'"]').removeClass('wizard-shadow');//remove validation highlight
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
  $('#stepFourSave').text(selected+":"+selectedArray+":"+"None");

}

function stepFiveDescription(selected) {

  var $descriptionArea = $(".stepFiveDescription").first();
  $descriptionArea.empty();

  if (selected != "None") {
    var $descriptionArea = $(".stepFiveDescription").first();
    var description = grafts[selected].Description;
    var searchMask = new RegExp(selected+'s?', "i");//match case insensitive
    var selectedMatch = description.match(searchMask);
    $descriptionArea.append("<p>"+description.replace(searchMask,'<b>'+selectedMatch+'</b>')+"</p>");
  }
  $('#stepFiveSave').text(selected);
}





// Wizard Initialization
$('.wizard-card').bootstrapWizard({
    'tabClass': 'nav nav-pills',
    'nextSelector': '.btn-next',
    'previousSelector': '.btn-previous',

    //runs when wizard initialised
    onInit: function(tab, navigation, index) {

        //create initial dropdowns from data arrays
        //step1
        generateDropdown("CRDropdown","CRDrop","Choose challenge rating",CRLabels);
        generateDropdown("arrayDropdown","arrayDrop","Choose base",Object.keys(stepOneDescription).sort());
        //step2
        generateDropdown("creatureTypeDropdown","creatureTypeDrop","Choose creature type",Object.keys(creatureType).sort());
        //Step5
        generateDropdown("graftDropdown","graftDrop","Optional template graft",['None','BREAK'].concat(Object.keys(grafts).sort()));
    },

    //runs when next button pressed.
    onNext: function(tab, navigation, index) {
        //Validation tab 1
        if (index == 1) {

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
              var cr = Number($('[data-id="CRDrop"]').text().trim().replace("CR ","").replace("1/2","0.5").replace("1/3","0.3"));
              var graft = $('#graftDrop').val().trim();

              if (graft != '' && graft != 'None'){
                if (grafts[graft].hasOwnProperty("CRMin")){
                  var crmin = grafts[graft].CRMin;
                } else{
                  var crmin = 0;
                }
                if (cr < crmin) {
                  //reset dropdown id cr below minimum
                  generateDropdown("graftDropdown","graftDrop","Optional template graft",['None','BREAK'].concat(Object.keys(grafts).sort()));
                  stepFiveDescription('None')
                }
              }
            } else {
                return false;
            }
        }
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
                    if (['Outsider','Humanoid','Construct','Vermin','Dragon'].includes(creatureTypeStepThree)){
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
              //put current class first in list
              var arrays = ['Combatant','Expert','Spellcaster'];
              var arrayDrop = $('#arrayDrop').val().trim();
              var index = arrays.indexOf(arrayDrop);
              if (index > -1) {
                arrays.splice(index, 1);
              }
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
              }


            } else {
                return false;
            }
        }
        //Validation tab 4
        if (index == 4) {

            var validated = true;

            if (validated) {

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

        //set progress bar
        if ($current == 1) {
          var $percent = 0;
        } else {
          var $percent = (($current-1)/($total-1)) * 100;
        }

		    $($wizard).find('.progress-bar').css({width:$percent+'%'});
    }
});
//finish function
$('.btn-finish').click(function() {
  //final tab validation
    var validated = true;

    if ($('[data-id="precedenceDrop"]').length){
      if ($('[data-id="precedenceDrop"]').text().includes("Choose")) {
          $('[data-id="precedenceDrop"]').addClass('wizard-shadow');
          validated = false;
      }
    }
    if (validated){
      buildStatBlock();
    }
});

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
     generateDropdown("precedenceDropdown","precedenceDrop","Choose which stat adjustments will be used",["Creature stat adjustments","Class stat adjustments"]);
   } else if (val=='No thanks'){
     //change back to previous
     var prev = $('#stepFourSave').text().trim().split(':');
     $('#classDrop').selectpicker('val', prev[0]);
     //stepFourDescription(prev[0],prev[1]);
   }
})

$('.btn-graft').click(function(){

   val=$(this).text()
   if(val=='Change'){
     //change base array
     var newChoice = $('#stepFiveSave2').text().trim().split(":");
     $('#creatureSubTypeDrop').selectpicker('val', newChoice[1]);
     stepThreeDescription(newChoice[1]);
     disableDropdown('creatureSubTypeDrop',true);

     $('#graftDrop').selectpicker('val', newChoice[0]);
     stepFiveDescription(newChoice[0]);

     $('#stepFiveSave').text(newChoice[0]);

   } else if (val=='No thanks'){
     //change back to previous
     var prev = $('#stepFiveSave').text().trim();
     $('#graftDrop').selectpicker('val', prev);
   }
})