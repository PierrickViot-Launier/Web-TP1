import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";

export default function MainNavigation() {
  const navigate = useNavigate();

  return (
    <MainHeader className="navHeader">
      <div className="navLinks">
        <h1>Navigation</h1>

        <NavLinks />
      </div>
    </MainHeader>
  );
}
