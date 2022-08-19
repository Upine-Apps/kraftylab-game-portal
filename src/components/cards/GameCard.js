import React from "react";
import styled from "styled-components";
import {
  BodyIntro,
  BodyMain,
  Caption,
  MediumText,
  SmallText,
} from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";

export default function GameCard(props) {
  const { title, description, color, icon } = props;
  return (
    <Wrapper color={color}>
      <TextWrapper>
        <GameTitle>{title}</GameTitle>
        <IconWrapper>{icon}</IconWrapper>
        <Description>{description}</Description>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: ${(props) => (props.color ? props.color : "black")};
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 30px 60px rgba(99, 30, 187, 0.5);
  backdrop-filter: blur(40px);
  border-radius: 30px;
`;

const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto;
  gap: 30px;
  align-self: center;
  @media (max-width: 450px) {
  }
`;

const GameTitle = styled(BodyMain)`
  font-size: 56px;
  font-weight: 700;
  color: ${themes.dark.text1};
  text-align: start;
  @media (max-width: 450px) {
    font-size: 36px;
  }
`;

const Description = styled(SmallText)`
  font-weight: 400;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.8);
  text-align: start;
  @media (max-width: 450px) {
    font-size: 24px;
  }
`;
const IconWrapper = styled.div`
  position: relative;
  /* border: 1px solid white; */
  position: static;
  width: 20px;
  height: 24px;
  left: 56px;
  top: 20px;
  transform: translateY(50px);
  margin: auto;
  display: grid;
  grid-template-rows: auto auto auto auto;
  justify-items: center;
`;
