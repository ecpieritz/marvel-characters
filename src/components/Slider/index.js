import React, {useEffect} from "react";
import Slider from "react-slick";

import ImgOne from '../../assets/images/mv-test-carousel.jpg'
import ImgTwo from '../../assets/images/mv-tests-carousel.jpg'

const Responsive = () => {
  

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="mv-carousel__container">
        <Slider {...settings} className="mv-carousel__slider">
          <div className="mv-carousel__slider__item">
            <img src={ImgOne} alt="" />
            <p className="mv-carousel__slider__item__name">Nome</p>
          </div>
          <div className="mv-carousel__slider__item">
            <img src={ImgTwo} alt="" />
            <p className="mv-carousel__slider__item__name">Nome</p>
          </div>
          <div className="mv-carousel__slider__item">
            <img src={ImgOne} alt="" />
            <p className="mv-carousel__slider__item__name">Nome</p>
          </div>
          <div className="mv-carousel__slider__item">
            <img src={ImgTwo} alt="" />
            <p className="mv-carousel__slider__item__name">Nome</p>
          </div>
          <div className="mv-carousel__slider__item">
            <img src={ImgOne} alt="" />
            <p className="mv-carousel__slider__item__name">Nome</p>
          </div>
          <div className="mv-carousel__slider__item">
            <img src={ImgTwo} alt="" />
            <p className="mv-carousel__slider__item__name">Nome</p>
          </div>
          <div className="mv-carousel__slider__item">
            <img src={ImgOne} alt="" />
            <p className="mv-carousel__slider__item__name">Nome</p>
          </div>
        </Slider>
      </div>
    );
  
}

export default Responsive