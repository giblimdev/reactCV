import React from "react";
import { Link } from "react-router-dom";

function TheAccueil() {
  return (
    <div className=" container">
      <div className="accueil ">
        <div className="overlay">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white">Bonjour, je suis John Doe</h1>
              <p className="text-white font-weight-bold fs-5">
                Développeur web full stack
              </p>
              <Link to="/aboutme" className="nav-link text-uppercase">
                <button className="btn btn-primary btn-sm">
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheAccueil;
