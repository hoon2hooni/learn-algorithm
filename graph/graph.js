class Graph {
  constructor() {
    this.adjacentList = {};
    this.visited = [];
    this.checkVisited = {};
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
    if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
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

  dfs(start) {
    if (!this.adjacentList[start].length) {
      return;
    }
    this.visited.push(start);
    this.checkVisited[start] = true;
    for (const adjacentVertex of this.adjacentList[start]) {
      if (!this.checkVisited[adjacentVertex]) {
        this.dfs(adjacentVertex);
      }
    }
    return this.visited;
  }

  udemySolution(start) {
    const result = [];
    const visited = {};
    const adjacentList = this.adjacentList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacentList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  dfsIteratively(start) {
    const stack = [];
    const result = [];
    const visited = {};
    const adjacentList = this.adjacentList;
    stack.push(start);
    while (stack.length > 0) {
      const currentVertex = stack.pop();

      if (!visited[currentVertex]) {
        result.push(currentVertex);
        visited[currentVertex] = true;
      }

      adjacentList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  dfsIterativelyUdemy(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacentList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

export { Graph };
