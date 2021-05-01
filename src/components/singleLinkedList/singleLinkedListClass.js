class Node {
  constructor(data) {
    this.name = data;
    this.children = [];
  }
}

export default class SLinkedList {
  constructor(data) {
    let temp = new Node(data);
    this.head = temp;
    this.tail = temp;
  }

  insertFront(data) {
    let temp = new Node(data);
    temp.children.push(this.head);
    this.head = temp;
  }

  insertBack(data) {
    let temp = new Node(data);
    this.tail.children.push(temp);
    this.tail = this.tail.children[0];
  }

  insertAfter(index, data) {
    let temp = this.head;
    while (index) {
      temp = temp.children[0];
      index--;
    }
    const prevChild = temp.children[0];
    const tempNew = new Node(data);
    tempNew.children.push(prevChild);
    temp.children[0] = tempNew;
  }

  display() {
    return this.head;
  }
}
