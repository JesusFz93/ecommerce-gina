import React from "react";
import { NavLink } from 'react-router-dom';

// Importacion de imagenes
// import PacksGif from '../images/packs.gif';
import Black from '../images/cafe-black.png';
import Green from '../images/cafe-green.png';
import Purple from '../images/cafe-purple.png';

const HomePage = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-dark rounded-3">
        <div className="container-fluid text-bg-dark py-5">
          <h1 className="display-5 fw-bold">Nuevos cafés de grano internacionales</h1>
          <p className="col-md-8 fs-4">Prueba nuetros nuevos producto simportados, seleccionados especialmente para ti.</p>
          <NavLink to="/productos" >
            <button className="btn btn-success btn-lg" type="button">Productos</button>
          </NavLink>
        </div>
      </div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src={Black} className="d-block w-100 ps-5" alt="doodle-cafe" />
            <div className="carousel-caption d-none d-md-block">
              <NavLink to="/productos" >
                <button className="btn btn-success btn-lg" type="button">Ver más...</button>
              </NavLink>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={Green} className="d-block w-100 ps-5" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <NavLink to="/productos" >
                <button className="btn btn-success btn-lg" type="button">Ver más...</button>
              </NavLink>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Purple} className="d-block w-100 ps-5" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <NavLink to="/productos" >
                <button className="btn btn-success btn-lg" type="button">Ver más...</button>
              </NavLink>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  );
};

export default HomePage;
