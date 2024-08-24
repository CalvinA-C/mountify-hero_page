import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Pain from "./containers/pain/Pain";
import Offer from "./containers/offer/Offer";
import Reviews from "./components/reviews/Reviews";

const App = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Pain />
        <div className="wrapping-up">
          <div className="curved-in-box gradient__bg-secondary">
            <Offer />
          </div>
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default App;
