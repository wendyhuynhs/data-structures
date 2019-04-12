var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //Time Complexity- Constant
    var node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    // Time Complexity - Constant
    var currentHead = this.head;
    this.head = this.head.next;
    delete currentHead;
    return currentHead.value;
  };

  list.contains = function(target) {
    // Time Complexity - Linear

    //Recursion Solution
    // node = this.head;
    // var contain = false;
    // if (node.value === target) {
    //   contain = true;
    // }
    // if (node.next) {
    //   contain = list.contains(target, node.next);
    // }
    // return contain;
    var current = this.head;
    while (current) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
