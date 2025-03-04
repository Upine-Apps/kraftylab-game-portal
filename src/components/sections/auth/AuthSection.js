import React, { useState } from "react";
import styled from "styled-components";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import ConfirmPassword from "./ConfirmPassword";
import Login from "./Login";
import Verification from "./Verification";

export default function AuthSection(props) {
  const { context } = props;
  const [step, setStep] = useState("Login");
  const [username, setUsername] = useState("");
  const [registrationUsername, setRegistrationUsername] = useState("");

  function renderSwitch(param) {
    switch (param) {
      case "Login":
        return <Login context={context} setStep={setStep} />;
      case "Registration":
        return (
          <Registration
            setStep={setStep}
            setRegistrationUsername={setRegistrationUsername}
          />
        );
      case "Verification":
        return (
          <Verification
            setStep={setStep}
            registrationUsername={registrationUsername}
          />
        );
      case "ForgotPassword":
        return <ForgotPassword setStep={setStep} setUsername={setUsername} />;
      case "ConfirmPassword":
        return <ConfirmPassword setStep={setStep} username={username} />;
      default:
        return <Login setStep={setStep} />;
    }
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <GraphicWrapper>
          <Graphic src="images/auth/auth-graphic.svg" />
        </GraphicWrapper>
        <ScreenWrapper>{renderSwitch(step)}</ScreenWrapper>
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
