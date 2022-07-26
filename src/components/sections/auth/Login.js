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
import {
  validateLoginData,
  validateLoginResponse,
} from "../../../validators/registrationValidators";
import UserService from "../../../service/UserService";
import StatusAlert from "../../alerts/StatusAlert";

export default function Login() {
  const emptyAlert = {
    visible: false,
    status: "",
    title: "",
    subtitle: "",
    key: 0,
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(emptyAlert);

  async function onClick(e) {
    e.preventDefault();

    const body = {
      username: username,
      password: password,
    };

    const validateBody = validateLoginData(body);

    if (validateBody.error === false) {
      let response = await UserService.loginUser(body);

      if (validateLoginResponse(response)) {
        setUsername("");
        setPassword("");
        setAlert(emptyAlert);
      } else if (response.status == 500) {
        setAlert({
          visible: true,
          status: "Error",
          title: response.message,
          subtitle: "Please try again",
          key: Math.random(),
        });
      } else {
        setAlert({
          visible: true,
          status: "Error",
          title: "Failed to login",
          subtitle: "Try again",
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
        <Subtitle>Welcome back! 👋</Subtitle>
        <Title>Login to your account</Title>
      </TextWrapper>
      <FormWrapper>
        <ReusableTextField
          title="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <CustomPasswordField
          name="Password"
          label="Password"
          placeholder="Please enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ReusableButton title="Login" onClick={(e) => onClick(e)} />
        <TextButton title="Forgot Password?"></TextButton>
        <TextButtonWrapper>
          <Subtitle>Not registered?</Subtitle>
          <TextButton title="Create an account"></TextButton>
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
