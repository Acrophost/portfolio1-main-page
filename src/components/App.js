import React, { useState } from "react";
import { render } from "react-dom";

import "../styles/style.scss";
import Nav from "./Nav";
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

const projects = [
  {
    name: "XYZ",
    description: (
      <div>
        <p>This is placeholder for description.</p>{" "}
        <p>There will be an actual one once I will make some.</p>{" "}
        <p>Used technologies: ...</p>
      </div>
    ),
    src: "xyz",
    alt: "xyz",
    srcMobile: "xyz",
    altMobile: "mobile xyz",
    codeUrl: "/#",
    liveUrl: "/#",
  },
  {
    name: "ABC",
    description: (
      <div>
        <p>This is placeholder for description.</p>{" "}
        <p>There will be an actual one once I will make some.</p>{" "}
        <p>Used technologies: ...</p>
      </div>
    ),
    src: "abc",
    alt: "abc",
    srcMobile: "abc",
    altMobile: "mobile abc",
    codeUrl: "/#",
    liveUrl: "/#",
  },
  {
    name: "ABCD",
    description: (
      <div>
        <p>This is placeholder for description.</p>{" "}
        <p>There will be an actual one once I will make some.</p>{" "}
        <p>Used technologies: ...</p>
      </div>
    ),
    src: "abcd",
    alt: "abcd",
    srcMobile: "abcd",
    altMobile: "mobile abcd",
    codeUrl: "/#",
    liveUrl: "/#",
  },
];

const refs = [];

const App = () => {
  const [location, setLocation] = useState("/");

  return (
    <div>
      <Nav location={location} setLocation={setLocation} refs={refs} />
      <Home refs={refs} />
      <Project projects={projects} refs={refs} />
      <About refs={refs} />
      <Contact refs={refs} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
