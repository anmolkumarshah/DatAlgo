import React from "react";
import { useState } from "react";
import Algorithms from "./Algorithms";
import { algorithmsData } from "./algorithmsData";
import { BsCodeSlash } from "react-icons/bs";
import "./home.css";
import Footer from "./footer/Footer";
import homeImg from "./images/homeImg.png";

const Homepage = () => {
  return (
    <>
      <div
        className="homeCompo px-0 container-fluid"
        style={{
          paddingTop: "70px",
        }}
      >
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
                <p className="text-danger mb-0 mt-2"># Learn Anytime, Anywhere</p>
                <p className="text-danger m-0">
                  # We believe everyone has the capacity to be creative.
                </p>
              </div>{" "}
            </div>
            <div className="col-sm-6 homeTopImg text-center">
              <img src={homeImg} alt="Home" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div
            className="d-flex flex-wrap justify-content-center"
            style={{ gap: "15px" }}
          >
            {/* <ul  className="d-flex flex-wrap list-unstyled" style={{ gap: "20px" ,margin:"0 auto" }}> */}
            {algorithmsData.map((algo, idx) => {
              return (
                <div className="shadow-sm" style={{ height: "min-content" }}>
                  <Algorithms
                    title={algo.title}
                    image={algo.image}
                    url={algo.url}
                  />
                </div>
              );
            })}
            {/* </ul> */}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;
