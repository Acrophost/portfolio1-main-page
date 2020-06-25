import React from "react";
import { render } from "react-dom";
import "../style.scss";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
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
  );
};

render(<App />, document.getElementById("root"));
