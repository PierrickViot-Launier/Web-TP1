import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

export default function MainNavigation() {
  return (
    <MainHeader className="navHeader">
      <div className="navLinks">
        {/* <h1>Navigation</h1> */}

        <NavLinks />
      </div>
    </MainHeader>
  );
}
