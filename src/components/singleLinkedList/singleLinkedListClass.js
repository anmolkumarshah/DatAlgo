class Node {
  constructor(data) {
    this.name = data;
    this.children = [];
    this.nodeProps = {
      className: "node-style",
    };
  }
}

export default class SLinkedList {
  constructor(data) {
    let temp = new Node(data);
    this.head = temp;
    this.tail = temp;
    this.length = 1;
  }

  insertFront(data) {
    let temp = new Node(data);
    temp.children.push(this.head);
    this.head = temp;
    this.length += 1;
  }

  insertBack(data) {
    let temp = new Node(data);
    this.tail.children.push(temp);
    this.tail = this.tail.children[0];
    this.length += 1;
  }

  insertAfter(index, data) {
    if (index + 1 === this.length) {
      this.insertBack(data);
      return;
    }
    let temp = this.head;
    if (index + 1 <= this.length) {
      while (index) {
        temp = temp.children[0];
        index--;
      }
      const prevChild = temp.children[0];
      const tempNew = new Node(data);
      tempNew.children.push(prevChild);
      temp.children[0] = tempNew;
    } else {
      alert("Index is out of range`");
    }
  }

  delete(index) {
    if (index === 0) {
      let temp = this.head.children[0];
      this.head = temp;
      this.length--;
    } else {
      if (index < this.length) {
        let temp = this.head;
        let prev = null;
        while (index && temp) {
          prev = temp;
          temp = temp.children[0];
          index--;
        }
        prev.children[0] = temp.children[0];
        this.length--;
      }
    }
  }

  Reverse() {
    let p = this.head;
    let q = null;
    let r = null;
    while (p) {
      r = q;
      q = p;
      p = p.children[0];
      if (r === null) {
        q.children = [];
      } else {
        q.children[0] = r;
      }
    }
    console.log(this.head);
    this.head = q;
  }

  display() {
    return this.head;
  }
}
