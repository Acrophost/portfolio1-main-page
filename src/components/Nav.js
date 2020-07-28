import React from "react";
import { ReactComponent as PersonalLogo } from "../images/logo.svg";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headClass: "nav-module",
      buttonClass: "nav__menu-button",
    };

    this.checkDetachment = this.checkDetachment.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.showUlsOnBiggerScreens = this.showUlsOnBiggerScreens.bind(this);
  }

  componentDidMount() {
    window.onscroll = () => {
      window.addEventListener("scroll", this.checkDetachment);
    };
    window.addEventListener("resize", this.showUlsOnBiggerScreens);
  }

  showUlsOnBiggerScreens() {
    const uls = document.getElementsByTagName("ul")[0];
    const overlay = document.getElementsByClassName("nav__overlay")[0];

    if (window.innerWidth > 1049) {
      uls.style.display = "flex";
    } else {
      if (overlay.style.display == "none" || overlay.style.display == "") {
        uls.style.display = "none";
      } else {
        uls.style.display = "flex";
      }
    }
  }

  checkDetachment() {
    this.setState({
      headClass:
        window.pageYOffset > props.refs.projects.current.offsetTop - 100
          ? "nav-module detached"
          : "nav-module",
    });
  }

  toggleMenu() {
    const uls = document.getElementsByTagName("ul")[0];
    const overlay = document.getElementsByClassName("nav__overlay")[0];

    if (overlay.style.display == "none" || overlay.style.display == "") {
      uls.style.display = "flex";
      overlay.style.display = "block";
    } else {
      uls.style.display = "none";
      overlay.style.display = "none";
    }

    this.setState({
      buttonClass:
        this.state.buttonClass == "nav__menu-button"
          ? "nav__menu-button opened"
          : "nav__menu-button",
    });
  }

  render() {
    return (
      <header className={this.state.headClass}>
        <div className="nav__logo-module">
          ANNA
          <PersonalLogo className="nav__logo" />
          PIASECKA
        </div>
        <div className="nav__overlay"></div>
        <ul>
          <a
            href="/#home"
            onClick={() => {
              this.props.setLocation("/");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              this.props.refs.home.current.focus();
            }}
          >
            <li className={this.props.location == "/" ? "nav__active" : ""}>
              HOME
            </li>
          </a>
          <a
            href="/#projects"
            onClick={() => {
              this.props.setLocation("projects");
              this.props.refs.projects.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
              });
              this.props.refs.projects.current.focus();
            }}
          >
            <li
              className={this.props.location == "projects" ? "nav__active" : ""}
            >
              PROJECTS
            </li>
          </a>
          <a
            href="/#about"
            onClick={() => {
              this.props.setLocation("about");
              this.props.refs.about.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
              });
              this.props.refs.about.current.focus();
            }}
          >
            <li className={this.props.location == "about" ? "nav__active" : ""}>
              ABOUT
            </li>
          </a>
          <a
            href="/#contact"
            onClick={() => {
              this.props.setLocation("contact");
              this.props.refs.contact.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
              });
              this.props.refs.contact.current.focus();
            }}
          >
            <li
              className={this.props.location == "contact" ? "nav__active" : ""}
            >
              CONTACT
            </li>
          </a>
        </ul>
        <button className={this.state.buttonClass} onClick={this.toggleMenu}>
          <div className="nav__hamburger-t"></div>
          <div className="nav__hamburger-m"></div>
          <div className="nav__hamburger-b"></div>
        </button>
      </header>
    );
  }
}

export default Nav;
