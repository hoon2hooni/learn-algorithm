class Graph {
  constructor() {
    this.adjacentList = {};
  }
  //without solution
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
  //udemy solution
  addVertex(vertex) {
    if (!this.adjacentList[vertex]) this.adjacentList.vertex = [];
  }

  addAnEdge(v1, v2) {
    this.adjacentList[v1].push(v2);
    this.adjacentList[v1].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacentList[v1] = this.adjacentList[v1].filter((v) => v !== v2);
    this.adjacentList[v2] = this.adjacentList[v2].filter((v) => v !== v1);
    // let idx2 = this.adjacentList[v1].indexOf(v2);
    // let idx1 = this.adjacentList[v2].indexOf(v1);
    // if (idx2 !== undefined) {
    //   this.adjacentList[v1].splice(idx2, 1);
    // }
    // if (idx2 !== undefined) {
    //   this.adjacentList[v2].splice(idx1, 1);
    // }
  }

  removeVertex(v1) {
    this.adjacentList = Object.keys(this.adjacentList).reduce(
      (prev, currentV) => {
        if (currentV !== v1) {
          prev[currentV] = this.adjacentList[currentV].filter((v) => v !== v1);
        }
        return prev;
      },
      {}
    );
  }

  removeVertexUdemy(vertex) {
    while (this.adjacentList[vertex].length) {
      const adjacentVertex = this.adjacentList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacentList[vertex];
  }
}

export { Graph };
