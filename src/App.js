import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleTheme1 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b1b1b";
      document.body.style.color = "white";
      showAlert("Dark Mode 1 is enabled", "primary");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "white";
      showAlert("Light Mode is enabled", "primary");
      document.title = "TextUtils-Light Mode";
    }
  };
  const toggleTheme2 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b2b2b";
      document.body.style.color = "white";
      showAlert("Dark Mode 2 is enabled", "warning");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode is enabled", "warning");
      document.title = "TextUtils-Light Mode";
    }
  };

  const toggleTheme3 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3b3b3b";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          switchTheme1={toggleTheme1}
          switchTheme2={toggleTheme2}
          switchTheme3={toggleTheme3}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForms
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
