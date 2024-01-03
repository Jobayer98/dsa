class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    if (this.first === this.last) {
      this.last = null;
    }

    let holdingPointer = this.first;
    this.first = this.first.next;
    holdingPointer = null;
    this.length--;

    return this;
  }

  dequeue() {
    if (this.first == null) return null;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;

    return this;
  }

  isEmpty() {
    if (this.length === 0) return true;

    return false;
  }

  printStack() {
    let currentNode = this.first;
    const queue = [];
    while (currentNode != null) {
      queue.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return queue;
  }
}

const myqueue = new Queue();
myqueue.enqueue(10);
myqueue.enqueue(20);
myqueue.enqueue(30);
myqueue.enqueue(40);
console.log(myqueue.dequeue());
console.log(myqueue.dequeue());
console.log(myqueue.dequeue());
console.log(myqueue.dequeue());
console.log(myqueue.printStack());
