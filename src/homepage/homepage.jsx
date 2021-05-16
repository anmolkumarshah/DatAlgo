import React from "react";
import Algorithms from "./Algorithms";
import { algorithmsData } from "./algorithmsData";
import "./home.css";
import Footer from "./footer/Footer";
import HomeTopComp from "./HomeTop";
// import homeImg from "./images/homeImg.png";

const Homepage = () => {
  return (
    <>
      <div
        className="homeCompo px-0 container-fluid"
        style={{
          paddingTop: "70px",
        }}
      >
        <HomeTopComp />

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
