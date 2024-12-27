import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img1 from '../assets/img/img-1.png'; // Ensure correct file extension
import img2 from '../assets/img/img-2.png';
import img3 from '../assets/img/img-3.png';

export default function Slider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 " alt="Slide 1" />
          </div>
          {/* Second Slide */}
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 " alt="Slide 2" />
          </div>
          {/* Third Slide */}
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 " alt="Slide 3" />
          </div>
        </div>
        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
