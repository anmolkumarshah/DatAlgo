import React, { useState, useEffect } from "react";
import SLinkedList from "./singleLinkedListClass";
import Tree from "react-tree-graph";
import "./llstyle.css";
import AlertDialog from "../../material-ui-components/alertDialog";
import Information from "../../material-ui-components/information";

const SingleLinkedList = () => {
  const [sll, setSll] = useState(new SLinkedList(""));
  const [data, setData] = useState(sll.display());
  const [toInsert, setToInsert] = useState("");
  const [isStart, setIsStart] = useState(false);

  const [idx, setIdx] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const createHandler = () => {
    let head = parseInt(prompt("Enter Head Value"));
    if (!isNaN(head)) {
      const temp = new SLinkedList(head);
      setSll(temp);
      setIsStart(true);
    }
  };

  const insertChangeHandler = (e) => {
    let data = parseInt(e.target.value);
    setToInsert(data);
  };
  const insertSubmitHandler = (e) => {
    e.preventDefault();
    sll.insertBack(toInsert);
    updateData();
  };
  const updateData = () => {
    setToInsert("");
    setIdx("");
    setData(sll.display());
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
    setData(new SLinkedList("").display());
    setIsStart(false);
  };
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Single Linked List"
        content="Click on the Create button at the bottom left corner of screen and you are ready to play with linked list."
      />
      <Tree
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
      />
<<<<<<< HEAD
      <div className="controlls-container">
        <div className="row justify-content-center">
=======
      <Information />
      <div className="controller-sll">
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

>>>>>>> adabd9b21c77a6fd77e802edff1101e8041aa55c
          {isStart && (
            <div className="col-3">
              <form onSubmit={insertSubmitHandler}>
                <div className="align-items-center controlHandler">
                  <div className="col-6">
                    <input
                      onChange={insertChangeHandler}
                      value={toInsert}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-primary" type="submit">
                      Insert Back
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {isStart && (
            <div className="col-3">
              <form onSubmit={insertFrontSubmitHandler}>
                <div className="align-items-center controlHandler">
                  <div className="col-6">
                    <input
                      onChange={insertChangeHandler}
                      value={toInsert}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-primary" type="submit">
                      Insert Front
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {isStart && (
            <div className=" col-3">
              <form onSubmit={deleteIndex}>
                <div className="align-items-center controlHandler">
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
            <div className="text-center col-1">
              <button onClick={clearHandler} className="btn btn-danger">
                Clear
              </button>
            </div>
          )}
          {isStart && (
            <div className=" mt-3 col-4">
              <form onSubmit={insertAfterSubmitHandler}>
                <div className="align-items-center controlHandler">
                  <div className=" col-4">
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
                  <div className="col-4">
                    <button className="btn btn-primary" type="submit">
                      Insert After
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {isStart && (
            <div className="text-center  mt-3 col-1">
              <button onClick={reverse} className="btn btn-warning">
                Reverse
              </button>
            </div>
          )}

          {!isStart && (
            <div className="col-1">
              <button onClick={createHandler} className="btn btn-primary">
                Create
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleLinkedList;
