import React, { useState, useEffect } from "react";
import AVLTree from "./avl-tree";
import Tree from "react-tree-graph";
import "./style.css";
import AlertDialog from "../../material-ui-components/alertDialog";
import Information from "../../material-ui-components/information";
import { Button } from "@material-ui/core";
import codeData from "./../../data";
import StartInformation from "../startInformation/startInformation";

const AVLTrees = () => {
  const [considerTree, setConsiderTree] = useState(null);
  const [isCreated, setCreated] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);
  const [toDel, setToDel] = useState(0);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    StartInformation();
    setOpen(false);
  };

  const create = () => {
    let rootvalue = parseInt(prompt("Enter the root value"));
    if (!isNaN(rootvalue)) {
      const temp = new AVLTree(rootvalue);
      setConsiderTree(temp);
      const v = temp.getRoot();
      let result = refactor(v);
      setData(result);
      setCreated(true);
    }
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
    setValue("");
  };

  const changeHandler = (e) => {
    setValue(parseInt(e.target.value));
  };

  const deleteValHandler = (e) => {
    setToDel(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    let v = considerTree.Delete(considerTree.getRoot(), parseInt(toDel));
    let result = refactor(v);
    setData(result);
    setToDel("");
  };

  const handleClear = () => {
    setConsiderTree(null);
    setCreated(false);
  };

  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
      <div className="top ">
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
            duration={500}
            svgProps={{
              transform: "rotate(90)",
            }}
            textProps={{
              transform: "rotate(270)",
            }}
          />
        )}

        <Information codeData={codeData.avl} />
        <div className="controlls-container w-100">
          {!isCreated && (
            <div className="col-1 d-flex align-items-center controlHandler">
              <Button onClick={create} className="Button" varient="outlined">
                Create
              </Button>
            </div>
          )}

          <div className="row">
            <div className="col">
              {isCreated && (
                <Button
                  onClick={handleClear}
                  className="Button"
                  varient="outlined"
                >
                  Clear
                </Button>
              )}
            </div>

            <div className="col">
              {isCreated && (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col">
                      <input
                        placeholder="value"
                        value={value}
                        onChange={changeHandler}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="col">
                      <Button
                        type="submit"
                        className="Button"
                        varient="outlined"
                      >
                        insert
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            <div className="col d-flex align-items-center controlHandler">
              {isCreated && (
                <form onSubmit={handleDelete}>
                  <div className="row">
                    <div className="col">
                      <input
                        placeholder="value"
                        onChange={deleteValHandler}
                        className="form-control"
                        value={toDel}
                      ></input>
                    </div>
                    <div className="col">
                      <Button
                        type="submit"
                        className="Button"
                        varient="outlined"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AVLTrees;
