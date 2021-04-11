import React from "react";
import { NavLink } from "react-router-dom";
import { Li, Ul, Div, Logo } from "./navbar-styled";

function NavBar() {
  return (
    <Div>
      <Ul>
        <Li as={NavLink} to="/home" activeClassName="active">
          Schedule
        </Li>
        <Li as={NavLink} to="/table" activeClassName="active">
          Table
        </Li>
      </Ul>
      <Logo />
    </Div>
  );
}

export default NavBar;
