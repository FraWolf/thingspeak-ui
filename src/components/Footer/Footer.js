import React from "react";

import CleanLink from "../CleanLink/CleanLink";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer container-fluid bg-dark">
      <div className="row text-center">
        <p>
          Arduino Sensors WebApp &copy; Copyright 2021 <br />
          <CleanLink href="https://frawolf.it" target="_blank" rel="noreferrer">
            Francesco Lombardo
          </CleanLink>
          , Matteo Barbera
        </p>
      </div>
    </footer>
  );
}

export default Footer;
