var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  _.extend(tree, bstMethods);
  return tree;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // Time Complexity - Linear
  var node = BinarySearchTree(value);
  var currentNode = this;

  while (currentNode) {
    if (value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
        return;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = node;
        return;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

bstMethods.contains = function(value) {
  //Time Complexity - Linear
  var currentNode = this;
  var foundNode = false;

  while (!foundNode && currentNode) {
    if (value < currentNode.value) {
      currentNode = currentNode.left;
    } else if (value > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      foundNode = true;
    }
  }
  return foundNode;
};

bstMethods.depthFirstLog = function(cb) {
  //Time Complexity - quadratic
  var currentNode = this;

  function helper(node) {
    if (!node) {
      return;
    } else {
      cb(node.value);
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
    }
  }
  helper(currentNode);
};

bstMethods.breadthFirstLog = function() {
  var node = this;
  var data = [];
  var queue = [];
  if (node) {
    queue.push(node.value);
  }
  while (queue.length) {
    node = queue.shift();
    data.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return data;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
