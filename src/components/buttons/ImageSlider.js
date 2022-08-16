import React, { useState } from "react";
import GameCard from "../cards/GameCard";
import SlideShowButton from "./SlideShowButton";
import { allGameData } from "../cards/GameCard";

const ImageSlider = ({ GameCard }) => {
  const [current, setCurrent] = useState(0);
  const length = allGameData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (allGameData() || allGameData.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <SlideShowButton direction="left" onClick={prevSlide} />
      <SlideShowButton direction="right" onClick={nextSlide} />
      {allGameData.map((item, index) => (
        <GameCard item={item} key={index}></GameCard>
      ))}
    </section>
  );
};

export default ImageSlider;
