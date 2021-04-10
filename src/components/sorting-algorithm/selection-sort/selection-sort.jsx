import React, { useState, useEffect } from "react";
import { Bar } from "../bar/bar";
import { ColorIndicator } from "../colorIndicator/colorIndicator";
import { Controller } from "../controller/controller";
import "./selection-sort-style.css";

const randonIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const SelectionSort = () => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [noBars, setNoBars] = useState(5);

  //   --------------------------------------------------------------------------------
  //    COLORS HERE

  const j_variable = "yellow";
  const k_variable = "pink";
  const returnColor = "rgb(255, 159, 159)"; // return and initial color are same
  const compareColor = "rgb(216, 10, 74)";
  const swapColor = "green";

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
    const arrayBar = document.getElementsByClassName("array-bar");
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
          barOneStyle.backgroundColor = j_variable;
          barTwoStyle.backgroundColor = k_variable;
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
      } else if (type === "comparing") {
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
      <div className="container">
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
          { name: "j variable", color: j_variable },
          { name: "k variable", color: k_variable },
          { name: "swap", color: swapColor },
          { name: "compare", color: compareColor },
          { name: "initial", color: returnColor },
        ]}
      />
      <Controller
        resetArray={resetArray}
        operation={insertionSort}
        handleSpeedChange={handleSpeedChange}
        handleSizeChange={handleSizeChange}
      />
    </>
  );
};

export default SelectionSort;
