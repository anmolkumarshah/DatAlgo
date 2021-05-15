import React, { useEffect, useState } from "react";
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
import Code from "@material-ui/icons/Code";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Home from "@material-ui/icons/Home";
import Account from "@material-ui/icons/AccountBox";
import Face from "@material-ui/icons/Face";
import NewReleasesTwoTone from "@material-ui/icons/NewReleasesTwoTone";
import PinDrop from "@material-ui/icons/PinDrop";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SimpleAccordion from "./accordian";

import { Link, Route, Switch } from "react-router-dom";
import BinarySearch from "../components/search-algorithm/BinarySearch/binary-search";
import BubbleSort from "./../components/sorting-algorithm/bubble-sort/bubble-sort";
import InsertionSort from "../components/sorting-algorithm/insertion-sort/insertion-sort";
import SelectionSort from "../components/sorting-algorithm/selection-sort/selection-sort";
import QuickSort from "../components/sorting-algorithm/quick-sort/quick-sort";
import Homepage from "./../homepage/homepage";
import PathFinding from "./../components/path-finding/path-finding";
import BinaryTree from "../components/tree/BinaryTree";
import AVLTrees from "../components/avl-tree/AVLTrees";
import SingleLinkedList from "../components/singleLinkedList/singleLinkedList";
import Arr from "../components/array/Array";
import Editor from "../components/code-editor/editor";

import FeedbackForm from "../components/feedback-form/common/feedback";

import Stack from "../components/stack/Stack";
import SignupForm from "../components/feedback-form/common/signup";
import LoginForm from "../components/feedback-form/common/login";
import Logout from "../components/feedback-form/common/logout";
import LinearSearch from "../components/search-algorithm/LinearSearch/LinearSearch";
import Que from "../components/que/Que";
import SimpleMenu from "./menu";
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
    backgroundColor: "#0C6170",
    height: "70px",
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
    marginTop: "20px",
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

  const [login, setLogin] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogin(token);
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      setOpen(!open);
    }
  });

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [themeBack, setTheme] = useState("");

  const changeTheme = (t) => {
    setTheme(t);
  };

  return (
    <div
      className={classes.root}
      style={{
        height: "100vh",
        backgroundImage: `url(${themeBack})`,
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
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
          <ListItem button key={""}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "15px",
              }}
              to="/"
            >
              Home
            </Link>
          </ListItem>

          {!login ? (
            <>
              <ListItem button key={""}>
                <ListItemIcon>
                  <Account />
                </ListItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                  }}
                  to="/signup"
                >
                  Signup
                </Link>
              </ListItem>
              <ListItem button key={""}>
                <ListItemIcon>
                  <Face />
                </ListItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </ListItem>
            </>
          ) : (
            <ListItem button key={""}>
              <ListItemIcon>
                <PinDrop />
              </ListItemIcon>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "15px",
                }}
                to="/logout"
              >
                Logout
              </Link>
            </ListItem>
          )}
        </List>
        <Divider />
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <NewReleasesTwoTone />
            </ListItemIcon>
            <SimpleMenu
              name="Select Theme"
              array={[
                { title: "None", link: "" },
                {
                  title: "Paper",
                  link: "https://cdn.pixabay.com/photo/2016/06/20/13/42/paper-1468878_1280.jpg",
                },
                {
                  title: "Paper Old",
                  link: "https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131_1280.jpg",
                },
                {
                  title: "Textile : Jute",
                  link: "https://cdn.pixabay.com/photo/2017/11/04/21/09/textile-2918844_1280.jpg",
                },
                {
                  title: "Wall",
                  link: "https://cdn.pixabay.com/photo/2016/02/23/07/37/wall-1217083_1280.jpg",
                },
              ]}
              fun={changeTheme}
            />
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>
          <ListItem button key={""}>
            <ListItemIcon>
              <Code />
            </ListItemIcon>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "15px",
              }}
              to="/code-editor"
            >
              Online Code Editor
            </Link>
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>
          <SimpleAccordion
            name="Array"
            array={[{ target: "/array", name: "Array" }]}
          ></SimpleAccordion>

          <SimpleAccordion
            name="Stack"
            array={[{ target: "/stack", name: "Stack" }]}
          ></SimpleAccordion>

          <SimpleAccordion
            name="Queue"
            array={[{ target: "/queue", name: "Queue" }]}
          ></SimpleAccordion>

          <SimpleAccordion
            name="Linked List"
            array={[{ target: "/single-LL", name: "Single Linked List" }]}
          ></SimpleAccordion>
        </List>
        <Divider />
        <List>
          <Divider />
          <Divider />

          <SimpleAccordion
            name="Search Algorithms"
            array={[
              { target: "/LinearSearch", name: "Linear Search" },
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
            name="Tree Algorithm"
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
        <ListItem button key={""}>
          <ListItemIcon>
            <QuestionAnswer />
          </ListItemIcon>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "15px",
            }}
            to="/feedback"
          >
            Feedback
          </Link>
        </ListItem>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Switch>
          <Route path="/array" component={Arr} />
          <Route path="/stack" component={Stack} />
          <Route path="/queue" component={Que} />

          <Route path="/binary-search" component={BinarySearch} />
          <Route path="/LinearSearch" component={LinearSearch} />

          <Route path="/bubble-sort" component={BubbleSort} />
          <Route path="/insertion-search" component={InsertionSort} />
          <Route path="/selection-search" component={SelectionSort} />
          <Route path="/quick-search" component={QuickSort} />

          <Route path="/path-finding" component={PathFinding} />
          <Route path="/binary-tree" component={BinaryTree} />
          <Route path="/avl-tree" component={AVLTrees} />
          <Route path="/code-editor" component={Editor} />
          <Route path="/single-LL" component={SingleLinkedList} />

          <Route path="/signup" component={SignupForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/feedback" component={FeedbackForm} />
          <Route path="/logout" component={Logout} />

          <Route path="/" component={Homepage} />
        </Switch>
      </main>
    </div>
  );
}
