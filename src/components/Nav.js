import React, { useEffect, useState } from "react";
import { ReactComponent as PersonalLogo } from "../images/logo.svg";

const Nav = (props) => {
  const [headClass, setHeadClass] = useState("");

  const checkDetachment = () => {
    setHeadClass(
      window.pageYOffset > props.refs.projects.current.offsetTop - 100
        ? "detached"
        : ""
    );
  };

  useEffect(() => {
    window.onscroll = () => {
      window.addEventListener("scroll", checkDetachment);
    };
  }, []);

  return (
    <header className={headClass}>
      <div className="logo-module">
        ANNA
        <PersonalLogo className="logo" />
        PIASECKA
      </div>
      <ul>
        <a
          href="/#home"
          onClick={() => {
            props.setLocation("/");
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            props.refs.home.current.focus();
          }}
        >
          <li className={props.location == "/" ? "nav-active" : ""}>HOME</li>
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
          <li className={props.location == "projects" ? "nav-active" : ""}>
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
          <li className={props.location == "about" ? "nav-active" : ""}>
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
          <li className={props.location == "contact" ? "nav-active" : ""}>
            CONTACT
          </li>
        </a>
      </ul>
    </header>
  );
};

export default Nav;
