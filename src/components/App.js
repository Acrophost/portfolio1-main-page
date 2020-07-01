import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Location } from "@reach/router";

import "../styles/style.scss";
import Nav from "./Nav";
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

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
  const [location, setLocation] = useState("/");

  return (
    <div>
      <Nav location={location} setLocation={setLocation} />
      <Router>
        <Home default path="/" />
        <Project projects={projects} path="projects" />
        <About path="about" />
        <Contact path="contact" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
