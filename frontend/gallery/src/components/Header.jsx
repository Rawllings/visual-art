import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fs-1 " href="/">
            Visual Art
          </a>
          <button
            className="navbar-toggler clr"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent text-decoration-none"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 headwords text-decoration-none">
              <li className="nav-item headwords navlink ">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item navlink headwords">
                <Link to="/photos">Photos</Link>
              </li>
            </ul>

            <Link to="/add" className="btn btn-outline-primary" type="submit">
              Add Photos
            </Link>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary mx-200" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
