import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    transition: "all 0.5s ease-out",
  },
  titleColorBg: {
    backgroundColor: "#275070",
    color: "yellow",
    textAlign: "center",
    fontWeight: "bold",
  },
  contentColor: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
});

export default function Warning({ open, handleClose, title, content }) {
  const classes = useStyle();

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"xs"}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
    >
      <div className={classes.titleColorBg}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            className={classes.contentColor}
            id="alert-dialog-description"
          >
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            className={classes.titleColorBg}
            autoFocus
          >
            ok
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
