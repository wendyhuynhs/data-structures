var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count++;
};

Queue.prototype.dequeue = function() {
  this.count--;
  var deleted = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[Number(key) - 1] = this.storage[this.count];
  }
  return deleted;
};

Queue.prototype.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
};
