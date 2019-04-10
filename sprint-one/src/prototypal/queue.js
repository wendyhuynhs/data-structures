var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.count = 0;

  return obj;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.count] = val;
    this.count++;
  },
  dequeue: function() {
    this.count--;
    var deleted = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[this.count];
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
