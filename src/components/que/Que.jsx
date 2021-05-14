import { React, useState, useEffect } from "react";
import { FaMale, FaFemale, FaArrowLeft } from "react-icons/fa";
import { ColorIndicator } from "../sorting-algorithm/colorIndicator/colorIndicator";
import Button from "@material-ui/core/Button";
import AlertDialog from "../../material-ui-components/alertDialog";
import Warning from "../errorMessage/Warning";

import "./que.css";
import Information from "../../material-ui-components/information";
const maxMembers = 10;
const Que = () => {
  const initialColor = "rgb(63, 81, 181)";
  const maleColor = "#FBEAFF";
  const femaleColor = "#FBEAFF";
  const dequeueColor = "red";
  const enqueueColor = "#250B65";

  const [elements, setElements] = useState([
    <FaMale className="male" />,
    <FaFemale className="female" />,
    <FaMale className="male" />,
    <FaFemale className="female" />,
    <FaMale className="male" />,
  ]);

  
  //   Welcome
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  // Warning Message
  const [errorMessage, setErrorMessage] = useState("");
  const [warningOpen, setWarningOpen] = useState(false);

  const handleWarning = () => {
    setWarningOpen(!warningOpen);
    setErrorMessage("");
  };

  const heighlightAction = (index, delay, color) => {
    const bar = document.getElementsByClassName("queue-element");
    setTimeout(() => {
      bar[index].style.backgroundColor = color;
    }, delay);
    setTimeout(() => {
      bar[index].style.backgroundColor = color;
      bar[index].style.backgroundColor = initialColor;
    }, 150 * delay);
  };

  //   Male
  const enqueueMale = () => {
    let delay = 1;
    let i;
    for (i = 0; i < elements.length; i++) {
      // heighlightAction(i, delay++, "red");
      delay++;
    }

    if (i < maxMembers) {
      setTimeout(() => {
        heighlightAction(i, 3, enqueueColor);

        setElements((oldItems) => {
          return [...oldItems, <FaMale className="male" />];
        });
        //   }
      }, 150 * 2.5);
    } else {
      setErrorMessage("Queue is Full");
      setWarningOpen(!warningOpen);
    }
  };

  //   Female
  const enqueueFeMale = () => {
    let delay = 1;
    let i;
    for (i = 0; i < elements.length; i++) {
      // heighlightAction(i, delay++, "red");
      delay++;
    }
    if (i < maxMembers) {
      setTimeout(() => {
        heighlightAction(i, 3, enqueueColor);

        setElements((oldItems) => {
          return [...oldItems, <FaFemale className="female" />];
        });
        //   }
      }, 150 * 2.5);
    } else {
      setErrorMessage("Queue is Full");
      setWarningOpen(!warningOpen);
    }
  };

  //   Dequeue
  const deQueue = () => {
    if (elements.length - 1 >= 0) {
      heighlightAction(0, 2, dequeueColor);
      setTimeout(() => {
        // setTimeout(() => {
        setElements((oldItems) => {
          return [...oldItems.filter((ele, i) => i !== 0)];
        });
        // }, 400 * 2);
      }, 200 * 2);
    } else {
      setErrorMessage("Queue is Empty");
      setWarningOpen(!warningOpen);
    }
  };

  return (
    <div className="container">
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Welcome to Queue"
        content="An array is a data structure that contains a group of elements. Typically these elements are all of the same data type, such as an integer or string. Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched."
      />
      <ColorIndicator
        indicator={[
          { name: "Queue", color: initialColor },
          { name: "Male", color: maleColor },
          { name: "Female", color: femaleColor },
          { name: "Enqueue", color: enqueueColor },
          { name: "Dequeue", color: dequeueColor },
        ]}
      />
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Queue"
        content="A collection of items in which only the earliest added item may be accessed. Basic operations are add (to the tail) or enqueue and delete (from the head) or dequeue. Delete returns the item removed. Also known as `first-in, first-out` or FIFO."
      />
      {/* Erroe Message */}
      <Warning
        open={warningOpen}
        handleClose={handleWarning}
        title="Warning"
        content={errorMessage}
      />
      <hr />
      <div className="container m-0 queue-container d-flex align-items-center justify-content-center">
        <div class="queue">
          {elements.map((val, i) => {
            let arrow;

            if (i < elements.length - 1) {
              arrow = <FaArrowLeft />;
            }
            return (
              <>
                <div className="queue-element">{val}</div>
                <div className="queue-pointer">{arrow}</div>
              </>
            );
          })}
        </div>
        <div className="controlls-container">
          <div className="d-flex align-items-center col-sm-2 controlHandler">
            <Button className="Button" onClick={enqueueMale}>
              Enqueue Male
            </Button>
          </div>
          <div className="d-flex align-items-center col-sm-2 controlHandler">
            <Button
              className="Button"
              variant="outlined"
              onClick={enqueueFeMale}
            >
              Enqueue Female
            </Button>
          </div>
          <div className="d-flex align-items-center col-sm-2 controlHandler">
            <Button className="Button" variant="outlined" onClick={deQueue}>
              Dequeue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Que;
