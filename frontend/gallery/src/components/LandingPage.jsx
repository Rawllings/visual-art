import React from "react";
import DisplayPhotos from "./DisplayPhotos";

function LandingPage({ photos, setPhotos }) {
  return (
    <div>
      <div className="landing">
        <div className="landingpage">
          <div className="visual">
            <h1 className="words head">
              <span className="clr">Visual</span> Art
            </h1>
            <p className="">
              Welcome to Visual Art, an online art gallery showcasing a diverse
              range of contemporary artworks from talented artists around the
              world. Our website offers a user-friendly and immersive
              experience, allowing you to explore and purchase stunning
              paintings, sculptures, photographs, and mixed media pieces with
              just a few clicks.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <DisplayPhotos photos={photos} setPhotos={setPhotos} />
      <hr />
    </div>
  );
}

export default LandingPage;
// export default LnadingPagehttps://www.pngall.com/wp-content/uploads/3/Art-PNG-Image.png
