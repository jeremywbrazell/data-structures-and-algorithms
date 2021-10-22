'use strict'

let array = [1,2,3,4]
let value = 5

function insertShiftArray (array, value)  {
let middleNum = Math.ceil(array.length / 2)
  array.splice(middleNum, 0, value);
    return array;   
}  

module.exports = insertShiftArray;