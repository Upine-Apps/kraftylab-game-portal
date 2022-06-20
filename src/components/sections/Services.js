import React from "react"
import styled from "styled-components"
import ServiceWave from "../backgrounds/ServiceWave"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import ServiceCardLeft from "../cards/ServiceCardLeft"
import ServiceCardMidLeft from "../cards/ServiceCardMidLeft"
import ServiceCardMidRight from "../cards/ServiceCardMidRight"
import ServiceCardRight from "../cards/ServiceCardRight"

function Services() {
  return (
    <Wrapper id="services">
      <ServiceWave />
      <AboutUsColumn>
        <ContentWrapper>
          <Title>
            <span>Services</span>
          </Title>
          <Description>
            We work to take your business or idea to the next level.
          </Description>
        </ContentWrapper>
        <ServicesWrapper>
          <ServiceCardLeft />
          <ServiceCardMidLeft />
          <ServiceCardMidRight />
          <ServiceCardRight />
        </ServicesWrapper>
      </AboutUsColumn>
    </Wrapper>
  )
}

export default Services

const Wrapper = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-rows: auto auto;
`

const AboutUsColumn = styled.div`
  display: grid;
  grid-template-rows: auto auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
  }
`
const ServicesWrapper = styled.div`
  position: relative;
  max-width: 100%;

  padding: 80px 30px;
  display: grid;
  gap: 50px;
  grid-template-columns: auto auto auto auto;

  justify-content: center;

  @media (max-width: 450px) {
    max-width: 90vw;
    grid-template-columns: auto;
    justify-self: center;
    padding: 0;
    transform: scale(0.9);
  }
  @media (max-width: 300px) {
    max-width: 90vw;
    grid-template-columns: auto;
    justify-self: center;
    transform: scale(0.6);
  }
`

const ContentWrapper = styled.div`
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
