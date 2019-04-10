var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.count = 0;
  return obj;
};

var stackMethods = {
  push: function(val) {
    this.storage[this.count] = val;
    this.count++;
  },
  pop: function() {
    this.count--;
    var deleted = this.storage[this.count];
    delete this.storage[this.count];
    return deleted;
  },
  size: function() {
    if (this.count < 0) {
      return 0;
    }
    return this.count;
  }
};
