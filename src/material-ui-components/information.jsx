import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Info from "./info";
import FloatingActionButtonSize from "./floatingButton";

export default function Information() {
  const [state, setState] = React.useState({
    bottom: false,
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
    <div>
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
          <div className="p-5">
            <h1>Heading</h1>
            <Info />
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
