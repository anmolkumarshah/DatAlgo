import React, { useState } from "react";
import "./node-style.css";

const Node = ({
  isStart,
  isTarget,
  row,
  col,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) => {
  let extraClasses = isStart
    ? "start-node"
    : isTarget
    ? "target-node"
    : isWall
    ? "node-wall"
    : "";
  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClasses}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ></div>
  );
};

export default Node;
