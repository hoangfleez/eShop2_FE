import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productSlick.css"
// import "./style.css"

export default function CenterMode() {

    const settings = {
      dots: true,
      // className: "center",
      centerMode: true,
      infinite: true,
      autoplay: true,
      // centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      // autoplaySpeed:2000,
      liderToScroll:1,
    };
    return (
      <div className="productClick">
        <h2>Sản phẩm bán chạy</h2>
        <Slider {...settings}>
          <div className="item">
          <img src="https://pos.nvncdn.net/dca44c-69300/ps/20230505_N9Jtu9KEXh.jpeg" alt="" />
          </div>
          <div className="item">
          <img src="https://cf.shopee.vn/file/90451702e4b51301bdcdfa7b8f761c41" alt="" />
          </div>
          <div className="item">
          <img src="https://media3.scdn.vn/img3/2019/3_27/Wo3GhX_simg_de2fe0_500x500_maxb.jpg" alt="" />
          </div>
          <div className="item">
            <img src="https://img.ltwebstatic.com/images3_pi/2021/12/19/16399026214a6a21097debe6963d8a92a6aec79621_thumbnail_750x.webp" alt="" />
          </div>
          <div className="item">
              <img src="https://img.ltwebstatic.com/images3_pi/2021/05/13/16208752407305617617667cc340af4b427b9aba68_thumbnail_750x.webp" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
