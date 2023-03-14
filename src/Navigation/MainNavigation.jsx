import React, { useState } from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import SideDrawer from "../Components/SideDrawer";
import Backdrop from "../Components/Backdrop";

export default function MainNavigation() {
  const [tiroirOuvert, setTiroirOuvert] = useState(false);

  const ouvrirTiroir = () => {
    setTiroirOuvert(true);
  };

  const fermerTiroir = () => {
    setTiroirOuvert(false);
  };

  return (
    <React.Fragment>
      {tiroirOuvert && <Backdrop onClick={fermerTiroir} />}
      <SideDrawer show={tiroirOuvert} onClick={fermerTiroir}>
        <nav className="mainNavDrawer">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className="mainNavButton" onClick={ouvrirTiroir}>
          <span />
          <span />
          <span />
        </button>

        <nav className="mainNavHeader">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}
