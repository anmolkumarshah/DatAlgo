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
];

const other = [
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
  {
    id: 4,
    name: "Nisarg Gandhewar",
    LinkedInUrl: "https://www.linkedin.com/in/shivam-grover-1aa14b169/",
  },
];

const sourceCode = [
  {
    id: 33,
    name: "Frontend",
    LinkedInUrl: "https://github.com/AnmolkumarShah/DatAlgo",
  },
  {
    id: 4,
    name: "Backend",
    LinkedInUrl: "https://github.com/AnmolkumarShah/DatAlgo-Backend",
  },
];

const tech = [
  {
    id: 33222222,
    name: "ReactJS",
  },
  {
    id: 423,
    name: "NodeJS",
  },
  {
    id: 44,
    name: "MongoDB",
  },
];

const Footer = () => {
  return (
    <>
      <div className="footer py-3 mt-5 mx-0">
        {/* <div className="footerLogo d-flex justify-content-center">
          <h1> DatAlgo</h1>
        </div> */}
        <div className="row mx-0">
          <div className="col-6">
            <div className="footerContent text-center">
              <h4 className="py-3">Designed & Developed By </h4>
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
              <h4 className="py-3">Co-ordinated By </h4>
              <ul className="members d-flex justify-content-center align-items-center">
                {other.map((memb, idx) => {
                  return (
                    <>
                      <Member
                        key={idx}
                        name={memb.name}
                        LinkedInUrl={memb.LinkedInUrl}
                      />
                      {idx < data.length ? (
                        <HiOutlineDotsVertical size={25} />
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="footerContent text-center">
              <h4 className="py-3">Source Code</h4>
              <ul className="members d-flex justify-content-center align-items-center">
                {sourceCode.map((memb, idx) => {
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
            </div>
            <div className="footerContent text-center">
              <h4 className="py-3">Technology Used</h4>
              <ul className="members d-flex justify-content-center align-items-center">
                {tech.map((memb, idx) => {
                  return (
                    <>
                      <Member key={idx} name={memb.name} LinkedInUrl={"/"} />
                      {idx < data.length ? (
                        <HiOutlineDotsVertical size={25} />
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="conpyRights text-white bg-danger">
        <p className="text-center m-0 lead">
          Made with <span>&#9829;</span> in India
        </p>
      </div>
    </>
  );
};

export default Footer;
