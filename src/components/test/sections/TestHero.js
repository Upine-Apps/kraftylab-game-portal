import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import SlideShowButton from "../../buttons/SlideShowButton";
import ReusableButton from "../../buttons/ReusableButton";
import StatusAlert from "../../alerts/StatusAlert";
import ReusableTextField from "../../textfield/ReusableTextField";
import { themes } from "../../styles/ColorStyles";
import { H1, MediumText } from "../../styles/TextStyles";
import Password from "../../textfield/CustomPasswordField";
import GameCard from "../../cards/GameCard";
function TestHero() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function onChange(e) {
    console.log(e.target.name, e.target.value);
  }

  return (
    <Wrapper>
      <Title>Test page</Title>
      <Subtitle>test out your components and stuff here</Subtitle>
      <NameWrapper>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <SlideShowButton direction="180deg" />
        <SlideShowButton direction="0" />
        <SlideShowButton direction="45deg" />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </NameWrapper>
      <SlideShowButton direction="180deg" />
      <SlideShowButton direction="0" />
      <SlideShowButton direction="45deg" />

      <Password type="password" label="Password" placeholder="Enter Password" />
      <ReusableButton title="Login" />
      <GameCard
        title="test title"
        description="some text for description"
        // color="blue"
      ></GameCard>
      <StatusAlert status="Error" title="Error" subtitle="404: Not Found" />

      <ReusableTextField title="Code" />
      <form>
        <ReusableTextField title="First Name" onChange={onChange} />
        <ReusableTextField title="Last Name" onChange={onChange} />
        <ReusableTextField title="Email" onChange={onChange} />
        <ReusableTextField onChange={onChange} />
        <input type="submit" />
      </form>
    </Wrapper>
  );
}

export default TestHero;

const Wrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 40px 30px 150px;
  display: grid;
  gap: 20px;
  text-align: center;
  @media (max-width: 450px) {
    grid-template-columns: auto;
  }
`;

const Title = styled(H1)`
  padding: 10px;
  background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 50px;
    color: transparent;
  }
  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Subtitle = styled(MediumText)`
  padding: 10px;
  color: ${themes.light.text1};
`;
const NameWrapper = styled.div`
  input {
    /*         
    width: 100%; */
    background: linear-gradient(
      rgba(99, 106, 150, 0.4) 0%,
      rgba(182, 186, 214, 0.25) 100%
    );
    border: none;
    border-radius: 30px;
    box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
      rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    box-sizing: border-box;
    padding: 10px 42px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color: rgb(255, 255, 255);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
      text-align: left;
    }
  }
`;
