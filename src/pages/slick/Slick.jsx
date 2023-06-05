import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="custom">
      <Slider {...settings}>
        <img
          src="https://st.depositphotos.com/1001001/4536/i/600/depositphotos_45364743-stock-photo-young-woman-at-beach.jpg"
          alt=""
        />

        <img
          src="https://img.freepik.com/premium-vector/summer-sale-banner-template-design-with-woman-bikini-sits-beach-illustration_468966-129.jpg"
          alt=""
        />

        <img src="https://americanpomade.vn/wp-content/uploads/2017/02/Sale-Banner-1920-x-600-FINAL.jpg" />
      </Slider>
    </div>
  );
}
