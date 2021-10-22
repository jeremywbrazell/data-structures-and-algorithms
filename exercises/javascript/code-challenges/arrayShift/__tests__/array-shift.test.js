'use strict';

const insertShiftArray = require('../array-shift.js');

describe('Testing Shift Array', () => {
    it('It should return an array with a value added to the middle', () => {
      expect(insertShiftArray([1, 2, 3, 4], 5)).toStrictEqual([1,2,5,3,4]);
    });
  });



  

