const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null
	}

	push(data, priority) {
		insertNode() = new Node(data);
		shiftNodeUp() = new Node(data, priority);
	}

	pop() {
		
	}

	detachRoot() {
		this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;
	}

	isEmpty() {
		if (this.length === 0) return true;
	}

	clear() {
		var root = null;
		var parentNodes = []
	}

	insertNode(node) {
		if (this.length === 0) {
				this.root = node;
				// this.parentNodes = [];
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
