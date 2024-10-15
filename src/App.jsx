import React from "react";
import "./App.css";
import Header from "./component/TheHeader";
import TheFooter from "./component/TheFooter";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRouter from "./AppRouter";
import TheMentions from "./component/TheMentions";
import ScrollToTop from "./component/ScrollTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />{" "}
        <header className="">
          <Header />
        </header>
        <main className=" top-div mt-5">
          <div className="">
            <AppRouter></AppRouter>
          </div>
        </main>
        <aside>
          <TheMentions />
        </aside>
        <footer className="">
          <TheFooter />
        </footer>
      </Router>
    </>
  );
}

export default App;
