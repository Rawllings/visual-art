import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Updatecomment() {
  const { id } = useParams();
  // const [reviews, setReviews] = useState([]);
  // const [review, setReview] = useState([]);
  const [comment, setcomment] = useState("");

  useEffect(() => {
    fetch(`/reviews}`)
      .then((res) => res.json())
      .then((review) => {
        console.log(comment);
        if (comment === undefined) {
          return setcomment(review.comment);
        }
      });
  }, []);

  // const rev = review.map((com) => {
  //   return <h1>com.comment</h1>;
  // });

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: comment }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      {/* Comments */}
      <div className="card text-center card1">
        <div className="card-header c-dark card2 fs-1">Update Comment {id}</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Update
              </label>
              <input
                type="text"
                class="form-control"
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
              />
            </div>

            <input type="submit" class="btn btn-primary" />
            <Link to={`/`}>
              <button class="btn btn-primary m-5">Back</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Updatecomment;
