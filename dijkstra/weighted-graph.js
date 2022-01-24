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
}

export { WeightedGraph };
