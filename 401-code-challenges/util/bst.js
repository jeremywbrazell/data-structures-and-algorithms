"use strict";

const Node = require("./node.js");
const BT = require("./bt.js");

/*
Create a Binary Search Tree class
This class should be an extension of the 
Binary Tree Class, with the following additional methods:
***Add***
    Arguments: value
    Return: nothing
    Adds a new node with that value in the correct location in the binary search tree.
****Contains***
    Argument: value
    Returns: boolean indicating whether or not the value is in the tree at least once.
*/

class BinarySearchTree extends BT {
  _add(value) {
    // let _add = (node) => {};
    // _add(root);
    // // set node var to root
    let node = this.root;
    // // check if root is null, if yes then make a new node and return
    if (node === null) {
      node = new Node(value);
    } else if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this._add(value);
      }
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);
      }
    }
  }

  // return node;

  // create recursion method _add
  // let _add = (node) => {
  // check value < left
  // if no node then create node
  //       if (!node) {
  //         let node = new Node();
  //       } else {
  //           (current.node.value < node.left)
  //           // otherwise, if node.left is not null, recursively call _add(node.left)
  //       } else if {
  //           node.left != null;
  //           _add(node.left);
  //       }
  //       if(!node) {
  //           // if no node then create
  //           let node = new Node();
  //         } else if {
  //             // check value >= right
  //             (node.value >= node.right)
  //         } else {
  //             // otherwise, if node.left is not null, recursively call _add(node.right)
  //             node.left != null;
  //             _add(node.right);
  //         }
  //         return null;
  //     }
  //     _add(node);
  //     };
  //     // otherwise return null
  //     // FINALLY! kick it all off by calling the function _add() w/ node -> _add(node)
  //   }

  contain(value) {
    //iterative
    // set current variable to root
    // this is a bST so we can compare current, left, and right to the value
    // and return if equal
    // loop until current is null
    // return false if no value
    //recursive
    //grab root
    //create _contains recursive fn
    //compare values and call _contains depending on <, >, =
    //call _contains(root)
  }
}

module.exports = BinarySearchTree;
