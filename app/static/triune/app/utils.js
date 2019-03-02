export function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function articlize(word, capitalize) {
  const vowels = ['a','e','i','o','u']
  const firstLetter = word.toLowerCase().charAt(0);

  const article = capitalize ? 'A' : 'a';

  if (vowels.includes(firstLetter)) {
    return `${article}n ${word}`;
  } else {
    return `${article} ${word}`;
  }
}
