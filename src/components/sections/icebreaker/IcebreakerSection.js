import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { H3 } from "../../styles/TextStyles";
import ReusableButton from "../../buttons/ReusableButton";
import IcebreakerCard from "../../cards/IcebreakerCard";
import { icebreakerData } from "../../../data/icebreakerData";
import ReusableTextField from "../../textfield/ReusableTextField";
import IcebreakerService from "../../../service/IcebreakerService";
import DefaultSpinner from "../../spinners/DefaultSpinner";
import { ColorData } from "../../../data/colorData";
export default function IcebreakerSection() {
  const [code, setCode] = useState("");
  const [icebreakers, setIcebreakers] = useState([]);

  const fetchData = async () => {
    const data = await IcebreakerService.getAllIcebreakers();
  };

  const getColor = () => {
    const colors = ColorData;
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex].color;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await IcebreakerService.getAllIcebreakers();
      setIcebreakers(data.sort(() => 0.5 - Math.random()).slice(0, 20));
      console.log(typeof icebreakers);
    };
    const data = fetchData().catch(console.error);
  }, []);

  async function onHostClick(e) {
    console.log(e);
  }

  async function onJoinClick(e) {
    console.log(e);
  }

  const icebreakerCard = () => {
    if (icebreakers.length > 0) {
      return icebreakers.map((item, index) => (
        <div className={index === current ? "item-active" : "item"} key={index}>
          {index === current && (
            <IcebreakerCard
              category={item.category}
              subcategory={item.subcategory}
              question={item.question}
              color={getColor()}
              onClick={null}
              isButtons={false}
            />
          )}
        </div>
      ));
    } else {
      return <DefaultSpinner isDark={true} />;
    }
  };
  //slideshow functionality

  const [current, setCurrent] = useState(0);
  const length = icebreakerData.length;

  const changeSlide = (direction) => {
    if (direction == "l") {
      setCurrent(current === 0 ? length - 1 : current - 1);
      clearInterval(timer); //without this the buttons can mess up the autoplay
    }
    if (direction == "r") {
      setCurrent(current === length - 1 ? 0 : current + 1);
      clearInterval(timer); //without this the buttons can mess up the autoplay
    }
  };

  var timer = setInterval(function () {
    changeSlide("r");
  }, 7000); //this needs to be 500ms faster than line 42 or the animation breaks

  setTimeout(function () {
    clearInterval(timer);
  }, 7500);

  if (!Array.isArray(icebreakerData) || icebreakerData.length <= 0) {
    return null;
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <TopWrapper>{icebreakerCard()}</TopWrapper>

        <BottomWrapper>
          <ButtonRowWrapper>
            <ReusableButton
              title="Host"
              width="182px"
              borderRadius="20px"
              onClick={(e) => onHostClick(e)}
            />
            <ReusableButton
              title="Join"
              width="182px"
              borderRadius="20px"
              onClick={(e) => onJoinClick(e)}
            />
          </ButtonRowWrapper>
          <ReusableTextField
            title="Have a code? Enter it here!"
            onChange={(e) => setCode(e.target.value)}
          />
        </BottomWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const animation = keyframes`
  0% {opacity: 0;}
  20% {opacity: 1;}
  80% {opacity: 1;}
  100% {opacity: 0;} 
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 200px;
`;

const ContentWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  width: 750px;
  justify-content: center;
  grid-template-rows: 80% 20%;
  @media (max-width: 450px) {
    display: inline;
  }
`;

const TopWrapper = styled.div`
  display: grid;
  margin: 50px;
  width: 550px;
  height: 325px;
  justify-items: center;
  @media (max-width: 450px) {
    vertical-align: middle;
    margin: 0;
    padding: 0 30px;
    max-width: none;
  }
  .item {
    opacity: 0.2;
    transition-duration: 5s ease;
  }
  .item-active {
    transition-duration: 3s;
    transform: scale(1.08);
    animation: ${animation} 7.5s forwards;
  }
`;

const BottomWrapper = styled.div`
  margin: 0 auto;
  max-width: 750px;
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ButtonRowWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 25px;
`;
const TextFieldWrapper = styled.div``;
