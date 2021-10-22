'use strict';

const binarySearch = require('../array-binary-search.js');

describe('Testing Binary Search', () => {
    it('It should return index of the arrays that is equal to the search key, or -1 if element doesnt exist', () => {
      expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
    });
  });