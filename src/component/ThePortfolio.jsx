import React from "react";
import freshfood from "../assets/img/freshfood.jpg";
import akira from "../assets/img/akira.jpeg";
import bienetre from "../assets/img/bienetre.jpg";
import { Link, useNavigate } from "react-router-dom";

function TheFolio() {
  const articles = [
    {
      id_article: 1,
      titre: "Fresh food",
      description: "Réalisation d'un site avec commande en ligne.",
      img: freshfood,
      techno: "Site réalisé avec PHP et MySQL",
    },
    {
      id_article: 2,
      titre: "Restaurent Akira",
      description: "Réalisation d'un site vitrine.",
      img: akira,
      techno: "Site réalisé avec WordPress", // Corrected typo
    },
    {
      id_article: 3,
      titre: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être.",
      img: bienetre,
      techno: "Site réalisé en HTML/CSS",
    },
  ];

  const navigate = useNavigate();

  const handleArticleClick = (article) => {
    navigate(`/portfolio/${article.id_article}`, { state: { article } });
  };

  return (
    <>
      <div id="portfolio" className="header_mask"></div>
      <div className="mt-3 text-center">
        <h1 className="">PORTFOLIO</h1>
        <p className="">Voici quelques-unes de mes réalisations.</p>
      </div>
      <div className="hr"></div>
      <div className="container">
        <div className="row">
          {articles.map((article) => (
            <div
              className="card col-12 col-md-6 col-lg-4 mb-4"
              key={article.id_article}
              onClick={() => handleArticleClick(article)}
            >
              <div className="card-img-top">
                <img
                  src={article.img}
                  alt={article.titre}
                  className="card-img-top"
                />
              </div>
              <div className="titre-size">
                <h2>{article.titre}</h2>
              </div>
              <div className="description-size">
                <p>{article.description}</p>
              </div>
              <Link
                to={`/portfolio/${article.id_article}`} // Corrected the dynamic route
                className="btn btn-outline-primary"
              >
                Voir
              </Link>
              <p className="card-footer mt-3">{article.techno}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TheFolio;
