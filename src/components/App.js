import React from "react";
import { render } from "react-dom";
import "../styles/style.scss";
import Nav from "./Nav";
import Project from "./Project";
import About from "./About";
import ArrowStraight from "../images/arrow1.svg";

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
      <Nav />
      <div className="head-module">
        <div className="title-container">
          <h1>Hello, I'm Ania a front-end developer.</h1>
          <div className="page-explore">
            <p>Scroll down to explore!</p>
            <ArrowStraight className="head-arrow" />
          </div>
        </div>
      </div>
      <Project projects={projects} />
      <About />
    </div>
  );
};

render(<App />, document.getElementById("root"));
