import React from "react";
import styled from "styled-components";
import BackButton from "../../buttons/mobile/BackButton";
import { useState, useEffect } from "react";
import Verification from "./Verification";
import Registration from "./Registration";
import ConfirmPassword from "./ConfirmPassword";
import ForgotPassword from "./ForgotPassword";

export default function AuthSection() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  function renderDesktop() {
    return (
      <GraphicWrapper>
        <Graphic src="images/auth/auth-graphic.svg" />
      </GraphicWrapper>
    );
  }

  return (
    <Wrapper>
      <ContentWrapper>
        {screenSize.dynamicWidth > 450 ? renderDesktop() : ""}
        <ScreenWrapper>
          {/* <Registration /> */}
          <ForgotPassword />
          {/* <ForgotPassword /> */}
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
  display: grid;
  margin: 0 auto;
  height: 100%;
  grid-template-columns: 35% 65%;
  @media (max-width: 450px) {
    display: inline;
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
    display: hidden;
  }
`;

const Graphic = styled.img`
  width: 75%;
  height: 100%;
`;

const ScreenWrapper = styled.div`
  margin: auto 0;

  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ScreenComponent = styled.div`
  display: grid;
  border: 1px solid red;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-content: center;
`;
