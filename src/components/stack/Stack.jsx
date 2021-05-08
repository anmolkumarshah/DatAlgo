// import { SignalCellularConnectedNoInternet4BarTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import AlertDialog from "../../material-ui-components/alertDialog";
import Information from "../../material-ui-components/information";
import "./stack.css";
const InitialElements = 5;
const maxElements = 10;
const Stack = () => {
  // aray for holding stack elements
  const [elements, setElements] = useState([]);
  //   Range of elements
  const [noElement, setNoElement] = useState(InitialElements - 1);
  //   New Element
  const [newElement, setNewElement] = useState();
  const newElementFound = (event) => {
    setNewElement(event.target.value);
    console.log(event.target.value);
  };
  // generate random elements
  const generateRandomElements = (start, end) => {
    return Math.floor(Math.random() * (end - start - 1) + start);
  };
  //   generate array of random elements
  const generateRandomArray = () => {
    const temp = [];
    for (let i = 0; i <= noElement; i++) {
      let temps = generateRandomElements(10, 100);
      if (temp.indexOf(temps) === -1) temp.push(temps);
    }
    console.log(temp);
    setElements(temp);
    setNoElement(noElement + 1);
  };
  //   Call once while loading page
  useEffect(() => {
    generateRandomArray();
  }, []);

  //   Welcome
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const heighlightAction = (index, delay, color) => {
    const bar = document.getElementsByClassName("element");
    setTimeout(() => {
      bar[index].style.backgroundColor = color;
    }, delay);
    setTimeout(() => {
      bar[index].style.backgroundColor = color;
      bar[index].style.backgroundColor = "rgb(63, 81, 181)";
    }, 150 * delay);
  };

  //   Push Element
  const pushElement = () => {
    if (noElement < maxElements) {
      console.log(noElement);
      setTimeout(() => {
        setElements((oldItems) => {
          return [...oldItems, newElement];
        });
        heighlightAction(elements.length, 10, "#32CD30");
      }, 150 * 2);
    } else {
      setErrorMessage("Stack is Full");
    }
  };

  const [errorMessage, setErrorMessage] = useState("");
  const handlePush = () => {
    setNoElement(noElement + 1);
    console.log(noElement);
    if (isNaN(newElement)) {
      setNoElement(noElement);
      console.log(noElement);
      setErrorMessage("Enter Element");
    } else if (noElement <= maxElements && newElement !== "") {
      pushElement();
    } else {
      setNoElement(noElement);
      console.log(noElement);
    }
  };

  //   popElement
  const popElement = () => {
    heighlightAction(elements.length - 1, 8, "red");
    setTimeout(() => {
      setTimeout(() => {
        setElements((oldItems) => {
          return [...oldItems.filter((ele) => ele !== oldItems[noElement - 1])];
        });
        setNoElement(noElement - 1);
        if (elements.length - 1 === 0) {
          setErrorMessage("Stack is Empty");
        }
        // setErrorMessage(`No Elements : ${elements.length - 1}`);
      }, 400 * 2);
    }, 200 * 2);
  };

  const handlePop = () => {
    if (noElement > 0) popElement();
    else if (elements.length - 1 === 0) {
      popElement();
      setErrorMessage("");
    }
  };

  return (
    <>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Stack"
        content="In computing, a stack is a data structure used to store a collection of objects. Individual items can be added and stored in a stack using a push operation. Objects can be retrieved using a pop operation, which removes an item from the stack."
      />

      <div className="container">
        <div className="stack d-flex flex-column-reverse justify-content-start">
          <p
            style={{
              position: "absolute",
              top: "-30px",
              left: "0",
              textAlign: "center",
              width: "100%",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {errorMessage}
          </p>
          {elements.map((value, idx) => {
            if (value !== null && value !== NaN)
              return (
                <>
                  <div className="element-box">
                    <p className="m-0">
                      {idx === elements.length - 1 ? "Top" : ""}
                    </p>
                    <div
                      className="element d-flex align-items-center justify-content-center"
                      key={idx}
                    >
                      <p className="m-0">{value}</p>
                    </div>
                  </div>
                </>
              );
          })}
        </div>
        <hr />
        <Information />
        <div className="controlls-container">
          <div className="col-sm-3 controlHandler">
            <input
              type="text"
              name="customInput"
              id="customInput"
              onChange={newElementFound}
              value={newElement}
              placeholder="Value"
              className="pl-2"
            />
            <button onClick={handlePush}>Push</button>
          </div>
          <div className="col-sm-2">
            <button onClick={handlePop}>Pop</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stack;
