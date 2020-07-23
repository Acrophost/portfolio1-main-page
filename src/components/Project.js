import React from "react";
import { navigate } from "@reach/router";
import { ReactComponent as ArrowSmall } from "../images/arrow2.svg";

const ProjectElement = React.forwardRef((props, ref) => (
  <div className="project-module" ref={ref} {...props}></div>
));

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };

    this.props.refs.projects = React.createRef();

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

    console.log(this.state.current);
  }

  handleLeftClick() {
    this.setState.current =
      this.state.current - 1 < 0
        ? this.props.projects.length - 1
        : this.state.current--;

    console.log(this.state.current);
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
      name: this.props.projects[i].name,
      description: this.props.projects[i].description,
      src: this.props.projects[i].src,
      srcMobile: this.props.projects[i].srcMobile,
      alt: this.props.projects[i].alt,
      altMobile: this.props.projects[i].altMobile,
    };

    return (
      <ProjectElement ref={this.props.refs.projects}>
        <div className="project__triangle-a"></div>
        <h2>Projects</h2>
        <div className="project__swap-info">
          <span className="project__info-arrow-l">{"<"}</span> Swap to sides to
          see other projects!{" "}
          <span className="project__info-arrow-l">{">"}</span>
        </div>
        <button className="project__arrow-left" onClick={this.handleLeftClick}>
          <ArrowSmall className="project__arrow-l" />
        </button>
        <div className="project__images-container">
          <img
            src={project.src}
            alt={project.alt}
            className="project__desktop-img"
          />
          <img
            src={project.srcMobile}
            alt={project.altMobile}
            className="project__mobile-img"
          />
        </div>
        <button
          className="project__arrow-right"
          onClick={this.handleRightClick}
        >
          <ArrowSmall className="project__arrow-r" />
        </button>
        <div className="project__description-container">
          <h3>{project.name}</h3>
          {project.description}
        </div>
        <div className="project__button-container">
          <button
            className="project__view-button"
            onClick={this.handleCheckLive}
          >
            Live version
          </button>
          <button
            className="project__view-button"
            onClick={this.handleCheckCode}
          >
            Code
          </button>
        </div>
      </ProjectElement>
    );
  }
}

export default Project;
