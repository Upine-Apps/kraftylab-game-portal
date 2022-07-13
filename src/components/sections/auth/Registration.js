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

export default function Registration() {
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
        <Subtitle>Hello! 👋</Subtitle>
        <Title>Register your new account</Title>
      </TextWrapper>
      <FormWrapper>
        <ReusableTextField title="First Name" onChange={onChange} />
        <ReusableTextField title="Last Name" onChange={onChange} />
        <ReusableTextField title="Email" onChange={onChange} />
        <CustomPasswordField
          name="Password"
          label="Password"
          placeholder="Please enter your password"
        />
        <ReusableButton title="Register" onClick={onClick} />
        <TextButtonWrapper>
          <Subtitle>Already Registered?</Subtitle>
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
  padding-bottom: 25px;

  background-clip: text;
  -webkit-background-clip: text;
`

const Subtitle = styled(SmallText)`
  padding: 15px 0;
  color: ${themes.light.text1};
`

const TextButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 125px auto;
  align-items: start;
`

const TextWrapper = styled.div`
  display: grid;
  text-align: left;
  gap: 0px;
`

const FormWrapper = styled.div``
