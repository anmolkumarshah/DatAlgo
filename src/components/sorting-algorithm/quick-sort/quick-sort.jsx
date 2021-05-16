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
import "./quick-sort-style.css";
import codeData from "./../../../data";
import StartInformation from "./../../startInformation/startInformation";

const randonIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const QuickSort = forwardRef(({ size = 25, noController = false }, ref) => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [noBars, setNoBars] = useState(size);

  //   --------------------------------------------------------------------------------
  //    COLORS HERE

  const pivotColor = "rgb(115, 146, 146)";
  const i_Color = "yellow";
  const j_Color = "pink";
  const returnColor = "rgb(63,81,181)"; // return and initial color are same
  const compareColor = "rgb(216, 10, 74)";
  const swapColor = "green";

  //    MARGIN VARIABLES
  const normalMargin = "2px";
  const compare_left_Margin = "0px 5px 0px 8px";
  const compare_right_Margin = "0px 8px 0px 5px";

  //   --------------------------------------------------------------------------------

  const resetArray = () => {
    let temp = [];
    for (let i = 0; i < noBars; i++) temp.push(randonIntFromInterval(50, 400));
    temp.push(450);
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

  const compute = (array) => {
    const animation = [];

    const swap = (i, j) => {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      animation.push({ type: "swap", value: [i, j] });
      animation.push({ type: "return", value: [i, j] });
    };

    const partition = (l, h) => {
      let pivot = array[l];
      let i = l;
      let j = h;
      animation.push({ type: "pivot", value: [l, l] });

      do {
        do {
          animation.push({ type: "i_value", value: [i, i] });
          animation.push({ type: "return", value: [i, i] });
          i++;
        } while (array[i] <= pivot);
        animation.push({ type: "i_value", value: [i, i] });

        do {
          animation.push({ type: "j_value", value: [j, j] });
          animation.push({ type: "return", value: [j, j] });
          j--;
        } while (array[j] > pivot);
        animation.push({ type: "j_value", value: [j, j] });

        animation.push({ type: "compare", value: [i, j] });
        animation.push({ type: "return", value: [i, j] });
        if (i < j) {
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

    quick(0, array.length - 1);

    return animation;
  };

  useImperativeHandle(ref, () => ({
    start() {
      quickSort();
    },
  }));

  const quickSort = () => {
    const animations = compute(array);

    const arrayBar = document.getElementsByClassName("array-bar");
    let speed = 1000 / animationSpeed;
    for (let i = 0; i < animations.length; i++) {
      const { type, value } = animations[i];
      const [barIdxOne, barIdxTwo] = value;

      const barOne = arrayBar[barIdxOne];
      const barTwo = arrayBar[barIdxTwo];
      // console.log(barIdxOne);
      const barOneStyle = arrayBar[barIdxOne].style;
      const barTwoStyle = arrayBar[barIdxTwo].style;
      if (type === "return") {
        setTimeout(() => {
          barOneStyle.margin = normalMargin;
          barTwoStyle.margin = normalMargin;
          barOneStyle.backgroundColor = returnColor;
          barTwoStyle.backgroundColor = returnColor;
        }, i * speed);
      } else if (type === "i_value") {
        setTimeout(() => {
          barOneStyle.margin = normalMargin;
          barTwoStyle.margin = normalMargin;
          barOneStyle.backgroundColor = i_Color;
          barTwoStyle.backgroundColor = i_Color;
        }, i * speed);
      } else if (type === "j_value") {
        setTimeout(() => {
          barOneStyle.margin = normalMargin;
          barTwoStyle.margin = normalMargin;
          barOneStyle.backgroundColor = j_Color;
          barTwoStyle.backgroundColor = j_Color;
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
      } else if (type === "pivot") {
        setTimeout(() => {
          barOneStyle.backgroundColor = pivotColor;
          barTwoStyle.backgroundColor = pivotColor;
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

  return (
    <div className="container">
      {!noController && (
        <AlertDialog
          open={open}
          handleClose={handleClose}
          title="Welcome to Quick Sort"
          content="The bars show depicts an array of different value element, from the controller below you can Create a random new array, set new size for new array, change the speed of sorting, and initialize the sorting process."
        />
      )}
      {!noController && <Information codeData={codeData.qs} />}
      <ColorIndicator
        indicator={[
          { name: "pivot", color: pivotColor },
          { name: "j variable", color: j_Color },
          { name: "i variable", color: i_Color },
          { name: "compare", color: compareColor },
          { name: "swap", color: swapColor },
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
        {/* <div className="line"></div> */}
      </div>
      <hr />
      {!noController && (
        <div className="controlls-container w-100">
          <Controller
            resetArray={resetArray}
            operation={quickSort}
            handleSpeedChange={handleSpeedChange}
            handleSizeChange={handleSizeChange}
          />
        </div>
      )}
    </div>
  );
});

export default QuickSort;
