import React from "react";
import Poly from "../images/poly.svg";

const About = () => {
  return (
    <div className="about-module">
      <Poly className="background-poly" />
      <h2>About</h2>
      <div className="about-info">
        <p>I'm a 24 year old junior developer from Warsaw, Poland.</p>
        <p>Always happy to learn new things and challenge myself.</p>
        <p>
          Currently unemployed, so if you have any interesting projects or
          opportunities, please let me know! :)
        </p>
      </div>
      <div className="about-technology"></div>
      <p>Currently known technologies:</p>
      <div className="about-technology__known"></div>
      <p>Learning:</p>
      <div className="about-technology__learning"></div>
    </div>
  );
};

export default About;
