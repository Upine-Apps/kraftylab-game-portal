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
  const { title, description, color } = props;
  return (
    <Wrapper color={color}>
      <TextWrapper>
        <GameTitle>{title}</GameTitle>
        <Description>{description}</Description>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 600px;
  height: 600px;
  padding: 20px 20px;
  background: ${(props) => (props.color ? props.color : "black")};
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 30px 60px rgba(99, 30, 187, 0.5);
  backdrop-filter: blur(40px);
  border-radius: 30px;
`;

const TextWrapper = styled.div`
  position: absolute;
  left: 60px;
  top: 100px;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 300px;
  gap: 20px;
`;

const GameTitle = styled(BodyMain)`
  font-size: 56px;
  font-weight: 700;
  color: ${themes.dark.text1};
  text-align: start;
`;

const Description = styled(SmallText)`
  font-weight: 400;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.7);
  text-align: start;
`;
