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

  len() {
    return this.length;
  }

  insertFront(data) {
    if (data.length > 2 || data.length === 0) {
      return alert(
        "Please only enter number between 0 to 100, greater number may spoil the styling."
      );
    }
    let temp = new Node(data);
    temp.children.push(this.head);
    this.head = temp;
    this.length += 1;
  }

  insertBack(data) {
    if (data.length > 2 || data.length === 0) {
      return alert(
        "Please only enter number between 0 to 100, greater number may spoil the styling."
      );
    }
    let temp = new Node(data);
    this.tail.children.push(temp);
    this.tail = this.tail.children[0];
    this.length += 1;
  }

  insertAfter(index, data) {
    index = parseInt(index);
    if (data.length > 2 || data.length === 0) {
      return alert(
        "Please only enter number between 0 to 100, greater number may spoil the styling."
      );
    }

    if (index === this.length - 1) {
      return this.insertBack(data);
    }

    if (index === 0) {
      let val = this.head.name;
      this.delete("0");
      this.insertFront(data);
      this.insertFront(val);
      return;
    }

    let temp = this.head;
    while (index) {
      temp = temp.children[0];
      index--;

      const prevChild = temp.children[0];
      const tempNew = new Node(data);
      tempNew.children.push(prevChild);
      temp.children[0] = tempNew;
    }
  }

  delete(index) {
    index = parseInt(index);
    console.log(index, this.length);
    if (index === 0) {
      let temp = this.head.children[0];
      this.head = temp;
      this.length--;
    } else {
      if (index < this.length) {
        let temp = this.head;
        let prev = null;
        while (index && temp && temp.children.length !== 0) {
          prev = temp;
          temp = temp.children.length > 0 ? temp.children[0] : null;
          index--;
        }
        if (temp.children.length > 0) {
          prev.children[0] = temp.children[0];
        } else {
          prev.children = [];
        }
        this.length--;
      } else {
        return alert("Invalid Index");
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
