import React, { useState, useEffect } from "react";
import "./bubble-sort-style.css";
import { Bar } from "./../bar/bar";
import { ColorIndicator } from "./../colorIndicator/colorIndicator";
import { Controller } from "./../controller/controller.jsx";
import { randonIntFromInterval } from "../helper.jsx";
import SimpleAccordion from "../../../material-ui-components/accordian";
import AlertDialog from "../../../material-ui-components/alertDialog";

const BubbleSort = () => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [noBars, setNoBars] = useState(25);
  const [log, setLog] = useState([]);
  let animations = [];

  //   --------------------------------------------------------------------------------
  //    COLORS HERE

  const considerColor = "#FAD02C";
  const returnColor = "rgb(63,81,181)"; // return and initial color are same
  const compareColor = "rgb(216, 10, 74)";
  const swapColor = "#32CD30";
  const sortedColor = "rgb(63,81,181)";

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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

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
    animations = compute(array);
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
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Bubble Sort"
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi molestiae accusamus? Quis tempore tempora at distinctio explicabo cumque amet, perferendis rem iste qui voluptate maxime sed obcaecati inventore accusamus."
      />
      <ColorIndicator
        indicator={[
          { name: "consider", color: considerColor },
          { name: "compare", color: compareColor },
          { name: "swap", color: swapColor },
          { name: "sorted", color: sortedColor },
          { name: "initial", color: returnColor },
        ]}
      />

      <hr />
      <div className="Container ">
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

      <Controller
        resetArray={resetArray}
        operation={bubbleSort}
        handleSpeedChange={handleSpeedChange}
        handleSizeChange={handleSizeChange}
      />
    </>
  );
};

export default BubbleSort;
