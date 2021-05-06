import React, { useRef, useEffect } from "react";
import Draggable from "react-draggable";
const Node = (props) => {
  const boxStyle = {
    position: "absolute",
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "2px",
    textAlign: "center",
    cursor: "grab",
  };
  const newRef = useRef(null);
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  useEffect(() => {
    props.update(props.box.id, newRef);
  }, []);
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  let badgeClass = "badge badge-";
  if (
    props.box.length === 0
      ? (badgeClass += "danger")
      : (badgeClass += "warning")
  )
    if (
      props.box.data === "Temp" ? (badgeClass += "danger") : (badgeClass += "")
    )
      return (
        <Draggable onDrag={props.forceRerender} onStop={props.forceRerender}>
          <div
            ref={newRef}
            id={props.box.id}
            style={{ ...boxStyle, left: props.box.x, top: props.box.y }}
          >
            <div className={badgeClass}>
              <h4>{props.box.data}</h4>
            </div>
          </div>
        </Draggable>
      );
};

export default Node;
