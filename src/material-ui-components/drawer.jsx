import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SimpleAccordion from "./accordian";

import { Route, Switch } from "react-router-dom";
import BinarySearch from "../components/search-algorithm/BinarySearch/binary-search";
import LinearSearch from "./../components/search-algorithm/LinearSearch/linear-search";
import BubbleSort from "./../components/sorting-algorithm/bubble-sort/bubble-sort";
import InsertionSort from "../components/sorting-algorithm/insertion-sort/insertion-sort";
import SelectionSort from "../components/sorting-algorithm/selection-sort/selection-sort";
import QuickSort from "../components/sorting-algorithm/quick-sort/quick-sort";
import Homepage from "./../homepage/homepage";
import PathFinding from "./../components/path-finding/path-finding";
import BinaryTree from "../components/tree/BinaryTree";
import AVLTrees from "../components/avl-tree/AVLTrees";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function DrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            DatAlgo - A tool to Visualize Data Structure & Algorithm
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Divider />
        <List>
          <SimpleAccordion
            name="Search Algorithms"
            array={[
              { target: "/linear-search", name: "Linear Search" },
              { target: "/binary-search", name: "Binary Search" },
            ]}
          ></SimpleAccordion>

          <SimpleAccordion
            name="Sorting Algorithms"
            array={[
              { target: "/bubble-sort", name: "Bubble Sort" },
              { target: "/insertion-search", name: "Insertion Sort" },
              { target: "/selection-search", name: "Selection Sort" },
              { target: "/quick-search", name: "Quick Sort" },
            ]}
          ></SimpleAccordion>

          <SimpleAccordion
            name="Binary & AVL Tree"
            array={[
              { target: "/binary-tree", name: "Binary Tree & Traversals" },
              { target: "/avl-tree", name: "AVL Tree" },
            ]}
          ></SimpleAccordion>

          <SimpleAccordion
            name="Path Finding Algorithm"
            array={[{ target: "/path-finding", name: "Dijkstra Algorithm" }]}
          ></SimpleAccordion>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Switch>
          <Route path="/binary-search" component={BinarySearch} />
          <Route path="/linear-search" component={LinearSearch} />

          <Route path="/bubble-sort" component={BubbleSort} />
          <Route path="/insertion-search" component={InsertionSort} />
          <Route path="/selection-search" component={SelectionSort} />
          <Route path="/quick-search" component={QuickSort} />
          <Route path="/path-finding" component={PathFinding} />
          <Route path="/binary-tree" component={BinaryTree} />
          <Route path="/avl-tree" component={AVLTrees} />

          <Route path="/" component={Homepage} />
        </Switch>
      </main>
    </div>
  );
}
