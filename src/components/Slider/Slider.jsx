import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { Link } from "react-router-dom";
import {
  SliderWrapper,
  SliderContainer,
  SliderCardContainer,
  SliderCardSubSpan3,
} from "./Slider.elements";
import { sliderSettings } from "../../utils/common";
import {
  FaUserMd,
  FaBriefcaseMedical,
  FaTooth,
  FaPhone,
  FaUserNurse,
  FaMicroscope,
} from "react-icons/fa"; // Example icon for physician

const iconMapping = {
  الاطباء: FaUserMd,
  ادارة: FaBriefcaseMedical,
  تمريض: FaUserNurse,
  فني: FaMicroscope,
  اسنان: FaTooth,
  استقبال: FaPhone,
};

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  const slides = data.map((card, i) => (
    <SwiperSlide key={i}>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={`/product/${encodeURIComponent(card.subName)}`}
      >
        <SliderCardContainer>
          {React.createElement(iconMapping[card.name], {
            size: "4em",
            color: "176b9b",
          })}
          <SliderCardSubSpan3 style={{ color: "#2790cd" }}>
            {card.name}
          </SliderCardSubSpan3>
        </SliderCardContainer>
      </Link>
    </SwiperSlide>
  ));

  return (
    <SliderWrapper>
      <SliderContainer>
        <Swiper
          {...sliderSettings}
          style={{ overflow: "visible" }}
          onSwiper={setSwiperInstance}
        >
          {slides}
        </Swiper>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;
