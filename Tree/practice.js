class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(val) {
        var newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        var current = this.root
        while (true) {
            if (val === current.val) return undefined
            if (val < current.val) {
                if (current.val.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left
            } else {
                if (current.right == null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right
            }
        }
    }
    find(val) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    contains(val) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


var tree = new BST();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
let x = tree.find(13)
console.log(x)