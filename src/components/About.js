import React from "react";

const AboutElement = React.forwardRef((props, ref) => (
  <div className="about-module" ref={ref} {...props}></div>
));

const About = (props) => {
  props.refs.about = React.createRef();

  return (
    <AboutElement ref={props.refs.about}>
      <h2>About</h2>
      <div className="about__img-container">
        <img
          src="../../src/images/mahface.jpg"
          alt="Anna's face"
          className="about__my-img"
        />
      </div>
      <div className="about__content">
        <div className="about__info">
          <p>I'm a 24 year old junior developer from Warsaw, Poland.</p>
          <p>Always happy to learn new things and challenge myself.</p>
          <p>
            If you have any interesting projects or opportunities, please let me
            know! :)
          </p>
          <div className="about__technology">
            <p>I work with the use of:</p>
            <ul>
              <li>HTML</li>
              <li>CSS (SCSS)</li>
              <li>JS</li>
              <li>React</li>
              <li>Webpack</li>
              <li>Npm</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>RWD</li>
            </ul>
          </div>
        </div>
      </div>
    </AboutElement>
  );
};

export default About;
