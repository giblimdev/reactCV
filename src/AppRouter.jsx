import { Route, Routes } from "react-router-dom";
import AboutMe from "./component/AboutMe";

import Profil from "./component/NotFound";
import TheAccueil from "./component/TheAccueil";
import TheOffer from "./component/TheOffers";
import TheFolio from "./component/ThePortfolio";
import MyModal from "./component/Modal";
import TheBlog from "./component/TheBlog";
import ContactMe from "./component/ContactMe";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TheAccueil />} />
      <Route path="/home" element={<TheAccueil />} />
      <Route path="/accueil" element={<TheAccueil />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/services" element={<TheOffer />} />
      <Route path="/portfolio" element={<TheFolio />} />
      <Route path="/portfolio/:id" element={<MyModal />} />
      <Route path="/blog" element={<TheBlog />} />;
      <Route path="/contact" element={<ContactMe />} />
      <Route path="*" element={<Profil />} />
    </Routes>
  );
};

export default AppRouter;
