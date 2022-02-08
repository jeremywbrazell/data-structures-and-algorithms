'use strict';

// solution code from class;

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (
      !this.adjacencyList.has(startVertex) ||
      !this.adjacencyList.has(endVertex)
    ) {
      throw new Error('__ERROR__ Invalid Vertices');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }

    return [...this.adjacencyList.get(vertex)];
  }

  getVertices() {
    return this.adjacencyList.entries();
  }

  size() {
    return this.adjacencyList.size();
  }

  bfs(startNode) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return;
  }
}
module.exports = Graph;
