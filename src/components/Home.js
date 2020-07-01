import React from "react";
import ArrowStraight from "../images/arrow1.svg";

const Home = () => {
  return (
    <div className="head-module">
      <div className="title-container">
        <h1>Hello, I'm Ania a front-end developer.</h1>
        <div className="page-explore">
          <p>Scroll down to explore!</p>
          <ArrowStraight className="head-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Home;
