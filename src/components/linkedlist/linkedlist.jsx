import React, { useState, useEffect, useRef } from "react";
import Xarrow from "react-xarrows";
import Draggable from "react-draggable";
import "./styles.css";

const Node = (props) => {
  const boxStyle = {
    position: "absolute",
    border: "grey solid 5px",
    borderRadius: "10px",
    padding: "5px",
    textAlign: "center",
    cursor: "pointer",
  };
  const newRef = useRef(null);
  useEffect(() => {
    props.update(props.box.id, newRef);
  }, []);
  let badgeClass = "badge badge-";
  if (
    props.box.length === 0
      ? (badgeClass += "danger")
      : (badgeClass += "warning")
  )
    if (
      props.box.data === "Temp" ? (badgeClass += "danger") : (badgeClass += "")
    )
      return (
        <Draggable onDrag={props.forceRerender} onStop={props.forceRerender}>
          <div
            ref={newRef}
            id={props.box.id}
            style={{ ...boxStyle, left: props.box.x, top: props.box.y }}
          >
            <div className={badgeClass}>
              <h4>{props.box.data}</h4>
            </div>
          </div>
        </Draggable>
      );
};

const LinkedList = () => {
  const [, setRender] = useState({});
  const forceRerender = () => setRender({});

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateSize = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  });

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [nodes, setNodes] = useState([]);
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

  const handleAdd = (e) => {
    e.preventDefault();
    // console.log(nodes);

    if (nodeVal && nodes.length >= 0) {
      const newNode = {
        length: nodes.length,
        id: (nodes.length + 1).toString() + random(100, 400).toString(),
        data: nodeVal,
        x:
          size.width < 450
            ? random(10, size.width - 100)
            : random(300, size.width - 100),
        y: random(10, size.height - 200),
        currentRef: tempRef,
        prevRef:
          nodes.length === 0 ? headRef : nodes[nodes.length - 1].currentRef,
      };

      const lastNode = {
        length: nodes.length,
        id:
          (nodes.length + 1).toString() + random(100, 400).toString() + "temp",
        data: "Last Pointer",
        x: size.width < 450 ? 50 : 300,
        y: size.height - 200,
        currentRef: tempRef,
        prevRef:
          nodes.length === 0 ? headRef : nodes[nodes.length - 1].currentRef,
      };
      nodes.length === 0
        ? setNodes([...nodes, lastNode, newNode])
        : setNodes([...nodes, newNode]);
      setNodeVal("");
    }
  };

  const [nodeVal, setNodeVal] = useState("");

  return (
    <div
      style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
    >
      {nodes.map((node) => {
        var props = {
          start: node.prevRef, //  can be string
          end: node.currentRef, //  or reference
          dashness: true ? { animation: Number(2) } : false,
          curveness: Number(1),
        };
        let lastProps = {
          start: nodes[0].currentRef, //  can be string
          end:
            nodes.length > 1
              ? nodes[nodes.length - 1].currentRef
              : nodes[0].currentRef, //  or reference
          dashness: true ? { animation: Number(1) } : false,
          curveness: Number(0.5),
          color: "gray",
          strokeWidth: 2,
        };
        return (
          <>
            <Xarrow {...props} />
            <Node
              box={node}
              update={updateNode}
              forceRerender={forceRerender}
            />
            <Xarrow {...lastProps} />
          </>
        );
      })}

      <div className="title">Linked List</div>
      <div className="controller">
        <form>
          <div className="row ">
            <div className="col-sm-4"></div>

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
                  <button
                    type="submit"
                    onClick={handleAdd}
                    className="btn btn-primary"
                  >
                    Add Node
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="row form-group">
                <button
                  type="submit"
                  onClick={handleClear}
                  className="btn btn-danger btn-block"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-4"></div>

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
                  <button
                    type="submit"
                    onClick={handleAdd}
                    className="btn btn-primary"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

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
                  <button
                    type="submit"
                    onClick={handleAdd}
                    className="btn btn-primary"
                  >
                    Add
                  </button>
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
