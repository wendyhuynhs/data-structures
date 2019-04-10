var Stack = function() {
  var obj = {
    storage: {},
    count: 0
  };

  _.extend(obj, stackMethods);
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
