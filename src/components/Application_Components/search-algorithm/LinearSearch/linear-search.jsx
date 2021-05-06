import React, { useState, useEffect } from "react";
import "./linear-search-styles.css";

const LinearSearch = () => {
  const [cellArray, setCellArray] = useState([]);
  const [TargetSelected, setTargetSelected] = useState("");
  const [stack, setStack] = useState([]);
  const valueArray = [];

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const start = () => {
    setTargetSelected("");
    for (let i = 0; i < 15; i++) valueArray.push(i * i);

    const array = valueArray.map((item) => {
      return {
        id: Math.random().toString(),
        value: item,
        target: false,
        active: true,
      };
    });
    setCellArray(array);
  };

  useEffect(() => {
    start();
  }, []);

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const handleSetTarget = (id) => {
    if (!TargetSelected) {
      let element = cellArray.filter((i) => i.id === id);
      element = element[0];
      // console.log(element);
      let index = cellArray.indexOf(element);
      // console.log(index);
      element.target = true;
      let updatedCellArray = [...cellArray];
      updatedCellArray[index] = element;
      setTargetSelected(element.value);
      setCellArray(updatedCellArray);
      // console.log(id);
    } else {
      handleReset();
      //   handleSetTarget(id);
    }
  };

  const handleReset = () => {
    if (TargetSelected) {
      let updatedCellArray = cellArray.map((i) => {
        return {
          ...i,
          target: false,
        };
      });
      setCellArray(updatedCellArray);
      setTargetSelected("");
    }
  };

  const handleCompute = () => {
    for (let i = 0; i < cellArray.length; i++) {
      let oldCellArray = [...cellArray];
      for (let j = 0; j < cellArray.length; j++) {
        if (j <= i) {
          if (oldCellArray[j].value !== TargetSelected)
            oldCellArray[j].active = false;
        }
        setStack((prev) => [...prev, oldCellArray]);
      }
    }
    console.log(stack);
  };

  return (
    <div className="row text-center">
      <div className="col-12">
        <ul>
          {cellArray.map((i) => {
            let cellStyle = "cell ";
            if (i.target === true) {
              cellStyle += "target";
            }
            return (
              <>
                <li
                  onClick={() => handleSetTarget(i.id)}
                  className={cellStyle}
                  id={i}
                >
                  {i.value}
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div>
        <button onClick={handleCompute} className="btn btn-primary">
          Start
        </button>
        <button className="btn btn-primary">Next</button>
      </div>
    </div>
  );
};

export default LinearSearch;
