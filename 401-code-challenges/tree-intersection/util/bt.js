'use strict';

// let Node = require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);

    return results;
  }

  max() {
    if (this.root.value === null) {
      return;
    }

    let maxVal = this.root.value;

    let _max = (node) => {
      if (node.value >= maxVal) {
        maxVal = node.value;
      }
      if (node.left) {
        _max(node.left);
      }
      if (node.right) {
        _max(node.right);
      }
    };
    _max(this.root);
    return maxVal;
  }

  bfs() {
    if (!this.root) return;

    let queue = [this.root];
    let output = [];

    while (queue.length) {
      let node = queue.shift();
      console.log('node', node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      output.push(node.value);
    }
    return output;
  }
}

module.exports = BinaryTree;
