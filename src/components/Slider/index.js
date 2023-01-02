import React from "react";
import Slider from "react-slick";
import SlideCard from "../SlideCard";

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
        <SlideCard name={'Peter Parker'} img={'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_xlarge.jpg'} />
        <SlideCard name={'Black Widow'} img={'http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b/standard_xlarge.jpg'} />
        <SlideCard name={'Hulk'} img={'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg'} />
        <SlideCard name={'Thor'} img={'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/standard_xlarge.jpg'} />
        <SlideCard name={'Black Panther'} img={'http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d/standard_xlarge.jpg'} />
        <SlideCard name={'Thanos'} img={'http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd/standard_xlarge.jpg'} />
        <SlideCard name={'Tony Stark'} img={'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_xlarge.jpg'} />
      </Slider>

    </div>
  );

}

export default Responsive