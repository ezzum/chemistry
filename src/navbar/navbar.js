import React from "react";
import { NavLink } from "react-router-dom";
import { Li, Ul, Div } from "./navbar-styled";

function NavBar() {
  return (
    <Div>
      <Ul>
        <Li as={NavLink} to="/home" activeClassName="active">
          Home
        </Li>
        <Li as={NavLink} to="/table" activeClassName="active">
          Table
        </Li>
      </Ul>
    </Div>
  );
}

export default NavBar;
