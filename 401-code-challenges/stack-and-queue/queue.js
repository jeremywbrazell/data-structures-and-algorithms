'use strict';

class Queue {
  constructor() {
    this.storage = new Array();
    this.top = null;
  }

  push(val) {
    this.storage.unshift(val);
    this.top = val;
  }
  pop() {
    // temp variable
    // reassign top
    // reassign temp.next to empty
    // return
    let temp = this.storage.shift();
    this.top = this.storage[0];
    return temp;
  }

  peek() {
    // check if empty
    return this.top;
  }

  isEmpty() {
    // check the length of an array to see if its empty
  }
}
module.exports = Queue;
