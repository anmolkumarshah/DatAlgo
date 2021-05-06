import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeedbackForm from "./components/feedback-form/common/feedback";

import DrawerLeft from "./material-ui-components/drawer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <DrawerLeft />
        {/* <FeedbackForm /> */}
      </React.Fragment>
    );
  }
}

export default App;
