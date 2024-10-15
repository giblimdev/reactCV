import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobile,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function TheMentions() {
  return (
    <>
      <div className="container mx-auto pt-10">
        <h1>MENTIONS LEGALES</h1>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Editeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h3>John Doe</h3>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  &nbsp;40 Rue Laure Diebold
                </p>
                <p>69009 Lyon, France</p>
                <p>
                  <FontAwesomeIcon icon={faMobile} />
                  &nbsp;06 20 30 40 50
                </p>
                <p>
                  &nbsp;
                  <FontAwesomeIcon icon={faEnvelope} />
                  John Doe@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p> Always Data</p>
                <p>91 rue du Faubourg Sint Honoré</p>
                <p>
                  <FontAwesomeIcon icon={faGlobe} />
                  &nbsp;www.Awaysdata.com 75008 Paris
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>Site développé par John Doe, étudiant du CEF.</p>
                <p>
                  Les images libres de droit sont issues du site
                  <a
                    className="collapsea"
                    href="https://pixabay.com/fr/"
                    target="_blank"
                  >
                    Pixabay
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </>
  );
}

export default TheMentions;
