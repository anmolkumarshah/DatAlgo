import React, { useState, useEffect } from "react";
import SLinkedList from "./singleLinkedListClass";
import Tree from "react-tree-graph";
import Button from "@material-ui/core/Button";

import "./llstyle.css";
import AlertDialog from "../../material-ui-components/alertDialog";
import Information from "../../material-ui-components/information";
import codeData from "./../../data";

const SingleLinkedList = () => {
  const [sll, setSll] = useState();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const [, setRender] = useState({});
  const forceRerender = () => setRender({});

  const [insertBack, setInsertBack] = useState("");
  const [insertFront, setInsertFront] = useState("");
  const [insertAfterValue, setInsertAfterValue] = useState("");
  const [insertAfterIdx, setInsertAfterIdx] = useState("");
  const [deleteIndex, setDeleteIndex] = useState("");

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
      setData(temp.display());
    }
    forceRerender();
  };

  // ---------------------------------------------

  const insertBackChangeHandler = (e) => {
    let data = e.target.value;
    setInsertBack(data);
  };
  const insertBackHandler = (e) => {
    if (e) e.preventDefault();
    sll.insertBack(insertBack);
    updateData();
  };

  // ---------------------------------------------

  const insertFrontChangeHandler = (e) => {
    let data = e.target.value;
    setInsertFront(data);
  };
  const insertFrontHandler = (e) => {
    e.preventDefault();
    sll.insertFront(insertFront);
    updateData();
  };

  // ---------------------------------------------

  const insertAfterValueChangeHandler = (e) => {
    let data = e.target.value;
    setInsertAfterValue(data);
  };
  const insertAfterIndexChangeHandler = (e) => {
    let data = e.target.value;
    setInsertAfterIdx(data);
  };
  const insertAfterHandler = (e) => {
    e.preventDefault();
    sll.insertAfter(insertAfterIdx, insertAfterValue);
    updateData();
  };

  // ---------------------------------------------
  const deleteIndexChangeHandler = (e) => {
    let data = e.target.value;
    setDeleteIndex(data);
  };
  const deleteIndexHandler = (e) => {
    e.preventDefault();
    sll.delete(deleteIndex);
    updateData();
  };

  // ---------------------------------------------

  const updateData = () => {
    setInsertBack("");
    setInsertFront("");
    setInsertAfterValue("");
    setInsertAfterIdx("");
    setDeleteIndex("");
    setData(sll.display());
  };

  const reverse = () => {
    sll.Reverse();
    updateData();
  };

  const clearHandler = () => {
    setData(null);
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

      {sll && data && (
        <Tree
          data={data}
          height={200}
          width={1200}
          animated={true}
          nodeShape="rect"
          nodeProps={{ rx: 2 }}
          duration={500}
          svgProps={{
            transform: "rotate(0)",
          }}
        />
      )}

      <Information codeData={codeData.sll} />
      <div className="controlls-container">
        <div className="row justify-content-center">
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
                <form onSubmit={insertBackHandler}>
                  <div className="align-items-center controlHandler">
                    <div className="col-6">
                      <input
                        placeholder="value"
                        className="pl-2"
                        onChange={insertBackChangeHandler}
                        value={insertBack}
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
                <form onSubmit={insertFrontHandler}>
                  <div className="align-items-center controlHandler">
                    <div className="col-6">
                      <input
                        placeholder="value"
                        onChange={insertFrontChangeHandler}
                        value={insertFront}
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
                <form onSubmit={insertAfterHandler}>
                  <div className="align-items-center controlHandler">
                    <div className=" col-4 mr-1">
                      <input
                        onChange={insertAfterIndexChangeHandler}
                        value={insertAfterIdx}
                        className="pl-2"
                        placeholder="Index"
                      ></input>
                    </div>
                    <div className="col-4 ml-1">
                      <input
                        onChange={insertAfterValueChangeHandler}
                        value={insertAfterValue}
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
                <form onSubmit={deleteIndexHandler}>
                  <div className="align-items-center controlHandler">
                    <div className="col-8">
                      <input
                        onChange={deleteIndexChangeHandler}
                        value={deleteIndex}
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
