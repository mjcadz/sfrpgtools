
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
    statBlock["senses"] = creatureType[creatureTypeDrop].Senses;
  }

  //Senses
  if (creatureType[creatureTypeDrop].hasOwnProperty("OtherAbilities")){
    statBlock["otherAbilities"] = creatureType[creatureTypeDrop].OtherAbilities;
  }

  //Immunities
  if (creatureType[creatureTypeDrop].hasOwnProperty("Immunities")){
    statBlock["immunities"] = creatureType[creatureTypeDrop].Immunities;
  }

  //Options - only applies to construct and animal
  if ($('[data-id="optionDrop"]').length){
    if (creatureTypeDrop == "Animal"){
      statBlock.int = -Number($('[data-id="optionDrop"]').text().trim().replace('Set intelligence -',''));
    } else if (creatureTypeDrop == "Construct") {
      if (!$('[data-id="optionDrop"]').text().trim().includes("Not")){
        statBlock.int = '-';
        statBlock.traits = statBlock.traits.concat(["Mindless"]);
      }
    } else {console.log("option error")}
  }


  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  $outputArea.append("<p>"+statBlock.senses + statBlock.otherAbilities +"</p>");

}

//creates bootstrap-select dropdowns from arrays
function generateDropdown(parentID,dropID,title,array,noneOption) {
  var dropHtml = '<select class="selectpicker show-tick" id="'+ dropID +'" title="'+title+'" data-style="btn-default" data-width="100%" data-size="10">'
  if (noneOption) {
    dropHtml += '<option>None</option><option data-divider="true"></option>'
  }
  for (i = 0; i < array.length; i++) {
    dropHtml += '<option>' + array[i] + '</option>';
  }
  dropHtml += '</select>';
  document.getElementById(parentID).innerHTML = dropHtml;
  //initialise & rebind dropdown click dropClickHandler
  $('#'+dropID).selectpicker();
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
        var searchMask = new RegExp(selected, "i");//match case insensitive
        $descriptionArea.empty();
        $descriptionArea.append("<p>"+creatureType[selected].Description.replace(searchMask,'<b>'+selected+'</b>')+"</p>");
        //check if type needs choices
        if (creatureType[selected].Adjustments.hasOwnProperty("anySave")){
          generateDropdown("stepTwoOptionalDropdown","SavingThrowDrop","Choose saving throw",["Fortitude +2","Reflex +2","Will +2"],false);
        }  else if (creatureType[selected].hasOwnProperty("Options")) {
          if (selected == "Animal"){
            generateDropdown("stepTwoOptionalDropdown","optionDrop","Choose option",creatureType[selected].Options,false);
          } else if (selected == "Construct"){
            generateDropdown("stepTwoOptionalDropdown","optionDrop","Choose option",creatureType[selected].Options,false);
          }
        } else {
          $("#stepTwoOptionalDropdown").first().empty();
        }

    } else if (id=='creatureSubTypeDrop') {

        var $descriptionArea = $(".stepThreeDescription").first();
        $descriptionArea.empty();
        if (selected != "None") {
          var searchMask = new RegExp(selected, "i");//match case insensitive
          $descriptionArea.append("<p>"+creatureSubType[selected].Description.replace(searchMask,'<b>'+selected+'</b>')+"</p>");
          //check if type needs choices
          if (creatureSubType[selected].hasOwnProperty("Options")) {
            generateDropdown("stepThreeOptionalDropdown","stepThreeOptionDrop","Choose option",creatureSubType[selected].Options,false);
          } else if (creatureSubType[selected].hasOwnProperty("SubRaces")) {
            generateDropdown("stepThreeOptionalDropdown","stepThreeOptionDrop","Choose race",Object.keys(creatureSubType[selected].SubRaces),false);
          } else {
            $("#stepThreeOptionalDropdown").first().empty();
          }
        }
    }
    $('[data-id="'+$(e.currentTarget).attr('id')+'"]').removeClass('wizard-shadow');//remove validation highlight
}

//bind bootstrap-select dropdown change event
$('.selectpicker').on('changed.bs.select', dropClickHandler);

// Wizard Initialization
$('.wizard-card').bootstrapWizard({
    'tabClass': 'nav nav-pills',
    'nextSelector': '.btn-next',
    'previousSelector': '.btn-previous',

    //runs when wizard initialised
    onInit: function(tab, navigation, index) {

        //create initial dropdowns from data arrays
        //step1
        generateDropdown("CRDropdown","CRDrop","Choose challenge rating",CRLabels,false);
        generateDropdown("arrayDropdown","arrayDrop","Choose base",Object.keys(stepOneDescription),false);
        //step2
        generateDropdown("creatureTypeDropdown","creatureTypeDrop","Choose creature type",Object.keys(creatureType),false);
        //Step3

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
                var save = $('[data-id="creatureTypeDrop"]').text().trim()
                if ($('#stepThreeSave').text().trim() != save){
                    //generate step three dropdowns
                    generateDropdown("creatureSubtypeDropdown","creatureSubTypeDrop","Choose creature subtype",Object.keys(creatureSubType),true);
                    $("#stepThreeOptionalDropdown").first().empty();
                    $('#stepThreeSave').text(save)
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
                buildStatBlock()

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
    alert('Finished!');
});
