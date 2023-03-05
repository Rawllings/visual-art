import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Viewcomments({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div class="upline">
      {Array.isArray(reviews)
        ? reviews.map((review, index) => {
            return (
              <div
                class="card upline m-5"
                key={index}
                style={{ width: "18rem;" }}
              >
                <h5 class="card-header">Comment</h5>
                <div class="card-body">
                  <p class="card-text">{review.comment}</p>
                  <Link
                    to={`/photos/${id}/user/comment/view/update`}
                    class="btn btn-primary"
                  >
                    Update
                  </Link>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Viewcomments;
