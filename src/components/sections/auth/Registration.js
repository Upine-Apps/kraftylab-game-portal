import React from "react";
import styled from "styled-components";
import { SmallText, H4 } from "../../styles/TextStyles";
import { useState } from "react";
import { themes } from "../../styles/ColorStyles";
import ReusableTextField from "../../textfield/ReusableTextField";
import CustomPasswordField from "../../textfield/CustomPasswordField";
import ReusableButton from "../../buttons/ReusableButton";
import TextButton from "../../buttons/TextButton";
import axios from "axios";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function isAlpha(str) {
    return /^[a-zA-Z]*$/.test(str);
  }

  // https://emailregex.com/ for more sophisticated regex
  // tristanigos@gmail .com matches unfortunately
  function isEmail(str) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(str);
  }

  async function onClick(e) {
    e.preventDefault();

    let error = false;
    error = !isAlpha(firstName) ? true : error;
    error = !isAlpha(lastName) ? true : error;
    error = !isEmail(email) ? true : error;
    error = password.length < 6 ? true : error;
    error = password !== confirmPassword ? true : error;
    console.log("error = ", error);

    if (!error) {
      const body = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        validated: false,
        password: password,
      };

      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Headers": "content-type",
      };

      console.log(body);
      let response = await axios.post("http://localhost:3000/user", body, {
        headers,
      });
      console.log(response);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }

  return (
    <Wrapper>
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
        <ReusableButton title="Register" onClick={(e) => onClick(e)} />
        <TextButtonWrapper>
          <Subtitle>Already Registered?</Subtitle>
          <TextButton title="Login"></TextButton>
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
