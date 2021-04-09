import React, { useState, useEffect } from "react";
import "./quick-sort-style.css";

const randonIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const QuickSort = () => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [noBars, setNoBars] = useState(5);
  // console.log(speed);

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

  const compute = (array) => {
    const animation = [];

    const swap = (i, j) => {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      animation.push({ type: "swap", value: [i, j] });
    };

    const partition = (l, h) => {
      let pivot = array[l];
      let i = l;
      let j = h;
      do {
        do {
          i++;
        } while (array[i] <= pivot);
        do {
          j--;
        } while (array[j] > pivot);
        if (i < j) {
          animation.push({ type: "compare", value: [i, j] });
          swap(i, j);
        }
      } while (i < j);
      swap(l, j);
      return j;
    };

    const quick = (l, h) => {
      let j;
      if (l < h) {
        j = partition(l, h);
        animation.push({ type: "pivot", value: [j, j] });
        quick(l, j);
        quick(j + 1, h);
      }
    };

    quick(0, array.length);

    return animation;
    // console.log(array);
  };

  const quickSort = () => {
    const animations = compute(array);
    console.log(animations);

    const arrayBar = document.getElementsByClassName("array-bar-quick");
    let speed = 1000 / animationSpeed;
    for (let i = 0; i < animations.length; i++) {
      const { type, value } = animations[i];
      const [barIdxOne, barIdxTwo] = value;

      const barOne = arrayBar[barIdxOne];
      const barTwo = arrayBar[barIdxTwo];
      console.log(barIdxOne);
      const barOneStyle = arrayBar[barIdxOne].style;
      const barTwoStyle = arrayBar[barIdxTwo].style;
      if (type === "consider") {
        setTimeout(() => {
          barOneStyle.backgroundColor = "rgb(115, 146, 146)";
          barTwoStyle.backgroundColor = "rgb(115, 146, 146)";
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
      } else if (type === "compare") {
        setTimeout(() => {
          barOneStyle.margin = "0px 5px 0px 8px";
          barTwoStyle.margin = "0px 8px 0px 5px";
          barOneStyle.backgroundColor = "rgb(216, 10, 74)";
          barTwoStyle.backgroundColor = "rgb(216, 10, 74)";
        }, i * speed);
      } else if (type === "swap") {
        setTimeout(() => {
          barOneStyle.backgroundColor = "green";
          barTwoStyle.backgroundColor = "green";
          let temp = barOneStyle.height;

          let temp2 = barOne.textContent;
          barOne.textContent = barTwo.textContent;
          barTwo.textContent = temp2;

          barOneStyle.margin = "2px";
          barTwoStyle.margin = "2px";
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }, i * speed);
      } else if (type === "pivot") {
        setTimeout(() => {
          barOneStyle.backgroundColor = "rgb(10, 16, 216)";
          barTwoStyle.backgroundColor = "rgb(10, 16, 216)";
          barOneStyle.color = "white";
          barTwoStyle.color = "white";
        }, i * speed);
      }
      setTimeout(() => {
        console.log(type, value);
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
    if (noBars == 10) width = "9%";
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
              className="array-bar-quick"
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
      <button onClick={quickSort} className="btn btn-primary">
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

export default QuickSort;
