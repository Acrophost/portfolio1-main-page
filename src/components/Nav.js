import React from "react";
import { Link } from "@reach/router";
import PersonalLogo from "../images/logo.svg";

const Nav = (props) => {
  return (
    <header className={props.location == "/" ? "" : "detached"}>
      <div className="logo-module">
        ANNA
        <PersonalLogo />
        PIASECKA
      </div>
      <ul>
        <Link
          to="/"
          onClick={() => {
            props.setLocation("/");
            console.log(props.location);
          }}
        >
          <li className={props.location == "/" ? "nav-active" : ""}>HOME</li>
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            props.setLocation("projects");
            console.log(props.location);
          }}
        >
          <li className={props.location == "projects" ? "nav-active" : ""}>
            PROJECTS
          </li>
        </Link>
        <Link
          to="/about"
          onClick={() => {
            props.setLocation("about");
            console.log(props.location);
          }}
        >
          <li className={props.location == "about" ? "nav-active" : ""}>
            ABOUT
          </li>
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            props.setLocation("contact");
            console.log(props.location);
          }}
        >
          <li className={props.location == "contact" ? "nav-active" : ""}>
            CONTACT
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Nav;
