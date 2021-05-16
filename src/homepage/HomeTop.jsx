import React from "react";
import homeImg from "./images/homeImg.png";
import { RiStackFill } from "react-icons/ri";

const HomeTopComp = () => {
  return (
    <div className="homeTop container text-center pb-5 mx-auto">
      <div className="row">
        <div className="col-sm-6 homeHeadings d-flex align-items-center">
          <div className="text-left">
            <div className="row align-items-center">
              <div className="col-1 p-2">
                <RiStackFill
                  style={{ color: "#0A4158" }}
                  size={50}
                  className="mb-2"
                />
              </div>
              <div className="col">
                <h1 className="text-left">
                  <b style={{ color: "#0A4158" }}>Dat</b>
                  <b style={{ color: "#4B8378" }}>Algo</b>
                </h1>
              </div>
            </div>

            <h3 className="pt-2">
              A tool to Visualize Data Structures & Algorithm
            </h3>

            <br />
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
