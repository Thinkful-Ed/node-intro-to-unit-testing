const should = require('chai').should();

const adder = require('../adder');

describe('adder', function() {

  it('should add two numbers', function() {
    const testData = {
      a: 2,
      b: 3,
      expected: 5
    };
    const answer = adder(testData.a, testData.b)
    answer.should.equal(testData.expected);
  });

  it('should raise error if args not numbers', function() {
    const badInputs = [
      ['a', 1],
      ['1', 2],
      [2, false]
    ];

    badInputs.forEach(function(input) {
      (function() {
          adder(input[0], input[1])
      }).should.throw(Error);
    });
  });
});