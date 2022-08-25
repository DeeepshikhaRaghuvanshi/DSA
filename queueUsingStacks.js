class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = null
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        }
        else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    pop() {
        if (!this.first) return null
        let temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.val
    }
}

class Queue {

    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }
    enqueue(val) {

        while (this.stack2.size > 0) {
            let temp = this.stack2.pop()
            this.stack1.push(temp)
        }

        this.stack1.push(val)
        return this.stack1.size
    }
    deque() {

        while (this.stack1.size > 1) {
            let temp = this.stack1.pop()
            this.stack2.push(temp)
        }
        return this.stack1.pop()
    }
}


let queue = new Queue()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.deque())