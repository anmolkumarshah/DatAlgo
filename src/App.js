import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BinaryTree from "./components/tree/BinaryTree";

import DrawerLeft from "./material-ui-components/drawer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {/* <Sidebar /> */}
        <DrawerLeft />
        {/* <PathFinding /> */}
        {/* <BinaryTree /> */}
      </React.Fragment>
    );
  }
}

export default App;
