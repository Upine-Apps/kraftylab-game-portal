import React from "react"
import styled from "styled-components"
import ProjectsWave from "../backgrounds/ProjectsWave"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import ProjectCard from "../cards/ProjectCard"
import SnugPage from "../../pages/snug/home"
import { useEffect, useState, useRef } from "react"
import {
  projectDataSnug,
  projectDataIntune,
  projectDataTwilio,
} from "../../data/projectData"
import ProjectPopup from "../forms/ProjectPopup"

function Projects() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false)
    } else {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  return (
    <Wrapper id="projects">
      <ProjectsWave />
      <ContentWrapper>
        {isOpen ? (
          <div ref={ref}>
            <ProjectPopup isOpen={isOpen}></ProjectPopup>
          </div>
        ) : (
          <div />
        )}
        <TopWrapper>
          <IconWrapper>
            <img src="/images/icons/javascript-dark.svg" className="icon" />
            <img src="/images/icons/python-dark.svg" className="icon" />
            <img src="/images/icons/react-dark.svg" className="icon" />
            <img src="/images/icons/css-dark.svg" className="icon" />
            <img src="/images/icons/flutter-dark.svg" className="icon" />
            <img src="/images/icons/aws-dark.svg" className="icon" />
            <img src="/images/icons/azure-dark.svg" className="icon" />
          </IconWrapper>
          <TextWrapper>
            <Description>Check out our awesome</Description>
            <Title>
              <span>Projects</span>
            </Title>
            <Description>
              Here at Upine Apps we take pride in all the work we do. That's why
              we are not afraid to show off all the applications we have built.
              Our applications are built from the ground up. We carefully curate
              them to meet the desire of our clients. From front-end to
              deployment we take care of all stages of software deployment.
              Check out our work and let us know what you think.
            </Description>
          </TextWrapper>
        </TopWrapper>
        <ProjectCardWrapper>
          <ProjectCard
            link="/snug/home"
            title="Snug - Safer Dating"
            subtitle="Ever feel unsafe dating or meeting people online? Snug has your back! Snug is a mobile application on both IOS and Android that helps users feel safe on their dates. Snug simply checks on it's users during a date and in case of an emergency it will contact their trusted contact. Try it out now and let us know what you think!"
            background="/images/project/project-mobile.svg"
            projectData={projectDataSnug}
            color="linear-gradient(180deg, #3913B8 0%, #336CC1 100%)"
          />

          <ProjectCard
            onClick={event => handleClick(event)}
            title="Twilio Call Center"
            subtitle="Call centers could not be any easier! This Twilio call center uses Twiml, JavaScript, and the Slack API to create a simple call center integrated with Slack. With this, all users can now use Slack as their main point of contact with customers and perform all phone functionalities."
            background="/images/project/project-twilio.svg"
            projectData={projectDataTwilio}
            color="linear-gradient(200.42deg, #844FFC 13.57%, #491EB8 98.35%)"
          />

          <ProjectCard
            onClick={event => handleClick(event)}
            title="Endpoint Management"
            subtitle="Managing devices can be a nightmare. With the right tools it can propel any business to its next level. We took care of all device management through the use of Intune. Now we can simply deploy and manage hundreds of devices through the click of a button."
            background="/images/project/project-intune.svg"
            projectData={projectDataIntune}
            color="linear-gradient(180deg, #FF7373 0%, #491EB8 100%)"
          />
        </ProjectCardWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.div`
  overflow: hidden;
  /* position: absolute; */
`

const ContentWrapper = styled.div`
  padding: 30px;
  justify-content: center;
  align-content: start;
  margin: 0 auto;
  display: grid;
  position: relative;
  grid-template-rows: auto auto;
  gap: 200px;
  max-width: 1234px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 100px;
  }
`

const TopWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 750px auto;
  height: 350px;
  top: 50px;
  gap: 125px;

  @media (max-width: 450px) {
    grid-template-columns: 10% 90%;
    gap: 50px;
    justify-self: center;
    max-width: 90vw;
  }
`

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;

  img {
    width: 50px;
    align-self: center;
    justify-self: center;
  }

  .icon {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 10px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 0px;
  max-width: 360px;
  grid-template-rows: 30px 80px 200px;
  @media (max-width: 450px) {
    max-width: 80%;
  }
  @media (max-width: 300px) {
    max-width: 80%;
    grid-template-rows: 30px 80px 200px;
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
const ProjectCardWrapper = styled.div`
  position: relative;
  display: grid;
  padding: 10px;
  max-width: 100%;
  justify-content: center;
  gap: 30px;

  grid-template-columns: auto auto auto;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    transform: scale(0.8);
    padding: 0;
  }
  @media (max-width: 300px) {
    grid-template-columns: auto;
    transform: scale(0.6);
    padding: 0;
  }
`
