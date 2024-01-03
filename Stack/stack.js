class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) return null;

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;

    return this;
  }

  isEmpty() {
    if (this.length === 0) return true;

    return false;
  }

  printStack() {
    // const topValue = this.bottom;
    const stack = [];
    while (this.bottom != null) {
      stack.push(this.bottom.value);
      this.bottom = this.bottom.next;
    }

    return stack;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(17);
myStack.push(15);
// myStack.push(5);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
// console.log('Peek value:', myStack.peek());
// console.log(myStack.printStack());
