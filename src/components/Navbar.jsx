import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container">
          <div className="navbar-brand">
            <h4>{props.title}</h4>
          </div>
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a> */}
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    {props.aboutText}
                  </Link>
                </li>
              </ul>

              {/* <div className="d-flex">
                <div
                  className="bg-primary rounded-1 mx-2"
                  onClick={() => {
                    props.switchTheme("primary");
                  }}
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                ></div>
                <div
                  className="bg-danger rounded-1 mx-2"
                  onClick={() => {
                    props.switchTheme("danger");
                  }}
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                ></div>
                <div
                  className="bg-success rounded-1 mx-2"
                  onClick={() => {
                    props.switchTheme("success");
                  }}
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                ></div>
                <div
                  className="bg-warning rounded-1 mx-2"
                  onClick={() => {
                    props.switchTheme("warning");
                  }}
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                ></div>
                <div
                  className="bg-dark rounded-1 mx-2"
                  onClick={() => {
                    props.switchTheme("dark");
                  }}
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                ></div>
                <div
                  className="bg-light rounded-1 mx-2"
                  onClick={() => {
                    props.switchTheme("light");
                  }}
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                ></div>
              </div> */}

              <div
                className={`form-check form-switch mx-1 text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => {
                    props.switchTheme(null);
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "This is title from default props",
  aboutText: "This is about from default props",
};
