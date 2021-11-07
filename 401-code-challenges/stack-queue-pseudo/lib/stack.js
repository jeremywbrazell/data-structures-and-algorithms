'use strict';

// const UnsupportedMethodError = require('../UnsupportedMethodError.js');

class Stack {
  constructor() {
    this.length = 0;
  }

  push(item) {
    if (item) {
      this[this.length++] = item;
    }
  }

  pop() {
    if (!this.length) {
      throw new Error(
        'Unsupported method when collection empty'
      );
    }
    let item = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return item;
  }

  peek() {
    if (!this.length) {
      throw new Error(
        'Unsupported method when collection empty'
      );
    }
    return this[this.length - 1];
  }

}



module.exports = Stack;
