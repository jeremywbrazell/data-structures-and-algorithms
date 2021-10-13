'use strict';

const LL = require('../lib/ll.js');

describe('Linked List', () => {
  it('should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });
  //==================================================
  it('should insert a node to the list', () => {
    let list = new LL();
    let first = 10;
    list.insert(first);
    expect(list.head.value).toEqual(10);
    console.log('this is the list', list);
  });
  //==================================================
  it('should return true if head property points to the first node in the LL', () => {
    let list = new LL();
    let first = 10;
    list.insert(first);
    expect(list.includes(first)).toBeTruthy;
  });
  //==================================================
  it('should insert multiple nodes to the list', () => {
    let list = new LL();
    let first = 10;
    let second = 20;
    list.insert(first);
    expect(list.head.value).toEqual(10);
    list.insert(second);
    console.log(list);
    expect(list.head.value).toEqual(20);
  });
  //==================================================
  it('should return false when finding a value within the linked list that does not exist', () => {
    let list = new LL();
    let first = 10;
    let second = 20;
    list.insert(first);
    expect(list.includes(second)).toBeFalsy;
  });

  //==================================================
  it('should add multiple nodes to the LL', () => {
    let list = new LL();
    let first = 10;
    let second = 20;

    list.insert(first);
    expect(list.head.value).toEqual(10);
    console.log('this is line 53', list);

    list.insert(second);
    console.log('this is line 57', list);
    expect(list.head.value).toEqual(20);
  });
  //==================================================
  it('should add multiple nodes to the LL', () => {
    let list = new LL();
    let first = 10;
    let second = 20;

    list.insert(first);
    console.log('this is line 53', list);

    list.insert(second);
    let stringTest = list.toString();
    console.log('this is stringTest', stringTest);
  });
});
