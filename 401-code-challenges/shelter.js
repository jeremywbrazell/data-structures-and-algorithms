'use strict';

class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  enqueue(animal) {
    this.queue.push(animal);
  }

  dequeue(animal) {
    for (let i = 0; i < queue[animal].length; i++) {
      if (animal === { cat }) {
        preference.push(this.queue.shift(animal));
      } else {
        return null;
      }
      return preference;
    }
  }
}



let testAnimalShelter = new AnimalShelter();

testAnimalShelter.enqueue('cat');
// testAnimalShelter.enqueue('Yuna');
// testAnimalShelter.enqueue('Ripley');
// testAnimalShelter.dequeue();
console.log(testAnimalShelter);
