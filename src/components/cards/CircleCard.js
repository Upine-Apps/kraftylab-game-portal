import React from "react"
import styled from "styled-components"
import {
  BodyIntro,
  BodyMain,
  Caption,
  MediumText,
  SmallText,
} from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import { H2 } from "../styles/TextStyles"

export default function CircleCard(props) {
  const { text } = props
  return (
    <Wrapper>
      <TextWrapper>
        <Title>{text}</Title>
      </TextWrapper>
      <Ring src="/images/snug/snug-ring.svg" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  /* background: rgba(99, 106, 150, 0.8);
  box-shadow: rgb(0 0 0 / 25%) 0px 50px 100px,
    rgb(0 0 0 / 30%) 0px 0px 0px 0.5px inset; */
  background: radial-gradient(
    218.51% 281.09% at 100% 100%,
    rgba(156, 135, 247, 0.8) 0%,
    rgba(247, 135, 193, 0.8) 100%
  );
  box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px,
    rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
  border-radius: 50%;
  padding-left: 12px;
  padding-right: 12px;
  line-height: 100px; //centers vertically idk how
  display: grid;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media (max-width: 450px) {
    transform: scale(0.5);
  }
`

const TextWrapper = styled.div`
  text-align: center;
  color: ${themes.dark.text1};
`

const Title = styled(H2)``

const Ring = styled.img`
  position: absolute;
  width: 120px;
  top: -10px;
  left: -10px;
  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.05) translate(1px, 1px);
  }
`
