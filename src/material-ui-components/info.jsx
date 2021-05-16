import React from "react";

import SimpleTabs from "./tab";

export default function Info({ codeData }) {
  return (
    <>
      <h1>{codeData.name}</h1>
      <p className="lead text-justify">{codeData.intro}</p>
      <SimpleTabs codeData={codeData} />
    </>
  );
}
