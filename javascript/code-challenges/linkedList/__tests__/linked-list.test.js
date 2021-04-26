'use strict';

const LL = require('../lib/ll.js');

describe('Linked List', () => {
  it('should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });
  //==================================================
  it('should add a node to the list', () => {
    let list = new LL();
    let first = 10;
    list.insert(first);
    expect(list.head.value).toEqual(10);
    console.log(list);
  });
  //==================================================
  it('should return true when finding a value within the linked list that exists', () => {
    let list = new LL();
    let first = 10;
    list.insert(first);
    expect(list.includes(first)).toBeTruthy;
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
    let list = new LL;
    let first = 10;
    let second = 20;

    list.insert(first);
    expect(list.head.value).toEqual(10);
    console.log(list);

    list.insert(second);
    expect(list.head.next).toEqual({ 'next': null, 'value': 20 });
    console.log(list);
  });
});