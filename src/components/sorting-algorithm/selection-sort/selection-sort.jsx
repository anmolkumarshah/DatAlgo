import React, { useState, useEffect } from "react";
import "./selection-sort-style.css";

const randonIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const SelectionSort = () => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [noBars, setNoBars] = useState(5);

  const resetArray = () => {
    let temp = [];
    for (let i = 0; i < noBars; i++) temp.push(randonIntFromInterval(50, 400));
    const arrayBar = Array.from(document.getElementsByClassName("array-bar"));
    arrayBar.forEach((i) => {
      i.style.backgroundColor = "lightblue";
      i.style.color = "black";
    });
    setArray(temp);
  };

  //   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  useEffect(() => {
    resetArray();
  }, []);

  //   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const compute = () => {
    const animation = [];
    let i, j, k;
    for (i = 0; i < array.length; i++) {
      for (j = i, k = j; j < array.length; j++) {
        animation.push({ type: "j_k_value", value: [j, k] });
        animation.push({ type: "comparing", value: [j, k] });
        animation.push({ type: "return", value: [j, k] });
        if (array[j] < array[k]) {
          k = j;
          animation.push({ type: "j_k_value", value: [j, k] });
        }
        animation.push({ type: "return", value: [j, k] });
      }
      let temp = array[k];
      array[k] = array[i];
      array[i] = temp;
      animation.push({ type: "swap", value: [i, k] });
    }
    return animation;
  };

  const insertionSort = () => {
    const animations = compute(array);
    const arrayBar = document.getElementsByClassName("array-bar-selection");
    let speed = 1000 / animationSpeed;
    for (let i = 0; i < animations.length; i++) {
      const { type, value } = animations[i];
      const [barIdxOne, barIdxTwo] = value;

      const barOne = arrayBar[barIdxOne];
      const barTwo = arrayBar[barIdxTwo];

      const barOneStyle = arrayBar[barIdxOne].style;
      const barTwoStyle = arrayBar[barIdxTwo].style;
      if (type === "j_k_value") {
        setTimeout(() => {
          barOneStyle.backgroundColor = "yellow";
          barTwoStyle.backgroundColor = "green";
          barOneStyle.margin = "2px";
          barTwoStyle.margin = "2px";
        }, i * speed);
      } else if (type === "return") {
        setTimeout(() => {
          barOneStyle.margin = "2px";
          barTwoStyle.margin = "2px";
          barOneStyle.backgroundColor = "lightblue";
          barTwoStyle.backgroundColor = "lightblue";
        }, i * speed);
      } else if (type === "comparing") {
        setTimeout(() => {
          barOneStyle.margin = "0px 5px 0px 8px";
          barTwoStyle.margin = "0px 8px 0px 5px";
          barOneStyle.backgroundColor = "blue";
          barTwoStyle.backgroundColor = "blue";
        }, i * speed);
      } else if (type === "swap") {
        setTimeout(() => {
          barOneStyle.backgroundColor = "gray";
          barTwoStyle.backgroundColor = "gray";
          let temp = barOneStyle.height;

          let temp2 = barOne.textContent;
          barOne.textContent = barTwo.textContent;
          barTwo.textContent = temp2;

          barOneStyle.margin = "2px";
          barTwoStyle.margin = "2px";
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }, i * speed);
      }
      setTimeout(() => {
        console.log(type, array[value[0]], array[value[1]]);
      }, i * speed);
    }
  };

  const handleSpeedChange = (e) => {
    setAnimationSpeed(e.target.value);
  };

  const handleSizeChange = (e) => {
    setArray([]);
    setNoBars(e.target.value);
    // resetArray();
  };

  const getWidth = () => {
    let width;
    if (noBars == 5) width = "16%";
    if (noBars == 10) width = "7%";
    if (noBars == 25) width = "3.5%";
    if (noBars == 50) width = "1.6%";
    if (noBars == 100) width = "0.6%";
    return width;
  };

  return (
    <>
      <div className="container">
        <div className="line"></div>
        {array.map((i, idx) => {
          return (
            <div
              style={{ height: `${i}px`, width: getWidth() }}
              key={idx}
              className="array-bar-selection"
            >
              {noBars < 50 && <div className="badge badge-warning">{i}</div>}
            </div>
          );
        })}
        <div className="line"></div>
      </div>
      <button onClick={resetArray} className="btn btn-primary">
        New Array
      </button>
      <button onClick={insertionSort} className="btn btn-primary">
        sort
      </button>
      <form>
        <select
          onChange={handleSpeedChange}
          id="inputState"
          class="form-control"
        >
          <option selected value="1">
            x1
          </option>
          <option value="2">x2</option>
          <option value="3">x3</option>
          <option value="4">x4</option>
          <option value="5">x5</option>
          <option value="10">x10</option>
          <option value="100">x100</option>
        </select>

        <select onChange={handleSizeChange} class="form-control">
          <option selected value="5">
            5
          </option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </form>
    </>
  );
};

export default SelectionSort;
