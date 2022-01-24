import { WeightedGraph } from "./weighted-graph";
import { PriorityQueue } from "./simplePriorityQueue";
import { Dijkstra } from "./dijkstra";

const weightedGraph = new WeightedGraph();
const vertexes = ["a", "b", "c", "d", "e", "f"];
console.log(WeightedGraph);
vertexes.forEach((v) => weightedGraph.addVertex(v));

weightedGraph.addEdge("a", "b", 4);
weightedGraph.addEdge("a", "c", 2);
weightedGraph.addEdge("c", "d", 2);
weightedGraph.addEdge("b", "e", 3);
weightedGraph.addEdge("d", "e", 3);
weightedGraph.addEdge("c", "f", 4);
weightedGraph.addEdge("d", "f", 1);
weightedGraph.addEdge("f", "e", 1);

describe("test weighted graph", () => {
  it("test from d to e", () => {
    expect(
      weightedGraph.adjacentList.d.find((v) => v.node === "e").weight
    ).toBe(3);
  });
});

describe("test priorityQueue", () => {
  let priorityQueue;
  beforeEach(() => {
    priorityQueue = new PriorityQueue();
    for (const v of vertexes) {
      weightedGraph.adjacentList[v].forEach(({ node, weight }) =>
        priorityQueue.enqueue(node, weight)
      );
    }
  });
  it("test Dequue", () => {
    expect(priorityQueue.dequeue().priority).toBe(1);
  });
});

describe("test Dijkstra", () => {
  let weightObject = {};
  beforeEach(() => {
    vertexes.forEach((v) => {
      weightObject[v] = Infinity;
    });
  });

  const dijkstra = new Dijkstra(weightedGraph, weightObject);

  it("test shortest path", () => {
    expect(dijkstra.findShortestLength("a", "e")).toBe(6);
  });
});
