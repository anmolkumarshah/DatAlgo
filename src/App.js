import React, { Component } from "react";
import Sidebar from "./components/linkedlist/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BinarySearch from "./components/search-algorithm/binary-search";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {/* <Sidebar /> */}
        <BinarySearch />
      </React.Fragment>
    );
  }
}

export default App;
