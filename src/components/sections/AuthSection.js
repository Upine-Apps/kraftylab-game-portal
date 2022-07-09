import React from "react";
import styled, { keyframes } from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H1, H3, MediumText } from "../styles/TextStyles";

export default function AuthSection() {
  const gameCardColor =
    "radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.7) 0%, rgba(76, 0, 200, 0.7) 45.83%, rgba(76, 0, 200, 0.7) 100%)";
  return (
    <Wrapper>
      <ContentWrapper>
        <GraphicWrapper>
          <Graphic src="images/auth/auth-graphic.svg" />
        </GraphicWrapper>
        <ScreenWrapper>
          {/* ADD YOUR COMPONENT HERE INSTEAD OF SCREEN COMPONENT
            SCREEN COMPONENT IS JUST THERE TO SHOW YOU THE RED BOX IT SHOULD TAKE UP
            MAKE SURE YOU LOOK AT HOW I ADDED WIDTH AND HEIGHT FOR THE COMPONENT
            WE WANT THIS TO BE FLEXIBLE WITH WHATEVER BOX WE PUT IT IN
            DON'T HARDCODE WIDTHS AND HEIGHTS W PIXELS!!!! USE PERCENTAGES */}
          <ScreenComponent />
        </ScreenWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: 35% auto;
  @media (max-width: 450px) {
    grid-template-rows: 30% auto;
    padding: 200px 0px 0px 0px;
    justify-content: center;
    margin: 0 auto;
  }
`;
const GraphicWrapper = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  background-color: #f4f9ff;
  justify-items: center;
  align-content: center;
  @media (max-width: 450px) {
    max-width: 350px;
    justify-content: center;
    margin: 0 auto;
  }
`;
const Graphic = styled.img`
  width: 75%;
`;
const ScreenWrapper = styled.div`
  display: grid;
  padding: 100px 30px 200px 30px;
  border: 1px solid green;
`;

const ScreenComponent = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;
