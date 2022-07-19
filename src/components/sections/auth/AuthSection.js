import React from "react";
import styled from "styled-components";
import BackButton from "../../buttons/mobile/BackButton";
import { useState, useEffect } from "react";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import ConfirmPassword from "./ConfirmPassword";
import Login from "./Login";

export default function AuthSection() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  // https://medium.com/how-to-react/create-multi-step-form-in-react-with-validation-4ac09129a3a8
  // https://blog.devgenius.io/create-a-multi-step-form-with-reactjs-322aa97a2968#d22e
  // https://stackoverflow.com/questions/46592833/how-to-use-switch-statement-inside-a-react-component
  const [step, setStep] = useState(1);

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
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

  function renderSwitch(param) {
    console.log("step =", param);
    switch (param) {
      case 0:
        return (
          <Login nextStep={nextStep} prevStep={prevStep} setStep={setStep} />
        );
      case 1:
        return (
          <Registration
            nextStep={nextStep}
            prevStep={prevStep}
            setStep={setStep}
          />
        );
      case 2:
        return (
          <Verification
            nextStep={nextStep}
            prevStep={prevStep}
            setStep={setStep}
          />
        );
      case 3:
        return (
          <ForgotPassword
            nextStep={nextStep}
            prevStep={prevStep}
            setStep={setStep}
          />
        );
      case 4:
        return (
          <ConfirmPassword
            nextStep={nextStep}
            prevStep={prevStep}
            setStep={setStep}
          />
        );
      default:
        return <></>;
    }
  }

  return (
    <Wrapper>
      <ContentWrapper>
        {screenSize.dynamicWidth > 450 ? renderDesktop() : ""}
        <ScreenWrapper>
          {/* ADD YOUR COMPONENT HERE INSTEAD OF SCREEN COMPONENT
            SCREEN COMPONENT IS JUST THERE TO SHOW YOU THE RED BOX IT SHOULD TAKE UP. 
            !!!!REMOVE SCREEN COMPONENT AND GRAPHIC!!!
            MAKE SURE YOU LOOK AT HOW I ADDED WIDTH AND HEIGHT FOR THE COMPONENT
            WE WANT THIS TO BE FLEXIBLE WITH WHATEVER BOX WE PUT IT IN
            DON'T HARDCODE WIDTHS AND HEIGHTS W PIXELS!!!! USE PERCENTAGES */}
          {renderSwitch(step)}
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
