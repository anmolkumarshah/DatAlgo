import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DrawerLeft from "./material-ui-components/drawer";
import CircularLinkedList from "./components/doubleLinkedList/circularLinkedList.jsx";
import Arr from "./components/array/Array";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {/* <Sidebar /> */}
        <DrawerLeft />
        {/* <CircularLinkedList /> */}
        {/* <Arr /> */}
      </React.Fragment>
    );
  }
}

export default App;
