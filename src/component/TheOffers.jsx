import React from "react";
import uxd from "../assets/img/icon/uxd.png";
import devweb from "../assets/img/icon/devweb.svg";
import ref from "../assets/img/icon/ref.webp";

function TheOffer() {
  const services = [
    {
      id_service: 1,
      img: uxd,
      titre: "UX DESIGN",
      description:
        "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but rst d'offrir une expérience de navigation optimale à l'internaute.",
    },
    {
      id_service: 2,
      img: devweb,
      titre: "Développement Web",
      description:
        "Le développement de site web repose sur l'utilisation des langage HTML, CSS, JavaScript et PHP.",
    },
    {
      id_service: 3,
      img: ref,
      titre: "Référencement",
      description:
        "Le référencement naturel d'un site aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteur de recherche.",
    },
  ];

  return (
    <>
      <div id="offre" class="header_mask"></div>
      <div className="fond"></div>
      <h1 className="text-center">MON OFFRE DE SERVICES</h1>
      <p className="text-center">
        Voici les prestations sur lesquelles je peux intervenir.
      </p>
      <div className="hr"></div>
      <div
        className="container-fluid d-flex flex-wrap justify-content-center"
        style={{ maxWidth: "80%" }}
      >
        {services.map((service) => (
          <div className="service_card" key={service.id_service}>
            <div className="service_boximage">
              <img
                src={service.img}
                alt={service.titre}
                className="service_img"
              />
            </div>
            <div className="service_box-titre">
              <h2>{service.titre}</h2>
            </div>
            <div className="service_box-description">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TheOffer;
