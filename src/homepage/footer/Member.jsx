import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Member = (props) => {
  return (
    <li key={props.key}>
      <a href={props.LinkedInUrl}>
        {/* <FaLinkedinIn className="linkedin-icon" size={30} /> */}

        {props.name}
      </a>
    </li>
  );
};

export default Member;
