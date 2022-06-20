import React from "react"
import styled from "styled-components"
import { Caption2, SmallText, H3 } from "../styles/TextStyles"
import { Link } from "gatsby"
import { themes } from "../styles/ColorStyles"

export default function ProjectCard(props) {
  const {
    link,
    title,
    subtitle,
    background,
    projectData,
    color,
    onClick,
  } = props

  return (
    <Wrapper>
      <Link to={link ? link : "/"} onClick={onClick}>
        <Card style={{ background: color }}>
          <ContentWrapper>
            <IconWrapper>
              {projectData.map((item, index) => (
                <img src={item.icon} key={index} className="icon" />
              ))}
            </IconWrapper>
            <img src={background} alt="Logo" className="background" />

            <TextWrapper>
              <Title>{title || "Project Coming Soon!"}</Title>
              <Subtitle>{subtitle || "Guaranteed to be great!"}</Subtitle>
            </TextWrapper>
          </ContentWrapper>
        </Card>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 360px;
  height: 625px;

  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  :hover {
    transform: scale(1.1);
  }
`

const Card = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 17.23%;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(40px);
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;

  .background {
    position: relative;
    justify-self: center;
    align-self: center;

    width: 340px;
    height: 300px;
  }
`

const IconWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 15px;
  position: absolute;
  top: 10px;
  left: 300px;

  .icon {
    width: 40px;
    z-index: 10;
  }
`

const Title = styled(H3)`
  color: ${themes.dark.text1};
`

const Subtitle = styled(SmallText)`
  color: ${themes.dark.text1};
`

const Icon = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  right: 20px;
  top: 20px;
`

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
  justify-self: center;
  gap: 20px;
  max-width: 300px;
`
