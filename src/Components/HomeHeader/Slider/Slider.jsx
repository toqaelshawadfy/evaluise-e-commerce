import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frame560 from '../../../Images/Frame 560.png';
import "./Slider.css";

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "92%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#fff",
          opacity: 0.8,
        }}
      />
    ),
  };

  return (
    <div className="slider-wrapper w-100">
      <Slider {...settings}>
        <div>
          <img src={frame560} alt="Slide 1" className="w-100" height={300}/>
        </div>
        <div>
          <img src={frame560} alt="Slide 2" className="w-100"height={300}/>
        </div>
        <div>
          <img src={frame560} alt="Slide 3" className="w-100"height={300}/>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
