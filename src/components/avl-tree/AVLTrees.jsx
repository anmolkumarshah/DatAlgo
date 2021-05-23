import React, { useState, useEffect } from "react";
import AVLTree from "./avl-tree";
// import Tree from "react-tree-graph";
import Tree from "react-d3-tree";
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
  const [toDel, setToDel] = useState("");

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
    const v = considerTree.insert(considerTree.getRoot(), parseInt(data));
    let result = refactor(v);
    console.log(result);
    setData(result);
  };

  class rNode {
    constructor(data) {
      this.name = data;
      this.children = [];
    }
  }

  const refactor = (tree) => {
    if (tree) {
      let t = new rNode(tree.name);
      if (tree.lchild && tree.rchild) {
        t.children.push(refactor(tree.lchild));
        t.children.push(refactor(tree.rchild));
      }
      if (tree.lchild && !tree.rchild) {
        t.children.push(refactor(tree.lchild));
      }
      if (tree.rchild && !tree.lchild) {
        t.children.push(refactor(tree.rchild));
      }
      if (!tree.rchild && !tree.lchild) {
        t.children = [];
      }
      return t;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "" && !value.isNaN) {
      insert(value);
    } else {
      alert("Please Enter some value");
    }
    setValue("");
  };

  const changeHandler = (e) => {
    if (e.target.value.indexOf(".") !== -1) {
      return alert("Please only enter Integer literals, not Double");
    }
    setValue(e.target.value);
  };

  const deleteValHandler = (e) => {
    if (e.target.value.indexOf(".") !== -1) {
      return alert("Please only enter Integer literals, not Double");
    }
    setToDel(e.target.value);
  };

  const handleDelete = (e) => {
    try {
      e.preventDefault();
      if (toDel !== "" && !toDel.isNaN) {
        let v = considerTree.Delete(considerTree.getRoot(), parseInt(toDel));
        let result = refactor(v);
        setData(result);
      } else {
        alert("Please enter a Numeric value");
      }
    } catch (e) {
      alert(
        "An Algorithamic Error Occured, please perform another operation : Error discription :" +
          e
      );
    }

    setToDel("");
  };

  const handleClear = () => {
    setConsiderTree(null);
    setCreated(false);
  };

  if (considerTree && !considerTree.getRoot()) {
    handleClear();
  }

  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="top " style={{ height: "50em", width: "100vw" }}>
        <AlertDialog
          open={open}
          handleClose={handleClose}
          title="Welcome to AVL Tree"
          content="You will see a empty screen, from the below controller first you have to create one AVL Tree, by clicking create, after you create AVL Tree, all options in controller will be enabled, you can insert value and delete value from the tree. You can clear the Tree at any time. "
        />
        {considerTree && (
          <Tree
            data={data}
            zoomable="true"
            enableLegacyTransitions="true"
            transitionDuration="800"
            translate={{ x: "782", y: "52" }}
            zoom="1"
            rootNodeClassName="node__root"
            leafNodeClassName="node__leaf"
            branchNodeClassName="node__branch"
            orientation="vertical"
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
                        placeholder="Node to Delete"
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
