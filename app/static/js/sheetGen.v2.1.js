
function changePriceButton(price) {
  var product,pricelink;
  var $buttonArea = $(".buybutton").first();
  $buttonArea.empty();
  price = price.trim();

  if (price =='$1'){
    product = '77722079/4CB2E941';
  } else if (price =='$2'){
    product = '77722080/E3B766ED';
  } else if (price =='$3'){
    product = '77722081/EB72008B';
  } else if (price =='$4'){
    product = '77722083/31C6A589';
  } else if (price =='$5'){
    product = '77722085/EE993B62';
  } else if (price =='$6'){
    product = '77722090/1ABB5E75';
  } else if (price =='$7'){
    product = '77722086/8A82EB24';
  } else if (price =='$8'){
    product = '77722095/47F6FAAF';
  } else if (price =='$9'){
    product = '77722089/483E980A';
  } else if (price =='$10'){
    product = '77722091/2CC07F41';
  }else {
    product = NaN;
  }

  pricelink = '<a href="https://transactions.sendowl.com/products/' + product + '/purchase" rel="nofollow" class="btn btn-grn">BUY NOW</a><script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js"></script>'

  $buttonArea.append(pricelink);
  //update sendowl
  sendOwl.captureLinks();

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
  //grab sendowl purchase forms
  sendOwl.captureLinks();
});
