import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AVLTrees from "./components/avl-tree/AVLTrees";

import DrawerLeft from "./material-ui-components/drawer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {/* <Sidebar /> */}
        <DrawerLeft />
        {/* <PathFinding /> */}
        {/* <AVLTrees /> */}
      </React.Fragment>
    );
  }
}

export default App;
