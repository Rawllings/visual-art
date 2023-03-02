import React, { useState } from "react";
import { Link } from "react-router-dom";

function User({ id }) {
  const [user, setUser] = useState([]);
  const [name, setName] = useState();
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUser([...user, name, location, phone]);

    setName("");
    setLocation("");
    setPhone("");

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        phone,
      }),
    })
      .then((res) => res.json())
      .then(document.location.reload());
  }

  return (
    <div>
      <div className="card text-center card1">
        <div className="card-header card2 fs-1">User Details</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                name="name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Location
              </label>
              <input
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                type="text"
                class="form-control"
                name="location"
                required
              />
            </div>
            <div class="mb-3 ">
              <label class="form-check-label" for="exampleCheck1">
                Phone number
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="integer"
                class="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <input type="submit" class="btn btn-primary btn1" />
            <Link to={`/photos/${id}/user/comment`}>
              <button class="btn btn-primary m-5 btn1">Next</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
