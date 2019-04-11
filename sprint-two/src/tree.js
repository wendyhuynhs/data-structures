var Tree = function(value) {
  // Time Complexity: Quadratic
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = new Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var currentChild = this.children;

  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < currentChild.length; i++) { //depth first 
    if (currentChild[i].contains(target) === true) {
      return true;
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
