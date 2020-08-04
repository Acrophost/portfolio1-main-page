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
      active: 0,
      xDown: null,
    };

    this.props.refs.projects = React.createRef();

    this.handleCheckCode = this.handleCheckCode.bind(this);
    this.handleCheckLive = this.handleCheckLive.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleSwipeStart = this.handleSwipeStart.bind(this);
    this.handleSwipeMove = this.handleSwipeMove.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.preventTouch = this.preventTouch.bind(this);
  }

  componentDidMount() {
    window.addEventListener("touchstart", this.touchStart);
    window.addEventListener("touchmove", this.preventTouch, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener("touchstart", this.touchStart);
    window.removeEventListener("touchmove", this.preventTouch, {
      passive: false,
    });
  }

  touchStart(e) {
    this.firstClientX = e.touches[0].clientX;
    this.firstClientY = e.touches[0].clientY;
  }

  preventTouch(e) {
    const minValue = 5; // threshold

    this.clientX = e.touches[0].clientX - this.firstClientX;
    this.clientY = e.touches[0].clientY - this.firstClientY;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(this.clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  }

  handleRightClick() {
    const current = document.getElementsByClassName(
      "project__images-container"
    )[1];
    current.classList.add("fade-left");
    const next = document.getElementsByClassName("next")[0];
    next.classList.add("appear-left");
    setTimeout(() => {
      current.classList.remove("fade-left");
      next.classList.remove("appear-left");
      this.setState({
        active:
          this.state.active + 1 > this.props.projects.length - 1
            ? 0
            : this.state.active + 1,
      });
    }, 1600);
  }

  handleLeftClick() {
    const current = document.getElementsByClassName(
      "project__images-container"
    )[1];
    current.classList.add("fade-right");
    const prev = document.getElementsByClassName("prev")[0];
    prev.classList.add("appear-right");
    setTimeout(() => {
      current.classList.remove("fade-right");
      prev.classList.remove("appear-right");
      this.setState({
        active:
          this.state.active - 1 < 0
            ? this.props.projects.length - 1
            : this.state.active - 1,
      });
    }, 1600);
  }

  handleCheckCode() {
    navigate(this.state.project.codeUrl);
  }

  handleCheckLive() {
    navigate(this.state.liveUrl);
  }

  handleSwipeStart(e) {
    this.setState({ xDown: e.touches[0].clientX });
  }

  handleSwipeMove(e) {
    if (!this.state.xDown || this.state.xDown == 0) return;
    var xDiff = this.state.xDown - e.touches[0].clientX;

    if (Math.abs(xDiff) > 5) {
      if (xDiff > 0) {
        this.handleRightClick();
      } else {
        this.handleLeftClick();
      }
    }

    this.setState({ xDown: null });
  }

  render() {
    const project = this.props.projects[this.state.active];
    const proj_prev = this.props.projects[
      this.state.active - 1 < 0
        ? this.props.projects.length - 1
        : this.state.active - 1
    ];
    const proj_next = this.props.projects[
      this.state.active + 1 == this.props.projects.length
        ? 0
        : this.state.active + 1
    ];
    console.log(project.description);
    return (
      <ProjectElement
        ref={this.props.refs.projects}
        onTouchStart={this.handleSwipeStart}
        onTouchMove={this.handleSwipeMove}
      >
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
        <div className="project__container">
          <div className="project__images-container prev">
            <img
              src={proj_prev.src}
              alt={proj_prev.alt}
              className="project__desktop-img"
            />
            <div className="project__description-container">
              <h3>{proj_prev.name}</h3>
              {proj_prev.description}
            </div>
          </div>
          <div className="project__images-container">
            <img
              src={project.src}
              alt={project.alt}
              className="project__desktop-img"
            />
            <div className="project__description-container">
              <h3>{project.name}</h3>
              {project.description}
            </div>
          </div>
          <div className="project__images-container next">
            <img
              src={proj_next.src}
              alt={proj_next.alt}
              className="project__desktop-img"
            />
            <div className="project__description-container">
              <h3>{proj_next.name}</h3>
              {proj_next.description}
            </div>
          </div>
        </div>
        <button
          className="project__arrow-right"
          onClick={this.handleRightClick}
        >
          <ArrowSmall className="project__arrow-r" />
        </button>

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
