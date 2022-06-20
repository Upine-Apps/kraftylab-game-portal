import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText, H3 } from "../styles/TextStyles"
import ProjectCard from "../cards/ProjectCard"
import {
  projectDataSnug,
  projectDataIntune,
  projectDataTwilio,
} from "../../data/projectData"
import CircleCard from "../cards/CircleCard"
import SnugAboutWave from "../backgrounds/SnugAboutWave"
function SnugAbout() {
  return (
    <Wrapper id="about-snug">
      <SnugAboutWave />
      <ContentWrapper>
        <TextWrapper>
          <SubTitle>Snug Features</SubTitle>
          <Title>What Makes Snug Cool</Title>
        </TextWrapper>
        <BottomWrapper>
          <SideWrapper>
            <SideTextWrapper>
              <SideTitle>Date With A Safety Net</SideTitle>
              <Description>
                Create a date on our app and we'll help you stay safe. We'll
                check in with you after your date. If things go south don't
                worry, because your trusted contacts will be alerted. Date
                confidently with Snug.
              </Description>
            </SideTextWrapper>
            <SideTextWrapper>
              <SideTitle>Zero Ads</SideTitle>
              <Description>
                No one likes ads, especially us. Our user experience is our top
                priority and we want everyone to enjoy it without distrubance.
              </Description>
            </SideTextWrapper>
            <SideTextWrapper>
              <SideTitle>Completely Free</SideTitle>
              <Description>
                Safety should be free. Our main goal when creating Snug is to
                provide this tool to everyone. We want everyone to feel safe and
                enjoy life.
              </Description>
            </SideTextWrapper>
          </SideWrapper>
          <MiddleWrapper>
            <img src="/images/snug/snug-about.png" className="rightImage" />
          </MiddleWrapper>
          <SideWrapper>
            <SideTextWrapper>
              <SideTitle>Your Privacy Matters</SideTitle>
              <Description>
                Snug collects and stores your profile information and data
                submitted about your dates. Thats it. We do not track you and
                believe that your data belongs to you, not us.
              </Description>
            </SideTextWrapper>
            <SideTextWrapper>
              <SideTitle>Simple & Easy</SideTitle>
              <Description>
                Using Snug could not get any easier. Our simple process of
                creating date only takes seconds. We designed it to be user
                friendly and accessible for all ages.
              </Description>
            </SideTextWrapper>
            <SideTextWrapper>
              <SideTitle>Cross-Platform</SideTitle>
              <Description>
                Why hinder a tool that can help people to one platform? That
                exactly what we thought and made Snug available on both Android
                and iOS. All future updates will be for both platforms.
              </Description>
            </SideTextWrapper>
          </SideWrapper>
        </BottomWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SnugAbout

const Wrapper = styled.div`
  overflow: hidden;
  height: 1000px;
  @media (max-width: 450px) {
    height: 1300px;
  }
  /* position: absolute; */
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  margin: 0 auto;
  max-width: 1234px;
  gap: 40px;
  @media (max-width: 450px) {
    max-width: 450px;
    padding: 10px;
  }
`
const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px;
  gap: 20px;
  @media (max-width: 450px) {
    grid-template-columns: auto;
  }
`
const SideWrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 200px 200px;
  @media (max-width: 450px) {
    grid-template-rows: 100px 100px 100px;
    gap: 20px;
  }
`

const MiddleWrapper = styled.div`
  align-self: center;
  margin: 0 auto;

  img {
    width: 400px;
    object-fit: contain;
    @media (max-width: 450px) {
      width: 250px;
      margin: 0 auto;
    }
  }
`
const TextWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 70px;
  justify-items: center;
`

const Title = styled(H1)`
  background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const SubTitle = styled(MediumText)`
  color: ${themes.dark.text1};
`
const SideTextWrapper = styled.div``

const SideTitle = styled(H3)`
  color: ${themes.dark.text1};
  @media (max-width: 450px) {
    font-size: 18px;
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  padding-top: 20px;
  @media (max-width: 450px) {
    font-size: 12px;
    margin: 0 auto;
    padding: 10px;
  }
`
