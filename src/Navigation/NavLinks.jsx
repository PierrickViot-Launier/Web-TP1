import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <nav>
      <div>
        <NavLink to={"/"}>Page Principale</NavLink>
      </div>

      <div>
        <NavLink to={"/Professors"}>Professeurs</NavLink>
      </div>

      <div>
        <NavLink to={"/Courses"}>Cours</NavLink>
      </div>
    </nav>
  );
}
