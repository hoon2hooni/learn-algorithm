import { hash } from "./hash";

describe("test for good hash", () => {
  it("deterministic", () => {
    expect(hash("test2", 11)).toBe(hash("test2", 11));
  });
});
