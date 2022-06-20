import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ContactUsWave from "../backgrounds/ContactUsWave"
import { H1, MediumText, SmallText } from "../styles/TextStyles"
import { menuDataBottom, socialMediaData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuButtonExternal from "../buttons/MenuButtonForExternal"
import { themes } from "../styles/ColorStyles"
import ContactUsForm from "../forms/ContactUsForm"

export default function ContactUs() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const contactFormRef = useRef()
  const StyledLink = styled(props => <Link {...props} />)`
    color: ${themes.dark.text1};
  `

  function handleClick(event, item) {
    console.log("isOpen parent: " + isOpen)
    if (item.title == "Email") {
      setIsOpen(!isOpen)
      event.preventDefault()
    }
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
    <Wrapper id="contactus">
      <div ref={contactFormRef}>
        <ContactUsForm
          isOpen={isOpen}
          setIsOpen={changeParentState}
          initialState={!isOpen}
        />
      </div>
      <ContactUsWave />
      <ContentWrapper>
        <SecondaryWrapper>
          <MainButtonWrapper ref={ref}>
            <ButtonWrapper count={menuDataBottom.length} ref={ref}>
              {menuDataBottom.map((item, index) => (
                <MenuButton
                  onClick={event => handleClick(event, item)}
                  item={item}
                  key={index}
                />
              ))}
            </ButtonWrapper>
            <ButtonSecondWrapper count={socialMediaData.length} ref={ref}>
              {socialMediaData.map((item, index) => (
                <MenuButtonExternal
                  onClick={event => handleClick(event)}
                  item={item}
                  key={index}
                />
              ))}
            </ButtonSecondWrapper>
          </MainButtonWrapper>
          <TextWrapper>
            <Description>Created with React, Gatsby, Figma</Description>
            <Description>Upine Apps LLC {"\u00A9"} 2021</Description>

            <Description>
              <StyledLink to="/termsandcondition">
                Terms & Conditions
              </StyledLink>
              - <StyledLink to="/privacypolicy">Privacy</StyledLink>
            </Description>
          </TextWrapper>
        </SecondaryWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  padding: 300px 0px 100px 100px;

  position: relative;
  @media (max-width: 450px) {
    padding: 150px 0 0 0;
    justify-content: center;
    max-width: 90vw;
  }
`
const SecondaryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 80px;
  justify-content: center;
  padding-top: 100px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`
const MainButtonWrapper = styled.div`
  grid-template-columns: auto auto;
  gap: 50px;
  display: grid;
  margin: 0 auto;
  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  align-items: center;
  gap: 20px;
`

const ButtonSecondWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  gap: 20px;
  align-items: center;
`

const TextWrapper = styled.div`
  align-self: center;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 20px;
  padding-bottom: 20px;
  justify-content: center;
  @media (max-width: 450px) {
  }
`

const Description = styled(SmallText)`
  color: ${themes.dark.text1};
`
