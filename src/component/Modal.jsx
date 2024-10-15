import React from "react";
import { useLocation, Link } from "react-router-dom";

function Modal() {
  const location = useLocation();
  const { article } = location.state;

  return (
    <div>
      <div id="portfolio" className="header_mask"></div>
      <div className="container">
        <div className=" card">
          <div className=" card-title">{article.titre}</div>
          <div className="card-image">
            <img src={article.img} alt={article.titre} />
          </div>
          <div className="card-text">{article.description}</div>
          <div className="card-text">{article.techno}</div>
          <div>
            <Link to="/" className="btn btn-primary">
              Retour à L'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
