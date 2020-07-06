import React from "react";

const ContactElement = React.forwardRef((props, ref) => (
  <div className="contact-module" ref={ref} {...props}></div>
));

const Contact = (props) => {
  props.refs.contact = React.createRef();

  return (
    <ContactElement ref={props.refs.contact}>
      <h2>Contact me!</h2>
      <div className="form-group">
        <label htmlFor="name">Your email</label>
        <input type="email" className="form-text" />
      </div>
      <div className="form-group">
        <label htmlFor="topic">Topic</label>
        <input type="text" className="form-text" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-message" rows="5"></textarea>
      </div>
      <button type="submit" className="form-button">
        Send!
      </button>
    </ContactElement>
  );
};

export default Contact;
