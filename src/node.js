class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		this.left = node;
		if (!this.left) {
		this.right = node;
		}
		return node;
	}

	removeChild(node) {
		if (!this.left) {
			node = this.right;
		}
		if (!this.right) {
			node = this.left;
		}
		return node;
	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
