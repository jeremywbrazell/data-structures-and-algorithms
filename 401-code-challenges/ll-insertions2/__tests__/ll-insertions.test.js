'use strict';

const LL = require('../lib/ll-insertions.js');

describe('Linked List', () => {
  it('should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });
  //==================================================
  it('should insert a node to the list', () => {
    let list = new LL();
    let first = 10;
    list.insertBefore(first);
    expect(list.head.value).toEqual(10);
    console.log('this is the list', list);
  });
  //==================================================
  it('should return true if head property points to the first node in the LL', () => {
    let list = new LL();
    let first = 10;
    list.insertBefore(first);
    expect(list.head.value.includes(first)).toBeTruthy;
  });
  //==================================================
  it('should insert multiple nodes to the list', () => {
    let list = new LL();
    let first = 10;
    let second = 20;
    list.insertBefore(first);
    expect(list.head.value).toEqual(10);
    list.insertBefore(second);
    console.log(list);
    expect(list.head.value).toEqual(20);
  });
  //==================================================
  it('should return false when finding a value within the linked list that does not exist', () => {
    let list = new LL();
    let first = 10;
    let second = 20;
    list.insertBefore(first);
    expect(list.includes(second)).toBeFalsy;
  });

  //==================================================

});
