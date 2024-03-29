'use strict';


// *********** INSTRUCTIONS ************* //
/*
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:
add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Include the weight of the connection in the returned collection
size
  - Arguments: none
  - Returns the total number of nodes in the graph
*/


// Vertex = Node
class Vertex {
  constructor(value) {
    this.value = value
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    //this.startNode;
    //this.endNode;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // why use a Map?
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    // - Arguments: value
    // - Returns: The added node
    let vertex = new Vertex(value)
    // - Add a node to the graph
    this.adjacencyList.set(vertex, []);
    return;
  }
  // adds a directional edge
  addEdge(node1, node2) {
    // - Arguments: 2 nodes to be connected by the edge, weight (optional)
    // - Returns: nothing
    // - Adds a new edge between two nodes in the graph
    // - If specified, assign a weight to the edge
    // - Both nodes should already be in the Graph

    // here is how you get a node from the adjacencyList
    const adjancancies = this.adjacencyList.get(node1);
    adjancancies.push(new Edge(node2, 2));
  }

  getVertices() {
    // - Arguments: none
    // - Returns all of the nodes in the graph as a collection (set, list, or similar)
  }

  getNeighbors(node) {
    // - Arguments: node
    // - Returns a collection of edges connected to the given node
    // - Include the weight of the connection in the returned collection

  }

  size() {
    // - Arguments: none
    // - Returns the total number of nodes in the graph
  }




  /*
  
  ALGORITHM BreadthFirst(vertex)
  DECLARE nodes <-- new List()
  DECLARE breadth <-- new Queue()
  DECLARE visited <-- new Set()
  breadth.Enqueue(vertex)
  visited.Add(vertex)
  while (breadth is not empty)
      DECLARE front <-- breadth.Dequeue()
      nodes.Add(front)
      for each child in front.Children
          if(child is not visited)
              visited.Add(child)
              breadth.Enqueue(child)   
  return nodes;
  */


  bfs(startNode) {
    const queue = [];
    const visitedVertices = new Set();

    queue.push(startNode);
    visitedVertices.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if (visitedVertices.has(neighborNode)) {
          continue;
        } else {
          visitedVertices.add(neighborNode)
        }
        queue.push(neighborNode);
      }

    }
    console.log('visitedNodes', visitedNodes);
    return;
  }

  dfs(startNode) {
    /*
      Push the root node into the stack
      Start a while loop while the stack is not empty
      Peek at the top node in the stack
      If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
      If the top node does not have any unvisited children, Pop that node off the stack
      repeat until the stack is empty.
    */
  }

}