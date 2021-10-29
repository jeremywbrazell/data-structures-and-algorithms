'use strict';



class LinkedList {
  constructor() {
    this.head = null;
  }

  zipList(l1, l2) {
    let newList = new LinkedList();
    let count = l1.length > l2.length ? l1.length : l2.length;

    for (let i = 0; i < count; i++) {
      if (l1.get(i)) {
        newList.append(l1.get(i));
      }
      if (l2.get(i)) {
        newList.append(l2.get(i));
      }
    }
    return newList;
  }
}

module.exports = LinkedList;
