import React, { useState } from "react";

export default function TextForm(props) {
  function camelCase(str) {
    // Using replace method with regEx
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }
  const copyTextToClipboard = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  function TitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  const handleUpClick = () => {
    // console.log('uppercase was clicked'+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };
  const handleLoClick = () => {
    // console.log('uppercase was clicked'+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    let newText='';
    setText(newText);
    props.showAlert("Cleared the input","success");
  };
  const handleTCClick = () => {
    let newText = TitleCase(text);
    setText(newText);
    props.showAlert("Converted to Titlecase", "success");
  };
  const handleCopyClick = () => {
    copyTextToClipboard(text);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleCPClick = () => {
    let newText = camelCase(text);
    setText(newText);
    props.showAlert("Converted to Camelcase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            placeholder="Enter Text here.."
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
          <div className="container my-3"></div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert To Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCPClick}>
            Convert to camelcase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
            Copy to clipboard
          </button>
          <button className="btn btn-primary mx-2" onClick={handleTCClick}>
            Convert to Titlecase
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} word and {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes taken by reading this.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
