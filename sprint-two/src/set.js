var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  _.extend(set, setPrototype);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //Time Complexity - Constant
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  //Time Complexity - Linear
  for (var key in this.storage) {
    if (this.storage[key] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  //Time Complexity - Linear
  for (var key in this.storage) {
    if (this.storage[key] === item) {
      delete this.storage[key];
    }
  }
  return this.storage;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
