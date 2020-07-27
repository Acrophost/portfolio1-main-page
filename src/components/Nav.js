import React, { useEffect, useState } from "react";
import { ReactComponent as PersonalLogo } from "../images/logo.svg";

const Nav = (props) => {
  const [headClass, setHeadClass] = useState("nav-module");
  const [buttonOpen, setButtonOpen] = useState("nav__menu-button");

  const checkDetachment = () => {
    setHeadClass(
      window.pageYOffset > props.refs.projects.current.offsetTop - 100
        ? "nav-module detached"
        : "nav-module"
    );
  };

  useEffect(() => {
    window.onscroll = () => {
      window.addEventListener("scroll", checkDetachment);
    };
  }, []);

  const toggleMenu = () => {
    const uls = document.getElementsByTagName("ul")[0];
    const overlay = document.getElementsByClassName("nav__overlay")[0];
    uls.style.display =
      uls.style.display == "none" || uls.style.display == "" ? "flex" : "none";
    overlay.style.display =
      overlay.style.display == "none" || overlay.style.display == ""
        ? "block"
        : "none";

    setButtonOpen(
      buttonOpen == "nav__menu-button"
        ? "nav__menu-button opened"
        : "nav__menu-button"
    );
  };

  return (
    <header className={headClass}>
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
            props.setLocation("/");
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            props.refs.home.current.focus();
          }}
        >
          <li className={props.location == "/" ? "nav__active" : ""}>HOME</li>
        </a>
        <a
          href="/#projects"
          onClick={() => {
            props.setLocation("projects");
            props.refs.projects.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
            props.refs.projects.current.focus();
          }}
        >
          <li className={props.location == "projects" ? "nav__active" : ""}>
            PROJECTS
          </li>
        </a>
        <a
          href="/#about"
          onClick={() => {
            props.setLocation("about");
            props.refs.about.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
            props.refs.about.current.focus();
          }}
        >
          <li className={props.location == "about" ? "nav__active" : ""}>
            ABOUT
          </li>
        </a>
        <a
          href="/#contact"
          onClick={() => {
            props.setLocation("contact");
            console.log(props.refs.contact);
            props.refs.contact.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
            props.refs.contact.current.focus();
          }}
        >
          <li className={props.location == "contact" ? "nav__active" : ""}>
            CONTACT
          </li>
        </a>
      </ul>
      <button className={buttonOpen} onClick={toggleMenu}>
        <div className="nav__hamburger-t"></div>
        <div className="nav__hamburger-m"></div>
        <div className="nav__hamburger-b"></div>
      </button>
    </header>
  );
};

export default Nav;
