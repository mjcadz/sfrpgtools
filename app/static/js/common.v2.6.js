//common functions

//generate share button data
function share(id) {

  if (id == "facebook"){
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL));
  }
  else if (id == "twitter"){
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20' + encodeURIComponent(document.URL));
  }
  else if (id == "reddit"){
    window.open('http://www.reddit.com/submit?url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title));
  }
  else if (id == "github"){
    window.open('https://github.com/mjcadz/sfrpgtools');
  }
  ga('send', 'event', 'Share', id);
  return false;
}

/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function diceRoll(dice){
  var numbers = dice.split("d");
  var roll = 0;
  for (var i = 0; i < Number(numbers[0]); i++) {
    roll += getRandomInt(1,Number(numbers[1]));
  }
  return roll.toString();
}

/**
 * Choose a random element from an array.
 * @param array array
 *   May also work with an array-like object.
 * @return whatever type the array holds
 */
function randomChoice(array) {
  if (length in array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  else {
    console.error("Tried to pull a random value from an item that is not an array or an array-like object.");
    return;
  }
}

//Choose a random element from an array
//TODO: Replace all instances of randomChoice with this and remove it
Array.prototype.selectRandom = function() {
  return this[Math.floor(Math.random() * this.length)];
}

//prototype to capitalise only the first char in a string
String.prototype.capitalise = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function randomWeightedChoice(list, weight) {
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });

    var random_num = getRandomInt(0, total_weight);
    var weight_sum = 0;
    //console.log(random_num)

    for (var i = 0; i < list.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(2);

        if (random_num <= weight_sum) {
            return list[i];
        }
    }

    // end of function
};

//returns random property from an object
function randomKey(obj) {
  var keys = Object.keys(obj);
  return keys[keys.length * Math.random() << 0];
}

//remove button focus after click
$(".btn").mouseup(function(){
    $(this).blur();
})
