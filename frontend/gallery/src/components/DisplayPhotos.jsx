import { Link } from "react-router-dom";
import React from "react";

function DisplayPhotos({ photos }) {
  function handleDelete(id) {
    fetch(`/photos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Item deleted successfully");
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(document.location.reload())
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>Photos</h1>
      <div className="card-container mb-2 ">
        {Array.isArray(photos)
          ? photos.map((photo, index) => {
              return (
                <div
                  className="card upline row no-gutters "
                  key={index}
                  style={{ width: "18rem;" }}
                >
                  <img
                    src={photo.image_url}
                    className="card-img-top"
                    alt="Loading..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name: {photo.name}</h5>
                    <p className="card-text">Price: {photo.price}</p>
                    <hr />

                    {Array.isArray(photo.users)
                      ? photo.users.map((user, index) => {
                          return (
                            <div key={index} style={{ width: "18rem;" }}>
                              <div className="card-body">
                                <h5 className="card-title">
                                  User name: {user.name}
                                </h5>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title">
                                  Locaton: {user.location}
                                </h5>
                              </div>
                            </div>
                          );
                        })
                      : null}
                    <hr />
                    <h5>Comments: {photo.reviews.length}</h5>
                    {Array.isArray(photo.reviews)
                      ? photo.reviews.map((review, index) => {
                          return (
                            <div key={index} style={{ width: "18rem;" }}>
                              <div className="card-body">
                                <h5 className="card-title">
                                  Rating: {review.rating}
                                </h5>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title">
                                  Comment: {review.comment}
                                </h5>
                              </div>
                            </div>
                          );
                        })
                      : null}
                    <Link to={`/photos/${photo.id}`}>
                      <button className="btn btn-primary btn1">Details</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(photo.id)}
                      className="btn btn-primary delete btn1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default DisplayPhotos;
