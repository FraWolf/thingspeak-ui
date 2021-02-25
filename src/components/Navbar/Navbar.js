import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <button type="button" className="btn btn-link navbar-brand" href="/">
          Arduino Sensors WebApp
        </button>
        {/* Button for the mobile version */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar Items */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home button */}
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
