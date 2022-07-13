import React from "react"
import styled from "styled-components"
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

export default function ForgotPassword() {
  function onChange(e) {
    console.log(e.target.value)
  }
  function onClick() {
    console.log("clicked!")
    // FIXME: function will unmount component and mount a new one
  }

  return (
    <Wrapper>
      <TextWrapper>
        <Subtitle>Uh oh! 👋</Subtitle>
        <Title>Forgot Password?</Title>
        <Subtitle>Enter the email associated with this account.</Subtitle>
        <ReusableTextField title="Email"onChange={onChange} />
      </TextWrapper>
      <FormWrapper>
        <ReusableButton title="Submit" onClick={onClick} />
        <TextButtonWrapper>
          <TextButton title="Remember your password? Login"></TextButton>
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
  padding-bottom: 25px;
  color: ${themes.light.text1};
  opacity: 0.6;
`

const TextButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: start;
`

const TextWrapper = styled.div`
  display: grid;
  text-align: left;
  gap: 0px;
`

const FormWrapper = styled.div``
