import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

const TextForms = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (eventObj) => {
    setText(eventObj.target.value);
  };

  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Text is converted to uppercase !", "success");
  };

  const handelLoClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Text is converted to lowercase !", "success");
  };

  const handleClear = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Textarea is cleared !", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard !", "success");
  };

  const handleExtraSpaces = () => {
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
            className={`form-control ${
              props.placeholderTextColor ? "placeholder-color" : ""
            }`}
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

        <div>
          <Button
            disabled={text.length === 0}
            className="rounded-1 mx-1 my-1"
            variant="primary"
            onClick={handleUpClick}
          >
            Convert To UpperCase
          </Button>
          <Button
            disabled={text.length === 0}
            className="rounded-1 mx-1 my-1"
            variant="primary"
            onClick={handelLoClick}
          >
            Convert to LowerCase
          </Button>
          <Button
            disabled={text.length === 0}
            className="rounded-1 mx-1 my-1"
            variant="primary"
            onClick={handleCopy}
          >
            Copy Text
          </Button>
          <Button
            disabled={text.length === 0}
            className="rounded-1 mx-1 my-1"
            variant="primary"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </Button>
          <Button
            disabled={text.length === 0}
            className="rounded-1 mx-1 my-1"
            variant="primary"
            onClick={handleClear}
          >
            Clear Textarea
          </Button>
        </div>
      </div>

      <div className="container my-4">
        <h3>Summary of your text</h3>
        <div className="d-flex gap-5">
          <h5>{text.trim().length} Characters</h5>
          <h5>
            {/* {
              text
                .replace(/\n/g, " ")
                .split(" ")
                .filter((value) => value !== "").length
            }{" "} */}
            {text.split(/\s+/).filter((value) => value !== "").length} Words
          </h5>
          <h5>
            {0.03 * text.split(" ").filter((value) => value !== "").length}{" "}
            Minutes to read
          </h5>
        </div>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview !"}</p>
      </div>
    </>
  );
};

export default TextForms;
