import React, { useState, useEffect } from "react";
import AlertDialog from "../../../material-ui-components/alertDialog";

const FeedbackForm = () => {
  const backend = "https://datalgo.herokuapp.com/";
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
      console.log(responseJson);
      if (responseJson.error) {
        let display = "";
        responseJson.desc.forEach((item) => {
          display += `${item.param} : ${item.msg}`;
        });
        setErr(display);
        setOpen(true);
      } else {
        console.log(responseJson);
        setDone(true);
      }
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
        backgroundImage: `url(${"https://cdn.pixabay.com/photo/2020/02/27/08/47/sunset-4883881_1280.jpg"})`,
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
          <label className="text-light h2" htmlFor="description">
            How we can improve ?
          </label>
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
