class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      data: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  pop() {
    let currentNode = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      currentNode = currentNode.next;
    }

    this.tail = currentNode;
    currentNode.next = null;
    this.length--;
  }

  insert(index, value) {
    const newNode = new Node(value);

    if (this.length <= index) return this.append(value);
    let currentNode = this.indexTraverse(index);

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if (this.length <= index) return this.pop();

    let currentNode = this.indexTraverse(index);
    currentNode.next = currentNode.next.next;
    this.length--;
  }

  indexTraverse(index) {
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;

    return this.printList();
  }

  printList() {
    let currentNode = this.head;
    const list = [];
    while (currentNode != null) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return list;
  }
}

const myList = new LinkedList(5);
myList.append(10);
myList.append(20);
myList.append(35);
myList.prepend(1);

// console.log(myList.printList());

// myList.remove(3);

console.log(myList.printList());
console.log(myList.reverse());

console.log('MyList Class: ', myList);
