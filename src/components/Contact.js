import React from "react";
import axios from "axios";

const ContactElement = React.forwardRef((props, ref) => (
  <div className="contact-module" ref={ref} {...props}></div>
));

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.props.refs.contact = React.createRef();

    this.state = {
      email: "",
      topic: "",
      message: "",
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changeTopic = this.changeTopic.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.handleSending = this.handleSending.bind(this);
  }

  changeEmail(e) {
    this.setState({ email: e.target.value });
  }

  changeTopic(e) {
    this.setState({ topic: e.target.value });
  }

  changeMessage(e) {
    this.setState({ message: e.target.value });
  }

  resetForm() {
    this.setState({
      email: "",
      topic: "",
      message: "",
    });
  }

  handleSending(e) {
    e.preventDefault();

    axios
      .post({
        method: "POST",
        url: "http://localhost:8080/send",
        data: this.state,
      })
      .then((res) => {
        if (res.data.status == "success") {
          alert("wololo");
          this.resetForm();
        } else if (res.data.status == "fail") {
          alert("Nah");
        }
      });
  }

  render() {
    return (
      <ContactElement ref={this.props.refs.contact}>
        <h2>Contact me!</h2>
        <form
          id="form"
          className="contact-form"
          onSubmit={this.handleSending}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              className="form-text"
              value={this.state.email}
              onChange={this.changeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input
              type="text"
              id="topic"
              className="form-text"
              value={this.state.topic}
              onChange={this.changeTopic}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-message"
              rows="5"
              value={this.state.message}
              onChange={this.changeMessage}
            />
          </div>
          <button type="submit" className="form-button">
            Send message
          </button>
        </form>
      </ContactElement>
    );
  }
}

export default Contact;
