import React, { useState, useEffect } from "react";
import BTree from "./Tree";
import Tree from "react-tree-graph";
import "./style.css";
import TraversedList from "./TraverseList";

const BinaryTree = () => {
  const t1 = new BTree([
    34,
    23,
    92,
    12,
    4,
    -1,
    -1,
    -1,
    -1,
    16,
    9,
    -1,
    -1,
    -1,
    -1,
  ]);

  const [data, setData] = useState([]);
  const [traverlist, setTraverlist] = useState([]);
  const [treeData, setTreeData] = useState(t1);

  useEffect(() => {
    setData(treeData.display());
  }, []);

  const Delete = (data) => {
    const children = data.children;
    children.forEach((element) => {
      if (element["gProps"]) {
        delete element["gProps"];
        return;
      } else if (data.children.length !== 0) {
        Delete(element);
      }
    });
    return data;
  };

  const reset = () => {
    setTraverlist([]);

    const temp = { ...data };
    if (temp["gProps"]) {
      delete temp["gProps"];
      setData(temp);
    } else {
      const updatedList = Delete(temp);
      setData(updatedList);
    }
  };

  const animateNode = (data, item) => {
    const children = data.children;
    children.forEach((element) => {
      if (element.name === item.name) {
        element["gProps"] = {
          className: "red-node",
          onClick: (event, node) => alert(`Clicked ${node}!`),
        };
        return;
      } else if (data.children.length !== 0) {
        animateNode(element, item);
      }
    });

    return data;
  };

  const animate = (item) => {
    const temp = { ...data };
    if (item.name === temp.name) {
      temp["gProps"] = {
        className: "red-node",
        onClick: (event, node) => alert(`Clicked ${node}!`),
      };
      setData(temp);
    } else {
      const updatedList = animateNode(temp, item);
      setData(updatedList);
    }
  };

  const animateList = (tree) => {
    const list = tree.getTraverseList();
    list.forEach((item, idx) => {
      setTimeout(() => {
        setTraverlist((prev) => [...prev, item.name]);
        animate(item);
      }, 1500 * idx);
    });
  };

  const changeHandler = (e) => {
    treeData.clearTraverseList();
    console.log(e.target.value);
    switch (e.target.value) {
      case "InOrder":
        treeData.inOrder(treeData.root);
        break;

      case "PreOrder":
        treeData.preOrder(treeData.root);
        break;

      case "PostOrder":
        treeData.postOrder(treeData.root);
        break;

      case "LevelOrder":
        treeData.levelOrder(treeData.root);
        break;

      default:
        break;
    }
  };

  const customInput = () => {
    let queue = [];
    let root = prompt("Enter root value");
    if (root) queue.push(root);
    let list = [];
    list.push(root);

    while (queue.length !== 0) {
      let p = queue.shift();

      let element = prompt(
        `Enter left child of ${p}, Enter -1 to leave the child.`
      );
      if (element !== "-1") {
        list.push(element);
        queue.push(element);
      } else if (element === "-1") {
        list.push(element);
      }
      element = prompt(
        `Enter right child of ${p}, Enter -1 to leave the child.`
      );
      if (element !== "-1") {
        list.push(element);
        queue.push(element);
      } else if (element === "-1") {
        list.push(element);
      }
    }
    list = list.map((i) => {
      return parseInt(i);
    });
    try {
      const temp = new BTree(list);
      setTreeData(temp);
      setData(temp.display());
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
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
      <TraversedList list={traverlist} />
      <div className="controller-tree">
        <div className="row">
          <div className="col-3">
            <form>
              <select onChange={changeHandler} className="form-control">
                <option selected value={"title"}>
                  Please Select
                </option>
                <option value={"PreOrder"}>PreOrder</option>
                <option value={"PostOrder"}>PostOrder</option>
                <option value={"InOrder"}>InOrder</option>
                <option value={"LevelOrder"}>LevelOrder</option>
              </select>
            </form>
          </div>
          <div className="col-1">
            <button
              onClick={() => animateList(treeData)}
              className="btn btn-primary"
            >
              Start
            </button>
          </div>
          <div className="col-1">
            <button onClick={reset} className="btn btn-danger">
              Clear
            </button>
          </div>
          <div className="col">
            <button onClick={customInput} className="btn btn-info">
              Custom Input
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BinaryTree;
