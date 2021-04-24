import React, { useState, useEffect } from "react";
import Node from "./Node";
import "./main-style.css";
import { dijkstra, getNodesInShortestPathOrder } from "./algorithms/dijkstra";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

const PathFinding = () => {
  const [nodes, setNodes] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

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
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  };

  const visualizeDijkstra = () => {
    const startNode = nodes[START_NODE_ROW][START_NODE_COL];
    const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(nodes, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    // console.log(visitedNodesInOrder);
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
    const vertical = [];
    for (let i = 0; i < 20; i++) {
      const horizontal = [];
      for (let j = 0; j < 50; j++) {
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
  }, []);

  return (
    <div className="nodes">
      <button className="btn btn-primary" onClick={visualizeDijkstra}>
        Start
      </button>
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
  );
};

export default PathFinding;
