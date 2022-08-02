import styled from "styled-components";
import { SmallText, H4 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import ReusableTextField from "../../textfield/ReusableTextField";
import CustomPasswordField from "../../textfield/CustomPasswordField";
import ReusableButton from "../../buttons/ReusableButton";
import React, { useState } from "react";
import TextButton from "../../buttons/TextButton";
import {
  validateConfirmPasswordData,
  validateConfirmPasswordResponse,
} from "../../../validators/authValidators";
import UserService from "../../../service/UserService";
import StatusAlert from "../../alerts/StatusAlert";

export default function ConfirmPassword({ setStep, username }) {
  const emptyAlert = {
    visible: false,
    status: "",
    title: "",
    subtitle: "",
    key: 0,
  };
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState(emptyAlert);
  const [spinner, setSpinner] = useState(false);

  async function onClick(e) {
    e.preventDefault();
    const body = {
      username: username, // fixme, should get from ForgotPassword
      code: code,
      password: password,
    };

    const validateBody = validateConfirmPasswordData({
      ...body,
      confirmPassword,
    });

    if (validateBody.error === false) {
      setSpinner(true);
      let response = await UserService.confirmPassword(body);
      setSpinner(false);

      if (validateConfirmPasswordResponse(response)) {
        setPassword("");
        setConfirmPassword("");
        setCode("");
        setAlert({
          visible: true,
          status: "Success",
          title: "Reset Password",
          subtitle: "Returning to login",
          key: Math.random(),
        });
        setTimeout(function () {
          setStep("Login");
        }, 2000);
      } else if (response.status == 500) {
        setAlert({
          visible: true,
          status: "Error",
          title: "Incorrect code",
          subtitle: "The code is incorrect, or it has expired",
          key: Math.random(),
        });
      } else {
        setAlert({
          visible: true,
          status: "Error",
          title: "Failed to register",
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
          spinner={spinner}
        />
        <TextButtonWrapper>
          <Subtitle>Remember your password?</Subtitle>
          <TextButton
            title="Login"
            path=""
            onClick={() => setStep("Login")}
          ></TextButton>
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
