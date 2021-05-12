import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AlertDialog from "../../../material-ui-components/alertDialog";

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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${"https://cdn.pixabay.com/photo/2019/11/28/07/21/butterfly-4658565_1280.jpg"})`,
        overflow: "hidden",
        backgroundSize: "cover",
      }}
    >
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Error"
        content={err}
      />

      <form onSubmit={handleSubmit} style={{ padding: "300px 500px" }}>
        <div className="form-group">
          <label className="text-light h2" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="form-group">
          <label className="text-light h2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {wait ? <CircularProgress color="secondary" /> : "Login"}
        </button>
        <button
          onClick={() => {
            props.history.push("/signup");
          }}
          className="ml-2 btn btn-info"
        >
          don't have an account, Create one
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
