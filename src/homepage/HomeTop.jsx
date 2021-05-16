import React from "react";
import homeImg from "./images/homeImg.png";
import { BsCodeSlash } from "react-icons/bs";

const HomeTopComp = () => {
  return (
    <div className="homeTop container text-center pb-5 mx-auto">
      <div className="row">
        <div className="col-sm-6 homeHeadings d-flex align-items-center">
          <div className="text-left">
            <BsCodeSlash size={45} className="mb-2" />
            <h1 className="text-left">
              <b style={{ color: "#0A4158" }}>Dat</b>
              <b style={{ color: "#4B8378" }}>Algo</b>
            </h1>
            <h3 className="pt-2">
              A tool to Visualize Data Structures & Algorithm
            </h3>
          </div>
        </div>
        <div className="col-sm-6 homeTopImg text-center">
          <img src={homeImg} alt="Home" />
        </div>
      </div>
    </div>
  );
};

export default HomeTopComp;
