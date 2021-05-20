import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { FaLockOpen, FaUserAlt, FaUserTie } from "react-icons/fa";
import { toast } from "react-toastify";
import AlertDialog from "../../../material-ui-components/alertDialog";
import "./form.css";
const LoginForm = (props) => {
  const backend = "https://datalgo.herokuapp.com/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState([]);

  const [open, setOpen] = useState(false);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    setWait(true);
    e.preventDefault();
    const url = backend + "auth/login";
    const method = "POST";
    try {
      const result = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const responseJson = await result.json();
      if (responseJson.error) {
        setErr(responseJson.message);
        console.log(responseJson);
        setWait(false);
        setOpen(true);
        return;
      }
      localStorage.setItem("token", responseJson.token);
      setWait(false);
      toast.success(`You are logged in`);
      props.history.push("/");
    } catch (e) {
      setErr(e);
      setWait(false);
      setOpen(true);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center h-100 w-100">
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Error"
        content={err}
      />

      <div className="form-holder">
        <div className="text-center">
          <FaUserTie size={80} className="main-color" />
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="form-group">
            <label className="text-dark ml-4 pl-2" htmlFor="email">
              Email address
            </label>
            <div className="d-flex align-items-center">
              <FaUserAlt size={20} className="main-color m-0 p-0" />
              <input
                type="email"
                className="form-input ml-2 w-100"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="text-dark ml-4 pl-2" htmlFor="password">
              Password
            </label>
            <div className="d-flex align-items-center w-100">
              <FaLockOpen size={20} className="main-color m-0 p-0" />
              <input
                type="password"
                className="form-input ml-2  w-100"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            {wait ? <CircularProgress color="secondary" /> : "Login"}
          </button>
          <button
            onClick={() => {
              props.history.push("/signup");
            }}
            className="ml-2 btn btn-info mt-2"
          >
            don't have an account, Create one
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
