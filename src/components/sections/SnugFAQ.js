import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H2, H1, MediumText } from "../styles/TextStyles"
import { snugFAQ } from "../../data/faqData"
import FAQCard from "../cards/FAQCard"
import SnugFaqBackground from "../backgrounds/SnugFaqBackground"
function SnugFAQ() {
  return (
    <Wrapper id="faq">
      <SnugFaqBackground />
      <ContentWrapper>
        <Title>Snug FAQ</Title>
        <FAQCardWrapper>
          {snugFAQ.map((item, index) => (
            <FAQCard item={item} key={index}></FAQCard>
          ))}
        </FAQCardWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SnugFAQ

const Wrapper = styled.div`
  overflow: hidden;
  height: 1275px;
  top: 100px;
  @media (max-width: 450px) {
    height: 2200px;
  }
  @media (max-width: 425px) {
    height: 2400px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 30px 120px 30px;
  display: grid;
  // grid-template-columns: 200px 150px auto;
  gap: 60px;
  @media (max-width: 450px) {
    grid-template-columns: auto;
  }
`

const FAQCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 50px;
  margin: 0 auto;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto auto auto;
    justify-content: center;
  }
  @media (max-width: 425px) {
    max-width: 20vw;
  }
`

const Title = styled(H1)`
  justify-self: center;
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
`
