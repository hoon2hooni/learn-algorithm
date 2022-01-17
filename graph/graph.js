class Graph {
  constructor() {
    this.adjacentList = {};
  }
  addTwoVertexes(vertexA, vertexB) {
    this.connectTwoVertexes(vertexA, vertexB);
    this.connectTwoVertexes(vertexB, vertexA);
  }
  connectTwoVertexes(vertexA, vertexB) {
    if (!this.adjacentList[vertexA]) {
      this.adjacentList[vertexA] = [vertexB];
    } else {
      if (!this.adjacentList[vertexA].includes(vertexB)) {
        this.adjacentList[vertexA].push(vertexB);
      }
    }
  }
}

export { Graph };
