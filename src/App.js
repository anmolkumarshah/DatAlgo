import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "./components/sidebar/Sidebar";
import DrawerLeft from "./material-ui-components/drawer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {/* <Sidebar /> */}
        <DrawerLeft />
      </React.Fragment>
    );
  }
}

export default App;
