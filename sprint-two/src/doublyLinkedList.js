var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

DoublyLinkedList.prototype.removeHead = function() {
  var oldHead = this.head.value;
  if (!oldHead) return undefined;
  this.head = this.head.next;
  this.head.prev = null;
  return oldHead;
};

DoublyLinkedList.prototype.contains = function(target) {
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

DoublyLinkedList.prototype.removeTail = function() {
  var oldTail = this.tail;
  this.tail = oldTail.prev;
  this.tail.next = null;
  oldTail.prev = null;
  delete oldTail;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};
