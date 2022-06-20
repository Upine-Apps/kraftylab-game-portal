import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function ValueCard(props) {
  const { title, subtitle, icon, background } = props
  return (
    <Wrapper>
      <img src={icon} className="icon" />
      <div className="middle-card" style={{ background: background }}></div>
      <div className="content-card">
        <TextWrapper>
          <Title>{title || "Project Coming Soon!"}</Title>
          <Subtitle>{subtitle || "Guaranteed to be great!"}</Subtitle>
        </TextWrapper>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 225px;
  height: 400px;

  * {
    transition: all 0.8s ease-in-out 0s;
  }

  :hover img {
    transform: translateY(-3px);
  }

  :hover div {
    &.content-card {
      transform: translateY(-3px);
    }

    &.middle-card {
      transform: skewY(12deg) scaleX(0.9);
      transform-origin: left top;
    }
  }

  .content-card {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;

    bottom: 17.23%;

    background: rgba(0, 0, 0, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(40px);

    border-radius: 0px 30px 40px 40px;
  }
  .middle-card {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0.11%;
    bottom: 17.12%;

    mix-blend-mode: normal;
    border-radius: 0px 40px 40px;
    transform: skewY(8deg);
    transform-origin: left top 0px;
  }

  .icon {
    position: absolute;
    width: 32px;
    height: 32px;
    right: 25px;
    top: 20px;
    z-index: 1;
  }
`

// const Card = styled.div`
//   position: absolute;
//   left: 0%;
//   right: 0%;
//   top: 0%;

//   bottom: 17.23%;

//   background: rgba(0, 0, 0, 0.3);
//   border: 0.5px solid rgba(255, 255, 255, 0.3);
//   backdrop-filter: blur(40px);

//   border-radius: 0px 30px 40px 40px;

// `

// const MiddleCard = styled.div`
//   position: absolute;
//   left: 0%;
//   right: 0%;
//   top: 0.11%;
//   bottom: 17.12%;

//   mix-blend-mode: normal;
//   border-radius: 0px 40px 40px;
//   transform: skewY(8deg);
//   transform-origin: left top 0px;

//   :hover {
//     transform: skewY(15deg);
//     width: 200px;
//   }
// `

const Title = styled(Caption2)`
  color: ${themes.dark.text1};
`

const Subtitle = styled(SmallText)`
  color: ${themes.dark.text2};
  opacity: 0.7;
`

const TextWrapper = styled.div`
  display: grid;
  position: absolute;
  top: 60px;
  left: 30px;

  max-width: 175px;

  gap: 10px;
`
const Icon = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  right: 25px;
  top: 25px;
  z-index: 1;
`
// const EndCard = styled.div`
//   position: absolute;
//   left: 0%;
//   right: 0%;
//   top: 0.11%;
//   bottom: 17.12%;
//   background: rgba(0, 0, 0, 0.2);
//   mix-blend-mode: overlay;
//   border-radius: 0px 60px 60px 60px;
//   transform: matrix(1, 0.25, 0, 0.97, 0, 0) translateY(22px);
// `
