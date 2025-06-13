import React from "react";

const Banner = () => {
  return (
    <div
      id="mainCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
          
              src="https://images.tcdn.com.br/img/editor/up/1101389/Banner_Bleu_de_Chanel.jpg"
            className="d-block w-100 img-fluid"
            alt="Slide 1"
            style={{
              height: "400px",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
        <div className="carousel-item">
          <img
          src="https://www.saison.com.au/cdn/shop/files/Eight_Bob-Brand_Info_2_1736x.jpg?v=1626046419"

            className="d-block w-100 img-fluid"
            alt="Slide 2"
            style={{
              height: "400px",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/736x/a8/a6/3d/a8a63d4e4ae5b9b6a2c4e1f780cc1874.jpg"
            className="d-block w-100 img-fluid"
            alt="Slide 3"
            style={{
              height: "400px",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
