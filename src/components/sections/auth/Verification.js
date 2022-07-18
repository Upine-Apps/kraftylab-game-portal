import React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
import {
  MediumText,
  Caption,
  SmallText,
  AuthTitle,
  H4,
} from "../../styles/TextStyles"
import { themes } from "../../styles/ColorStyles"
import ReusableTextField from "../../textfield/ReusableTextField"
import CustomPasswordField from "../../textfield/CustomPasswordField"
import ReusableButton from "../../buttons/ReusableButton"
import TextButton from "../../buttons/TextButton"
import axios from "axios"

export default function Verification() {
  const [verificationCode, setVerificationCode] = useState("")
  async function onClick(e) {
    e.preventDefault();

    let error = false;
    if (!parseInt(verificationCode)) error = true;
    if (!error){
      const body ={
        username: "shamer@upineapps.com",
        code: verificationCode,
      };
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Headers": "content-type",
      };
      let response = await axios.post("http://localhost:3000/user/validate-email", body, {headers})
      console.log(response);
      setVerificationCode("");
    }
    console.log("clicked!")
    // FIXME: function will unmount component and mount a new one
  }

  return (
    <Wrapper>
      <TextWrapper>
        <Subtitle>Almost there! 👋</Subtitle>
        <Title>Verification</Title>
        <Subtitle>Enter the 4-digit code sent to your email address.</Subtitle>
        <ReusableTextField title="Code"onChange={(e) => setVerificationCode(e.target.value)} />
      </TextWrapper>
      <FormWrapper>
        <ReusableButton title="Verify" onClick={onClick} />
        <TextButtonWrapper>
          <Subtitle>Remember your password?</Subtitle>
          <TextButton title="Login"></TextButton>
        </TextButtonWrapper>
      </FormWrapper>
    </Wrapper>
  )
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
`

const Title = styled(H4)`
  padding-bottom: 15px;

  background-clip: text;
  -webkit-background-clip: text;
`

const Subtitle = styled(SmallText)`
  padding: 15px 0;
  color: ${themes.light.text1};
`

const TextButtonWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`

const TextWrapper = styled.div`
  display: grid;
  text-align: left;
  gap: 0px;
`

const FormWrapper = styled.div``
