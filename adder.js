function adder(a, b) {
  if (!(typeof a === 'number' && typeof b === 'number')) {
  	throw Error('Oh no!');
  }
  return a + b;
}

module.exports = adder;