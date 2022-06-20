import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText, H2 } from "../styles/TextStyles"
import ProjectCard from "../cards/ProjectCard"
import {
  projectDataSnug,
  projectDataIntune,
  projectDataTwilio,
} from "../../data/projectData"
import CircleCard from "../cards/CircleCard"
import SnugHowItWorksBackground from "../backgrounds/SnugHowItWorksBackground"
function SnugHowItWorks() {
  return (
    <Wrapper id="works-snug">
      <SnugHowItWorksBackground />
      <ContentWrapper>
        <LeftContentWrapper>
          <FirstTextWrapper>
            <SubTitle>How Snug - Safer Dating app works</SubTitle>
            <Title> Three Easy Steps To Start Using Snug</Title>
          </FirstTextWrapper>
          <StepWrapper>
            <StepOne>
              <CircleCard text="01" />
              <TextWrapper>
                <StepTitle>Step 1: Download Snug - Safer Dating</StepTitle>
                <Description>
                  You can find Snug - Safer Dating on both app and play store.
                  Either click the download button above or simple search for
                  us.
                </Description>
              </TextWrapper>
            </StepOne>
            <StepTwo>
              <CircleCard text="02" />
              <TextWrapper>
                <StepTitle>Step 2: Create Your Date </StepTitle>
                <Description>
                  Date anyone and anywhere with confidence. Create your date on
                  the Snug app and we'll help you stay safe.
                </Description>
              </TextWrapper>
            </StepTwo>
            <StepThree>
              <CircleCard text="03" />
              <TextWrapper>
                <StepTitle>Step 3: Have Fun!</StepTitle>
                <Description>
                  Enjoy your date while we work to help you feel and stay safe.
                  Incase of emergencies we will contact you trusted contacts to
                  check on you.
                </Description>
              </TextWrapper>
            </StepThree>
          </StepWrapper>
        </LeftContentWrapper>
        <RightContentWrapper>
          <img
            src="/images/snug/snug-double-angle.png"
            className="rightImage"
          />
        </RightContentWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SnugHowItWorks

const Wrapper = styled.div`
  overflow: hidden;
  height: 900px;
  /* position: absolute; */
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: 1234px;

  margin: 0 auto;
  padding: 0px 20px;
  @media (max-width: 450px) {
    max-width: 450px;
    grid-template-columns: auto;
    gap: 0px;
  }
`

const LeftContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 550px;
  gap: 50px;
  @media (max-width: 450px) {
    gap: 0px;
    height: 550px;
  }
`
const FirstTextWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 20px;
  height: 180px;
  @media (max-width: 450px) {
    gap: 0px;
  }
`
const Title = styled(H1)`
  background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
  background-clip: text;
  padding-bottom: 10px;
  -webkit-background-clip: text;
  color: transparent;
`
const SubTitle = styled(MediumText)`
  color: ${themes.dark.text1};
`
const StepWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  @media (max-width: 450px) {
    grid-template-rows: 100px 100px 100px;
    gap: 30px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 10px;
`

const StepTitle = styled(H2)`
  color: ${themes.dark.text1};
  @media (max-width: 450px) {
    font-size: 18px;
  }
`
const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  @media (max-width: 450px) {
    font-size: 12px;
  }
`

const StepOne = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 40px;
  align-items: center;
  @media (max-width: 450px) {
    gap: 10px;
  }
`
const StepTwo = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 40px;
  align-items: center;
  @media (max-width: 450px) {
    gap: 10px;
  }
`
const StepThree = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 40px;
  align-items: center;
  @media (max-width: 450px) {
    gap: 10px;
  }
`

const RightContentWrapper = styled.div`
  align-self: center;
  @media (max-width: 450px) {
    margin: 0 auto;
  }
  img {
    width: 500px;
    object-fit: contain;
    @media (max-width: 450px) {
      width: 250px;
    }
  }
`
