import React from "react"
import styled from "styled-components"

import { H3, H1, BodyMain } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function FAQCard(props) {
  const { item } = props
  return (
    <Wrapper>
      <QuestionWrapper>
        <Title>Q:</Title>
        <QandA>{item.question}</QandA>
      </QuestionWrapper>
      <AnswerWrapper>
        <Title>A:</Title>
        <QandA>{item.answer}</QandA>
      </AnswerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  filter: drop-shadow(0 5px 0.45rem rgba(0, 0, 0, 0.3));
  :hover {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: translateY(-3px);
  }
  @media (max-width: 425px) {
    max-width: 300px;
  }
`

const QuestionWrapper = styled.div`
  width: 400px;
  height: 80px;
  display: grid;
  grid-template-columns: 50px auto;
  gap: 25px;
  align-content: center;
  padding: 20px;
  border-radius: 50px 50px 0 0;
  background: linear-gradient(95deg, #ebb2f4 -12%, #9f50bb 114%);
  @media (max-width: 425px) {
    max-width: 300px;
    height: 100px;
  }
`

const AnswerWrapper = styled.div`
  width: 400px;
  height: 200px;
  display: grid;
  grid-template-columns: 50px auto;
  gap: 25px;
  align-content: center;
  padding: 20px;
  border-radius: 0 0 50px 50px;
  background: linear-gradient(265deg, #8856c7 -5%, #53238f 129%);
  @media (max-width: 425px) {
    max-width: 300px;
  }
`

const Title = styled(H3)`
  align-self: center;
  color: ${themes.dark.text1};
`

const QandA = styled(BodyMain)`
  color: ${themes.dark.text1};
  @media (max-width: 425px) {
    font-size: 16px;
  }
`
