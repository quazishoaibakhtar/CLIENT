import React from "react";
import "./App.css";
import Navbaar from "./component/Navbaar";
import Hero from "./component/Hero";
import Section from "./component/Section.jsx";
import Article from "./component/Article";
import Status from "./component/Status";
import Story from "./component/Story";
import Schedule from "./component/Schedule";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbaar />
      <Hero />
      <Section />
      <Article />
      <Status />
      <Story />
      <Schedule />
      <Footer />
    </div>
  );
};

export default App;
