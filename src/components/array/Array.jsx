import React, { useEffect, useState } from "react";
import AlertDialog from "../../material-ui-components/alertDialog";

import Information from "../../material-ui-components/information";

import { ColorIndicator } from "../sorting-algorithm/colorIndicator/colorIndicator";
import "./array.css";
import ArrayElement from "./element/ArrayElement";
import Button from "@material-ui/core/Button";
import Warning from "../errorMessage/Warning";

import codeData from "../../data";
import StartInformation from "./../startInformation/startInformation";

const InitialElements = 15;

const Arr = () => {
  const initialColor = "rgb(63, 81, 181)";
  const considerColor = "#ff931e";
  const minElementColor = "#5C038C";
  const maxElementColor = "#1B1734";

  const [noElement, setNoElement] = useState(InitialElements - 1);
  // arrat for storing element
  const [elements, setElements] = useState([]);

  // index
  const [index, setIndex] = useState("");
  const newIndex = (event) => {
    setIndex(event.target.value);
  };
  // value
  const [newElement, setNewElement] = useState("");
  const newInput = (event) => {
    setNewElement(event.target.value);
  };

  // index for delete
  const [deleteIndex, setDeleteIndex] = useState("");

  const newDeleteIndex = (event) => {
    setDeleteIndex(event.target.value);
  };

  // generate random elements
  const generateRandomElements = (start, end) => {
    return Math.floor(Math.random() * (end - start - 1) + start);
  };
  //   generate array of random elements
  const generateRandomArray = () => {
    const temp = [];
    for (let i = 0; i <= noElement; i++) {
      temp[i] = generateRandomElements(10, 100);
    }
    setElements(temp);
  };

  //   Call once while loading page
  useEffect(() => {
    generateRandomArray();
  }, []);

  // Toggle Welcom
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!open);
  }, []);

  const handleClose = () => {
    StartInformation();
    setOpen(!open);
  };

  // Warning Message
  const [errorMessage, setErrorMessage] = useState("");
  const [warningOpen, setWarningOpen] = useState(false);

  const handleWarning = () => {
    setWarningOpen(!warningOpen);
    setErrorMessage("");
  };

  //   Heighlighting sorted
  const heighlightAction = (index, delay, color) => {
    const bar = document.getElementsByClassName("array-element");
    setTimeout(() => {
      bar[index].style.backgroundColor = color;
    }, delay);
    setTimeout(() => {
      bar[index].style.backgroundColor = color;
      bar[index].style.backgroundColor = initialColor;
    }, 150 * delay);
  };

  // const addElement = () => {};
  const addElement = (idx) => {
    let delay = 1;
    let i;
    for (i = 0; i < idx; i++) {
      heighlightAction(i, delay++, "red");
      delay++;
    }
    setTimeout(() => {
      if (i === idx) {
        heighlightAction(idx, 4, "#32CD30");
        // Insert;
        elements.splice(idx, 0, parseInt(newElement));
        // console.log(elements);
        setNoElement(noElement + 1);
        setElements([...elements]);
      }
    }, 150 * delay);
  };

  // new element at index
  const handleNewInput = () => {
    if (newElement.isNaN && index.isNaN) {
      setErrorMessage("Incorrect Element & Incorrect Index");
      setWarningOpen(!warningOpen);
      setNewElement("");
      setIndex("");
    } else if (index.isNaN || index > elements.length) {
      setErrorMessage("Incorrect Index");
      setWarningOpen(!warningOpen);
      setNewElement("");
      setIndex("");
    } else if (newElement.isNaN) {
      setErrorMessage("Please Enter Numbers");
      setWarningOpen(!warningOpen);
      setNewElement("");
      setIndex("");
    } else if (parseInt(newElement) > 999) {
      setErrorMessage("Pleasse Enter Value Smaller or Equal to 999");
      setWarningOpen(!warningOpen);
      setNewElement("");
      setIndex("");
    } else {
      addElement(parseInt(index));
      setNewElement("");
      setIndex("");
    }
  };

  // Delete Element
  const deleteFromIndex = (idx) => {
    let delay = 1;
    let i;
    for (i = 0; i < idx; i++) {
      heighlightAction(i, delay++, "red");
      delay++;
    }
    if (i === idx)
      setTimeout(() => {
        heighlightAction(idx, delay, considerColor);
        setTimeout(() => {
          setElements((oldItems) => {
            return [...oldItems.filter((ele, i) => i !== idx)];
          });
          setNoElement(noElement - 1);
          // setErrorMessage(`No Elements : ${elements.length - 1}`);
        }, 150 * delay);
      }, 200 * delay);
  };

  const handleDelete = () => {
    if (isNaN(deleteIndex)) {
      setErrorMessage("Please Enter Positive Integer Value.");
      setWarningOpen(!warningOpen);
      setDeleteIndex("");
    }
    if (deleteIndex > elements.length - 1 || deleteIndex < 0) {
      setErrorMessage("Incorrect Index");
      setWarningOpen(!warningOpen);
      setDeleteIndex("");
    } else {
      deleteFromIndex(parseInt(deleteIndex));
      setDeleteIndex("");
    }
  };

  // find Min
  const findMin = () => {
    let min = elements[0];
    let delay = 2;
    let i;
    let index;
    for (i = 0; i <= noElement; i++) {
      heighlightAction(i, delay++, "red");
      if (elements[i] <= min) {
        min = elements[i];
        index = i;
      }
      delay++;
    }
    setTimeout(() => {
      heighlightAction(index, delay + 20, minElementColor);
    }, 150 * delay);
  };
  // Max Elemenet
  const findMax = () => {
    let max = -9007199254740991;
    let delay = 2;
    let i;
    let index;
    for (i = 0; i <= noElement; i++) {
      heighlightAction(i, delay++, "red");
      if (elements[i] > max) {
        max = elements[i];
        index = i;
      }
      delay++;
    }
    setTimeout(() => {
      heighlightAction(index, delay + 20, maxElementColor);
    }, 150 * delay);
  };

  // Remove Duplicate
  const removeDuplicate = () => {
    let i, j;
    let delay = 1;
    for (i = 0; i <= noElement; i++) {
      for (j = i + 1; j <= noElement; j++) {
        if (elements[j] === elements[i]) {
          heighlightAction(i, 10, "Green");
          heighlightAction(j, 5, "Black");
          let delidx = j;
          setTimeout(() => {
            setElements((oldItems) => {
              return [...oldItems.filter((ele, idx) => idx !== delidx)];
            });
            setNoElement(noElement - 1);
          }, 150 * 5);
        }
        delay++;
      }
    }

    // setTimeout(() => {
    //   heighlightAction(idx, delay + 20, maxElementColor);
    //   // console.log(max);
    // }, 150 * delay);
  };
  return (
    <div className="container">
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Array"
        content="An Array is already been created, from the below controllers you can insert value at particular index, delete value from a particular index, find the minimum value, maximum value and also remove duplicate elements."
      />

      {/* Erroe Message */}
      <Warning
        open={warningOpen}
        handleClose={handleWarning}
        title="Warning"
        content={errorMessage}
      />
      <ColorIndicator
        indicator={[
          { name: "Array", color: initialColor },
          { name: "No of Steps", color: "red" },
          { name: "Consider", color: considerColor },
          { name: "Action", color: "#32CD30" },
          { name: "Min", color: minElementColor },
          { name: "Max", color: maxElementColor },
        ]}
      />
      <hr />
      <div className=" array-container d-flex align-items-center justify-content-center">
        <div className="array d-flex">
          {elements.map((value, idx) => {
            if (value != null)
              return (
                <ArrayElement
                  elementClass="array-element"
                  key={idx}
                  value={value}
                  elementIndex={idx}
                />
              );
          })}
        </div>
        <hr />
        <Information codeData={codeData.array} />
        <div className="controlls-container">
          <div className="d-flex align-items-center col-sm-4 controlHandler">
            <input
              key={1}
              type="text"
              name="index"
              id="index"
              onChange={newIndex}
              value={index}
              placeholder="Index"
              className="pl-2"
            />
            <input
              type="text"
              name="customInput"
              id="customInput"
              onChange={newInput}
              value={newElement}
              placeholder="Value"
              className="pl-2"
            />
            <Button
              className="Button"
              varient="outlined"
              onClick={handleNewInput}
            >
              Insert
            </Button>
          </div>
          <div className="col-sm-3 controlHandler">
            <input
              key={2}
              type="text"
              name="index"
              id="index"
              onChange={newDeleteIndex}
              value={deleteIndex}
              placeholder="Index"
              className="pl-2"
            />
            <Button
              className="Button"
              variant="outlined"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
          <div className="col-sm-1">
            <Button className="Button" varient="outlined" onClick={findMin}>
              Find Min
            </Button>
          </div>
          <div className="col-sm-1">
            <Button className="Button" varient="outlined" onClick={findMax}>
              Find Max
            </Button>
          </div>
          <div className="col-sm-2">
            <Button
              className="Button"
              varient="outlined"
              onClick={removeDuplicate}
            >
              Remove Duplicate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arr;
