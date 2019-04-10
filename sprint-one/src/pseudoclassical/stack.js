var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.count] = val;
  this.count++;
};

Stack.prototype.pop = function() {
  this.count--;
  var deleted = this.storage[this.count];
  delete this.storage[this.count];
  return deleted;
};

Stack.prototype.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
};
