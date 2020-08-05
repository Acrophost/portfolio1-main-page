import React, { useState, useEffect } from "react";
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
    codeUrl: "/#",
    liveUrl: "/#",
  },
];

const refs = [];

const App = () => {
  const [location, setLocation] = useState("/");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    window.setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <div class="loader-module">
      <img class="loader-svg" src="../src/images/loader.svg" />
    </div>
  ) : (
    <div>
      <Nav location={location} setLocation={setLocation} refs={refs} />
      <Home refs={refs} />
      <Project projects={projects} refs={refs} location={location} />
      <About refs={refs} location={location} />
      <Contact refs={refs} location={location} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
