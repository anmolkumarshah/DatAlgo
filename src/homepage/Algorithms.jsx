import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    backgroundColor: "#DEE2EC",
    transition: "all 0.5s ease-out",

    "&:hover": {
      boxShadow: "0 1.2rem 1.2rem rgb(0 0 0 / 15%)",
      backgroundColor: "#0C6170",
      transition: "all 0.5s ease-in",
    },
  },
  media: {
    minHeight: 220,
  },

  colorHeading: {
    maxHeight: 220,

    color: "black",
    "&:hover": {
      // backgroundColor: "#f8f3eb",
      color: "white",
      border: "1px solid #3f51b5",
    },
  },
});

export default function Algorithms(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <NavLink
        to={props.url}
        className={classes.colorHeading}
        style={{ textDecoration: "none" }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
      {/* <CardActions>
        <Button variant="outlined" size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
