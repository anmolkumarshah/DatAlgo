import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_light";
import AlertDialog from "../../material-ui-components/alertDialog";
import Output from "../../material-ui-components/output";

const Editor = ({
  theme = "monokai",
  language = "python",
  value = "Enter Code here",
}) => {
  const [code, setCode] = useState("");
  const changeHandler = (e) => {
    setCode(e);
  };
  const [open, setOpen] = useState(false);
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const runHandler = async () => {
    const url = "http://localhost:8080/interprete/run";
    const method = "POST";
    try {
      const result = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourcecode: code,
        }),
      });
      const responseJson = await result.json();
      console.log(responseJson);
      setOutput(responseJson.output.stdout);
      setOpen(true);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Output
        open={open}
        handleClose={handleClose}
        title="Code Output"
        content={output}
        code={true}
      />
      <AceEditor
        placeholder="Placeholder Text"
        mode={language}
        theme={theme}
        width="1300px"
        name="blah2"
        onLoad={() => {}}
        onChange={changeHandler}
        fontSize={15}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        defaultValue={value}
        value={code}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <button onClick={runHandler} className="btn btn-dark mt-1">
        Run
      </button>
    </>
  );
};

export default Editor;
