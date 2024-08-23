import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Projects from "./components/projects/Projects";
import Offer from "./containers/offer/Offer";

const App = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Projects />
      </div>
      <Offer />
    </>
  );
};

export default App;
