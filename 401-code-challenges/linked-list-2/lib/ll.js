'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    //instantiate new node
    let node = new Node(value);
    //if no head, create one as first node
    if (!this.head) {
      this.head = node;
      return this;
    }

    // point current node to head
    let currentNode = this.head;
    while (currentNode.next) {
      // traverse to end of LL
      currentNode = currentNode.next;
    }
    // append with new node at end
    currentNode.next = node;
    return this;
  }

  insertAfter(value) {
    // instantiate a new node to add to our LL
    let node = new Node(value);

    // if no head, create one
    if (!this.head) {
      this.head = node;
      // otherwise, point current to head
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        // this is the actual traversal
        currentNode = currentNode.next;
      }
      // this is the insertion
      currentNode.next = node;
    }
    return this;
  }
  includes(value) {
    // Indicates whether that value exists as a Node’s value somewhere within the list.
    let thisNode = this.head; // point current to head

    while (thisNode) {
      if (thisNode.value === value) {
        // if there is a value, return node
        return thisNode;
      }
      // otherwise, traverse the LL
      thisNode = thisNode.next;
    }

    return thisNode;
  }

  toString() {
    // declare the head
    let current = this.head;
    let string = '';
    let stringVal = `${current.value + '->' + current.next.value + 'NULL'}`;
    // traverse through while loop and grab val from each node and push to string
    while (current.next) {
      current = current.next;
    }
    string.push(stringVal);
    console.log('this is the string', string);
    // return string w/ all node values
    return string;
  }
}

module.exports = LinkedList;
