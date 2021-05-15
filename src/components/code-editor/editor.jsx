import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-terminal";

import Output from "../../material-ui-components/output";
import "./editor.css";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";

const Editor = ({ language = "python", value }) => {
  const backend = "https://datalgo.herokuapp.com/";
  const [code, setCode] = useState("");
  const changeHandler = (e) => {
    setCode(e);
  };
  const [open, setOpen] = useState(false);
  const [output, setOutput] = useState("");
  const [title, setTitle] = useState("");
  const [token, setToken] = useState(null);
  const [theme, setTheme] = useState("terminal");
  const [wait, setWait] = useState(false);

  useEffect(() => {
    setOpen(false);
    const t = localStorage.getItem("token");
    setToken(t);

    if (value) {
      setCode(value);
    }

    language === "python" &&
      toast.info("Only supports Python Programming language");
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const runHandler = async () => {
    setWait(true);
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
        setWait(false);
        return;
      }
      setOutput(responseJson.output.stdout);
      setTitle("Code Output");
      setWait(false);
      setOpen(true);
    } catch (e) {
      setTitle("You get an error");
      setOutput(e.message);
      setWait(false);
      setOpen(true);
    }
  };
  const themeHandler = (e) => {
    setTheme(e.target.value);
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

      <div className="editor-container">
        <div className="form-group">
          <label className="text-dark" htmlFor="exampleFormControlSelect2">
            Theme
          </label>
          <select
            onChange={themeHandler}
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>monokai</option>
            <option>solarized_light</option>
            <option>nord_dark</option>
            <option>xcode</option>
            <option>twilight</option>
            <option>tomorrow_night_blue</option>
            <option selected>terminal</option>
          </select>
        </div>
        <AceEditor
          className="editor-item"
          placeholder=""
          mode={language}
          theme={theme}
          width="100%"
          name="blah2"
          onChange={changeHandler}
          fontSize={14}
          showPrintMargin={true}
          // showGutter={true}
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
          <button
            onClick={runHandler}
            className="btn btn-dark mt-1 editor-item"
          >
            {wait ? <CircularProgress /> : "Run"}
          </button>
        )}
      </div>
    </>
  );
};

export default Editor;
