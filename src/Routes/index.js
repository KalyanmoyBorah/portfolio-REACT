import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Ripple } from "react-preloaders";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import About from "../pages/AboutPage";
import Portfolio from "../pages/PortfolioPage";
import Designs from "../pages/DesignsPage";
import Skills from "../pages/SkillsPage";

const Routes = (props) => {
  return (
    <>
      <Ripple background="#1A1E23" color="white" time={2000} />;
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Portfolio} />
        <Route path="/about" exact component={About} />
        <Route path="/designs" exact component={Designs} />
        <Route path="/skills" exact component={Skills} />
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Routes;
