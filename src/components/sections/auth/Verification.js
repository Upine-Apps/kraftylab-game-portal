import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  MediumText,
  Caption,
  SmallText,
  AuthTitle,
  H4,
} from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import ReusableTextField from "../../textfield/ReusableTextField";
import CustomPasswordField from "../../textfield/CustomPasswordField";
import ReusableButton from "../../buttons/ReusableButton";
import TextButton from "../../buttons/TextButton";
import axios from "axios";
import {
  validateVerificationData,
  validateVerificationResponse,
} from "../../../validators/verificationValidators";
import StatusAlert from "../../alerts/StatusAlert";
import UserService from "../../../service/UserService";

export default function Verification({ setStep, registrationUsername }) {
  const emptyAlert = {
    visible: false,
    status: "",
    title: "",
    subtitle: "",
    key: 0,
  };
  const [verificationCode, setVerificationCode] = useState("");
  const [alert, setAlert] = useState(emptyAlert);

  async function onClick(e) {
    e.preventDefault();

    var body = {
      username: registrationUsername,
      code: verificationCode,
    };

    const validateBody = validateVerificationData(body);

    if (validateBody.error === false) {
      let response = await UserService.verifyUser(body);

      if (validateVerificationResponse(response)) {
        setVerificationCode("");
        setAlert(emptyAlert);
        setStep("Login");
      } else if (response.status == 500) {
        setAlert({
          visible: true,
          status: "Error",
          title: "Error verifying",
          subtitle: "Couldn't verify account. Please try again later",
          key: Math.random(),
        });
      }
    } else {
      setAlert({
        visible: true,
        status: validateBody.status,
        title: validateBody.title,
        subtitle: validateBody.subtitle,
        key: validateBody.key,
      });
    }
  }

  function displayAlert() {
    return (
      <StatusAlert
        status={alert.status}
        title={alert.title}
        subtitle={alert.subtitle}
        key={alert.key}
      />
    );
  }

  return (
    <Wrapper>
      {alert.visible ? displayAlert() : ""}
      <TextWrapper>
        <Subtitle>Almost there! 👋</Subtitle>
        <Title>Verification</Title>
        <Subtitle>Enter the 6-digit code sent to your email address.</Subtitle>
        <ReusableTextField
          title="Code"
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </TextWrapper>
      <FormWrapper>
        <ReusableButton title="Verify" onClick={onClick} />
        <TextButtonWrapper>
          <Subtitle>Remember your password?</Subtitle>
          <TextButton
            title="Login"
            onClick={() => setStep("Login")}
          ></TextButton>
        </TextButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-items: center;
  margin: 0 auto;
  max-width: 400px;
  @media (max-width: 450px) {
    vertical-align: middle;
    margin: 0;
    padding: 0 30px;
    max-width: none;
  }
`;

const Title = styled(H4)`
  padding-bottom: 15px;

  background-clip: text;
  -webkit-background-clip: text;
`;

const Subtitle = styled(SmallText)`
  padding: 15px 0;
  color: ${themes.light.text1};
`;

const TextButtonWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`;

const TextWrapper = styled.div`
  display: grid;
  text-align: left;
  gap: 0px;
`;

const FormWrapper = styled.div``;
