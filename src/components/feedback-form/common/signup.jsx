import React, { useState, useEffect } from "react";
import AlertDialog from "../../../material-ui-components/alertDialog";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";
import {
  FaEnvelope,
  FaLock,
  FaUserAlt,
  FaUserTie,
  FaUserLock,
} from "react-icons/fa";
import "./form.css";

const SignupForm = (props) => {
  const backend = "https://datalgo.herokuapp.com/";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    setWait(true);
    e.preventDefault();
    const url = backend + "auth/signup";
    const method = "PUT";
    try {
      const result = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          name: name,
          password: password,
        }),
      });
      const responseJson = await result.json();
      if (responseJson.error) {
        let display = "";
        responseJson.error.forEach((item) => {
          display += `${item.param} : ${item.msg}  `;
        });
        setErr(display);
        setOpen(true);
      } else {
        toast.success(`Your Account Has Been Created`);
        toast.info(`You are redirecting to Login`);
        props.history.push("/login");
      }
      setWait(false);
    } catch (e) {
      setWait(false);
      setErr(e);
      setOpen(true);
    }

    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center h-100 w-100">
      {err.length > 0 && (
        <AlertDialog
          open={open}
          handleClose={handleClose}
          title="Error"
          content={err}
        />
      )}

      <div className="form-holder">
        <div className="text-center">
          <FaUserTie size={80} className="main-color" />
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="form-group">
            <label className="text-dark ml-4 pl-2" htmlFor="email">
              Email Address
            </label>
            <div className="d-flex align-items-center w-100">
              <FaEnvelope size={20} className="main-color m-0 p-0" />
              <input
                type="email"
                className="form-input ml-2 w-100"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
                autoComplete={false}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="text-dark ml-4 pl-2" htmlFor="name">
              Full Name
            </label>
            <div className="d-flex align-items-center w-100">
              <FaUserAlt size={20} className="main-color m-0 p-0" />
              <input
                type="text"
                className="form-input ml-2 w-100"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="text-dark ml-4 pl-2" htmlFor="password">
              Password
            </label>
            <div className="d-flex align-items-center w-100">
              <FaLock size={20} className="main-color m-0 p-0" />
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
            {wait ? <CircularProgress color="secondary" /> : "Sign up"}
          </button>
          <button
            onClick={() => {
              props.history.push("/login");
            }}
            className="ml-2 btn btn-info mt-2"
          >
            Already have an account ...?
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
