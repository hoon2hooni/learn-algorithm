import { hashUpgraded } from "./hash";
import { HashTable } from "./hashTable";

describe("test for good hash", () => {
  it("deterministic", () => {
    expect(hashUpgraded("test2", 11)).toBe(hashUpgraded("test2", 11));
  });
});

describe("test for my custom hash table", () => {
  const myHashTable = new HashTable(12);
  const keys = ["a", "b", "c", "d", "e", "aa"];
  const values = ["2", "3", "4", "5", "6", "7"];
  const objects = keys.reduce((prev, current, currentIdx) => {
    prev.push({ key: current, value: values[currentIdx] });
    return prev;
  }, []);

  it("return expected value", () => {
    const myHashTable = new HashTable(12);
    myHashTable.hashTable = { key: "hello", value: "정답" };
    expect(myHashTable.getValue("hello")).toEqual("정답");
  });

  it("test getKeys", () => {
    const myHashTable = new HashTable(12);
    for (const object of objects) {
      myHashTable.hashTable = object;
    }
    expect(myHashTable.getKeys()).toEqual(keys);
  });
});
