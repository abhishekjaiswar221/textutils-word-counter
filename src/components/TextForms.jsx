import React, { useState } from "react";
import { Button } from "react-bootstrap";

const TextForms = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (eventObj) => {
    console.log(eventObj);
    // console.log("On Change");
    setText(eventObj.target.value);
  };

  const handleUpClick = () => {
    console.log("Upper case was clicked" + " " + text);
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Text is converted to uppercase !", "success");
  };

  const handelLoClick = () => {
    console.log("Lower case was clicked" + text);
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Text is converted to lowercase !", "success");
  };

  const handleClear = () => {
    console.log("On Clear");
    let clearText = "";
    setText(clearText);
    props.showAlert("Textarea is cleared !", "success");
  };

  const handleCopy = () => {
    console.log("On Copy");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard !", "success");
  };

  const handleExtraSpaces = () => {
    console.log("On Removing Extra Spaces");
    let extraSpace = text.split(/[ ]+/);
    setText(extraSpace.join(" "));
    props.showAlert("Extra spaces removed !", "success");
  };

  return (
    <>
      <div className="container my-3">
        <h3>{props.heading}</h3>

        <div className="my-4">
          <textarea
            className="form-control"
            id="myBox"
            rows="20"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter your text"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#3b3b3b",
              color: props.mode === "light" ? "black" : "white",
            }}
          />
        </div>

        <div className="d-flex gap-5">
          <Button
            className="rounded-1"
            variant="primary"
            onClick={handleUpClick}
          >
            Convert To UpperCase
          </Button>
          <Button
            className="rounded-1"
            variant="success"
            onClick={handelLoClick}
          >
            Convert to LowerCase
          </Button>
          <Button className="rounded-1" variant="info" onClick={handleClear}>
            Clear Textarea
          </Button>
          <Button className="rounded-1" variant="warning" onClick={handleCopy}>
            Copy Text
          </Button>
          <Button
            className="rounded-1"
            variant="dark"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </Button>
        </div>
      </div>

      <div className="container my-4">
        <h3>Summary of your text</h3>
        {/* <h5>
          {text.split(" ").length} Words and {text.length} Characters
        </h5> */}
        <h5>{text.trim().length} Characters</h5>
        <h5>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          Words
        </h5>
        <h5>{0.03 * text.split(" ").length} Minutes to read</h5>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter the text to preview"}</p>
      </div>
    </>
  );
};

export default TextForms;
