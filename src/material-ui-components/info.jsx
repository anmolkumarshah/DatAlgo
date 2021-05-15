import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import SimpleTabs from "./tab";

export default function Info({ codeData }) {
  return (
    <>
      <h1>{codeData.name}</h1>
      <p>{codeData.intro}</p>
      <SimpleTabs codeData={codeData} />
    </>
  );
}
