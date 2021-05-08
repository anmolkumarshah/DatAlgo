import React from "react";

const ArrayElement = (props) => {
  return (
    <div>
      <div className={props.elementClass} key={props.key}>
        <p className="heading">{props.value}</p>
      </div>
      <p
        style={{
          color: "red",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "18px",
          backgroundColor: "#f7f3eb",
        }}
      >
        {props.elementIndex}
      </p>
    </div>
  );
};

export default ArrayElement;
