import React from "react";
import { ReactComponent as ArrowStraight } from "../images/arrow1.svg";
import { ReactComponent as FacebookLogo } from "../images/fblogo.svg";
import { ReactComponent as GitLogo } from "../images/gitlogo.svg";
import { ReactComponent as LinkedInLogo } from "../images/linlogo.svg";
import { ReactComponent as Mail } from "../images/mail.svg";

const HomeElement = React.forwardRef((props, ref) => (
  <div className="home-module" ref={ref} {...props}></div>
));

const Home = (props) => {
  props.refs.home = React.createRef();

  return (
    <HomeElement ref={props.refs.home}>
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
    </HomeElement>
  );
};

export default Home;
