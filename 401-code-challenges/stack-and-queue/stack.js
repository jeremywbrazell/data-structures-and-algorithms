"use strict";

let Node = require("./node.js");

class Stack {
  constructor() {
    this.storage = new Array();
    this.top = null;
  }

  push(val) {
    let node = new Node(val);
    this.top = node;
    this.length++;
  }

  pop(val) {
    // temp variable
    // reassign top
    // reassign temp.next to empty
    // return
    let node = new Node(val);
    let temp = this.top;
    temp = node;
    temp.next = null;
    this.storage.length--;
    return this;
  }

  peek() {
    if (this.isEmpty()) {
      return false;
    } else {
      return this.top;
    }
  }

  isEmpty() {
    if (this.storage === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
