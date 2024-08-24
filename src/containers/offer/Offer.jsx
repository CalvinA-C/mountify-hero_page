import React from "react";
import "./offer.css";

const Offer = () => {
  return (
    <div className="mountify__offer">
      <h1 className="mountify__offer-title">Life Time Guarantee</h1>

      <p className="offer-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsa
        quis hic, omnis, ipsam cum laboriosam doloremque ullam repellat dolorum
        assumenda fugiat soluta. Iste quia ipsam numquam neque omnis delectus?
      </p>

      <div className="mountify__offer--cta-container">
        <p className="urgency-text">Dont Wait - Transform Your Space Today!</p>
        <div href="" className="mountify__offer--cta-button">
          <a href="">FREE QUOTE</a>
        </div>
      </div>
    </div>
  );
};

export default Offer;
