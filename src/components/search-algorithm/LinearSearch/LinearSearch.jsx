import React, { useEffect, useState } from "react";
import AlertDialog from "../../../material-ui-components/alertDialog";
import Information from "../../../material-ui-components/information";
import ArrayElement from "../../array/element/ArrayElement";
import { ColorIndicator } from "../../sorting-algorithm/colorIndicator/colorIndicator";
import Button from "@material-ui/core/Button";
import codeData from "./../../../data";
import StartInformation from "./../../startInformation/startInformation";

const InitialElements = 15;
const LinearSearch = () => {
  const initialColor = "rgb(63, 81, 181)";
  const considerColor = "#ff931e";
  const minElementColor = "#5C038C";
  const maxElementColor = "#1B1734";

  // Arrya fro storing elements
  const [elements, setElements] = useState([]);
  // Element to be searched
  const [newElement, setNewElement] = useState("");
  const newElementInput = (event) => {
    let abc = parseInt(event.target.value);
    setNewElement(abc);
  };

  //   ---------------

  // generate random elements
  const generateRandomElements = (start, end) => {
    return Math.floor(Math.random() * (end - start - 1) + start);
  };
  //   generate array of random elements
  const generateRandomArray = () => {
    const temp = [];
    for (let i = 0; i < InitialElements; i++) {
      temp[i] = generateRandomElements(10, 100);
    }
    setElements(temp);
  };

  //   Call once while loading page
  useEffect(() => {
    generateRandomArray();
  }, []);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    StartInformation();
    setOpen(false);
  };

  //   ------------------

  // Animation
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

  //   Search
  const searchElement = () => {
    let i,
      delay = 1;

    for (i = 0; i < InitialElements; i++) {
      heighlightAction(i, delay, "red");
      delay++;
      if (elements[i] === newElement) {
        setTimeout(() => {
          heighlightAction(i, 20, "rgb(5,25,45)");
        }, 150 * delay);
        return;
      }
    }
    return alert("Element not found!");
  };

  const handleSearch = () => {
    if (newElement === "") {
      alert("Please Enter Element");
      setNewElement("");
    } else if (isNaN(newElement)) {
      alert("Please Enter Integer Value");
      setNewElement("");
    } else {
      searchElement();
      setNewElement("");
    }
  };
  //   ----
  return (
    <div className="container">
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
      <div className="container mt-5 d-flex justify-content-center">
        <AlertDialog
          open={open}
          handleClose={handleClose}
          title="Welcome to Linear Search"
          content="An Array is already been created, from the below controller you can input a value and app will show how linear search works."
        />
        <div className="container">
          <div className="array d-flex">
            {elements.map((value, idx) => {
              if (value != null)
                return (
                  <>
                    <ArrayElement
                      elementClass="array-element"
                      key={idx}
                      value={value}
                      elementIndex={idx}
                    />
                  </>
                );
            })}
          </div>
          <Information codeData={codeData.ls} />
          <div className="controlls-container w-100">
            <div className="d-flex align-items-center col-sm-3 controlHandler">
              <input
                type="text"
                name="index"
                id="index"
                onChange={newElementInput}
                value={newElement}
                placeholder="Search Element "
                className="pl-2"
              />
              <Button
                className="Button"
                variant="outlined"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearSearch;
