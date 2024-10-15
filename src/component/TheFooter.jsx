import logoGit from "../assets/img/icon/github.svg";
import logoX from "../assets/img/icon/square-x-twitter.svg";
import logolink from "../assets/img/icon/linkedin.svg";
let btn = document.createElement("button"); // Crée un nouvel élément de type bouton
btn.id = "topBtn"; // Attribue l'ID "topBtn" au bouton
btn.textContent = "Haut de page"; // Définit le texte du bouton comme "Haut de page"
document.body.appendChild(btn); // Ajoute le bouton à la fin du corps du document

// Style du bouton
btn.style.display = "none"; // Le bouton est caché par défaut
btn.style.position = "fixed"; // Le bouton a une position fixe
btn.style.bottom = "20px"; // Le bouton est positionné à 20px du bas de la fenêtre
btn.style.right = "20px"; // Le bouton est positionné à 20px de la droite de la fenêtre

// Quand l'utilisateur défile vers le bas de 50px depuis le bas du document, montrer le bouton
window.onscroll = () => {
  // Définit une fonction à exécuter lorsque l'utilisateur défile la page
  if (
    document.documentElement.scrollHeight -
      window.innerHeight -
      window.scrollY <=
    50
  ) {
    // Si l'utilisateur est à moins de 50px du bas de la page...
    btn.style.display = "block"; // ... affiche le bouton
  } else {
    btn.style.display = "none"; // Sinon, cache le bouton
  }
};

// Quand l'utilisateur clique sur le bouton, remonter en haut du document
btn.addEventListener("click", () => {
  // Ajoute un gestionnaire d'événements qui réagit au clic sur le bouton
  window.scrollTo({
    // Fait défiler la fenêtre vers le haut
    top: 0, // La position de défilement cible est le haut de la page
    behavior: "smooth", // Le défilement est animé de manière fluide
  });
});
function TheFooter() {
  return (
    <>
      <footer>
        <div className="footer_contener">
          <div className="footer_box">
            <strong>John Doe</strong>
            <p>40 Rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>Téléphone : 06 20 30 40 50</p>
            <div className=" d-flex ">
              <img class="logo_img" src={logoGit} alt="logo github" />
              <img class="logo_img" src={logoX} alt=" logo X" />
              <img class="logo_img" src={logolink} alt="logolink" />
            </div>
          </div>
          <div className="footer_box">
            <strong>Liens utiles</strong>
            <ul className="LiFooter">
              <li>accueil </li> <li> A propos </li> <li> Services</li>{" "}
              <li> Me contacter</li> <li>Mentions légales </li>
            </ul>
          </div>
          <div className="footer_box">
            <strong>Mes dernières réalisations</strong>
            <ul className="LiFooter">
              <li> Fresh food</li> <li>Restaurent Akira </li>
              <li>Espace bien-être </li>
            </ul>
          </div>
          <div className="footer_box">
            <strong>Mes derniers articles</strong>
            <ul className="LiFooter">
              <li>Coder son site en HTML/CSS</li>
              <li>Vendre ses produits sur le web</li>
              <li>Se positionner sur Google</li>
            </ul>
          </div>
        </div>
        <div className="bg-dark text-center text-white">
          (c) Designed by John Doe
        </div>
      </footer>
    </>
  );
}

export default TheFooter;
