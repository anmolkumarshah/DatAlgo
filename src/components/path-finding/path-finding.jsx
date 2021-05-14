import React, { useState, useEffect } from "react";
import Node from "./Node";
import "./main-style.css";
import { dijkstra, getNodesInShortestPathOrder } from "./algorithms/dijkstra";
import Button from "@material-ui/core/Button";

import AlertDialog from "../../material-ui-components/alertDialog";
import Information from "../../material-ui-components/information";

const PathFinding = () => {
  const [nodes, setNodes] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  const [START_NODE_ROW, SET_START_NODE_ROW] = useState(3);
  const [START_NODE_COL, SET_START_NODE_COL] = useState(5);
  const [FINISH_NODE_ROW, SET_FINISH_NODE_ROW] = useState(10);
  const [FINISH_NODE_COL, SET_FINISH_NODE_COL] = useState(35);

  const ALL_ROWS = 23;
  const ALL_COLS = 58;

  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className +=
          " node node-visited";
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className +=
          " node node-shortest-path";
      }, 50 * i);
    }
  };

  const visualizeDijkstra = () => {
    const startNode = nodes[START_NODE_ROW][START_NODE_COL];
    const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(nodes, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(nodes, row, col);
    setNodes(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(nodes, row, col);
    setNodes(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  useEffect(() => {
    init();
  }, []);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const init = () => {
    const vertical = [];
    for (let i = 0; i < ALL_ROWS; i++) {
      const horizontal = [];
      for (let j = 0; j < ALL_COLS; j++) {
        const currentNode = {
          row: i,
          col: j,
          isStart: i === START_NODE_ROW && j === START_NODE_COL,
          isTarget: i === FINISH_NODE_ROW && j === FINISH_NODE_COL,
          distance: Infinity,
          isVisited: false,
          isWall: false,
          previousNode: null,
        };
        horizontal.push(currentNode);
      }
      vertical.push(horizontal);
    }
    setNodes(vertical);
  };

  const handleClear = () => {};

  return (
    <div
      className="mt-3 d-flex align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <div className="nodes">
        {/* <Button className="btn btn-primary" onClick={handleClear}>
        Clear
      </Button>

      <FormGroup>
        <FormControlLabel
          control={<Switch checked={checked} onChange={toggleChecked} />}
          label={checked ? "Move Source" : "Move Target"}
        />
      </FormGroup> */}

        <AlertDialog
          open={open}
          handleClose={handleClose}
          title="Welcome to Path Finding"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi molestiae accusamus? Quis tempore tempora at distinctio explicabo cumque amet, perferendis rem iste qui voluptate maxime sed obcaecati inventore accusamus."
        />
        <Information />
        <div className="over-cover">
          {nodes.map((item, idx) => {
            return (
              <div key={idx} className="nodes">
                {item.map((n, idx) => {
                  return (
                    <Node
                      key={idx}
                      isStart={n.isStart}
                      isTarget={n.isTarget}
                      row={n.row}
                      col={n.col}
                      isWall={n.isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => handleMouseDown(row, col)}
                      onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                      onMouseUp={() => handleMouseUp()}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="controlls-container">
          <div className="row">
            <div className="col">
              <Button
                className="Button"
                variant="outlined"
                onClick={visualizeDijkstra}
              >
                Start
              </Button>
            </div>
            <form className="col">
              <Button
                type="submit"
                className="Button"
                variant="outlined"
                onClick={handleClear}
              >
                Clear
              </Button>
            </form>
            <div className="col">
              <img alt="target" src="./images/source.png"></img>Initial Position
            </div>
            <div className="col">
              <img alt="target" src="./images/target.jpg"></img>
              Destination
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathFinding;
