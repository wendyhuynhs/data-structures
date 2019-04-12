var doubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};
