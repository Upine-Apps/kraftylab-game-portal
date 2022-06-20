import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { SmallText, MediumText, H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ContactButtonSmall from "../buttons/ContactButtonSmall"
import ContactUsForm from "../forms/ContactUsForm"

export default function ServiceCardLeft(props) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const contactFormRef = useRef()

  function handleClick(event) {
    console.log("isOpen parent: " + isOpen)
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
    <Wrapper>
      <div ref={contactFormRef}>
        <ContactUsForm
          isOpen={isOpen}
          setIsOpen={changeParentState}
          initialState={!isOpen}
        />
      </div>
      <div className="left-card"></div>

      <div className="content-card">
        <TextWrapper>
          <Title>MSP</Title>
          <Subtitle>Managed Service Provider</Subtitle>
          <SubServiceWrapper>
            <SubServiceRow>
              <img src="/images/icons/check-dark.svg" />
              <SubService>Device Management</SubService>
            </SubServiceRow>
            <SubServiceRow>
              <img src="/images/icons/check-dark.svg" />
              <SubService>Remote Tech Support</SubService>
            </SubServiceRow>
            <SubServiceRow>
              <img src="/images/icons/check-dark.svg" />
              <SubService>Hosted Business Solutions</SubService>
            </SubServiceRow>
          </SubServiceWrapper>
        </TextWrapper>
        <StupidWrapper ref={ref}>
          <ContactButtonSmall onClick={event => handleClick(event)} />
        </StupidWrapper>
      </div>
    </Wrapper>
  )
}

const StupidWrapper = styled.div``

const Wrapper = styled.div`
  position: relative;
  width: 320px;
  height: 426px;

  * {
    transition: all 0.4s ease-in-out 0s;
  }

  :hover img {
    transform: translateY(-3px);
  }

  :hover .buttonWrapper {
    img {
      transform: translateY(0px);
    }
  }

  :hover div {
    &.content-card {
      transform: translateY(-3px);
    }

    &.left-card {
      transform: skewY(-12deg) scaleX(0.9);
      transform-origin: left top;
    }
  }

  .content-card {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    align-content: center;
    bottom: 17.23%;

    background: rgba(255, 255, 255, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(40px);

    border-radius: 0px 60px 60px 60px;
  }

  .left-card {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0.11%;
    bottom: 17.12%;
    background: linear-gradient(179deg, #73b8f9 15%, #cbd8f1 80%);

    mix-blend-mode: normal;
    border-radius: 0px 60px 60px;
    transform: skew(8deg, -8deg);
    transform-origin: left top 0px;
  }
`

const Title = styled(H2)`
  color: ${themes.light.text1};
  text-align: center;
`

const Subtitle = styled(SmallText)`
  color: ${themes.light.text2};
  text-align: center;
  opacity: 0.7;
`

const TextWrapper = styled.div`
  display: grid;
  padding: 20px 20px 0 20px;
  width: 100%;
  margin: 0 auto;
  max-width: 360px;
  gap: 10px;
`
const SubServiceRow = styled.div`
  display: grid;
  width: 300px;
  padding: 10px 50px 10px 10px;
  grid-template-columns: 10px auto;
  gap: 30px;
`
const SubServiceWrapper = styled.div`
  padding-top: 30px;
  justify-content: center;
`
const SubService = styled(MediumText)``
