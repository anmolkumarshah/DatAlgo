import React from "react";
import { useState } from "react";
import Algorithms from "./Algorithms";
import { algorithmsData } from "./algorithmsData";
import homeImg from "./homeImg.png";
import "./home.css";
import Footer from "./footer/Footer";

const Homepage = () => {
  return (
    <>
      <div
        className="homeCompo px-0"
        style={{
          paddingTop: "90px",
        }}
      >
        <div className="homeTop text-center pb-5">
          <div className="homeHeadings">
            <h1>
              <b style={{ color: "#0A4158" }}>Dat</b>
              <b style={{ color: "#4B8378" }}>Algo</b>
            </h1>
            <h3 className="pt-3">
              A New Online Platform For Learning <br /> Data Structure &
              Algorithms
            </h3>
          </div>

          {/* <div className="homeimg">
            <img src={homeImg} alt="Home" className="mg-thumbnail" />
          </div> */}
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
