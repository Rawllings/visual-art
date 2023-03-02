import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PhotoDetails() {
  const { id } = useParams();
  const [photos, setPhotos] = useState();

  useEffect(() => {
    fetch(`/photos/${id}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [id]);

  if (photos === undefined) {
    return photos;
  }
  return (
    <div>
      <h1>PhotoDetails {id}</h1>
      <div className="card mb-3" style={{ max_width: "540px;" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={photos.image_url}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Name: {photos.name} </h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">Price: {photos.price} </h5>
            </div>
            <div></div>
          </div>
          <Link to={`/photos/${photos.id}/user`}>
            <button className="btn btn-primary btn1 p-1 my-1 mx-2">
              {" "}
              Comment{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhotoDetails;
