import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import InfoRounded from "@material-ui/icons/InfoRounded";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    position: "fixed",
    right: "10px",
    bottom: "5px",
    zIndex: "10000",
    backgroundColor: "red",
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtonSize({ click }) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Fab
          onClick={() => click("bottom")}
          color="secondary"
          aria-label="add"
          className={classes.margin}
        >
          <InfoRounded />
        </Fab>
      </div>
      <div></div>
    </div>
  );
}
