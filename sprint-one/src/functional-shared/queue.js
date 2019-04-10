var Queue = function() {
  var obj = {
    storage: {},
    count: 0
  };

  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.count] = val;
    this.count++;
  },
  dequeue: function() {
    var deleted = this.storage[0];
    delete this.storage[this.count];
    this.count--;
    for (var key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[key];
    }
    return deleted;
  },
  size: function() {
    if (this.count < 0) {
      return 0;
    }
    return this.count;
  }
};
