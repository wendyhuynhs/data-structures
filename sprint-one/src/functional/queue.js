var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var deleted = storage[0];
    delete storage[0];
    count--;
    for (var key in storage) {
      storage[Number(key) - 1] = storage[key];
    }
    return deleted;
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    }
    return count;
  };

  return someInstance;
};
