'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  hash(key) {
    // with the key, find every ASCII value for each i in the string
    return (
      (key.split('').reduce((prev, curr) => {
        return prev + curr.charCodeAt(0);
      }, 0) *
        599) %
      this.size
    );

    // add up all the ascii values
    // multiply by a prime number
    // modulo against the size of your hashmap
    // return the index
  }

  set(key, value) {
    // calculate the has of key
    let hash = this.hash(key);
    // console.log('hash', hash)
    // check if there is a value
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    // assume there is a LL
    // create my entry
    let entry = { [key]: value }; // Zork:3 -> 'zork':3 // value of Node
    // add to LL
    this.map[hash].add(entry);
  }
  get(key) {
    // hash the key
    let hash = this.hash(key);
    // if there is nothing at the hash, return
    if (!this.map[hash]) return;
    // hash index.values
    let value = this.map[hash]
      .values()
      .find((el) => key === Object.keys(el)[0]);
    return value[key];
  }
}

module.exports = Hashmap;
