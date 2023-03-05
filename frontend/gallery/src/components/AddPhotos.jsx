import React, { useState } from "react";

function AddPhotos({ photos, setPhotos }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image_url, setImage_url] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setPhotos([...photos, { name, price, image_url }]);

    setName("");
    setPrice();
    setImage_url();

    fetch("/photos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        image_url,
      }),
    })
      .then((res) => res.json())
      .then(document.location.reload());
  }

  return (
    <div>
      <div className="card text-center card1">
        <div className="card-header card2">Add your Art-Work</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Photo name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="integer"
                class="form-control"
              />
            </div>
            <div class="mb-3 ">
              <label class="form-check-label" for="exampleCheck1">
                Image url
              </label>
              <input
                value={image_url}
                onChange={(e) => setImage_url(e.target.value)}
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <input type="submit" class="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPhotos;
