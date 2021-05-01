import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleLinkedList from "./components/singleLinkedList/singleLinkedList.jsx";

import DrawerLeft from "./material-ui-components/drawer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {/* <Sidebar /> */}
        <DrawerLeft />
        {/* <SingleLinkedList /> */}
      </React.Fragment>
    );
  }
}

export default App;
