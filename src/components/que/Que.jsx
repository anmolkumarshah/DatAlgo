import { React, useState } from "react";
import { FaMale, FaFemale, FaArrowLeft } from "react-icons/fa";
import { ColorIndicator } from "../sorting-algorithm/colorIndicator/colorIndicator";
import Button from "@material-ui/core/Button";

import "./que.css";
const maxMembers = 10;
const Que = () => {
  const initialColor = "rgb(63, 81, 181)";
  const maleColor = "#FBEAFF";
  const femaleColor = "#F9F871";
  const dequeueColor = "red";
  const enqueueColor = "#250B65";

  const [elements, setElements] = useState([
    <FaMale className="male" />,
    <FaFemale className="female" />,
    <FaMale className="male" />,
    <FaFemale className="female" />,
    <FaMale className="male" />,
  ]);

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
      heighlightAction(i, delay++, "red");
      delay++;
    }

    if (i < maxMembers) {
      setTimeout(() => {
        heighlightAction(i, delay--, enqueueColor);

        setElements((oldItems) => {
          return [...oldItems, <FaMale className="male" />];
        });
        //   }
      }, 150 * delay);
    } else {
      alert("Queue is Full");
    }
  };

  //   Female
  const enqueueFeMale = () => {
    let delay = 1;
    let i;
    for (i = 0; i < elements.length; i++) {
      heighlightAction(i, delay++, "red");
      delay++;
    }
    if (i < maxMembers) {
      setTimeout(() => {
        heighlightAction(i, delay--, enqueueColor);

        setElements((oldItems) => {
          return [...oldItems, <FaFemale className="female" />];
        });
        //   }
      }, 150 * delay);
    } else {
      alert("Queue is Full");
    }
  };

  //   Dequeue
  const deQueue = () => {
    if (elements.length - 1 >= 0) {
      heighlightAction(0, 8, dequeueColor);
      setTimeout(() => {
        setTimeout(() => {
          setElements((oldItems) => {
            return [...oldItems.filter((ele, i) => i !== 0)];
          });
        }, 400 * 2);
      }, 200 * 2);
    } else {
      alert("Queue is empty");
    }
  };

  return (
    <div className="container">
      <ColorIndicator
        indicator={[
          { name: "Queue", color: initialColor },
          { name: "Male", color: maleColor },
          { name: "Female", color: femaleColor },
          { name: "Enqueue", color: enqueueColor },
          { name: "Dequeue", color: dequeueColor },
        ]}
      />
      <hr />
      <div className="container queue-container d-flex align-items-center justify-content-center">
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
              variant="contained"
              onClick={enqueueFeMale}
            >
              Enqueue Female
            </Button>
          </div>
          <div className="d-flex align-items-center col-sm-2 controlHandler">
            <Button className="Button" variant="contained" onClick={deQueue}>
              Dequeue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Que;
