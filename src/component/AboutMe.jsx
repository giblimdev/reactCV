import MoiTravail from "../assets/img/MoiTravail.jpg";
import MyGithub from "./MyGithub";
function AboutMe() {
  return (
    <>
      <div id="aboutme" class="header_mask"></div>
      <div className="about_contener">
        <div className="about_box">
          <h1 className="border-bottom border-2 border-primary">
            <strong> A propos</strong>
          </h1>

          <p>
            Passionné par l’informatique et les nouvelles technologies, j’ai
            suivi une formation d’<strong>intégrateur-développeur web</strong>{" "}
            au CFE. Au cours de cette formation,j’ai pu acquérir des bases
            solides pour travailler dans le domaine du
            <strong> développement web</strong>.
          </p>
          <p>
            Basé à Lyon, je suis en recherche d’une alternance u sein d’une
            agence digital pour consolider ma formation de
            <strong> développeur web full stack</strong>.
          </p>
          <p>
            J’accorde une attention particulière à la qualité du code que
            j’écris et je respecte les bonnes pratiques du web.
          </p>
          <div>
            <MyGithub />
          </div>
        </div>
        <div className="about_box fs-7">
          <div className="mx-auto">
            <img className="img_about " src={MoiTravail} alt="moi au travail" />
          </div>

          <h2>
            <strong>Mes compétences</strong>
          </h2>
          <div>HTML5 90%</div>
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>CSS3 80%</div>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>JAVASCRIPT 70%</div>
          <div className="progress">
            <div
              className="progress-bar  bg-warning"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>PHP 60%</div>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>REACT 50%</div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
