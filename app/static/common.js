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
    window.open('https://github.com/mjcadz/weapon-gen-app');
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

function randomWeightedChoice(list, weight) {
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });

    var random_num = rand(0, total_weight);
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

function rand(min, max) {
    return Math.random() * (max - min) + min;
};
