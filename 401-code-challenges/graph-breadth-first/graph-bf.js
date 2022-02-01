'use strict';

class Vertex {
    constructor(value) {
      this.value = value
    }
  }
  
bfs(startNode) {
    const queue = []; // create empty arrayt
    const visitedVertices = new Set(); // creating a new set to store all visited vertices(nodes)

    queue.push(startNode); // pushing every node visited into the queue
    visitedVertices.add(startNode); // adding all children to visited vertices

    while (queue.length) { // while there are items in the queue
      const currentNode = queue.shift(); // dequeue first node and put in current node

      const neighbors = this.getNeighbors(currentNode); // assign map of neighbors for current node

      for (let neighbor of neighbors) { 
        const neighborNode = neighbor.vertex;

        if (visitedVertices.has(neighborNode)) { // if visited vertices has neighbor node
          continue; // continue iterating
        } else { //otherwise
          visitedVertices.add(neighborNode) // add neighbor node to visited vertices
        }
        queue.push(neighborNode); // push neighbor node into queue
      }

    }
    console.log('visitedNodes', visitedNodes);
    return;
  }