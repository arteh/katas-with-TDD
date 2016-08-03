/* global describe, it */

import {expect} from 'chai';
import findMissing from '../00b-findMissing/00b-findMissing';

describe('findMissing', function () {
  it('should be a function', function () {
    expect(findMissing).to.be.a('function');
  });
  it('should take 1 argument', function () {
    expect(findMissing.length).to.equal(1);
  });
  it('returns a number', function () {
    expect(findMissing([])).to.be.a('number');
  });
  it('should return the missing element in an array', function () {
    expect(findMissing([1, 2, 3, 4, 5, 6, 8, 9, 10])).to.equal(7)
  });
  it('should return the missing element in an array', function () {
    expect(findMissing([1, 2, 3, 4, 6, 7, 8, 9, 10])).to.equal(5)
  });
  it('should return the missing element in an array', function () {
    expect(findMissing([2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(1)
  });
});

/*What should happen if someone passes a string instead of an object?
 What should happen if someone passes no parameters?
 What should happen if someone passes an object that has the wrong property names?
 What should happen if someone passes in an object with the right property names but the values aren’t strings?*/


// it('should return an array', function () {
//   expect(findMissing([1, 2])).to.equal([1, 2]);
// });

// it('should only take an array of 9 numbers', function () {
//   expect(findMissing(array.length)).to.equal(9);
// })