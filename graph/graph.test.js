import { Graph } from "./graph";

describe("test graph", () => {
  let myGraph;
  const vertexes = ["A", "B", "C", "D", "E"];
  const edges = [
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["C", "E"],
    ["D", "E"],
    ["D", "F"],
    ["E", "F"],
  ];
  const dfsAnswer = ["A", "B", "D", "E", "C", "F"];
  const dfsAnswerIteratively = ["A", "C", "E", "F", "D", "B"];
  beforeEach(() => {
    myGraph = new Graph();
    console.log("my graph 초기화");
  });

  it("test connect two vertex", () => {
    myGraph.addTwoVertexes("a", "b");
    expect(myGraph.adjacentList.a).toEqual(["b"]);
    myGraph.addTwoVertexes("a", "b");
    expect(myGraph.adjacentList.a).toEqual(["b"]);
    myGraph.addTwoVertexes("c", "b");
    expect(myGraph.adjacentList.b).toEqual(["a", "c"]);
    myGraph.removeVertexUdemy("a");
    expect(myGraph.adjacentList.b).toEqual(["c"]);
    expect(myGraph.adjacentList.hasOwnProperty("a")).toBe(false);
  });

  it("second DFS TEST", () => {
    vertexes.forEach((v) => myGraph.addVertex(v));
    edges.forEach((edge) => {
      myGraph.addTwoVertexes(edge[0], edge[1]);
    });
    expect(myGraph.dfs("A")).toEqual(dfsAnswer);
    expect(myGraph.udemySolution("A")).toEqual(dfsAnswer);
    expect(myGraph.dfsIteratively("A")).toEqual(dfsAnswerIteratively);
  });
});
