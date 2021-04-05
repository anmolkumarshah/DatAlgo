import React, { Component } from "react";
import Sidebar from "./components/linkedlist/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Sidebar />
      </React.Fragment>
    );
  }
}

export default App;
