import React from "react";
import "./reviews.css";

const Reviews = () => {
  return (
    <div className="reviews">

      <div className="review-tag">

        <div className="review-tag-name">
          <h2>Calvin. C - 4/5</h2>
        </div>

        <div className="review-tag-stat">

          <div className="review-tag-stat-stars">* * * * *</div>
          <div className="review-tag-stat-date">12/24</div>

        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          delectus impedit officia doloremque repellat ullam!
        </p>
      </div>
    </div>
  );
};

export default Reviews;
