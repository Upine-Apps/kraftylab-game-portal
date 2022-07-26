import styled from "styled-components";
import {
  MediumText,
  Caption,
  SmallText,
  AuthTitle,
  H4,
  H3,
} from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import ReusableTextField from "../../textfield/ReusableTextField";
import CustomPasswordField from "../../textfield/CustomPasswordField";
import ReusableButton from "../../buttons/ReusableButton";
import React, { useState } from "react";
import TextButton from "../../buttons/TextButton";
import { validateConfirmPassword } from "../../../validators/registrationValidators";
import UserService from "../../../service/UserService";
import { validateConfirmPasswordResponse } from "../../../validators/registrationValidators";
export default function ConfirmPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");

  function onChange(e) {
    console.log(e.target.value);
  }

  async function onClick(e) {
    e.preventDefault();
    const body = {
      username: "shamer@upineapps.com",
      code: code,
      password: password,
    };

    if (!validateConfirmPassword({ ...body, confirmPassword })) {
      let response = await UserService.confirmPassword(body);
      console.log(response);
      validateConfirmPasswordResponse(response);
      setPassword("");
      setConfirmPassword("");
      setCode("");
    } else {
      console.log("error");
    }
  }
  return (
    <Wrapper>
      <TextWrapper>
        <Subtitle>Whew! 👋</Subtitle>
        <Title>Create new password</Title>
      </TextWrapper>
      <FormWrapper>
        <CustomPasswordField
          name="New Password"
          label="New Password"
          placeholder="Please enter your new password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomPasswordField
          name="Confirm Password"
          label="Confirm Password"
          placeholder="Please confirm your new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <ReusableTextField
          title="Code"
          onChange={(e) => setCode(e.target.value)}
        />
        <ReusableButton
          title="Reset Password"
          path=""
          onClick={(e) => onClick(e)}
        />
        <TextButtonWrapper>
          <Subtitle>Remember your password?</Subtitle>
          <TextButton title="Login" path=""></TextButton>
        </TextButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-items: center;
  margin: 0 auto; // look into what this is doing
  max-width: 400px;
  @media (max-width: 450px) {
    vertical-align: middle;
    margin: 0;
    padding: 0 30px;
    max-width: none;
  }
`;
const TextButtonWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`;

const Title = styled(H4)`
  padding-bottom: 25px;
  background-clip: text;
  -webkit-background-clip: text;
`;

const Subtitle = styled(SmallText)`
  padding: 15px 0;
  color: ${themes.light.text1};
`;

const TextWrapper = styled.div`
  display: grid;
  text-align: left;
  gap: 0px;
`;

const FormWrapper = styled.div``;
