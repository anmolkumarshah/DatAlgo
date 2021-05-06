class Node {
  constructor(data) {
    this.name = data;
    this.children = [];
  }
}

export default class BinaryTree {
  constructor(data) {
    this.queue = [];
    this.root = new Node(data.shift());
    this.root.children = [];
    this.queue.push(this.root);
    this.traverseList = [];

    while (this.queue.length !== 0) {
      let p = this.queue.shift();

      // element on index 1 is consider to be left element and on index 0 is consider as right

      let element = data.shift();
      if (element !== -1) {
        let rchild = new Node(element);
        rchild.children = [];
        this.queue.push(rchild);
        p.children[1] = rchild;
      }

      element = data.shift();
      if (element !== -1) {
        let lchild = new Node(element);
        lchild.children = [];
        this.queue.push(lchild);
        p.children[0] = lchild;
      }
    }
  }
  display() {
    return this.root;
  }

  clearTraverseList() {
    this.traverseList = [];
  }

  getTraverseList() {
    return this.traverseList;
  }

  preOrder(root) {
    if (root) {
      this.traverseList.push(root);
      this.preOrder(root.children[1]); // left
      this.preOrder(root.children[0]); // right
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.children[1]); // left
      this.postOrder(root.children[0]); // right
      this.traverseList.push(root);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.children[1]); // left
      this.traverseList.push(root);
      this.inOrder(root.children[0]); // right
    }
  }

  levelOrder(root) {
    const Q = [];
    this.traverseList.push(root);
    Q.push(root);
    while (Q.length !== 0) {
      let temp = Q.shift();
      if (temp.children[1]) {
        this.traverseList.push(temp.children[1]);
        Q.push(temp.children[1]);
      }
      if (temp.children[0]) {
        this.traverseList.push(temp.children[0]);
        Q.push(temp.children[0]);
      }
    }
  }
}
