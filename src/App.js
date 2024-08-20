import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";

import "./app.css";

const App = () => {
  return (
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
