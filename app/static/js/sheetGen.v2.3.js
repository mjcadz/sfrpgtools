
function changePriceButton(price) {
    $('.buybutton1').hide();
    $('.buybutton2').hide();
    $('.buybutton3').hide();
    $('.buybutton4').hide();
    $('.buybutton5').hide();
    $('.buybutton10').hide();
    $('.buybutton15').hide();
    $('.buybutton20').hide();

  if (price =='$1'){
    $('.buybutton1').show();
  } else if (price =='$2'){
    $('.buybutton2').show();
  } else if (price =='$3'){
    $('.buybutton3').show();
  } else if (price =='$4'){
    $('.buybutton4').show();
  } else if (price =='$5'){
    $('.buybutton5').show();
  } else if (price =='$15'){
    $('.buybutton15').show();
  } else if (price =='$20'){
    $('.buybutton20').show();
  } else if (price =='$10'){
    $('.buybutton10').show();
  }else {
    console.log("broken")
  }
}

function dropClickHandler(e, clickedIndex, newValue, oldValue) {
    var selected = $(e.currentTarget).val();
    changePriceButton(selected)
}

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });

//runs when page is loaded
$( document ).ready(function() {
  //initialise picker
  $('.selectpicker').selectpicker();
  $('.selectpicker').on('changed.bs.select', dropClickHandler);
  $('.selectpicker').selectpicker('val', '$3');
  $('.selectpicker').selectpicker('refresh');

});
