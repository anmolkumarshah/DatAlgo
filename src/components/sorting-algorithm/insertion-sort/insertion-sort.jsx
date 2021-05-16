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
import "./insertion-sort-style.css";
import codeData from "./../../../data";
import StartInformation from "./../../startInformation/startInformation";

const randonIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const InsertionSort = forwardRef(({ size = 25, noController = false }, ref) => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [noBars, setNoBars] = useState(size);

  //   --------------------------------------------------------------------------------
  //    COLORS HERE

  const keySelectionColor = "#FAD02C";
  const returnColor = "rgb(63,81,181)"; // return and initial color are same
  const compareColor = "rgb(216, 10, 74)";
  const memoryOverridingColor = "#32CD30";

  //    MARGIN VARIABLES
  const normalMargin = "2px";
  const compare_left_Margin = "0px 5px 0px 8px";
  const compare_right_Margin = "0px 8px 0px 5px";

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

  useImperativeHandle(ref, () => ({
    start() {
      insertionSort();
    },
  }));

  const compute = (array) => {
    const animation = [];
    let i, j;
    for (i = 1; i < array.length; i++) {
      let key = array[i];
      animation.push({ type: "key_selection", value: [i, i] });
      j = i - 1;
      animation.push({ type: "comparing", value: [j, i] });

      while (j > -1 && array[j] > key) {
        animation.push({ type: "comparing", value: [j + 1, j] });
        array[j + 1] = array[j];
        animation.push({ type: "memory_overriding", value: [j + 1, j] });
        animation.push({ type: "return", value: [j + 1, j] });
        j--;
      }
      array[j + 1] = key;
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
      if (type === "key_selection") {
        setTimeout(() => {
          barOneStyle.backgroundColor = keySelectionColor;
          barTwoStyle.backgroundColor = keySelectionColor;
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
      } else if (type === "memory_overriding") {
        setTimeout(() => {
          barOneStyle.backgroundColor = memoryOverridingColor;
          barTwoStyle.backgroundColor = memoryOverridingColor;
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
          title="Welcome to Insertion Sort"
          content="The bars show depicts an array of different value element, from the controller below you can Create a random new array, set new size for new array, change the speed of sorting, and initialize the sorting process."
        />
      )}
      {!noController && <Information codeData={codeData.is} />}
      <ColorIndicator
        indicator={[
          { name: "selected key", color: keySelectionColor },
          { name: "compare", color: compareColor },
          { name: "memory overriding", color: memoryOverridingColor },
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

export default InsertionSort;
