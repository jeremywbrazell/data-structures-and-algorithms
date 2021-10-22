'use strict';

const Node = require('../lib/node.js');

describe('Is there a Node?', () => {
  it('constructor()', () => {
    let value = 'Ripley';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();

    console.log('this is the node', node);
  });
});
