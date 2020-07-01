import React from "react";

const About = () => {
  return (
    <div className="about-module">
      <h2>About</h2>
      <img
        src="../../src/images/mahface.jpg"
        alt="Anna's face"
        className="about-img"
      />
      <div className="about-content">
        <div className="about-info">
          <p>I'm a 24 year old junior developer from Warsaw, Poland.</p>
          <p>Always happy to learn new things and challenge myself.</p>
          <p>
            If you have any interesting projects or opportunities, please let me
            know! :)
          </p>
          <p>Currently known technologies:</p>
          <div className="about-technology__known"></div>
          <p>Learning:</p>
          <div className="about-technology__learning"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
