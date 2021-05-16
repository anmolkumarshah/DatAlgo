import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import AlertDialog from "../../../material-ui-components/alertDialog";
import Information from "../../../material-ui-components/information";
import { Bar } from "../bar/bar";
import { ColorIndicator } from "../colorIndicator/colorIndicator";
import { Controller } from "../controller/controller";
import "./selection-sort-style.css";
import codeData from "./../../../data";
import StartInformation from "./../../startInformation/startInformation";

const randonIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const SelectionSort = forwardRef(({ size = 25, noController = false }, ref) => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [noBars, setNoBars] = useState(size);

  //   --------------------------------------------------------------------------------
  //    COLORS HERE

  const j_variable = "#0E86D4";
  const k_variable = "#055C9D";
  const returnColor = "rgb(63,81,181)"; // return and initial color are same
  const compareColor = "rgb(216, 10, 74)";
  const swapColor = "rgb(63,81,181)";

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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    StartInformation();
    setOpen(false);
  };

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

  useImperativeHandle(ref, () => ({
    start() {
      insertionSort();
    },
  }));

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
    <div className="container">
      {!noController && (
        <AlertDialog
          open={open}
          handleClose={handleClose}
          title="Welcome to Selection Sorts"
          content="The bars show depicts an array of different value element, from the controller below you can Create a random new array, set new size for new array, change the speed of sorting, and initialize the sorting process."
        />
      )}
      {!noController && <Information codeData={codeData.ss} />}
      <ColorIndicator
        indicator={[
          { name: "j variable", color: j_variable },
          { name: "k variable", color: k_variable },
          { name: "swap", color: swapColor },
          { name: "compare", color: compareColor },
          { name: "initial", color: returnColor },
        ]}
      />
      <hr />
      <div className="Container">
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
      {!noController && (
        <div className="controlls-container w-100">
          <Controller
            resetArray={resetArray}
            operation={insertionSort}
            handleSpeedChange={handleSpeedChange}
            handleSizeChange={handleSizeChange}
          />
        </div>
      )}
    </div>
  );
});

export default SelectionSort;
