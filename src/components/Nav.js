import React from "react";
import { Link } from "@reach/router";
import PersonalLogo from "../svgs/logo.svg";

const Nav = () => {
  return (
    <header>
      <div className="logo-module">
        ANNA
        <PersonalLogo />
        PIASECKA
      </div>
      <ul>
        <Link to="/#home">
          <li className="nav-active">HOME</li>
        </Link>
        <Link to="/#projects">
          <li>PROJECTS</li>
        </Link>
        <Link to="/#about">
          <li>ABOUT</li>
        </Link>
        <Link to="/#contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </header>
  );
};

export default Nav;
