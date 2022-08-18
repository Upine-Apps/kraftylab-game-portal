import React, { useState } from "react";
import GameCard from "../cards/GameCard";
import SlideShowButton from "./SlideShowButton";
import styled from "styled-components";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    clearInterval(timer); //without this the buttons can mess up the autoplay
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    clearInterval(timer); //without this the buttons can mess up the autoplay
  };

  var timer = setInterval(function () {
    nextSlide();
  }, 2500); //This needs to be 500ms faster than line 26 or the animation breaks

  setTimeout(function () {
    clearInterval(timer);
  }, 3000);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Wrapper>
      <SlideShowButton direction="left" onClick={prevSlide} />
      <GameCardWrapper>
        {slides.map((item, index) => {
          return (
            <div
              className={index === current ? "item-active" : "item"}
              key={index}
            >
              {index === current && (
                <GameCard
                  title={item.title}
                  description={item.description}
                  color={item.color}
                />
              )}
            </div>
          );
        })}
      </GameCardWrapper>
      <SlideShowButton direction="right" onClick={nextSlide} />
    </Wrapper>
  );
};

export default ImageSlider;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  padding: 20px;
  grid-template-columns: 10% 80% 10%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 450px) {
    max-width: 450px;
    height: 300px;
    gap: 10px;
  }
  .item {
    opacity: 0.3;
    transition-duration: 1s ease;
  }
  .item-active {
    opacity: 1;
    transition-duration: 2s;
    transform: scale(1.08);
  }
`;
const GameCardWrapper = styled.div``;
