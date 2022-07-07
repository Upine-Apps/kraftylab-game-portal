import React from "react";
import styled, { keyframes } from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H1, H3, MediumText } from "../styles/TextStyles";
import ReusableButton from "../buttons/ReusableButton";
import GameCard from "../cards/GameCard";
import SlideShowButton from "../buttons/SlideShowButton";

function HeroSection() {
  const gameCardColor = "radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.7) 0%, rgba(76, 0, 200, 0.7) 45.83%, rgba(76, 0, 200, 0.7) 100%)";
  return (
    <Wrapper>
      <ContentWrapper>
        <LeftColumnWrapper>
          <TextWrapper>
            <Title>Krafty Lab Games</Title>
            <Subtitle>
              Krafty Lab Games, the one stop shop for all your team building
              games! Browse through the vast amount of games that will help your
              team communicate and work effectively together.
            </Subtitle>
          </TextWrapper>
          <ButtonWrapper>
            <ReusableButton title="Login" path="" />
            <ReusableButton title="Register" path="" />
          </ButtonWrapper>
        </LeftColumnWrapper>
        <DividerWrapper></DividerWrapper>
        <RightColumnWrapper>
          <RightColumnTitle>Most Popular</RightColumnTitle>
          <GameCardWrapper>
            <SlideShowButton direction="180deg" />
            <GameCard title="Icebreakers" description="Get to know each other!" color={gameCardColor} />
            <SlideShowButton direction="0deg" />
          </GameCardWrapper>
        </RightColumnWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

const animation = keyframes`
            from {opacity: 0; transform: translateY(-10px); filter: blur(10px)}
            to {opacity: 1; transform: translateY(0px); filter: blur(0px)}
            `;

const LeftColumnWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  @media (max-width: 450px) {
    max-width: 350px;
    justify-content: center;
    margin: 0 auto;
  }
`;

const DividerWrapper = styled.div`
  border: 2px solid #d0d2d3;
  position: relative;
  height: 70%;
  width: 1px;
  top: 15%;
  @media (max-width: 450px) {
    border: 2px solid #d0d2d3;
    width: 70%;
    height: 1px;
    left: 15%;
  }
`;

const RightColumnWrapper = styled.div`
  display: grid;
  grid-template-rows: 5% auto;
  gap: 10px;
  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

const RightColumnTitle = styled(H3)`
  text-align: center;
`;

const GameCardWrapper = styled.div`
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
`;

const Wrapper = styled.div`
  /* overflow: hidden;
  height: 1200px; */

  @media (max-width: 450px) {
    height: 1200px;
  }
`;

const ButtonWrapper = styled.div`
  width: 600px;
  padding-top: 100px;
  display: grid;
  margin: 0 auto;
  align-content: end;
  justify-content: center;
  grid-template-rows: auto auto;
  gap: 30px;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    max-width: 450px;
  }

  //why dis no work?
  a {
    :hover {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: translateY(-3px);
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 200px 30px 120px 30px;
  display: grid;
  grid-template-columns: 620px 1px auto;
  gap: 30px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 200px 0px 0px 0px;
    justify-content: center;
    margin: 0 auto;
  }
`;
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  margin: 0 auto;
  text-align: center;
  gap: 0px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const Title = styled(H1)`
  padding: 10px;
  background-clip: text;
  -webkit-background-clip: text;
  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Subtitle = styled(MediumText)`
  padding: 10px;
  color: ${themes.light.text1};
`;
