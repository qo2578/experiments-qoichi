import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import slide4 from "../../images/slide4.png";

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
            <img src={slide3} alt="Описание слайда 3" />
          </div>
          <div className="carousel-slide">
            <img src={slide4} alt="Описание слайда 4" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
