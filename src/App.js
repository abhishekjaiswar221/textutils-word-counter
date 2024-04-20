import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [placeholderColor, setPlaceholderColor] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-warning");
  // };

  const colorRef = useRef();
  const toggleTheme = (bscls) => {
    // removeBodyClasses();
    // document.body.classList.add("bg-" + bscls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3b3b3b";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
      // document.title = "TextUtils-Dark Mode";
      setPlaceholderColor(!placeholderColor);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
      // document.title = "TextUtils-Light Mode";
      setPlaceholderColor(false);
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          switchTheme={toggleTheme}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForms
                showAlert={showAlert}
                heading="Try-TextUtils Text Manipulator"
                mode={mode}
                placeholderColor={placeholderColor}
                colorRef={colorRef}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
