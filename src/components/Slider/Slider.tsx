import React from "react";
import { Carousel } from "antd";

import { SliderContainer, ContentStyle } from "./Slider.styled";

import Slide1 from '../../assets/images/slideImage.svg'

const Slider = () => {
  return (
    <Carousel autoplay>
      <div>
        <ContentStyle><img style={{width: '100%'}} src={Slide1} alt="Slide1" /></ContentStyle>
      </div>
      <div>
        <ContentStyle><img style={{width: '100%'}} src={Slide1} alt="Slide1" /></ContentStyle>
      </div>
      <div>
        <ContentStyle><img style={{width: '100%'}} src={Slide1} alt="Slide1" /></ContentStyle>
      </div>
      <div>
        <ContentStyle><img style={{width: '100%'}} src={Slide1} alt="Slide1" /></ContentStyle>
      </div>
    </Carousel>
  );
};

export default Slider;
