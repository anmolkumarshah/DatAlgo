import React, { useState } from "react";
import BubbleSort from "../sorting-algorithm/bubble-sort/bubble-sort";
import InsertionSort from "../sorting-algorithm/insertion-sort/insertion-sort";
import QuickSort from "../sorting-algorithm/quick-sort/quick-sort";
import SelectionSort from "../sorting-algorithm/selection-sort/selection-sort";
import "./compareSortingAlgorithm.css";

const Compare = () => {
  let optionList = [
    "Bubble Sort",
    "Insertion Sort",
    "Quick Sort",
    "Selection Sort",
  ];
  const handleStart = () => {};

  return (
    <>
      <div className="compare-container">
        <div className="compare-partition">
          <BubbleSort size={10} noController={true} />
        </div>
        <div className="compare-middle"></div>
        <div className="compare-partition">
          {/* <QuickSort size={10} noController={true} /> */}
          {/* <InsertionSort size={10} noController={true} /> */}
          <SelectionSort size={10} noController={true} />
        </div>
      </div>
      <div className="controlls-container">
        <div className="row">
          <div className="col-4">
            <select
              //   onChange={themeHandler}
              className="form-control p-0"
              id="exampleFormControlSelect2"
            >
              <option selected>Select Sorting Algorithm</option>
              {optionList.map((item) => {
                return <option>{item}</option>;
              })}
            </select>
          </div>
          <div className="col-2">
            <button onClick={handleStart} className="btn btn-warning">
              Start
            </button>
          </div>
          <div className="col-2">
            <button className="btn btn-warning">New</button>
          </div>
          <div className="col-4">
            <select
              //   onChange={themeHandler}
              className="form-control p-0"
              id="exampleFormControlSelect2"
            >
              <option selected>Select Sorting Algorithm</option>
              {optionList.map((item) => {
                return <option>{item}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
