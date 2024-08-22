import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Projects />
    </div>
  );
};

export default App;
