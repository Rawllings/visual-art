import React, { useState } from "react";
import { Link } from "react-router-dom";

function Comments({ id }) {
  const [review, setReview] = useState([]);
  const [comment, setComment] = useState();
  const [rating, setRating] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setReview([...review, comment, rating]);

    setComment("");
    setRating("");

    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
        rating,
      }),
    })
      .then((res) => res.json())
      .then(document.location.reload());
  }
  return (
    <div>
      {/* Comments */}
      <div className="card text-center card1">
        <div className="card-header card2 fs-1">Comments</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Comment
              </label>
              <input
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                type="text"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Rating
              </label>
              <input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                type="integer"
                class="form-control"
              />
            </div>
            <input type="submit" class="btn btn-primary" />
            <Link to={`/photos/${id}/users/comment`}>
              <button class="btn btn-primary m-5">Back</button>
            </Link>
            <Link to={`/photos/${id}/users/comment`}>
              <button class="btn btn-primary m-5">Update</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comments;
