import React from "react";
import ArrowStraight from "../images/arrow1.svg";
import FacebookLogo from "../images/fblogo.svg";
import GitLogo from "../images/gitlogo.svg";
import LinkedInLogo from "../images/linlogo.svg";
import Mail from "../images/mail.svg";

const Home = () => {
  return (
    <div className="head-module">
      <div className="title-container">
        <h1>Hello, I'm Ania a front-end developer.</h1>
      </div>
      <div className="icon-container">
        <a href="https://www.facebook.com/ania.piasecka.980">
          <FacebookLogo />
        </a>
        <a href="https://www.linkedin.com/in/anna-piasecka-651119183/">
          <LinkedInLogo />
        </a>
        <a href="https://github.com/Acrophost?tab=repositories">
          <GitLogo />
        </a>
        <a href="mailto: anna.piasecka133@gmail.com">
          <Mail />
        </a>
      </div>
      <div className="page-explore">
        <p>Scroll down to explore!</p>
        <ArrowStraight className="head-arrow" />
      </div>
    </div>
  );
};

export default Home;
