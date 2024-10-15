import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobile } from "@fortawesome/free-solid-svg-icons";
function ContactMe() {
  // Définir les états pour les champs du formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire à votre backend ou effectuer toute autre action
    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Email :", tel);
    console.log("Sujet :", subject);
    console.log("Message :", message);
    // Réinitialiser les champs du formulaire après la soumission
    setName("");
    setEmail("");
    setTel("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <div id="Notfound" class="header_mask"></div>

      <div className=" contact">
        <div className="contact_content">
          <h1 className="contacth1 text-center">ME CONTACTER</h1>
          <p className="text-center">
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="hr"></div>
          <div className="contact_contenant-box p-3">
            <div class="contact_box">
              <h2 className="contactmetitre border-bottom border-primary p-3 mb-4">
                Formulaire de contact
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Entrez votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Entrez votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="tel"
                    placeholder="Votre numéro de téléphone"
                    value={tel}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Sujet"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Messsage"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" className=" btn btn-primary btn-contac">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
            <div className="contact_box">
              <h2 className=" contactmetitre border-bottom border-primary p-3 mb-4">
                Mes coordonnées
              </h2>
              <div className="">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  &nbsp;40 Rue Laure Diebold, 69009 Lyon.
                </p>
                <p>
                  <FontAwesomeIcon icon={faMobile} />
                  &nbsp;06 20 30 40 50
                </p>
                <div className="ifram_box">
                  <iframe
                    src="https://www.google.fr/maps/embed?pb=!1m18!1m12!1m3!1d26323.11179609513!2d4.796340115127886!3d45.77898768117456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sen!2sfr!4v1619749964482!5m2!1sen!2sfr"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
