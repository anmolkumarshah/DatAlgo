import React, { useState, useEffect, useRef } from "react";
import Xarrow from "react-xarrows";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";

import "./styles.css";
import Node from "./Node";

const LinkedList = () => {
  const [, setRender] = useState({});
  const forceRerender = () => setRender({});

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  });

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const updateSize = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const [nodes, setNodes] = useState([]);
  const [findVal, setFindVal] = useState("");
  const [nodeVal, setNodeVal] = useState("");
  const [findPointer, setFindPointer] = useState(null);

  const [indexVal, setIndex] = useState("");
  const [value, setValue] = useState("");

  const tempRef = useRef(null);
  const headRef = useRef(null);

  const updateNode = (id, newRef) => {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === id) {
        nodes[i].currentRef = newRef;
        break;
      }
    }
    forceRerender();
  };

  const handleClear = () => {
    setNodes([]);
  };

  const addNode = (value, idx) => {
    if (value && nodes.length >= 0) {
      const newNode = {
        length: nodes.length,
        id: (nodes.length + 1).toString() + random(100, 400).toString(),
        data: value,
        x:
          size.width < 450
            ? random(10, size.width - 100)
            : random(300, size.width - 100),
        y: random(10, size.height - 200),
        currentRef: tempRef,
        prevRef:
          nodes.length === 0 ? headRef : nodes[nodes.length - 1].currentRef,
      };

      const tempPointer = {
        length: nodes.length,
        id:
          (nodes.length + 1).toString() + random(100, 400).toString() + "head",
        data: "Temp Pointer",
        x: size.width < 450 ? 50 : size.width - 200,
        y: size.height - 200,
        currentRef: tempRef,
        prevRef:
          nodes.length === 0 ? headRef : nodes[nodes.length - 1].currentRef,
      };

      const lastNode = {
        length: -1,
        id:
          (nodes.length + 1).toString() + random(100, 400).toString() + "temp",
        data: "Last Pointer",
        x: size.width < 450 ? 50 : 300,
        y: size.height - 200,
        currentRef: tempRef,
        prevRef:
          nodes.length === 0 ? headRef : nodes[nodes.length - 1].currentRef,
      };

      let update;
      if (idx) update = [...nodes.slice(0, idx), newNode, ...nodes.slice(idx)];

      nodes.length === 0
        ? setNodes((nodes) => [...nodes, lastNode, tempPointer, newNode])
        : idx
        ? setNodes([...update])
        : setNodes((nodes) => [...nodes, newNode]);
      setNodeVal("");
      console.log(nodes);
      nodes.length > 2 && setFindPointer(nodes[2].currentRef);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // console.log(nodes);
    nodes.length === 0 && toast.info(`Good Job!, You Created your first node`);
    nodes.length === 0 &&
      toast(`You can move any of node whereelse you want, isn't it good`);
    addNode(nodeVal);
  };

  const handleInsert = async (e) => {
    e.preventDefault();
    let index = parseInt(indexVal);
    index += 2;
    // let previousValue = nodes.map((item) => item.data);
    // previousValue = indexVal && [
    //   ...previousValue.slice(0, index),
    //   value,
    //   ...previousValue.slice(index),
    // ];
    // // console.log(previousValue);
    // setNodes([]);
    // // handleAdd(e);

    // for (let i = 2; i < previousValue.length; i++) {
    //   setTimeout(() => {
    //     addNode(previousValue[i]);
    //   }, i * 1000);
    // }
    addNode(value, index);
  };

  let tempPointerProps;
  if (nodes.length > 2) {
    tempPointerProps = {
      start: nodes[1].currentRef,
      end: findPointer,
      dashness: true ? { animation: Number(1) } : false,
      curveness: Number(0),
      color: "gray",
      strokeWidth: 2,
    };
  }

  const handleFind = (e) => {
    e.preventDefault();
    const fun = (i) => {
      toast.success(`Element found at index ${i - 2}`);
      clearInterval(traverseList);
    };
    const exitFun = () => {
      toast.error(`Sorry !!! Element Not found`);
      clearInterval(traverseList);
    };
    let i = 1;
    const traverseList = setInterval(() => {
      i++;
      if (i < nodes.length) {
        setFindPointer(nodes[i].currentRef);
        toast(`Searching... ${findVal}`, { autoClose: 1000 });
        if (nodes[i].data === findVal) {
          fun(i);
        }
      }
      if (nodes.length === i) {
        exitFun();
      }
    }, 1000);
  };

  return (
    <div
      className="linkedlist"
      style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
    >
      {nodes.map((node) => {
        var props = {
          start: node.prevRef,
          end: node.currentRef,
          dashness: true ? { animation: Number(2) } : false,
          curveness: Number(1),
        };
        let lastProps = {
          start: nodes[0].currentRef,
          end:
            nodes.length > 1
              ? nodes[nodes.length - 1].currentRef
              : nodes[0].currentRef,
          dashness: true ? { animation: Number(1) } : false,
          curveness: Number(0.5),
          color: "gray",
          strokeWidth: 2,
        };

        return (
          <>
            <Xarrow {...props} />
            <Xarrow {...lastProps} />

            <Node
              box={node}
              update={updateNode}
              forceRerender={forceRerender}
            />

            {(findVal || indexVal) && <Xarrow {...tempPointerProps} />}
          </>
        );
      })}

      {/* <div className="title">Linked List</div> */}

      {/* Controller Here */}

      <div className="controller-ll">
        <form>
          <div className="row">
            <div className="col-sm-4"></div>

            {/* Node Adding Button */}

            <div className="col-sm-4">
              <div className="row form-group">
                <div className="col-9">
                  <input
                    className="form-control"
                    value={nodeVal}
                    onChange={(e) => setNodeVal(e.target.value)}
                  ></input>
                </div>
                <div className="col-3">
                  <Button
                    className="Button"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleAdd}
                  >
                    Add Node
                  </Button>
                </div>
              </div>
            </div>

            {/* Clear Button */}

            <div className="col-sm-4">
              <div className="row form-group">
                <Button
                  className="Button"
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={handleClear}
                  disabled={nodes.length === 0 ? true : false}
                  className="btn btn-danger btn-block"
                >
                  Clear All
                </Button>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-4"></div>

            {/* Node Finding Button */}

            <div className="col-sm-4">
              <div className="row form-group">
                <div className="col-9">
                  <input
                    className="form-control"
                    value={findVal}
                    onChange={(e) => setFindVal(e.target.value)}
                  ></input>
                </div>
                <div className="col-3">
                  <Button
                    type="submit"
                    onClick={handleFind}
                    className="Button"
                    variant="contained"
                    color="primary"
                  >
                    Find Node
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="row form-group">
                <div className="col-5">
                  <input
                    placeholder="value"
                    className="form-control"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  ></input>
                </div>
                <div className="col-5">
                  <input
                    placeholder="index"
                    className="form-control"
                    value={indexVal}
                    onChange={(e) => setIndex(e.target.value)}
                  ></input>
                </div>
                <div className="col-2">
                  <Button
                    className="Button"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleInsert}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LinkedList;
