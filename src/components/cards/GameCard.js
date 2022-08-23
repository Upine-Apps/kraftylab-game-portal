import React from "react";
import styled from "styled-components";
import { MediumText, H2 } from "../styles/TextStyles";

export default function GameCard(props) {
  const { title, description, color, icon } = props;
  return (
    <Wrapper color={color}>
      <CardWrapper>
        <TextWrapper>
          <GameTitle>{title}</GameTitle>
          <Description>{description}</Description>
        </TextWrapper>
        <IconWrapper>
          <img src={icon} alt="Icon" className="iceBreakerIcon" />
        </IconWrapper>
      </CardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 247px;
  padding: 20px;
  background: ${(props) => (props.color ? props.color : "black")};
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 30px 60px rgba(99, 30, 187, 0.5);
  border-radius: 30px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto;
  gap: 35px;
`;

const GameTitle = styled(H2)`
  height: 100px;
  text-align: start;
  padding-top: 30px;
`;

const Description = styled(MediumText)``;
const IconWrapper = styled.div``;
