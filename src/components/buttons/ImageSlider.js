import React, { useState } from "react";
import GameCard from "../cards/GameCard";
import SlideShowButton from "./SlideShowButton";

const ImageSlider = ({ GameCard }) => {
  const [current, setCurrent] = useState(0);
  const length = GameCard.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(GameCard()) || GameCard.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <SlideShowButton direction="left" onClick={prevSlide} />
      <SlideShowButton direction="right" onClick={nextSlide} />
      {GameCard.map((GameCard, index) => {
        return (
          <div
            className={index === current ? "GameCard active" : "GameCard"}
            key={index}
          >
            {index === current && <GameCard></GameCard>}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
