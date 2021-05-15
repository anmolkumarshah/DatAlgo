import React, { useEffect, useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Info from "./info";
import FloatingActionButtonSize from "./floatingButton";
import { Link } from "react-router-dom";

export default function Information({ codeData }) {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  });

  const toggleDrawer = (anchor) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    let prev = state.bottom;
    setState({ ...state, [anchor]: !prev });
  };

  return (
    <React.Fragment key={"bottom"}>
      <FloatingActionButtonSize
        click={toggleDrawer("bottom", true)}
        value={state.bottom}
      />
      <SwipeableDrawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        {!token ? (
          <div className="p-5">
            <h1 className="display-4">Please login to view this content</h1>
            <button className="ml-2 btn btn-info btn-lg">
              <Link className="text-light" to="/login">
                Login
              </Link>
            </button>
          </div>
        ) : (
          <div className="p-5">
            <Info codeData={codeData} />
          </div>
        )}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
