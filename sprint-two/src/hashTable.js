var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  // Time Complexity - Linear
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  var tuple = [k, v];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        this.size++;
      } else {
        bucket.push([k, v]);
        this.size++;
      }
    }
  } else {
    this._storage.set(index, [tuple]);
    this.size++;
  }

  if (this.size / this._limit >= 0.75) {
    this._storage *= 2;
  }
};

HashTable.prototype.retrieve = function(k) {
  // Time complexity - Linear
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  // Time Complexity - Linear
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        this.size--;
      }
    }
  }
  if (this.size / this._limit <= 0.25) {
    this._limit / 2;
  }
};

HashTable.prototype.resize = function(newLimit) {
  let copy = this._storage;
  this._limit = newLimit;

  this._storage = [];

  for (let i = 0; i < copy.length; i++) {
    let bucket = copy[i];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        let index = getIndexBelowMaxForKey(bucket[i][0], this._limit);
        let newBucket = this._storage[index];
        if (newBucket) {
          newBucket.push([bucket[i][0], bucket[i][1]]);
        } else {
          newBucket = [];
          newBucket.push([bucket[i][0], bucket[i][1]]);
        }
      }
    }
  }
  return this._storage;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
