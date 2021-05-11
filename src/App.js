import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Compare from "./components/compare-sorting-algorithm/compareSortingAlgorithm";
import DrawerLeft from "./material-ui-components/drawer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <DrawerLeft />
        {/* <Compare /> */}
      </React.Fragment>
    );
  }
}

export default App;
