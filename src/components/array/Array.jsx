import React, { useEffect, useState } from "react";
import AlertDialog from "../../material-ui-components/alertDialog";
import { ColorIndicator } from "../sorting-algorithm/colorIndicator/colorIndicator";
import "./array.css";
import FullWidthTabs from "../../material-ui-components/tab";
import CenteredTabs from "../../material-ui-components/tab";

let InitialElements = 15;

const Arr = () => {
  const initialColor = "rgb(63, 81, 181)";
  const considerColor = "#0C6170";
  const minElementColor = "blue";
  const maxElementColor = "rgb(173,41,255)";
  // Storing Array elemnts
  const [elements, setElements] = useState([]);
  //   Range of elements
  const [noElement, setNoElement] = useState(InitialElements - 1);
  const [newElement, setNewElement] = useState();
  const [index, setIndex] = useState();
  const newIndex = (event) => {
    setIndex(event.target.value);
  };
  const newInput = (event) => {
    setNewElement(event.target.value);
  };
  const [deleteIndex, setDeleteIndex] = useState("");

  const newDeleteIndex = (event) => {
    setDeleteIndex(parseInt(event.target.value));
  };
  // generate random elements
  const generateRandomElements = (start, end) => {
    return Math.floor(Math.random() * (end - start - 1) + start);
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
    setOpen(false);
  };

  //   generate array of random elements
  const generateRandomArray = () => {
    const temp = [];
    for (let i = 0; i <= noElement; i++) {
      temp[i] = generateRandomElements(10, 100);
    }
    console.log(temp);
    setElements(temp);
  };
  //   Heighlighting sorted
  const heighlightAction = (index, delay, color) => {
    const bar = document.getElementsByClassName("array");
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
      if ((i = idx)) {
        heighlightAction(idx, delay--, "#32CD30");
        // Insert;
        setNoElement(noElement + 1);
        setElements((oldItems) => {
          return [
            ...oldItems,
            elements.splice(idx, 0, parseInt(newElement)).pop(),
          ];
        });
      }
    }, 150 * delay);
  };
  const handleNewInput = () => {
    if (isNaN(newElement) || isNaN(index)) {
      alert("Incorrect Element or Incorrect Index");
      setNewElement([]);
      setIndex("");
    } else {
      addElement(index);
      setNewElement([]);
      setIndex("");
    }
  };

  // Delete Element
  const delteIndex = (idx) => {
    let delay = 1;
    let i;
    for (i = 0; i < idx; i++) {
      heighlightAction(i, delay++, "red");
      delay++;
    }
    setTimeout(() => {
      if (i === idx) {
        heighlightAction(idx, delay--, considerColor);
        // Delete
        setTimeout(() => {
          setElements((oldItems) => {
            return [...oldItems.filter((ele, idxx) => idxx !== idx)];
          });
        }, 300 * delay);
        setNoElement(noElement - 1);
      }
    }, 250 * delay);
  };

  const handleDelete = () => {
    if (isNaN(deleteIndex)) {
      alert("Incorrect Index");
      setDeleteIndex("");
    } else {
      delteIndex(deleteIndex);
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
      heighlightAction(index, 10, minElementColor);
      console.log(min);
    }, 150 * delay);
  };

  // Find Max
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
      heighlightAction(index, 10, maxElementColor);
      console.log(max);
    }, 150 * delay);
  };

  // Remove Duplicate
  const removeDuplicate = () => {
    let i, j, idx;
    let delay = 1;
    for (i = 0; i <= noElement; i++) {
      // heighlightAction(i, delay++, "red");

      for (j = i + 1; j <= noElement; j++) {
        if (elements[j] == elements[i]) {
          heighlightAction(i, 20, "Green");
          heighlightAction(j, 20, "Black");

          // for (k = j; k < size; k++) {
          //    arr[k] = arr[k + 1];
          // }
          idx = j;
          console.log(elements[i]);
        }
        delay++;
      }
    }
  };
  return (
    <>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Array"
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi molestiae accusamus? Quis tempore tempora at distinctio explicabo cumque amet, perferendis rem iste qui voluptate maxime sed obcaecati inventore accusamus."
      />
      <ColorIndicator
        indicator={[
          { name: "Array", color: initialColor },
          { name: "No of Steps", color: "red" },
          { name: "Consider", color: considerColor },

          { name: "Action", color: "#32CD30" },
        ]}
      />
      <hr />
      <div className="container">
        <div className="arr-container d-flex">
          {elements.map((value, idx) => {
            if (value != null)
              return (
                <>
                  <div>
                    <div
                      className="array"
                      key={idx}
                      style={
                        {
                          //     backgroundColor: "#ff931e",
                          //     height: "5rem",
                          // width: `${60 / elements.length}%`,
                          //     display: "inline-block",
                          //     margin: "0 1px",
                        }
                      }
                    >
                      <p className="heading">{value}</p>
                    </div>
                    {/* Index */}
                    <p
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "18px",
                        paddingTop: "5px",
                      }}
                    >
                      {idx}
                    </p>
                  </div>
                </>
              );
          })}
        </div>

        <CenteredTabs />

        <div className="controlls-container">
          <div className="d-flex align-items-center col-sm-4 controlHandler">
            <input
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
            <button className="btn btn-primary" onClick={handleNewInput}>
              Insert
            </button>
          </div>

          <div className="col-sm-1">
            <button className="btn btn-primary" onClick={findMin}>
              Find Min
            </button>
          </div>

          <div className="col-sm-1">
            <button className="btn btn-primary" onClick={findMax}>
              Find Max
            </button>
          </div>

          <div className="col-sm-1">
            <button className="btn btn-primary" onClick={removeDuplicate}>
              Duplicates
            </button>
          </div>

          <div className="col-sm-2 controlHandler">
            <input
              type="text"
              name="index"
              id="index"
              onChange={newDeleteIndex}
              value={deleteIndex}
            />
            <button className="btn btn-primary" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arr;
