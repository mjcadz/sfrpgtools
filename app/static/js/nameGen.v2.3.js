var removedWords = [
  "Acid",
  "Acid-edged",
  "Sonic",
  "Sonic-edged",
  "Shock",
  "Shock-edged",
  "Flame",
  "Flame-edged",
  "Cryo",
  "Cryo-edged",
  "Plasma",
  "Plasma-edged",
  "Kasathan",
];

function replaceWord(word) {
  var result = [];
  nameGenTerms.forEach(function(term) {
    if (term.triggers.indexOf(word) > -1) {
      result = term.outputs;
    }
  })
  return result;
}

function getrandomName(weaponName){
  var name = [];
  var deck = [];

  //stack the deck
  for (i = 0; i < 10; i++) {
    deck.push(nameGenNouns.selectRandom());
  }

  weaponName.split(' ').forEach(function(word) {
    deck = deck.concat(replaceWord(word));
  })

  //Remove unnecessary words
  stripName = weaponName.split(' ').filter(function(word) {
    //console.log(word, removedWords.indexOf(word));
    return removedWords.indexOf(word) === -1;
  }).join(' ');

  name[0] = nameGenAdjectives.selectRandom() + " " + deck.selectRandom();
  name[1] = nameGenManufacturers.selectRandom();
  name[2] = nameGenSeries.selectRandom() + getRandomInt(1, 990).toString();
  name[3] = stripName;

  return name;
}
