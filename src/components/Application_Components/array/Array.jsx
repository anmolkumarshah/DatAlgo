import React, { useEffect, useState } from "react";
import AlertDialog from "../../material-ui-components/alertDialog";
import { ColorIndicator } from "../sorting-algorithm/colorIndicator/colorIndicator";
import "./array.css";
import FullWidthTabs from "../../material-ui-components/tab";
import CenteredTabs from "../../material-ui-components/tab";

let InitialElements = 15;

const Arr = () => {
  let initialColor = "rgb(63, 81, 181)";
  let considerColor = "#0C6170";
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
  const [deleteIndex, setDeleteIndex] = useState();

  const newDeleteIndex = (event) => {
    setDeleteIndex(event.target.value);
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
  const heighlightSorted = (index, delay, color) => {
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
      heighlightSorted(i, delay++, "red");
      delay++;
    }
    setTimeout(() => {
      if ((i = idx)) {
        heighlightSorted(idx, delay--, "#32CD30");
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
      heighlightSorted(i, delay++, "red");
      delay++;
    }
    setTimeout(() => {
      if ((i = idx)) {
        heighlightSorted(idx, delay--, considerColor);
        // Delete
        setTimeout(() => {
          setElements((oldItems) => {
            return [...oldItems.filter((ele) => ele !== oldItems[i])];
          });
        }, 300 * delay);
        setNoElement(noElement - 1);
        // elements.splice(i, 1);
        console.log(elements, noElement);
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
          <div className="d-flex align-items-center col-sm-6 controlHandler">
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
          <div className="col-sm-1"></div>
          <div className="col-sm-5 controlHandler">
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
