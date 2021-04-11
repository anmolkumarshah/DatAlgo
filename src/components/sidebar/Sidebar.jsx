import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LinkedList from "../linkedlist/linkedlist";
import "./sidebar.css";
import BinarySearch from "./../search-algorithm/BinarySearch/binary-search";
import LinearSearch from "../search-algorithm/LinearSearch/linear-search";
import BubbleSort from "../sorting-algorithm/bubble-sort/bubble-sort";
import InsertionSort from "../sorting-algorithm/insertion-sort/insertion-sort";
import SelectionSort from "../sorting-algorithm/selection-sort/selection-sort";
import QuickSort from "../sorting-algorithm/quick-sort/quick-sort";
const Sidebar = () => {
  // state of menu-mobile
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{ zIndex: 10000 }}
        className={
          open ? "vertical-nav bg-white active" : "vertical-nav bg-white"
        }
        id="sidebar"
      >
        <div className="py-4 px-3 mb-4 bg-light">
          <div className="media d-flex align-items-center">
            {/* <!-- Image here --> */}
            <div className="media-body">
              <h4 className="m-0">DatAlgo</h4>
              <p className="font-weight-normal text-muted mb-0">
                Algorithm Visualizer
              </p>
            </div>
          </div>
        </div>

        <div className="input-section">
          {/* Custom Input */}
          <p className="text-gray font-weight-bold text-uppercase px-3 small pb-2 mb-0">
            Custom Input
          </p>
          <form className="custom-input px-3 pb-4">
            <input type="text" name="user-input" id="user-input" />
            <button className="submitInput" type="submit">
              <FaChevronRight className="ml-2" />
            </button>
          </form>
        </div>

        {/* Dynamic Buttons */}
        <ul className="nav flex-column bg-white mb-0">
          <li className="nav-item">
            <a className="nav-link text-dark bg-light">Button</a>
          </li>
        </ul>
        {/* ---------------------- */}
      </div>

      {/* <!-- Pages --> */}
      <div className="page-contnet p-5" id="content">
        <button
          style={{ zIndex: 10000 }}
          id="sidebarCollapse"
          type="button"
          className="btn btn-light bg-warning rounded-pill shadow-sm px-3"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaChevronLeft /> : <FaChevronRight />}
          <small className="text-uppercase font-weight-bold"></small>
        </button>
        {/* <LinkedList /> */}
        {/* <BinarySearch /> */}
        {/* <LinearSearch /> */}

        {/* <BubbleSort /> */}
        {/* <InsertionSort /> */}
        <SelectionSort />

        {/* <QuickSort /> */}
      </div>
    </>
  );
};

export default Sidebar;
