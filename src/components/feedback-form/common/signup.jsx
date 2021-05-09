import React, { useState, useEffect } from "react";
import AlertDialog from "../../../material-ui-components/alertDialog";
import { toast } from "react-toastify";

const SignupForm = (props) => {
  const backend = "https://datalgo.herokuapp.com/";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState([]);
  const [open, setOpen] = useState(false);

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
        console.log(responseJson);
        toast.success(`Your Account Has Been Created`);
        toast.info(`You are redirecting to Login`);
        props.history.push("/login");
      }
    } catch (e) {
      setErr(e);
      setOpen(true);
    }

    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${"https://cdn.pixabay.com/photo/2018/09/08/09/48/tulips-3662183_1280.jpg"})`,
        overflow: "hidden",
        backgroundSize: "cover",
      }}
    >
      {err.length > 0 && (
        <AlertDialog
          open={open}
          handleClose={handleClose}
          title="Error"
          content={err}
        />
      )}

      <form onSubmit={handleSubmit} style={{ padding: "300px 500px" }}>
        <div className="form-group">
          <label className="text-light h2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
            autoComplete={false}
          />
        </div>

        <div className="form-group">
          <label className="text-light h2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
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
          Signup
        </button>
        <button
          onClick={() => {
            props.history.push("/login");
          }}
          className="ml-2 btn btn-info"
        >
          Already have an account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
