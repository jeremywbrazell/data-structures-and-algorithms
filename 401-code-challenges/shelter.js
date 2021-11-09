'use strict';

class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  enqueue(cat) {
    this.queue.push(cat);
  }

  dequeue(cat) {
    while (this.queue.length !== 0) {
      let preference = this.queue.shift(cat);
      return preference;
    }

  }
}

let testAnimalShelter = new AnimalShelter();

testAnimalShelter.enqueue('Sokka');
testAnimalShelter.enqueue('Yuna');
testAnimalShelter.enqueue('Ripley');
testAnimalShelter.dequeue();
console.log(testAnimalShelter);
