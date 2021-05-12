import React, { useState, useEffect } from "react";
import SLinkedList from "./singleLinkedListClass";
import Tree from "react-tree-graph";
import Button from "@material-ui/core/Button";

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
    updateData();
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
    <div
      className="container  d-flex align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Single Linked List"
        content="Click on the Create Button at the bottom left corner of screen and you are ready to play with linked list."
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

      <div className="controlls-container">
        <div className="row justify-content-center">
          <Information />
          <div className="row justify-content-md-center">
            {!isStart && (
              <div className="col-1">
                <Button
                  onClick={createHandler}
                  className="Button"
                  variant="outlined"
                >
                  Create
                </Button>
              </div>
            )}
            {isStart && (
              <div className="col-3">
                <form onSubmit={insertSubmitHandler}>
                  <div className="align-items-center controlHandler">
                    <div className="col-6">
                      <input
                        className="pl-2"
                        onChange={insertChangeHandler}
                        value={toInsert}
                      />
                    </div>
                    <div className="col-6">
                      <Button
                        className="Button"
                        variant="outlined"
                        type="submit"
                      >
                        Insert Back
                      </Button>
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
                        className="pl-2"
                      ></input>
                    </div>
                    <div className="col-6">
                      <Button
                        className="Button"
                        variant="outlined"
                        type="submit"
                      >
                        Insert Front
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {isStart && (
              <div className=" col-4">
                <form onSubmit={insertAfterSubmitHandler}>
                  <div className="align-items-center controlHandler">
                    <div className=" col-4">
                      <input
                        onChange={idxChangeHandler}
                        value={idx}
                        className="pl-2"
                        placeholder="Index"
                      ></input>
                    </div>
                    <div className="col-4">
                      <input
                        onChange={insertChangeHandler}
                        value={toInsert}
                        className="pl-2"
                        placeholder="Value"
                      ></input>
                    </div>
                    <div className="col-4">
                      <Button
                        className="Button"
                        variant="outlined"
                        type="submit"
                      >
                        Insert After
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {isStart && (
              <div className="mt-3 col-3">
                <form onSubmit={deleteIndex}>
                  <div className="align-items-center controlHandler">
                    <div className="col-8">
                      <input
                        onChange={idxChangeHandler}
                        value={idx}
                        className="pl-2"
                        placeholder="Index"
                      ></input>
                    </div>
                    <div className="col-2">
                      <Button
                        className="Button"
                        variant="outlined"
                        type="submit"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {isStart && (
              <div className="text-center mt-3 col-2">
                <Button
                  className="Button"
                  variant="outlined"
                  onClick={clearHandler}
                >
                  Clear
                </Button>
              </div>
            )}

            {isStart && (
              <div className="text-center  mt-3 col-1">
                <Button onClick={reverse} className="Button" variant="outlined">
                  Reverse
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLinkedList;
