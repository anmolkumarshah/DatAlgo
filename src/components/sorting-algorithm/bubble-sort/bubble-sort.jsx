import React, { useState, useEffect } from "react";
import "./bubble-sort-style.css";
import { Bar } from "./../bar/bar";
import { ColorIndicator } from "./../colorIndicator/colorIndicator";

const randonIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const BubbleSort = () => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [noBars, setNoBars] = useState(5);

  //   --------------------------------------------------------------------------------
  //    COLORS HERE

  const considerColor = "rgb(115, 146, 146)";
  const returnColor = "rgb(255, 159, 159)"; // return and initial color are same
  const compareColor = "rgb(216, 10, 74)";
  const swapColor = "green";
  const sortedColor = "rgb(10, 16, 216)";

  //    MARGIN VARIABLES
  const normalMargin = "2px";
  const compare_left_Margin = "0px 5px 0px 12px";
  const compare_right_Margin = "0px 12px 0px 5px";

  //   --------------------------------------------------------------------------------

  const resetArray = () => {
    let temp = [];
    for (let i = 0; i < noBars; i++) temp.push(randonIntFromInterval(50, 400));
    const arrayBar = Array.from(document.getElementsByClassName("array-bar"));
    arrayBar.forEach((i) => {
      i.style.backgroundColor = returnColor;
      i.style.color = "black";
    });
    setArray(temp);
    // setLogs([]);
  };

  //   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  useEffect(() => {
    resetArray();
  }, []);

  //   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // MAIN BUBBLE SORT LOGIC HERE
  const compute = (array) => {
    const animation = [];
    let i, j;
    for (i = 0; i < array.length - 1; i++) {
      for (j = 0; j < array.length - 1 - i; j++) {
        animation.push({ type: "consider", value: [j, j + 1] });
        animation.push({ type: "compare", value: [j, j + 1] });
        if (array[j] > array[j + 1]) {
          animation.push({ type: "swap", value: [j, j + 1] });
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
        animation.push({ type: "return", value: [j, j + 1] });
      }
      animation.push({ type: "sorted", value: [j, j] });
    }
    animation.push({ type: "sorted", value: [0, 0] });
    return animation;
  };

  const bubbleSort = () => {
    const animations = compute(array);

    const arrayBar = document.getElementsByClassName("array-bar");
    let speed = 1000 / animationSpeed;
    for (let i = 0; i < animations.length; i++) {
      const { type, value } = animations[i];
      const [barIdxOne, barIdxTwo] = value;
      const barOne = arrayBar[barIdxOne];
      const barTwo = arrayBar[barIdxTwo];
      const barOneStyle = arrayBar[barIdxOne].style;
      const barTwoStyle = arrayBar[barIdxTwo].style;
      if (type === "consider") {
        setTimeout(() => {
          barOneStyle.backgroundColor = considerColor;
          barTwoStyle.backgroundColor = considerColor;
          barOneStyle.margin = normalMargin;
          barTwoStyle.margin = normalMargin;
        }, i * speed);
      } else if (type === "return") {
        setTimeout(() => {
          barOneStyle.margin = normalMargin;
          barTwoStyle.margin = normalMargin;
          barOneStyle.backgroundColor = returnColor;
          barTwoStyle.backgroundColor = returnColor;
        }, i * speed);
      } else if (type === "compare") {
        setTimeout(() => {
          barOneStyle.margin = compare_left_Margin;
          barTwoStyle.margin = compare_right_Margin;
          barOneStyle.backgroundColor = compareColor;
          barTwoStyle.backgroundColor = compareColor;
        }, i * speed);
      } else if (type === "swap") {
        setTimeout(() => {
          barOneStyle.backgroundColor = swapColor;
          barTwoStyle.backgroundColor = swapColor;
          let temp = barOneStyle.height;

          let temp2 = barOne.textContent;
          barOne.textContent = barTwo.textContent;
          barTwo.textContent = temp2;

          barOneStyle.margin = normalMargin;
          barTwoStyle.margin = normalMargin;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }, i * speed);
      } else if (type === "sorted") {
        setTimeout(() => {
          barOneStyle.backgroundColor = sortedColor;
          barTwoStyle.backgroundColor = sortedColor;
          barOneStyle.color = "white";
          barTwoStyle.color = "white";
        }, i * speed);
      }
    }
  };

  const handleSpeedChange = (e) => {
    setAnimationSpeed(e.target.value);
  };

  const handleSizeChange = (e) => {
    setArray([]);
    setNoBars(e.target.value);
  };

  return (
    <>
      <hr />
      <div className="Container mt-5">
        {array.map((i, idx) => {
          return (
            <Bar
              height={i}
              noBars={noBars}
              returnColor={returnColor}
              key={idx}
            />
          );
        })}
      </div>
      <hr />

      <ColorIndicator
        indicator={[
          { name: "consider", color: considerColor },
          { name: "compare", color: compareColor },
          { name: "swap", color: swapColor },
          { name: "sort", color: sortedColor },
          { name: "initial", color: returnColor },
        ]}
      />

      <button onClick={resetArray} className="btn btn-primary mt-5">
        New Array
      </button>
      <button onClick={bubbleSort} className="btn btn-primary">
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

export default BubbleSort;

// const ColorIndicator = ({ indicator }) => {
//   return (
//     <ul className="color-info mb-5">
//       {indicator.map((i) => {
//         return (
//           <div>
//             <li className="box" style={{ backgroundColor: i.color }}></li>
//             <li>{i.name}</li>
//           </div>
//         );
//       })}
//     </ul>
//   );
// };
