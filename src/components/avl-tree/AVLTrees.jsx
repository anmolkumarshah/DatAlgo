import React, { useState, useEffect } from "react";
import AVLTree from "./avl-tree";
import Tree from "react-tree-graph";
import "./style.css";
import AlertDialog from "../../material-ui-components/alertDialog";

const AVLTrees = () => {
  const [considerTree, setConsiderTree] = useState(new AVLTree(""));
  const [isCreated, setCreated] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setData] = useState(considerTree.getRoot());
  const [toDel, setToDel] = useState(0);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const create = () => {
    let rootvalue = parseInt(prompt("Enter the root value"));
    const temp = new AVLTree(rootvalue);
    setConsiderTree(temp);
    setCreated(true);
  };

  const insert = (data) => {
    const v = considerTree.insert(considerTree.getRoot(), data);
    let result = refactor(v);
    setData(result);
  };

  class rNode {
    constructor(data) {
      this.name = data;
      this.children = [];
      this.gProps = {
        className: "node",
        onClick: (event, node) => alert(`Clicked ${node}!`),
      };
    }
  }

  const refactor = (tree) => {
    if (tree) {
      let t = new rNode(tree.name);
      if (tree.lchild && tree.rchild) {
        t.children.push(refactor(tree.rchild));
        t.children.push(refactor(tree.lchild));
      }
      if (tree.lchild && !tree.rchild) {
        t.children.push(refactor(tree.lchild));
      }
      if (tree.rchild && !tree.lchild) {
        t.children.push(refactor(tree.rchild));
      }

      return t;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insert(value);
  };

  const changeHandler = (e) => {
    setValue(parseInt(e.target.value));
  };

  const deleteValHandler = (e) => {
    setToDel(parseInt(e.target.value));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    let v = considerTree.Delete(considerTree.getRoot(), toDel);
    console.log(v);
    let result = refactor(v);
    setData(result);
  };

  const handleClear = () => {
    setData(considerTree.getRoot());
    setCreated(false);
  };

  return (
    <div className="top">
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to AVL Tree"
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi molestiae accusamus? Quis tempore tempora at distinctio explicabo cumque amet, perferendis rem iste qui voluptate maxime sed obcaecati inventore accusamus."
      />
      {considerTree && (
        <Tree
          data={data}
          height={600}
          width={400}
          animated={true}
          duration={1000}
          svgProps={{
            transform: "rotate(90)",
          }}
          textProps={{
            transform: "rotate(270)",
          }}
        />
      )}
      <div className="row controller-avl">
        {!isCreated && (
          <div className="col-1">
            <button onClick={create} className="btn btn-primary">
              Create
            </button>
          </div>
        )}

        <div className="col-1">
          {isCreated && (
            <button onClick={handleClear} className="btn btn-dark">
              Clear
            </button>
          )}
        </div>
        <div className="col-5">
          {isCreated && (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <input
                    onChange={changeHandler}
                    className="form-control"
                  ></input>
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-primary">
                    insert
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="col-5">
          {isCreated && (
            <form onSubmit={handleDelete}>
              <div className="row">
                <div className="col">
                  <input
                    onChange={deleteValHandler}
                    className="form-control"
                  ></input>
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AVLTrees;
