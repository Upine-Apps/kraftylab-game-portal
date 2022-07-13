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

export default function Registration() {
  function onChange(e) {
    console.log(e.target.value)
  }
  function onClick() {
    console.log("clicked!")
  }

  return (
    <Wrapper>
      <TextWrapper>
        <Subtitle>Hello! 👋</Subtitle>
        <Title>Register your new account</Title>
      </TextWrapper>
      <FormWrapper>
        {/* text field width does not change similarly to password */}
        <ReusableTextField title="First Name" onChange={onChange} />
        <ReusableTextField title="Last Name" onChange={onChange} />
        <ReusableTextField title="Email" onChange={onChange} />
        <CustomPasswordField
          name="Password"
          label="Password"
          placeholder="Please enter your password"
        />
        <ReusableButton title="Register" path="/" onClick={onClick} />
      </FormWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 360px;
  // wrapper for the form
  justify-items: center;
  // width: 65%; // how do i make the width equal the width of the wrapper above it?
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

const TextWrapper = styled.div`
  display: grid;
  text-align: left;
  gap: 0px;
`

const FormWrapper = styled.div`
  border: 1px red solid;
`
