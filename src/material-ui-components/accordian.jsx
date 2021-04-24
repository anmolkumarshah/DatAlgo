import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Chip from "@material-ui/core/Chip";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({ name, array, type }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List component="nav" aria-label="secondary mailbox folders">
            {type ? (
              <>
                {array.map((item) => {
                  return (
                    <ListItem>
                      <LogOption type={item.type} value={item.value} />
                    </ListItem>
                  );
                })}
              </>
            ) : (
              array.map((item) => {
                return (
                  <ListItem button>
                    <Option target={item.target} name={item.name} />
                  </ListItem>
                );
              })
            )}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const LogOption = ({ type, value }) => {
  return (
    <div>
      <Chip size="small" label={"type"} />
      <Chip size="small" clickable color="primary" label={"type"} />
    </div>
  );
};

const Option = ({ target, name }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        padding: "0px 15px",
        fontSize: "20px",
      }}
      to={target}
    >
      {name}
    </Link>
  );
};
