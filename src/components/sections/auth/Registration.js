import React from "react";
import styled from "styled-components";
import { SmallText, H4 } from "../../styles/TextStyles";
import { useState } from "react";
import { themes } from "../../styles/ColorStyles";
import ReusableTextField from "../../textfield/ReusableTextField";
import CustomPasswordField from "../../textfield/CustomPasswordField";
import ReusableButton from "../../buttons/ReusableButton";
import TextButton from "../../buttons/TextButton";
import {
  validateRegistrationData,
  validateRegistrationResponse,
} from "../../../validators/authValidators";
import UserService from "../../../service/UserService";
import StatusAlert from "../../alerts/StatusAlert";

export default function Registration({ setStep, setRegistrationUsername }) {
  const emptyAlert = {
    visible: false,
    status: "",
    title: "",
    subtitle: "",
    key: 0,
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(emptyAlert);
  const [spinner, setSpinner] = useState(false);

  async function onClick(e) {
    e.preventDefault();

    const body = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      validated: false,
      password: password,
    };

    const validateBody = validateRegistrationData({ ...body, confirmPassword });

    if (validateBody.error === false) {
      setSpinner(true);
      let response = await UserService.registerUser(body);
      setSpinner(false);

      if (validateRegistrationResponse(response)) {
        setRegistrationUsername(email);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAlert(emptyAlert);
        setStep("Verification");
      } else if (response.status == 500) {
        setAlert({
          visible: true,
          status: "Error",
          title: "Account exists",
          subtitle: "You are already registered, please sign in",
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
        <Subtitle>Hello! 👋</Subtitle>
        <Title>Register your new account</Title>
      </TextWrapper>
      <FormWrapper>
        <ReusableTextField
          title="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <ReusableTextField
          title="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <ReusableTextField
          title="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomPasswordField
          name="Password"
          label="Password"
          value={password}
          placeholder="Please enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomPasswordField
          name="Confirm Password"
          label="Confirm Password"
          value={confirmPassword}
          placeholder="Please confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <ReusableButton
          title="Register"
          onClick={(e) => onClick(e)}
          spinner={spinner}
        />
        <TextButtonWrapper>
          <Subtitle>Already Registered?</Subtitle>
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
  padding-bottom: 25px;

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
