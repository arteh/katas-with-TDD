/* global describe, it */

import {expect} from 'chai';
import countingMonkeys from '../01-countingMonkeys/02-countingMonkeys';


describe('countingMonkeys', function () {
  it('should be a function', function () {
    expect(countingMonkeys).to.be.a('function');
  });
});




