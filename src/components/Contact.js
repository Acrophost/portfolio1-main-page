import React from "react";

const ContactElement = React.forwardRef((props, ref) => (
  <div className="contact-module" ref={ref} {...props}></div>
));

const Contact = (props) => {
  props.refs.contact = React.createRef();

  return (
    <ContactElement ref={props.refs.contact}>
      <h2>Contact me!</h2>
    </ContactElement>
  );
};

export default Contact;
