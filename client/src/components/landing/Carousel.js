import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css'

export default class AutoPlay extends Component {
  render() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };


    return (
        <Slider {...settings}>
            <div>
                <div className="slide-title">A central repository for all the clubs.</div>
                <div className="slide-content">Student can join, leave, posts, get updates, on the club events, interact with other members, etc.</div>
            </div>

            <div>
                <div className="slide-title">A portal where Professors can post Projects.</div>
                <div className="slide-content">And Students who are willing to work on those Projects can apply to work.</div>
            </div>

            <div>
                <div className="slide-title">A Student Profile which shows affiliation to our University.</div>
                <div className="slide-content">Also, Students can post their current projects, achievements, and their publications.</div>
            </div>
        </Slider>
    );
  }
}