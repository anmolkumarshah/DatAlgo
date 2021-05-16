import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DrawerLeft from "./material-ui-components/drawer";

const App = () => {
  useEffect(() => {
    // localStorage.removeItem("token");
  }, []);
  return (
    <React.Fragment>
      <ToastContainer />
      <DrawerLeft />
    </React.Fragment>
  );
};

export default App;
