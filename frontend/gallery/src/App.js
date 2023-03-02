// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import DisplayPhotos from "./components/DisplayPhotos";
import PhotoDetails from "./components/PhotoDetails";
import AddPhotos from "./components/AddPhotos";
import Footer from "./components/Footer";
import Comments from "./components/Comments";
import User from "./components/User";

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    fetch("/photos", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  const id = Array.isArray(photos)
    ? photos.map((photo) => {
        return photo.id;
      })
    : null;

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<LandingPage photos={photos} setPhotos={setPhotos} />}
        />
        <Route
          path="/photos"
          element={<DisplayPhotos photos={photos} setPhotos={setPhotos} />}
        />
        <Route
          exact
          path="photos/:id"
          element={<PhotoDetails photos={photos} setPhotos={setPhotos} />}
        />
        <Route
          path="/add"
          element={<AddPhotos photos={photos} setPhotos={setPhotos} />}
        />
        <Route
          path="/photos/:id/user"
          element={<User photos={photos} setPhotos={setPhotos} id={id} />}
        />
        <Route
          path="/photos/:id/user/comment"
          element={<Comments photos={photos} setPhotos={setPhotos} id={id} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
