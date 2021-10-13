'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let node = new Node(value); //instantiate new node

    if (!this.head) {
      //if no head, create one as first node
      this.head = node;
      return this;
    }

    let currentNode = this.head; // point current node to head
    while (currentNode.next) {
      currentNode = currentNode.next; // traverse to end of LL
    }
    currentNode.next = node; // append with new node at end
    return this;
  }

  insertAfter(value) {
    // instantiate a new node to add to our LL
    let node = new Node(value);

    if (!this.head) {
      this.head = node; // if no head, create one
    } else {
      let currentNode = this.head; // otherwise, point current to head

      while (currentNode.next) {
        // this is the actual traversal
        currentNode = currentNode.next; // this moves you along in your traversal
      }
      currentNode.next = node; // this is the insertion
    }
    return this;
  }
  includes(value) {
    // Indicates whether that value exists as a Node’s value somewhere within the list.
    let thisNode = this.head; // point current to head

    while (thisNode) {
      if (thisNode.value === value) {
        return thisNode; // if there is a value, return node
      }

      thisNode = thisNode.next; // otherwise, traverse the LL.
    }

    return thisNode;
  }

  toString() {
    let current = this.head;
    let string = '';
    let stringVal = `${(current.value) + '->' + (current.next.value) + 'NULL'}`;
    while (current.next) {
      current = current.next;
    }
    string.push(stringVal);
    console.log('this is the string', string);
    return string;
  }
  // declare the head
  // declare current = head
  // declare string
  // traverse through while loop and grab val from each node and push to string
  // return string w/ all node values
}

module.exports = LinkedList;
