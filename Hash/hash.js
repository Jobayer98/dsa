class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.data[index]) {
      this.data[index] = [];
    }

    this.data[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const currentBucket = this.data[index];
    if (currentBucket) {
      const currentBucketLen = currentBucket.length;
      for (let i = 0; i < currentBucketLen; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const arrayKeys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        arrayKeys.push(this.data[i][0][0]);
      }
    }
    return arrayKeys;
  }
}

const myHashTable = new HashTable(20);
myHashTable.set("apples", 1000);
myHashTable.set("orange", 1500);
myHashTable.set("Mango", 100);
myHashTable.set("Banana", 500);
console.log(myHashTable.keys());
