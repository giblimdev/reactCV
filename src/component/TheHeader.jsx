//the header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link to="/" className="nav-link text-uppercase">
            <div className="navbar-brand text-uppercase">John doe</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-uppercase">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link text-uppercase">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link text-uppercase">
                  Réalisations
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link text-uppercase">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-uppercase">
                  Me_contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
