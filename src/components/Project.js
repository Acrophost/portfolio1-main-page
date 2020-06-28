import React from "react";
import { navigate } from "@reach/router";

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0,
    };

    this.handleCheckCode = this.handleCheckCode.bind(this);
    this.handleCheckLive = this.handleCheckLive.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleRightClick() {
    this.setState.current =
      this.state.current + 1 > this.props.projects.length - 1
        ? 0
        : this.state.current++;
  }

  handleLeftClick() {
    this.setState.current =
      this.state.current - 1 < 0
        ? this.props.projects.length - 1
        : this.state.current--;
  }

  handleCheckCode() {
    navigate(this.props.projects[this.state.current].codeUrl);
  }

  handleCheckLive() {
    navigate(this.props.projects[this.state.current].liveUrl);
  }

  render() {
    const i = this.state.current;

    const project = {
      src: this.props.projects[i].src,
      srcMobile: this.props.projects[i].srcMobile,
      alt: this.props.projects[i].alt,
      altMobile: this.props.projects[i].altMobile,
    };

    return (
      <div className="project-container">
        <h2>Projects</h2>
        <button className="arrow-left" onclick={this.handleLeftClick}>
          {"<"}
        </button>
        <img src={project.src} alt={project.alt} className="desktop-img" />
        <img
          src={project.srcMobile}
          alt={project.altMobile}
          className="mobile-img"
        />
        <button className="arrow-right" onclick={this.handleRightClick}>
          {">"}
        </button>
        <button className="view-button" onClick={this.handleCheckLive}>
          Live version
        </button>
        <button className="view-button" onClick={this.handleCheckCode}>
          Code
        </button>
      </div>
    );
  }
}

export default Project;
