import React, { useState } from "react";
import CLinkedList from "./circularLinkedListClass";
import Tree from "react-tree-graph";
import "./cllStyle.css";

const CircularLinkedList = () => {
  const [sll, setSll] = useState(new CLinkedList(""));
  const [data, setData] = useState(sll.display());
  const [toInsert, setToInsert] = useState("");
  const [isStart, setIsStart] = useState(false);

  const [idx, setIdx] = useState("");

  const createHandler = () => {
    let head = parseInt(prompt("Enter Head Value"));
    const temp = new CLinkedList(head);
    setSll(temp);
    setIsStart(true);
  };

  const insertChangeHandler = (e) => {
    let data = parseInt(e.target.value);
    setToInsert(data);
  };
  const insertSubmitHandler = (e) => {
    e.preventDefault();
    console.log(toInsert);
    sll.insertBack(toInsert);
    updateData();
  };
  const updateData = () => {
    setToInsert("");
    setIdx("");
    setData(sll.display());
    console.log(data);
  };

  const insertFrontSubmitHandler = (e) => {
    e.preventDefault();
    sll.insertFront(toInsert);
    updateData();
  };

  const insertAfterSubmitHandler = (e) => {
    e.preventDefault();
    sll.insertAfter(idx, toInsert);
    updateData();
  };

  const idxChangeHandler = (e) => {
    let data = parseInt(e.target.value);
    setIdx(data);
  };

  const deleteIndex = (e) => {
    e.preventDefault();
    sll.delete(idx);
    updateData();
  };

  const reverse = () => {
    sll.Reverse();
    updateData();
  };

  const clearHandler = () => {
    setData(new CLinkedList("").display());
    setIsStart(false);
  };
  return (
    <div>
      {/* <Tree
        data={data}
        height={200}
        width={1200}
        animated={true}
        nodeShape="rect"
        nodeProps={{ rx: 2 }}
        duration={1000}
        svgProps={{
          transform: "rotate(0)",
          className: "joins",
        }}
        textProps={{
          transform: "rotate(10)",
        }}
      /> */}
      <div className="controller-cll">
        <div className="row">
          {!isStart && (
            <div className="col-1">
              <button onClick={createHandler} className="btn btn-primary">
                Create
              </button>
            </div>
          )}
          {isStart && (
            <div className="col-1">
              <button onClick={clearHandler} className="btn btn-danger">
                Clear
              </button>
            </div>
          )}

          {isStart && (
            <div className="col-2">
              <form onSubmit={insertSubmitHandler}>
                <div className="row">
                  <div className="col-6">
                    <input
                      onChange={insertChangeHandler}
                      value={toInsert}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-primary" type="submit">
                      Insert Back
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {isStart && (
            <div className="col-2">
              <form onSubmit={insertFrontSubmitHandler}>
                <div className="row">
                  <div className="col-6">
                    <input
                      onChange={insertChangeHandler}
                      value={toInsert}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-primary" type="submit">
                      Insert Front
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {isStart && (
            <div className="col-2">
              <form onSubmit={deleteIndex}>
                <div className="row">
                  <div className="col-8">
                    <input
                      onChange={idxChangeHandler}
                      value={idx}
                      className="form-control"
                      placeholder="Index"
                    ></input>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-primary" type="submit">
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {isStart && (
            <div className="col-3">
              <form onSubmit={insertAfterSubmitHandler}>
                <div className="row">
                  <div className="col-4">
                    <input
                      onChange={idxChangeHandler}
                      value={idx}
                      className="form-control"
                      placeholder="Index"
                    ></input>
                  </div>
                  <div className="col-4">
                    <input
                      onChange={insertChangeHandler}
                      value={toInsert}
                      className="form-control"
                      placeholder="Value"
                    ></input>
                  </div>
                  <div className="col-1">
                    <button className="btn btn-primary" type="submit">
                      Insert After
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {isStart && (
            <div className="col-2">
              <button onClick={reverse} className="btn btn-warning">
                Reverse
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircularLinkedList;
