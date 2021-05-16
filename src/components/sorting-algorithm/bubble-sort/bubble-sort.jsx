import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./bubble-sort-style.css";
import { Bar } from "./../bar/bar";
import { ColorIndicator } from "./../colorIndicator/colorIndicator";
import { Controller } from "./../controller/controller.jsx";
import { randonIntFromInterval } from "../helper.jsx";
import AlertDialog from "../../../material-ui-components/alertDialog";
import Information from "../../../material-ui-components/information";
import codeData from "./../../../data";
import StartInformation from "./../../startInformation/startInformation";

const BubbleSort = forwardRef(({ size = 25, noController = false }, ref) => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [noBars, setNoBars] = useState(size);
  let animations = [];

  //   --------------------------------------------------------------------------------
  //    COLORS HERE

  const considerColor = "#FAD02C";
  const returnColor = "rgb(63,81,181)"; // return and initial color are same
  const compareColor = "rgb(216, 10, 74)";
  const swapColor = "#32CD30";
  const sortedColor = "green";

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
    StartInformation();
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

  useImperativeHandle(ref, () => ({
    start() {
      bubbleSort();
    },
  }));

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
    <div className="container">
      {!noController && (
        <AlertDialog
          open={open}
          handleClose={handleClose}
          title="Welcome to Bubble Sort"
          content="The bars show depicts an array of different value element, from the controller below you can Create a random new array, set new size for new array, change the speed of sorting, and initialize the sorting process."
        />
      )}
      {!noController && <Information codeData={codeData.bso} />}
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
      {!noController && (
        <div className="controlls-container w-100">
          <Controller
            resetArray={resetArray}
            operation={bubbleSort}
            handleSpeedChange={handleSpeedChange}
            handleSizeChange={handleSizeChange}
          />
        </div>
      )}
    </div>
  );
});

export default BubbleSort;
