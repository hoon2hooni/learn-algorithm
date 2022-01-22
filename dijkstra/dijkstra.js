import { PriorityQueue } from "./simplePriorityQueue";
import { WeightedGraph } from "./weighted-graph";
class Dijkstra {
  //priorityQueue (각 노드마다 거리)
  //시작, 도착점 필요
  //방문했던것!
  constructor(weightedGraph, weightObject) {
    this.priorityQueue = new PriorityQueue();
    this.weightedGraph = weightedGraph;
    this.visited = [];
    this.weightObject = weightObject;
  }

  findShortestLength(start, end) {
    this.priorityQueue.enqueue(start, 0);
    const visited = {};
    let element;
    visited[start] = start;
    this.weightObject[start] = 0;
    while (this.priorityQueue.values.length) {
      element = this.priorityQueue.dequeue();
      for (const neighbor of this.weightedGraph.adjacentList[element.node]) {
        const { node, weight } = neighbor;
        let totalWeight = this.weightObject[element.node] + weight;
        if (totalWeight < this.weightObject[node]) {
          this.priorityQueue.enqueue(
            node,
            this.weightObject[element.node] + weight
          );
          this.weightObject[node] = totalWeight;
        }
      }
    }
    return this.weightObject[end];
  }
}

export { Dijkstra };
