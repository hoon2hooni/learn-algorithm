import { PriorityQueue } from "./simplePriorityQueue";
class WeightedGraph {
  constructor() {
    this.adjacentList = {};
    //{a:[{node:b, weight:90}]}
    //
  }
  addVertex(vertex) {
    if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacentList[v1].push({ node: v2, weight });
    this.adjacentList[v2].push({ node: v1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    for (let vertex in this.adjacentList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit;
    while (nodes.values.length) {
      smallest = nodes.dequeue();
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
        // we Are Done
        // Build Up Path to Return AT end
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacentList[smallest]) {
          let nextNode = this.adjacentList[smallest][neighbor];
          let nextNeighbor = nextNode.node;
          let candidate = distances[smallest] + nextNode.weight;

          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

export { WeightedGraph };
