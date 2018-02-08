function piglatin(list) {
  return _.map(list, function (word) { return word.concat('-ay'); });
}
console.log(piglatin(['apple', 'pear']));
