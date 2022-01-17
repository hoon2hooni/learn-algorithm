import { Graph } from "./graph";

describe("test graph", () => {
  const myGraph = new Graph();
  it("test connect two vertex", () => {
    myGraph.addTwoVertexes("a", "b");
    expect(myGraph.adjacentList.a).toEqual(["b"]);
    myGraph.addTwoVertexes("a", "b");
    expect(myGraph.adjacentList.a).toEqual(["b"]);
    myGraph.addTwoVertexes("c", "b");
    expect(myGraph.adjacentList.b).toEqual(["a", "c"]);
    myGraph.removeVertex("a");
    expect(myGraph.adjacentList.b).toEqual(["c"]);
    expect(myGraph.adjacentList.hasOwnProperty("a")).toBe(false);
  });
});
