import React from "react";
import { toast } from "react-toastify";

const Logout = (props) => {
  localStorage.removeItem("token");
  toast.success(`You are logged out`);
  props.history.push("/feedback");
  return <></>;
};

export default Logout;
