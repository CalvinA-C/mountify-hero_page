import React from "react";
import "./offer.css";

const Offer = () => {
  return (
    <div className="mountify__offer">
      <h1 className="mountify__offer-title">What we offer</h1>
      <div className="offer-item">
        <h2 className="offer-subtitle">100% Satisfaction Guaranteed</h2>
        <p className="offer-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          ipsa quis hic, omnis, ipsam cum laboriosam doloremque ullam repellat
          dolorum assumenda fugiat soluta. Iste quia ipsam numquam neque omnis
          delectus?
        </p>
      </div>
      <div className="offer-item">
        <h2 className="offer-subtitle">Life Time Guarantee</h2>
        <p className="offer-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          ipsa quis hic, omnis, ipsam cum laboriosam doloremque ullam repellat
          dolorum assumenda fugiat soluta. Iste quia ipsam numquam neque omnis
          delectus?
        </p>
      </div>
      <div className="mountify__offer--cta-container">
        <p className="urgency-text">Dont Wait - Transform Your Space Today!</p>
        <a href="" className="mountify__offer--cta-button">
          Contact Us Now
        </a>
      </div>
    </div>
  );
};

export default Offer;
