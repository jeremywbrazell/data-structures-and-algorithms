"use strict";

// let Node = require('./node');
let queue = require("./queue.js");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let results = [];

    let _traverse = (node) => {
      results.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);

    return results;
  }

  inOrder() {
    let results = [];

    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      results.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      results.push(node.value);
    };
    _traverse(this.root);

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
  treeBreadth(value) {
    let array = [];
    if (!this.root === null) {
      array.push(value);
    }
  }
}

module.exports = BinaryTree;
