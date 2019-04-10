class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(val) {
    this.storage[this.count] = val;
    this.count++;
  }
  dequeue() {
    this.count--;
    var deleted = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[this.count];
    }
    return deleted;
  }
  size() {
    if (this.count < 0) {
      return 0;
    }
    return this.count;
  }
}
