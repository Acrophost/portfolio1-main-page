import React from "react";
import { ReactComponent as FacebookLogo } from "../images/fblogo.svg";
import { ReactComponent as GitLogo } from "../images/gitlogo.svg";
import { ReactComponent as LinkedInLogo } from "../images/linlogo.svg";

const ContactElement = React.forwardRef((props, ref) => (
  <div ref={ref} {...props}></div>
));

const Contact = (props) => {
  props.refs.contact = React.createRef();

  return (
    <ContactElement
      ref={props.refs.contact}
      className={
        props.location == "contact" ? "contact-module active" : "contact-module"
      }
    >
      <h2>Contact</h2>
      <div className="contact__content">
        <p>
          Having any interesting opportunities for me? Or maybe just want to say
          hello?
        </p>
        <p>
          Feel free to hit me up at <span>anna.piasecka133@gmail.com</span>
        </p>
        <p>Resume send on request! :)</p>
        <p>Also, check me out on social media:</p>
        <div className="contact__icon-container">
          <a href="https://www.facebook.com/ania.piasecka.980">
            <FacebookLogo />
          </a>
          <a href="https://www.linkedin.com/in/anna-piasecka-651119183/">
            <LinkedInLogo />
          </a>
          <a href="https://github.com/Acrophost?tab=repositories">
            <GitLogo />
          </a>
        </div>
      </div>
    </ContactElement>
  );
};

export default Contact;
