
function buildStatBlock() {

  var statBlock = {};

  //Step 1

  //base array
  var CRDrop = $('[data-id="CRDrop"]').text().trim().replace("CR ","");
  var arrayDrop = $('[data-id="arrayDrop"]').text().trim();

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

  //initialise relevant statistics
  statBlock["attackmod"] = 0


  var creatureTypeDrop = $('[data-id="creatureTypeDrop"]').text().trim();

  //stat block adjustments
  for (adjustment in creatureType[creatureTypeDrop].Adjustments) {
    if (adjustment == "anySave"){
      //use picker
      var savingThrow = $('[data-id="SavingThrowDrop"]').text().trim().replace(' +2','').toLowerCase();
      statBlock[savingThrow] += 2;
    } else if (statBlock.hasOwnProperty(adjustment)){
      //check if proprty already has entry
      statBlock[adjustment] += creatureType[creatureTypeDrop].Adjustments[adjustment];
    } else {
      statBlock[adjustment] = creatureType[creatureTypeDrop].Adjustments[adjustment];
    }
  }

  //Traits

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




  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  $outputArea.append("<p>"+statBlock.OtherAbilities+"</p>");

}

//creates bootstrap-select dropdowns from arrays
function generateDropdown(parentID,dropID,title,array) {
  var dropHtml = '<select class="selectpicker show-tick" id="'+ dropID +'" title="'+title+'" data-style="btn-default" data-width="100%" data-size="11">'
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
        }
    } else if (id=='classDrop') {

        var $descriptionArea = $(".stepFourDescription").first();
        $descriptionArea.empty();
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
            $('#myModal').modal('show');
          } else {
            stepFourDescription(selected)
          }

        }
    }
    $('[data-id="'+$(e.currentTarget).attr('id')+'"]').removeClass('wizard-shadow');//remove validation highlight
}

function stepFourDescription(selected) {
  var $descriptionArea = $(".stepFourDescription").first();
  $descriptionArea.empty();
  var description = classData[selected].Description
  var searchMask = new RegExp(selected+'s?', "i");//match case insensitive
  var selectedMatch = description.match(searchMask);

  $descriptionArea.append("<p>"+description.replace(searchMask,'<b>'+selectedMatch+'</b>')+"</p>");
  $('#stepFourSave').text(selected);
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
        generateDropdown("arrayDropdown","arrayDrop","Choose base",Object.keys(stepOneDescription));
        //step2
        generateDropdown("creatureTypeDropdown","creatureTypeDrop","Choose creature type",Object.keys(creatureType));

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

                //return false; //temp for testing
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
                        titleBar ="Optional creature subtype";
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

              generateDropdown("classDropdown","classDrop","Optional class",classArray);

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

    //alert('Finished!');
    //buildStatBlock();
});

$('.btn-change').click(function(){

   val=$(this).text()
   if(val=='Change'){
     var newnew = $('#stepFourSave2').text().trim().split(':');
     $('#arrayDrop').selectpicker('val', newnew[1]);
     $('#classDrop').selectpicker('val', newnew[0]);
     stepFourDescription(newnew[0]);
   } else if (val=='No thanks'){
     var prev = $('#stepFourSave').text().trim();
     $('#classDrop').selectpicker('val', prev);
   }
})
