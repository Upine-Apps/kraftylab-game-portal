import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import ContactSubmitButton from "../buttons/ContactSubmitButton"

import axios from "axios"

export default function ContactUsForm(props) {
  const { isOpen, setIsOpen, initialState } = props
  const [isOpenButton, setIsOpenButton] = useState(initialState)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [isAlert, setIsAlert] = useState(false)
  const ref = useRef()
  const [show, setShow] = useState(true)

  function handleClick(event) {
    setIsOpen()
    console.log(setIsOpen)
    event.preventDefault()
  }

  async function submit(event) {
    event.preventDefault()

    const body = JSON.stringify({
      to: "upineapps@protonmail.com",
      phoneNumber: phoneNumber,
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    })

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Request-Headers": "content-type",
    }

    let response = await axios.post("https://upineapps.com:6969/send", body, {
      headers,
    })
    response.status
      ? props.popupStateFunc({ state: true, success: true })
      : props.popupStateFunc({ state: true, success: false })
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhoneNumber("")
    setMessage("")
    setIsOpen()
  }

  return (
    <OuterWrapper isOpen={isOpen}>
      <Wrapper isOpen={isOpen}>
        <ImageWrapper>
          <Exit src="/images/icons/exit.svg" onClick={handleClick} />
          <Background src="/images/contact-us-form/contact-us-form-image.svg" />
        </ImageWrapper>

        <NameWrapper>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </NameWrapper>
        <ContactWrapper>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </ContactWrapper>
        <MessageWrapper>
          <textarea
            type="text"
            placeholder="Message"
            rows="20"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </MessageWrapper>
        <ButtonWrapper>
          <ContactSubmitButton
            title="Submit"
            onClick={event => submit(event)}
          />
        </ButtonWrapper>
      </Wrapper>
    </OuterWrapper>
  )
}

const Exit = styled.img`
  position: fixed;
  top: -13px;
  padding: 0px;
  left: 570px;
  cursor: pointer;
`

const OuterWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  margin-left: -300px;
  margin-top: -300px;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
  transition: 0.3s ease-in-out;
  z-index: 10 !important;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  @media (max-width: 450px) {
    transform: scale(0.6);
  }
  @media (max-width: 300px) {
    transform: scale(0.3);
  }
  @media (max-width: 380px) {
    transform: scale(0.5);
  }

  @media (max-width: 300px) {
    transform: scale(0.4);
  }
`

const Wrapper = styled.div`
  padding: 20px;

  position: fixed;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  margin-left: -300px;
  margin-top: -300px;
  display: grid;
  grid-template-rows: 40% 8% 8% 29% 15%;

  background: rgba(15, 14, 71, 1);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;

  opacity: ${props => (props.isOpen ? 1 : 0)};
  /* z-index: 1; */

  gap: 10px;

  transition: 0.3s ease-in-out;
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`

const ButtonWrapper = styled.div`
  margin: 0 auto;
`

const ImageWrapper = styled.div`
  position: relative;
  display: grid;
`

const Background = styled.img`
  object-fit: cover;
  height: 82.5%;
  justify-self: center;
  width: 100%;
  border-radius: 10px;
`

const NameWrapper = styled.div`
  display: grid;
  grid-template-columns: 270px 270px;
  width: 290px;
  gap: 20px;
  input {
    /*         
    width: 100%; */
    background: linear-gradient(
      rgba(99, 106, 150, 0.4) 0%,
      rgba(182, 186, 214, 0.25) 100%
    );
    border: none;
    border-radius: 30px;
    box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
      rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    box-sizing: border-box;
    padding: 10px 42px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color: rgb(255, 255, 255);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
      text-align: left;
    }
  }
`
const MessageWrapper = styled.div`
  width: 560px;

  textarea {
    line-height: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .element {
      overflow: -moz-scrollbars-none;
    }
    .element::-webkit-scollbar {
      width: 0 !important;
    }
    resize: none;

    justify-self: center;
    text-align: start;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(99, 106, 150, 0.4) 0%,
      rgba(182, 186, 214, 0.25) 100%
    );
    border: none;
    border-radius: 30px;
    box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
      rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    box-sizing: border-box;
    padding: 10px 42px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color: rgb(255, 255, 255);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
      text-align: start;
      vertical-align: top;
    }
  }
`
const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 270px 270px;

  gap: 20px;
  input {
    /* width: 100%; */
    background: linear-gradient(
      rgba(99, 106, 150, 0.4) 0%,
      rgba(182, 186, 214, 0.25) 100%
    );
    border: none;
    border-radius: 30px;
    box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
      rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    box-sizing: border-box;
    padding: 10px 42px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color: rgb(255, 255, 255);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
      text-align: left;
    }
  }
`
