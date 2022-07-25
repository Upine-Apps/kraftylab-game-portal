import React from "react";
import styled from "styled-components";
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

export default function ForgotPassword({ setStep }) {
  function onChange(e) {
    console.log(e.target.value);
  }
  function onClick() {
    console.log("clicked!");
    // FIXME: function will unmount component and mount a new one
    setStep("ConfirmPassword");
  }

  return (
    <Wrapper>
      <TextWrapper>
        <Subtitle>Uh oh! 👋</Subtitle>
        <Title>Forgot Password?</Title>
        <Subtitle>Enter the email associated with this account.</Subtitle>
        <ReusableTextField title="Email" onChange={onChange} />
      </TextWrapper>
      <FormWrapper>
        <ReusableButton title="Submit" onClick={onClick} />
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
