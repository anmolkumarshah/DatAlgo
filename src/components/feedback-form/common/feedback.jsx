import React, { useState, useEffect } from "react";
import AlertDialog from "../../../material-ui-components/alertDialog";

const FeedbackForm = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState([]);
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);

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
    e.preventDefault();
    const url = "http://localhost:8080/feedback/create";
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
        setErr(responseJson.error);
        setOpen(true);
      }
      console.log(responseJson);
      setDone(true);
    } catch (e) {
      setErr(e);
      setOpen(true);
    }

    setEmail("");
    setDescription("");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "https://images.pexels.com/photos/6935076/pexels-photo-6935076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        overflow: "hidden",
      }}
    >
      {err.length > 0 && (
        <AlertDialog
          open={open}
          handleClose={handleClose}
          title="Error"
          content={"error"}
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
      <form onSubmit={handleSubmit} style={{ padding: "300px 500px" }}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            // type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleDesChange}
            className="form-control"
            id="description"
            rows="3"
            value={description}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
