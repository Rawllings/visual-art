import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Comments({ id }) {
  const [review, setReview] = useState([]);
  const { commentId } = useParams();

  useEffect(() => {
    fetch("/reviews", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data);
  }, []);

  // const id = Array.isArray(review)
  //   ? review.map((rev) => {
  //       return rev.id;
  //     })
  //   : null;

  const [comment, setComment] = useState();
  const [rating, setRating] = useState(0);
  const [user_id, setUser_id] = useState();
  const [photo_id, setPhoto_id] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setReview([...review, comment, rating, user_id, photo_id]);

    setComment("");
    setRating("");
    setUser_id(0);
    setPhoto_id(0);

    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
        rating,
        user_id,
        photo_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                User ID
              </label>
              <input
                value={user_id}
                onChange={(e) => setUser_id(e.target.value)}
                type="integer"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Photo ID
              </label>
              <input
                value={photo_id}
                onChange={(e) => setPhoto_id(e.target.value)}
                type="integer"
                class="form-control"
              />
            </div>
            <input type="submit" class="btn btn-primary" />
            <Link to={`/`}>
              <button class="btn btn-primary m-5">Back</button>
            </Link>
            <Link to={`/photos/${commentId}/user/comment/view`}>
              <button class="btn btn-primary m-1">View comments</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comments;
