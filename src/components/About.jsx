import React from "react";

const About = (props) => {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "#eee",
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleTheme = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "#eee",
  //       backgroundColor: "#3b3b3b",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "#eee",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#3b3b3b",
    backgroundColor: props.mode === "dark" ? "#3b3b3b" : "white",
  };
  return (
    <div className="container my-3">
      <h3 className="my-3">About Us</h3>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or any text related
              work.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              Textutils reports the number of words and characters. Thus it is
              suitable for writing text with word/character limit.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browser such as
              Chrome, FireFox, Internet Explorer, Safari, Opera. It suits to
              cunt characters in facebook, blog, books, excel documents, pdf
              documents, essay, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-3">
        <button
          id="btn"
          type="button"
          class="btn btn-primary"
          onClick={toggleTheme}
        >
          {btnText}
        </button>
      </div> */}
    </div>
  );
};

export default About;
