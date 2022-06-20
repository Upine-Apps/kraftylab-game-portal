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
import SnugAboutWave from "../backgrounds/SnugAboutWave"
import CustomerReviewCard from "../cards/CustomerReviewCard"
import SnugCustomerReviewBackground from "../backgrounds/SnugCustomerReviewBackground"
function SnugCustomerReview() {
  return (
    <Wrapper id="customer-feedback">
      <SnugCustomerReviewBackground />
      <ContentWrapper>
        <LeftCardWrapper>
          <CustomerReviewCard text="sdfa" />
        </LeftCardWrapper>
        <TextWrapper>
          <SubTitle>Trusted By People</SubTitle>
          <Title>Snug Reviews</Title>
          <Description>
            We love seeing people enjoy our app. We're glad we can provide a
            service for our community for free. We plan on making this
            appilcation even better but we thought we would share some of our
            users feed back. Let us know how you enjoy Snug!
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SnugCustomerReview

const Wrapper = styled.div`
  overflow: hidden;
  /* position: absolute; */
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 800px auto;
  max-width: 1300px;

  margin: 0 auto;
  padding: 0px 20px;
  height: 875px;
  padding-top: 150px;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    width: 450px;
  }
`

const LeftCardWrapper = styled.div``

const TextWrapper = styled.div`
  padding-top: 20px;
  @media (max-width: 450px) {
    padding-top: 120px;
    max-width: 425px;
  }
`

const SubTitle = styled(MediumText)`
  color: ${themes.dark.text1};
`

const Title = styled(H1)`
  background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  height: 70px;
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  padding-top: 30px;
  @media (max-width: 450px) {
    max-width: 90vw;
  }
`
