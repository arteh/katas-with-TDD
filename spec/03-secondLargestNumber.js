/* global describe, it */

import {expect} from 'chai';
import secondLargestNumber from '../03-secondLargestNumber/03-secondLargestNumber';

describe('secondLargestNumber', function () {
  it('should be a function', function () {
    expect(secondLargestNumber).to.be.a('function');
  });
  it('should take 1 argument', function () {
    expect(secondLargestNumber.length).to.equal(1);
  });
  it('returns a number', function () {
    expect(secondLargestNumber([])).to.be.a('number');
  });
  it('should return "2" for [1,2,3]', function () {
    expect(secondLargestNumber([1,2,3])).to.equal(2)
  });
  it('should return "11" for [\'1\', 21, \'11\']', function () {
    expect(secondLargestNumber(['1', 21, '11']).to.equal(11))
  });
  it('should return "2" for [\'hello\', {a: 55}, 1, 2, 3]', function () {
    expect(secondLargestNumber(['hello', {a: 55}, 1, 2, 3]).to.equal(2))
  });

});

