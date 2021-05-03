import React, { useEffect, useState } from "react";
// import "./bubble.css";
import "./array.css";
let InitialElements = 10;

const Arr = () => {
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
  // generate random elements
  const generateRandomElements = (start, end) => {
    return Math.floor(Math.random() * (end - start - 1) + start);
  };
  //   Call once while loading page
  useEffect(() => {
    generateRandomArray();
  }, []);

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
      bar[index].style.backgroundColor = "#7933ff";
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
        heighlightSorted(idx, delay--, "#05192d");
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
        heighlightSorted(idx, delay--, "#05192d");
        // Delete
        setTimeout(() => {
          setElements((oldItems) => {
            return [...oldItems.filter((ele) => ele !== oldItems[i])];
          });
        }, 300 * delay);
        setNoElement(noElement - 1);
        elements.splice(i, 1);
        console.log(elements, noElement);
      }
    }, 250 * delay);
  };

  const handleDelete = () => {
    if (isNaN(index)) {
      alert("Incorrect Index");
    } else {
      delteIndex(index);
      setIndex("");
    }
  };
  const updateElement = (idx) => {
    let delay = 1;
    let i;
    for (i = 0; i < idx; i++) {
      heighlightSorted(i, delay++, "red");
      delay++;
    }
    setTimeout(() => {
      if ((i = idx)) {
        heighlightSorted(idx, delay, "#05192d");
        // Update;
        setNoElement(noElement - 1);
        // elements.pop();
        setElements((oldItems) => {
          return [...oldItems, (oldItems[i] = newElement.pop())];
        });
      }
    }, 150 * delay);
  };
  const handleUpdate = () => {
    if (isNaN(index)) {
      alert("Incorrect Index");
    } else {
      updateElement(index);
      setNewElement("");
      setIndex("");
    }
  };
  return (
    <>
      <div className="container">
        <div className="arr-container">
          {elements.map((value, idx) => {
            if (value != null)
              return (
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
              );
          })}
        </div>

        <div className="controlls-container">
          <div className="customInput">
            <h1>Insert Element</h1>
            <input
              type="text"
              name="customInput"
              id="customInput"
              onChange={newInput}
              value={newElement}
            />
            <input
              type="text"
              name="index"
              id="index"
              onChange={newIndex}
              value={index}
            />
            <button style={{ marginTop: "20px" }} onClick={handleNewInput}>
              Append Element
            </button>
          </div>
          <div className="deleteIndex">
            <input
              type="text"
              name="index"
              id="index"
              onChange={newIndex}
              value={index}
            />
            <button style={{ marginTop: "20px" }} onClick={handleDelete}>
              Delete Element
            </button>
          </div>
          <div className="updateIndex">
            <input
              type="text"
              name="customInput"
              id="customInput"
              onChange={newInput}
              value={newElement}
            />
            <input
              type="text"
              name="index"
              id="index"
              onChange={newIndex}
              value={index}
            />
            <button style={{ marginTop: "20px" }} onClick={handleUpdate}>
              Update Element
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arr;
