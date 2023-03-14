import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

export default function NavLinks() {
  return (
    <ul className="navLinks">
      <li>
        <NavLink to={"/"}>Page Principale</NavLink>
      </li>

      <li>
        <NavLink to={"/Professors"}>Professeurs</NavLink>
      </li>

      <li>
        <NavLink to={"/Courses"}>Cours</NavLink>
      </li>
    </ul>
  );
}
