import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AlertDialog from "../../../material-ui-components/alertDialog";
import "./form.css";
import { VscFeedback } from "react-icons/vsc";
import { FaEnvelope, FaUserEdit } from "react-icons/fa";
const FeedbackForm = () => {
  const backend = "https://datalgo.herokuapp.com/";
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState([]);
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccessClose = () => {
    setDone(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDesChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (description === "") {
      return alert("Please write something.");
    }
    setWait(true);
    e.preventDefault();
    const url = backend + "feedback/create";
    const method = "POST";
    try {
      const result = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          description: description,
        }),
      });
      const responseJson = await result.json();
      if (responseJson.error) {
        let display = "";
        responseJson.desc.forEach((item) => {
          display += `${item.param} : ${item.msg}`;
        });
        setErr(display);
        setWait(false);
        setOpen(true);
      } else {
        setWait(false);
        setDone(true);
      }
    } catch (e) {
      setErr(e);
      setWait(false);
      setOpen(true);
    }

    setEmail("");
    setDescription("");
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
      {done && (
        <AlertDialog
          open={done}
          handleClose={handleSuccessClose}
          title="Thanks for providing feedback"
          content={"feedback"}
        />
      )}

      <div className="form-holder w-50">
        <div className="text-center">
          <VscFeedback size={80} className="main-color" />
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="form-group">
            <label className="text-dark ml-4 pl-2" htmlFor="email">
              Email address
            </label>
            <div className="d-flex align-items-center">
              <FaEnvelope size={20} className="main-color m-0 p-0" />
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
            <label className="text-dark ml-4 pl-2" htmlFor="description">
              How we can improve ?
            </label>
            <div className="d-flex align-items-md-start">
              <FaUserEdit size={20} className="main-color m-0 p-0" />
              <textarea
                onChange={handleDesChange}
                className="form-input ml-2 w-100"
                id="description"
                rows="4"
                value={description}
                placeholder="Write Something ..."
                style={{ outline: "none", border: "none" }}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary ml-4 mt-1">
            {wait ? <CircularProgress color="secondary" /> : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
