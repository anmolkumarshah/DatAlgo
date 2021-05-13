import React from "react";
import Member from "./Member";
import { HiOutlineDotsVertical } from "react-icons/hi";

const data = [
  {
    id: 1,
    name: "AnmolKumar Shah",
    LinkedInUrl: "https://www.linkedin.com/in/anmolkumar-shah-a55694170/",
  },
  {
    id: 2,
    name: "Surendra Jangid",
    LinkedInUrl: "https://www.linkedin.com/in/cse-surendra-jangid",
  },
  {
    id: 3,
    name: "Harshit Barde",
    LinkedInUrl: "https://www.linkedin.com/in/harshit-a-barde-b783861b8/",
  },
  {
    id: 4,
    name: "Shivam Grover",
    LinkedInUrl: "https://www.linkedin.com/in/shivam-grover-1aa14b169/",
  },
];

const Footer = () => {
  return (
    <>
      <div className="footer py-3 mt-5">
        <div className="footerLogo d-flex justify-content-center">
          <h1> DatAlgo</h1>
        </div>
        <div className="footerContent text-center">
          <p className="py-3">Designed & Developed By </p>
          <ul className="members d-flex justify-content-center align-items-center">
            {data.map((memb, idx) => {
              return (
                <>
                  <Member
                    key={idx}
                    name={memb.name}
                    LinkedInUrl={memb.LinkedInUrl}
                  />
                  {idx < data.length - 1 ? (
                    <HiOutlineDotsVertical size={25} />
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </ul>
          <p className="pt-4" style={{ color: "yellow", fontWeight: "bold" }}>
            At
          </p>
          <p> S. B. Jain Institute Of Technology , Management & Research </p>
        </div>
      </div>

      <div className="conpyRights text-white bg-dark py-2">
        <p className="text-center m-0">
          <span>&#169;</span>
          2021 All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
