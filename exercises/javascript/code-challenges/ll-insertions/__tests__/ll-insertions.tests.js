'use strict';

const LL = require('../ll.js');

describe('Linked List', () => {
  it('should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });
  //==================================================
  it('should add a node to the list', () => {
    let list = new LL();
    let first = 10;
    list.append(first);
    console.log(list);
    expect(list.head.value).toEqual(10);
  });
  //==================================================
  it('should return true when finding a value within the linked list that exists', () => {
    let list = new LL();
    let first = 10;
    list.append(first);
    expect(list.includes(first)).toBeTruthy;
  });
  //==================================================
  it('should return false when finding a value within the linked list that does not exist', () => {
    let list = new LL();
    let first = 10;
    let second = 20;
    list.append(first);
    expect(list.includes(second)).toBeFalsy;
  });

  //==================================================
  it('should add multiple nodes to the LL', () => {
    let list = new LL;
    let first = 10;
    let second = 20;

    list.append(first);
    expect(list.head.value).toEqual(10);
    console.log(list);

    list.append(second);
    expect(list.head.next).toEqual({ 'next': null, 'value': 20 });
    console.log(list);
  });
  //==================================================
  it('add a node Before the head', () => {
    let list = new LL();
    let first = 10;
    list.insertBefore(first);
    console.log(list);
    expect(list.head.val).toEqual(10);
  });
    //==================================================
    it('add a node After the head', () => {
        let list = new LL();
        let first = 10;
        list.insertAfter(first);
        console.log(list);
        expect(list.head.val).toEqual(10);
      });
});
