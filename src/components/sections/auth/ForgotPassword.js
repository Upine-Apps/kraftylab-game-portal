import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { SmallText, H4 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import ReusableTextField from "../../textfield/ReusableTextField";
import ReusableButton from "../../buttons/ReusableButton";
import TextButton from "../../buttons/TextButton";
import StatusAlert from "../../alerts/StatusAlert";
import { emptyAlert, failedForgotPassword } from "../../../data/alertData";
import {
  validateForgotPasswordData,
  validateForgotPasswordResponse,
} from "../../../validators/authValidators";
import UserService from "../../../service/UserService";

export default function ForgotPassword(props) {
  const { setUsername, setStep } = props;
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(emptyAlert);
  const [spinner, setSpinner] = useState(false);

  async function onClick(e) {
    e.preventDefault();

    const body = {
      username: email,
    };

    const validateBody = validateForgotPasswordData(body);

    if (validateBody.error === false) {
      setSpinner(true);
      let response = await UserService.startForgotPassword(body);
      setSpinner(false);

      if (validateForgotPasswordResponse(response)) {
        setUsername(email);
        setEmail("");
        setAlert(emptyAlert);
        setStep("ConfirmPassword");
      } else if (response.status == 500) {
        setAlert(failedForgotPassword);
      }
    } else {
      setAlert(validateBody);
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
        <Subtitle> Uh oh! 👋</Subtitle>
        <Title>Forgot Password?</Title>
        <Subtitle>Enter the email associated with this account.</Subtitle>
        <ReusableTextField
          title="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </TextWrapper>
      <FormWrapper>
        <ReusableButton
          title="Submit"
          onClick={(e) => onClick(e)}
          spinner={spinner}
        />
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
