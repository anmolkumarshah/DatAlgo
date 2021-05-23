class Node {
  constructor(data) {
    this.name = data;
    this.next = null;
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
    data = parseInt(data);
    if (data.length > 2 || data.length === 0) {
      return alert(
        "Please only enter number between 0 to 100, greater number may spoil the styling."
      );
    }
    let temp = new Node(data);
    temp.next = this.head;
    this.head = temp;
    this.tail = temp.next;
    this.length += 1;
  }

  insertBack(data) {
    if (data.length > 2 || data.length === 0) {
      return alert(
        "Please only enter number between 0 to 100, greater number may spoil the styling."
      );
    }
    data = parseInt(data);
    let temp = new Node(data);
    this.tail.next = temp;
    this.tail = this.tail.next;
    this.length += 1;
  }

  insertAt(index, data) {
    index = parseInt(index);
    if (data.length > 2 || data.length === 0) {
      return alert(
        "Please only enter number between 0 to 100, greater number may spoil the styling."
      );
    }
    data = parseInt(data);
    if (index === 0) {
      this.insertFront(data);
      return;
    } else if (index >= this.length) {
      this.insertBack(data);
      return;
    } else {
      let temp = this.head;
      let prev = null;
      while (index) {
        prev = temp;
        temp = temp.next;
        index--;
      }
      let t = new Node(data);
      t.next = temp;
      prev.next = t;
    }
    this.length += 1;
  }

  // insertAfter(index, data) {
  //   index = parseInt(index);
  //   if (data.length > 2 || data.length === 0) {
  //     return alert(
  //       "Please only enter number between 0 to 100, greater number may spoil the styling."
  //     );
  //   }

  //   if (index === this.length - 1) {
  //     return this.insertBack(data);
  //   }

  //   if (index === 0) {
  //     let val = this.head.name;
  //     this.delete("0");
  //     this.insertFront(data);
  //     this.insertFront(val);
  //     return;
  //   }

  //   let temp = this.head;
  //   while (index) {
  //     temp = temp.children[0];
  //     index--;

  //     const prevChild = temp.children[0];
  //     const tempNew = new Node(data);
  //     tempNew.children.push(prevChild);
  //     temp.children[0] = tempNew;
  //   }
  // }

  delete(value) {
    value = parseInt(value);
    let temp = this.head;
    if (temp.name === value) {
      return (this.head = temp.next ? temp.next : null);
    }
    while (temp.next && temp.next.name !== value) {
      temp = temp.next;
    }
    if (!temp.next) {
      return alert("Element not found");
    }
    temp.next = temp.next.next ? temp.next.next : null;
    this.length--;
  }

  // delete(index) {
  //   index = parseInt(index);
  //   if (index === 0) {
  //     let temp = this.head.children[0];
  //     this.head = temp;
  //     this.length--;
  //   } else {
  //     if (index < this.length) {
  //       let temp = this.head;
  //       let prev = null;
  //       while (index && temp && temp.children.length !== 0) {
  //         prev = temp;
  //         temp = temp.children.length > 0 ? temp.children[0] : null;
  //         index--;
  //       }
  //       if (temp.children.length > 0) {
  //         prev.children[0] = temp.children[0];
  //       } else {
  //         prev.children = [];
  //       }
  //       this.length--;
  //     } else {
  //       return alert("Invalid Index");
  //     }
  //   }
  // }

  reverse(q, p) {
    if (p !== null) {
      this.reverse(p, p.next);
      p.next = q;
    } else {
      this.head = q;
    }
  }

  // Reverse() {
  //   let p = this.head;
  //   let q = null;
  //   let r = null;
  //   while (p) {
  //     r = q;
  //     q = p;
  //     p = p.children[0];
  //     if (r === null) {
  //       q.children = [];
  //     } else {
  //       q.children[0] = r;
  //     }
  //   }
  //   this.head = q;
  // }

  display() {
    return this.head;
  }
}
