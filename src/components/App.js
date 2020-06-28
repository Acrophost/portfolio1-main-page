import React from "react";
import { render } from "react-dom";
import "../styles/style.scss";
import Nav from "./Nav";
import Project from "./Project";

const projects = [
  {
    src: "xyz",
    alt: "xyz",
    srcMobile: "xyz",
    altMobile: "mobile xyz",
    codeUrl: "/#",
    liveUrl: "/#",
  },
  {
    src: "abc",
    alt: "abc",
    srcMobile: "abc",
    altMobile: "mobile abc",
    codeUrl: "/#",
    liveUrl: "/#",
  },
  {
    src: "abc",
    alt: "abc",
    srcMobile: "abc",
    altMobile: "mobile abc",
    codeUrl: "/#",
    liveUrl: "/#",
  },
];

const App = () => {
  return (
    <div>
      <div className="top-container">
        <Nav />
        <div className="title-container">
          <h1>
            Hello, I'm Ania
            <br />a front-end
            <br />
            developer
          </h1>
        </div>
      </div>
      <Project projects={projects} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
