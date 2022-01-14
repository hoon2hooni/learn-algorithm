class HashTable {
  constructor(size = 53) {
    this.size = size;
    this._hashTable = Array.from({ length: size });
    this.keyValues = null;
  }

  #hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.size;
    }
    return total;
  }

  get hashTable() {
    return this._hashTable;
  }

  getValue(key) {
    let index = this.#hash(key);
    if (!this.hashTable[index]) {
      return;
    }
    for (const [keyInTable, value] of this.hashTable[index]) {
      if (keyInTable === key) {
        return value;
      }
    }
  }

  setKeyValues(idx) {
    let keys = new Set();
    let values = new Set();
    for (const keyValueArray of this.hashTable) {
      if (keyValueArray) {
        for (const [key, value] of keyValueArray) {
          keys.add(key);
          values.add(value);
        }
      }
    }

    this.keyValues["keys"] = [...keys];
    this.keyValues["values"] = [...values];
    return;
  }

  getKeys() {
    if (!this.keyValues) {
      this.keyValues = {};
      this.setKeyValues();
    }
    return this.keyValues.keys;
  }

  getValues() {
    if (!this.keyValues) {
      this.keyValues = {};
      this.setKeyValues();
    }
    return this.keyValues.values;
  }

  set hashTable({ key, value }) {
    let index = this.#hash(key);
    if (!this._hashTable[index]) {
      this._hashTable[index] = [];
    }
    this._hashTable[index].push([key, value]);
  }
}

export { HashTable };
