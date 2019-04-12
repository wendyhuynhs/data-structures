var Tree = function(value, parent) {
  // Time Complexity: Quadratic
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.removeFromParent = function(targetChildValue, node) {
  var remove = false;
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      if (node.children[i].value === targetChildValue) {
        node.children[i].parent === null;
        node.children.splice(i, 1);
        return true;
      } else if (children[i].children) {
        remove = this.removeFromParent(node.children[i].children);
      } else {
        return true;
      }
    }
  }
  return remove;
};

treeMethods.addChild = function(value) {
  // Time Complexity - Constant
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  // Time Complexity - Quadratic
  var currentChild = this.children;

  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < currentChild.length; i++) {
    //depth first
    if (currentChild[i].contains(target) === true) {
      return true;
    }
  }
  return false;
};

treeMethods.traverse = function(node, cb) {
  var node = this;
  cb(node.value);
  if (node) {
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        node.traverse(node.children[i], cb);
      }
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
