import React, { useState } from "react";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import { FaMale, FaFemale } from "react-icons/fa";

const data = [
  <FaMale style={{ color: "white", fontSize: "50px" }} />,
  <FaFemale style={{ color: "white", fontSize: "50px" }} />,
];

const Que = () => {
  const [dataitem, setDataItem] = useState([]);
  //   const [newMember, setNewMember] = useState("");
  //   const [input, setNewInput] = useState("");
  //   const newMemberFound = (event) => {
  //     let person = parseInt(event.target.value);
  //     if (person === 1) {
  //       setNewMember(<FaMale style={{ color: "white", fontSize: "50px" }} />);
  //     } else if (person === 2) {
  //       setNewMember(<FaMale style={{ color: "white", fontSize: "50px" }} />);
  //     }
  //     console.log(person);
  //   };

  const handleEnqueue = () => {
    setDataItem((oldItems) => {
      return [...oldItems, dataitem.splice(dataitem.length - 1, 0, 1).pop()];
    });
  };
  return (
    <div className="container">
      <div className="d-flex ">
        {dataitem.map((val, idx) => {
          return (
            <div
              key={idx}
              style={{ backgroundColor: "red", borderRadius: "50%" }}
              className="p-2 m-2"
            >
              {val}
            </div>
          );
        })}
      </div>
      <div className="controlls-container">
        {/* <form className="d-flex  align-items-center ">
          <label className="p-0 m-0 font-weight-bold" htmlFor="speed">
            Select
          </label>
          <select onChange={newMemberFound} id="speed" class="form-control">
            <option selected value="0" disabled>
              Select
            </option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select> */}
        <button onClick={handleEnqueue}>Enqueue</button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Que;
