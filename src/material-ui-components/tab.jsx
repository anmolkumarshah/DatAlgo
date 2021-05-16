import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Editor from "../components/code-editor/editor";
import Chip from "@material-ui/core/Chip";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs({ codeData }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="C++" {...a11yProps(0)} />
          <Tab label="Java" {...a11yProps(1)} />
          <Tab label="Python" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Editor language="c_cpp" value={codeData.cpp} theme="solarized_light" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Editor language="java" value={codeData.java} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Chip
          className="mb-3"
          color="primary"
          label="you can run your Python code"
        />
        <Editor
          language="python"
          value={codeData.python}
          theme="solarized_light"
        />
      </TabPanel>
      <Chip
        className="mb-3"
        color="secondary"
        label="click again on red icon or press Esc key to close 'Learn More' "
      />
    </div>
  );
}
