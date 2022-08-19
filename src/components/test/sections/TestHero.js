import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import SlideShowButton from "../../buttons/SlideShowButton";
import ReusableButton from "../../buttons/ReusableButton";
import StatusAlert from "../../alerts/StatusAlert";
import ReusableTextField from "../../textfield/ReusableTextField";
import { themes } from "../../styles/ColorStyles";
import { H1, MediumText } from "../../styles/TextStyles";
import Password from "../../textfield/CustomPasswordField";
import DefaultSpinner from "../../spinners/DefaultSpinner";
import GameCard2 from "../../cards/GameCard2";

function TestHero() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const color =
    "radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 233, 51, 0.6) 0%, rgba(52, 200, 0, 0.6) 45.83%, rgba(0, 200, 200, 0.6) 100%)";

  function onChange(e) {
    console.log(e.target.name, e.target.value);
  }

  return (
    <Wrapper>
      <Title>Test page</Title>
      <Subtitle>Test out your components here</Subtitle>

      <SlideShowButton direction="left" />
      <SlideShowButton direction="right" />

      <Password type="password" label="Password" placeholder="Enter Password" />
      <ReusableButton title="Login" />
      <ReusableButton title="Login" path="/" />
      <StatusAlert status="Error" title="Error" subtitle="404: Not Found" />
      <DefaultSpinner />
      <GameCard2
        color={color}
        category="Sports"
        subcategory="Baseball"
        question="Would you rather always have a full phone battery or oijeaoijaefoij oijaef oijf efeoifj"
      />

      <ReusableTextField title="Code" />
      <form>
        <ReusableTextField title="First Name" onChange={onChange} />
        <ReusableTextField title="Last Name" onChange={onChange} />
        <ReusableTextField title="Email" onChange={onChange} />
        {/* <ReusableTextField onChange={onChange} /> */}
        {/* <input type="submit" /> */}
      </form>
      {/* <LoginPage></LoginPage> */}
    </Wrapper>
  );
}

export default TestHero;

const Wrapper = styled.div`
  display: grid;
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
  background-color: black;
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
