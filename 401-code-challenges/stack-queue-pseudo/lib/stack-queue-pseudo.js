'use strict';

let Stack = require('./stack.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    while (this.stack1.length !== 0) {
      let top = this.stack1.pop();
      this.stack2.push(top);
    }

    let result = this.stack2.pop();
    console.log(result);
    // // while (this.stack2 !== null) {
    //   let top2 = this.stack2.pop();
    //   this.stack1.push(top2);
    // }
    return result;
  }
}

let testPseudoQueue = new PseudoQueue();

testPseudoQueue.enqueue(20);
testPseudoQueue.enqueue(15);
testPseudoQueue.enqueue(10);
testPseudoQueue.enqueue(5);
testPseudoQueue.dequeue(5);
console.log(testPseudoQueue);
