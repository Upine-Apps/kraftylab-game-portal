import styled from "styled-components";
import ReusableTextField from "../textfield/ReusableTextField";
import Password from "../textfield/CustomPasswordField";
import ReusableButton from "../buttons/ReusableButton";
import { H3 } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import React, { useState } from "react";

export default function LoginPage() {
  return (
    <Wrapper>
      <Label>
        Not registered? <Anchor href="/register">Create an account</Anchor>
      </Label>
      <Title>Welcome back! 👋</Title>
      <Subtitle>Login to your account</Subtitle>
      <ReusableTextField title="email" />
      <Password type="password" label="password" placeholder="Enter Password" />
      <ReusableButton title="Login" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  top: 0;
  justify-items: center;
  border: 1px red solid;
`;

const Label = styled(H3)`
  //   position: absolute;
  //   top: 2%;
  //   left: 70%;
  color: #333333;
  font-size: 12px;
  font-weight: normal;
  line-height: 15px;
`;

const Anchor = styled.a`
  color: #0066ff;
  font-size: 12px;
  font-weight: normal;
  line-height: 15px;
  text-decoration: underline;
  &:hover {
    color: purple;
    text-decoration: underline;
  }
`;

const Title = styled(H3)`
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  align-items: center;
  color: #757575;
`;

const Subtitle = styled.div`
  font-size: 22px;
  font-style: normal;
  line-height: 28px;
  align-items: center;
  color: #333333;
  font-weight: bold;
`;
