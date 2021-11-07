'use strict';

const Stack = require('../lib/stack-queue-pseudo');
// const pseudoMethods = require('../lib/stack-queue-pseudo');

describe('stack', () => {
  it('enqueues one value', () => {
    const pseudoQueue = new Stack();
    pseudoQueue.enqueue(20);
    const actual = pseudoQueue.peek();
    const expected = 20;
    expected(actual).toEqual(expected);
  });
});
