import { hash as hashUpgraded } from "./hash";

describe("test for good hash", () => {
  it("deterministic", () => {
    expect(hashUpgraded("test2", 11)).toBe(hashUpgraded("test2", 11));
  });
});
