import React from "react"
import styled, { keyframes } from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import { useEffect, useState, useRef } from "react"
import ContactUsForm from "../forms/ContactUsForm"
import ContactUsSuccess from "../forms/ContactUsSuccess"

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef()
  const [isPopupState, setPopupState] = useState(false)
  const [isPopupCondition, setPopupCondition] = useState(false)
  const contactFormRef = useRef()
  const popupStateFunc = data => {
    setPopupState(data.state)
    setPopupCondition(data.success)
  }

  function handleClick(event) {
    console.log("isOpen parent: " + isOpen)
    setPopupState(false)
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !contactFormRef.current.contains(event.target)
    ) {
      setIsOpen(false)
      setPopupState(false)
    }
  }

  const changeParentState = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Wrapper id={"home"}>
      {isPopupState ? (
        <div ref={contactFormRef}>
          <ContactUsSuccess
            isOpen={isOpen}
            popupCondition={isPopupCondition}
          ></ContactUsSuccess>
        </div>
      ) : (
        <div ref={contactFormRef}>
          <ContactUsForm
            isOpen={isOpen}
            setIsOpen={changeParentState}
            initialState={!isOpen}
            popupStateFunc={popupStateFunc}
          />
        </div>
      )}

      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            KraftyLabs Games
            <hr />
            placeholder
            <br /> placeholder <span>placeholder</span>
          </Title>
          <Description>
            Description placeholder
            
            
            
          </Description>
          <StupidWrapper ref={ref}>
            <PurchaseButton
              title="Contact Us"
              subtitle="We'll find a solution for you!"
              onClick={event => handleClick(event)}
            />
          </StupidWrapper>
        </TextWrapper>

        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px) filter: blur(10px)}
  to { opacity: 1; transform: translateY(0px) filter: blur(0px)}


`

const Wrapper = styled.div`
  overflow: hidden;
`

const StupidWrapper = styled.div`
  width: 280px;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px 120px 30px;
  display: grid;
  grid-template-columns: 360px auto;
  gap: 60px;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  hr {
    background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
    border: none;
    height: 2px;
    margin: 15px 0;
  }

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  @media (max-width: 450px) {
    font-size: 48px;
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
`
