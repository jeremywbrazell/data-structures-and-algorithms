'use strict';

const Stack = require('../stack.js');

describe('stack', () => {
  describe('peek', () => {
    it('returns null on an empty stack', () => {
      let stack = new Stack();
      expect(stack.peek().toBeNull());
    });
  });

  describe('push', () => {
    it('adds a value to the top', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop().toEqual(3));
      expect(stack.pop().toEqual(2));
      expect(stack.pop().toEqual(1));
      expect(stack.peek()).toBeNull();
    });
  });

  describe('pop', () => {
    it('removes a value from the top', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
    });
  });

  describe('Is Empty', () => {
    it('checks to see if array is empty', () => {
      let stack = new Stack();
      stack.push(1);
      stack.pop(1);
      expect(stack.peek()).toBeNull();
    });
  });
});
