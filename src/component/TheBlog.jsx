import React, { useState } from "react";
import MyImage1 from "../assets/img/code.jpg";
import MyImage2 from "../assets/img/money.jpg";
import MyImage3 from "../assets/img/ordigoogle.jpg";
import MyImage4 from "../assets/img/pctable.jpg";
import MyImage5 from "../assets/img/seo.jpg";
import MyImage6 from "../assets/img/patch.png";

function TheBlog() {
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleOpenModal = (article) => {
    setShowModal(true);
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const articles = [
    {
      id_article: 1,
      titre: "Coder son site en HTML/CSS",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage1,
      date: "22 août 2022",
    },
    {
      id_article: 2,
      titre: "Vendre ses produits sur le web",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage2,
      date: "20 août 2022",
    },
    {
      id_article: 3,
      titre: "Vendre ses produits sur le web",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage3,
      date: "1 août 2022",
    },
    {
      id_article: 4,
      titre: "Coder en responsive desing",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage4,
      date: "31 juillet 2022",
    },
    {
      id_article: 5,
      titre: "Technique de référencement",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage5,
      date: "30 juillet 2022",
    },
    {
      id_article: 6,
      titre: "Apprendre à coder",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage6,
      date: "12 juillet 2022",
    },
  ];

  return (
    <>
      <div id="blog" class="header_mask"></div>
      <h1 className="text-center">Blog</h1>
      <p className="text-center">
        Retrouvez ici quelques articles sur le développement web.
      </p>
      <div className="hr"></div>
      <div
        className="container-fluid d-flex flex-wrap justify-content-center"
        style={{ maxWidth: "80%" }}
      >
        {articles.map((article) => (
          <div
            className="card m-2 shadow-sm"
            style={{ width: "250px" }}
            key={article.id_article}
          >
            <div className="blog_img-size">
              <img
                src={article.img}
                alt={article.titre}
                className="card-img-top"
              />
            </div>
            <div className="blog_titre-size">
              <h2>{article.titre}</h2>
            </div>
            <div className="blog_descrition-size">
              <p>{article.description.slice(0, 100)}...</p>
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleOpenModal(article)}
            >
              Lire la suite
            </button>
            <p>{article.date}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div className="modal fade" id="articleModal" show={showModal}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedArticle?.titre}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={handleCloseModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="img-size">
                <img
                  src={selectedArticle?.img}
                  alt={selectedArticle?.titre}
                  className=""
                />
              </div>
              <p>{selectedArticle?.description}</p>
              <p>Date de publication: {selectedArticle?.date}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCloseModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheBlog;
