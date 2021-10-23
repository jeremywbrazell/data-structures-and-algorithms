'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }
  kthFromEnd(k) {
    let currentNode = this.head;
    while (currentNode.next) {
      // traverse to end of LL
      currentNode = currentNode.next;
      let targetPosition = currentNode - k;
      let answer = targetPosition.push(value)
      return answer;
    }
}

module.exports = LinkedList;
