/* global describe, it */

import {expect} from 'chai';
import middleCharacter from '../05-middleCharacter/05-middleCharacter';

describe('middleCharacter', function () {
  it('should be a function', function () {
    expect(middleCharacter).to.be.a('function');
  });
  it('should take 1 argument', function () {
    expect(middleCharacter.length).to.equal(1);
  });
  it('returns a string', function () {
    expect(middleCharacter('')).to.be.a('string');
  });
  it('should return "A" for "A"', function () {
    expect(middleCharacter('A')).to.equal('A')
  });
  it('should return "l" for "Hello"', function () {
    expect(middleCharacter('Hello')).to.equal('l')
  });
  it('should return "at" for "Kata"', function () {
    expect(middleCharacter('Kata')).to.equal('at')
  });
  it('should return " " for "This kata"', function () {
    expect(middleCharacter('This kata')).to.equal(' ')
  });
  it('should return " k" for "Fun kata"', function () {
    expect(middleCharacter('Fun kata')).to.equal(' k')
  });
});

 