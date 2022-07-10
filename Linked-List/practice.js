class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    //functions : push,pop,shift,unshift,get,set,insert,remove  

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let current = this.head
        let prevNode = current
        while (current.next) {
            prevNode = current
            current = current.next
        }

        this.tail = prevNode
        prevNode.next = null
        this.length--
        if (this.length == 0) {
            this.head = null
            this.tail = null
        }
        return this
    }
    shift() {
        if (!this.head) return undefined
        let removedNode = this.head
        this.head = removedNode.next
        this.length--
        if (this.length === 0) {
            this.tail = null;
        }
        return removedNode
    }
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index > this.length) return null
        let counter = 0
        let current = this.head
        while (counter != index) {
            current = current.next
            counter++
        }
        return counter
    }
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 | index > this.length) return false
        if (index == 0) return this.unshift(val)
        if (index == this.length - 1) return this.push(val)
        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let temp = prevNode.next
        prevNode.next = newNode
        newNode.next = temp
        this.length++
        return true

    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1)
        let node = this.get(index)
        prevNode.next = node.next
        this.length--
        return true
    }
}