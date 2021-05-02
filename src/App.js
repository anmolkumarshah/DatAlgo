import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DoubleLinkedList from "./components/doubleLinkedList/doubleLinkedList";

import DrawerLeft from "./material-ui-components/drawer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {/* <Sidebar /> */}
        <DrawerLeft />
        {/* <DoubleLinkedList /> */}
      </React.Fragment>
    );
  }
}

export default App;
