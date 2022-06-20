import React from "react"
import styled from "styled-components"
import AboutUsWave from "../backgrounds/AboutUsWave"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import ValueCard from "../cards/ValueCard"
import EmployeeCard from "../cards/EmployeeCard"
import { employeeData } from "../../data/employeeData"
function AboutUs() {
  return (
    <Wrapper id={"about-us"}>
      <AboutUsWave />
      <AboutUsColumn>
        <ContentWrapper>
          <TextWrapper>
            <Title>
              <span>About Us </span>
            </Title>
            <Description>
              Here at Upine Apps, we are dedicated to integrity, committed to
              giving back, and always striving for growth. The company was
              founded in 2020 in the midst of a pandemic. Owners Tate Walker and
              Shamer Zahir were just finishing up their final year in college,
              when they decided to make an app. Their first app, Snug - Safer
              Dating, led them to start Upine Apps and strive to make industrial
              level software that is accessible for everyone. They believed in
              three core values: integrity; commitment to giving back; and
              striving for growth. Now, they've developed many applications to
              benefit the public.
            </Description>
          </TextWrapper>
          <ValuesWrapper>
            <ValueCard
              title="Dedicated to Integrity"
              subtitle="We are upfront with our services. Upine Apps believes that data privacy is a human right. We keep this belief at the forefront of our design.
            We only implement tracking and data collection if required for the core functionality of our products."
              icon="/images/icons/about-us-card1.svg"
              background="linear-gradient(rgb(64, 141, 213) 0%, rgb(99, 11, 140) 100%)"
            ></ValueCard>
            <ValueCard
              title="Committed to Giving Back"
              subtitle="Upine Apps mentors a vast community of aspiring software engineers. Why? We believe that anyone can become a software engineer. Everybody starts somewhere, and we know that seeking guidance is a crucial part of everyone's educational journey."
              icon="/images/icons/about-us-card2.svg"
              background="linear-gradient(rgb(192, 52, 149) 0%, rgb(76, 36, 214) 100%)"
            ></ValueCard>
            <ValueCard
              title="Always Striving for Growth"
              subtitle="Along with giving back, we recognize the need for continual growth. The world of software is always evolving, and it won't wait for anyone. Staying up to date with latest technologies and design principles allows us to deliver the quality products that you expect."
              icon="/images/icons/about-us-card3.svg"
              background="linear-gradient(rgb(128, 97, 181) 0%, rgb(88, 24, 177) 100%)"
            ></ValueCard>
          </ValuesWrapper>
        </ContentWrapper>
        <EmployeeWrapper>
          {employeeData.map((item, index) => (
            <EmployeeCard item={item} key={index}></EmployeeCard>
          ))}
        </EmployeeWrapper>
      </AboutUsColumn>
    </Wrapper>
  )
}

export default AboutUs

const Wrapper = styled.div`
  overflow: hidden;
`

const AboutUsColumn = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`
const EmployeeWrapper = styled.div`
  position: relative;
  max-width: 100%;

  padding: 100px 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: auto auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    transform: scale(0.6);
    max-width: 90vw;
    justify-self: center;

    padding: 0px 0px 0px 0px;
  }
  @media (max-width: 300px) {
    grid-template-columns: auto;
    transform: scale(0.4);
    max-width: 90vw;
    justify-self: center;

    padding: 0px 0px 0px 0px;
  }

  justify-content: center;
`

const ContentWrapper = styled.div`
  position: relative;

  max-width: 1234px;
  margin: 0 auto;
  padding: 220px 30px 10px;

  display: grid;
  gap: 50px;

  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 350px;
    margin: 0 0;
    width: 100%;
    padding: 220px 20px 10px;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  max-height: 175px;
  display: grid;
  gap: 20px;

  @media (max-width: 450px) {
    max-width: 90vw;
    justify-content: center;
  } /* position: relative; */
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
`

const ValuesWrapper = styled.div`
  /* padding: 0 30px; */
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;

  @media (max-width: 450px) {
    max-width: 90vw;
    grid-template-columns: auto;
    justify-content: center;
  } ;
`
