import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_light";
import Output from "../../material-ui-components/output";

const Editor = ({
  theme = "monokai",
  language = "python",
  value = "Enter Code here",
}) => {
  const backend = "https://datalgo.herokuapp.com/";
  const [code, setCode] = useState("");
  const changeHandler = (e) => {
    setCode(e);
  };
  const [open, setOpen] = useState(false);
  const [output, setOutput] = useState("");
  const [title, setTitle] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    setOpen(false);
    const t = localStorage.getItem("token");
    setToken(t);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const runHandler = async () => {
    const url = backend + "interprete/run";
    const method = "POST";
    try {
      const result = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
          sourcecode: code,
        }),
      });
      const responseJson = await result.json();

      if (responseJson.error) {
        setOutput(responseJson.message + ", Please login before running code");
        setOpen(true);
        setTitle("You get an error");
        return;
      }
      setOutput(responseJson.output.stdout);
      setTitle("Code Output");
      setOpen(true);
    } catch (e) {
      setTitle("You get an error");
      setOutput(e.message);
      setOpen(true);
    }
  };
  return (
    <>
      <Output
        open={open}
        handleClose={handleClose}
        title={title}
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
      {language === "python" && (
        <button onClick={runHandler} className="btn btn-dark mt-1">
          Run
        </button>
      )}
    </>
  );
};

export default Editor;
