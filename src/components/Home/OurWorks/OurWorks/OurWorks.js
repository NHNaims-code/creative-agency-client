import './OurWorks.css'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../../../images/carousel-1.png'
import carousel2 from '../../../../images/carousel-2.png'
import carousel3 from '../../../../images/carousel3.1.png'
import carousel4 from '../../../../images/carousel-4.png'

const OurWorks = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    infinite:true,
    autoPlaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        <div className="our-works-root landing-dark-bg py-5 w-100">
        <h2 className="text-center pt-3 pb-2">Here are some of <span className="landing-text">our works</span></h2>
  
        <div>
        <Slider {...settings} className="py-5 m-0">
          <div className=" w-100">
            <img src={carousel1} height="250px" className="mx-auto" alt=""/>
          </div>
          <div className=" w-100">
            <img src={carousel2} height="250px" className="mx-auto" alt=""/>
          </div>
          <div className=" w-100">
            <img src={carousel3} height="250px" className="mx-auto" alt=""/>
          </div>
          <div className=" w-100">
            <img src={carousel4} height="250px" className="mx-auto" alt=""/>
          </div>
        
        </Slider>
      </div>

        {/* <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={carousel1} class="d-block w-50 mx-auto" alt="..."/>
            </div>
            <div class="carousel-item ">
                <img src={carousel2} class="d-block w-50 mx-auto" alt="..."/>
            </div>
            <div class="carousel-item ">
                <img src={carousel3} class="d-block w-50 mx-auto" alt="..."/>
            </div>
        </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div> */}
        </div>
    );
};

export default OurWorks;