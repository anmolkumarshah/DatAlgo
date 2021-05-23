class Node {
  constructor(data = null) {
    this.name = data;
    this.height = 0;
    this.lchild = null;
    this.rchild = null;
  }
}

export default class AVLTree {
  constructor(data) {
    this.root = new Node(data);
  }

  getRoot() {
    return this.root;
  }

  setRoot(r) {
    this.root = r;
  }

  inPre(p) {
    while (p && p.rchild !== null) p = p.rchild;
    return p;
  }

  inSucc(p) {
    while (p && p.lchild !== null) p = p.lchild;
    return p;
  }

  Delete(p, key) {
    let q;
    if (!p) {
      return null;
    }
    if (p.name === key && !p.lchild && !p.rchild) {
      if (p === this.root) {
        this.root = null;
      }
      return null;
    }
    if (key < p.name) {
      p.lchild = this.Delete(p.lchild, key);
    } else if (key > p.name) {
      p.rchild = this.Delete(p.rchild, key);
    } else {
      if (this.NodeHeight(p.lchild) > this.NodeHeight(p.rchild)) {
        q = this.inPre(p.lchild);
        p.name = q.name;
        p.lchild = this.Delete(p.lchild, q.name);
      } else {
        q = this.inSucc(p.rchild);
        p.name = q.name;
        p.rchild = this.Delete(p.rchild, q.name);
      }
    }
    p.height = this.NodeHeight(p);

    if (this.balanceFactor(p) === 2 && this.balanceFactor(p.lchild) <= 1)
      return this.LLRotation(p);
    else if (this.balanceFactor(p) === 2 && this.balanceFactor(p.lchild) === -1)
      return this.LRRotation(p);
    else if (this.balanceFactor(p) === -2 && this.balanceFactor(p.rchild) >= -1)
      return this.RRRotation(p);
    else if (this.balanceFactor(p) === -2 && this.balanceFactor(p.rchild) === 1)
      return this.RLRotation(p);

    return p;
  }

  insert(p, key) {
    if (p == null) {
      let t = new Node(key);
      t.lchild = t.rchild = null;
      t.height = 1;
      return t;
    }
    if (key < p.name) {
      p.lchild = this.insert(p.lchild, key);
    } else if (key > p.name) {
      p.rchild = this.insert(p.rchild, key);
    }
    p.height = this.NodeHeight(p);

    if (this.balanceFactor(p) === 2 && this.balanceFactor(p.lchild) === 1)
      return this.LLRotation(p);
    else if (this.balanceFactor(p) === 2 && this.balanceFactor(p.lchild) === -1)
      return this.LRRotation(p);
    else if (
      this.balanceFactor(p) === -2 &&
      this.balanceFactor(p.rchild) === -1
    )
      return this.RRRotation(p);
    else if (this.balanceFactor(p) === -2 && this.balanceFactor(p.rchild) === 1)
      return this.RLRotation(p);

    return p;
  }

  NodeHeight(p) {
    let hl, hr;
    hl = p && p.lchild ? p.lchild.height : 0;
    hr = p && p.rchild ? p.rchild.height : 0;
    return hl > hr ? hl + 1 : hr + 1;
  }

  balanceFactor(p) {
    let hl, hr;
    hl = p && p.lchild ? p.lchild.height : 0;
    hr = p && p.rchild ? p.rchild.height : 0;
    return hl - hr;
  }

  RRRotation(p) {
    let pr = p.rchild;
    let prl = pr.lchild;
    pr.lchild = p;
    p.rchild = prl;
    pr.height = this.NodeHeight(pr);
    p.height = this.NodeHeight(p);
    if (this.root === p) this.root = pr;
    return pr;
  }

  RLRotation(p) {
    let pr = p.rchild;
    let prl = pr.lchild;
    pr.lchild = prl.rchild;
    p.rchild = prl.lchild;
    prl.lchild = p;
    prl.rchild = pr;
    prl.height = this.NodeHeight(prl);
    p.height = this.NodeHeight(p);
    pr.height = this.NodeHeight(pr);
    if (this.root === p) this.root = prl;
    return prl;
  }

  LLRotation(p) {
    let pl = p.lchild;
    let plr = pl.rchild;
    pl.rchild = p;
    p.lchild = plr;

    p.height = this.NodeHeight(p);
    pl.height = this.NodeHeight(pl);
    if (this.root === p) this.root = pl;
    return pl;
  }

  LRRotation(p) {
    let pl = p.lchild;
    let plr = pl.rchild;
    pl.rchild = plr.lchild;
    p.lchild = plr.rchild;
    plr.lchild = pl;
    plr.rchild = p;

    pl.height = this.NodeHeight(pl);
    p.height = this.NodeHeight(p);
    plr.height = this.NodeHeight(plr);

    if (this.root === p) this.root = plr;
    return plr;
  }
}
