import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import {
  BodyIntro,
  BodyMain,
  Caption2,
  MediumText,
  SmallText,
  SmallText2,
} from "../styles/TextStyles"

export default function ContactUsSuccess(props) {
  const { isOpen, popupCondition } = props

  return (
    <OuterWrapper isOpen={isOpen}>
      <Wrapper>
        <IconWrapper>
          <Icon
            src={
              props.popupCondition
                ? "/images/icons/check-white-circle.svg"
                : "/images/icons/x-white-circle.svg"
            }
            className="icon"
          />
        </IconWrapper>
        <TextWrapper>
          <Title>
            {props.popupCondition
              ? "Thanks! We'll be in touch"
              : "Something went wrong"}
          </Title>
        </TextWrapper>
      </Wrapper>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 90%;

  margin-left: -200px;
  margin-top: -250px;
  z-index: 10;

  @media (max-width: 450px) {
    transform: scale(0.5);
    top: 45%;
  }
`

const Wrapper = styled.div`
  width: 300px;
  height: 52px;
  left: 0px;
  top: 458px;

  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 10px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  /* * applies to all children and sub children */

  //   :hover {
  //     box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
  //       0px 30px 60px rgba(23, 0, 102, 0.5),
  //       inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  //     transform: translateY(-3px);

  //     .icon {
  //       transform: scale(1.2);
  //     }
  //   }
`

const Title = styled(MediumText)`
  color: white;
`

const Icon = styled.img`
  width: 32px;
  height: 32px;
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`

const TextWrapper = styled.div`
  display: grid;
  text-align: center;
  width: 200px;
`
