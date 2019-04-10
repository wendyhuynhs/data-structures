// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = { value: node, edge: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.graph) {
    var currentNode = this.graph[key];
    if (currentNode.value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var deleted = this.graph[node];
  delete this.graph[node];
  for (var key in this.graph) {
    if (this.graph[key].edge.hasOwnProperty(deleted.value)) {
      delete this.graph[key].edge[deleted.value];
    }
  }
  return deleted;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.graph[fromNode].edge[toNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].edge[toNode] = true;
  this.graph[toNode].edge[fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.graph[fromNode].edge[toNode];
  delete this.graph[toNode].edge[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.graph) {
    cb(this.graph[key].value);
  }
  return this.graph;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
