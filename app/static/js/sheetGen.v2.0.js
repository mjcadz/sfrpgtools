
function changePriceButton(price) {
  var product,pricelink;
  var $buttonArea = $(".buybutton").first();
  $buttonArea.empty();
  price = price.trim();

  if (price =='$1'){
    product = '77716581/E8FBF228';
  } else if (price =='$2'){
    product = '77716593/9D725071';
  } else {
    product = NaN;
  }

  pricelink = '<a href="https://transactions.sendowl.com/products/' + product + '/purchase" rel="nofollow" class="btn btn-grn">BUY NOW</a><script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js"></script>'
  console.log(pricelink)
  $buttonArea.append(pricelink);
  //update sendowl
  sendOwl.captureLinks();

}

function dropClickHandler(e, clickedIndex, newValue, oldValue) {
    var selected = $(e.currentTarget).val();
    changePriceButton(selected)
}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
  $('.selectpicker').on('changed.bs.select', dropClickHandler);
  //grab sendowl purchase forms
  sendOwl.captureLinks();
});
