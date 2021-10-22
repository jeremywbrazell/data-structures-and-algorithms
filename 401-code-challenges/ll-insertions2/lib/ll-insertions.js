'use strict';

const Node = require('./node.js');

class LinkedListInsertions {
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

  insertBefore(value, newValue) {
    let node = new Node(newValue); //instaniate a new node
    let current = this.head; // make current node the head

    if (!this.includes(value)) {
      return null; // if this doesn't include a value return null
    } else {
      while (current.next !== null && current.next.value !== value) {
        current = current.next; // as long as current node is not the last, traverse
      }
      node.next = current.next; // make new node follow the head
      current.next = node;
    }
    return this;
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue); // instantiate a new node
    let current = this.head; // make current node the head

    while(current.value !== value){
      current = current.next; // while current value doesn't equal target value, traverse
    }

    node.next = current.next; // once it does, insert new node after current node
    current.next = node;

    return this;
  }
}

module.exports = LinkedListInsertions;
