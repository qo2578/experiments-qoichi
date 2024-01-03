import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import slide4 from "../../images/slide4.png";
import slide5 from "../../images/slide5.png";
import slide6 from "../../images/slide6.png";
import slide7 from "../../images/slide7.png";
import slide8 from "../../images/slide8.png";

const Projects = ({ darkMode }) => {
  const settings = {
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div>
      <div className={`box-slider ${darkMode ? "dark-mode" : ""}`}>
        <Slider {...settings}>
          <div className="carousel-slide">
            <img src={slide1} alt="Описание слайда 1" />
          </div>
          <div className="carousel-slide">
            <img src={slide2} alt="Описание слайда 2" />
          </div>
          <div className="carousel-slide">
            <img src={slide7} alt="Описание слайда 7" />
          </div>
          <div className="carousel-slide">
            <img src={slide3} alt="Описание слайда 3" />
          </div>
          <div className="carousel-slide">
            <img src={slide4} alt="Описание слайда 4" />
          </div>
          <div className="carousel-slide">
            <img src={slide5} alt="Описание слайда 5" />
          </div>
          <div className="carousel-slide">
            <img src={slide8} alt="Описание слайда 8" />
          </div>
          <div className="carousel-slide">
            <img src={slide6} alt="Описание слайда 6" />
          </div>
        </Slider>
      </div>
      <div>
        <div className="box-project">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            href="https://stroy-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-project"
          >
            <span>Online store</span>Stroyka Store
          </a>
          <a
            href="https://dananz-gilt.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-project"
          >
            <span>Landing page</span>Dananz
          </a>
          <a
            href="https://u-source.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-project"
          >
            <span>Portfolio</span>U Source
          </a>
          <a
            href="https://u-app-orcin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-project"
          >
            <span>Portfolio</span>U Source 2.0
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="link-project"
          >
            <span>Portfolio</span>Tomorrow Techs
          </a>
          <a
            href="https://macaronshop.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-project"
          >
            <span>Store</span>Macaron Shop
          </a>
          <a
            href="https://bronirui-online.ru/shakhmatka"
            target="_blank"
            rel="noopener noreferrer"
            className="link-project"
          >
            <span>Booking Platform</span>Бронируй онлайн
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="link-project"
          >
            <span>Online menu</span>Tandyr Et
          </a>
          <a
            href="https://starwars-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-project"
          >
            <span>HTTP</span>StarWars
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="link-project"
          >
            <span>Three.js model</span>SMPL-3D-OBJ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
