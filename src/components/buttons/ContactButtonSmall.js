import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"
import { Link } from "gatsby"

export default function ContactButtonSmall(props) {
  const { onClick } = props
  return (
    <div className="buttonWrapper">
      <Link to="/" onClick={onClick}>
        <Wrapper>
          <IconWrapper>
            <Icon src="/images/icons/email.svg" className="icon" />
          </IconWrapper>
        </Wrapper>
      </Link>
    </div>
  )
}

const Wrapper = styled.div`
  max-width: 60px;
  height: 60px;
  padding: 12px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  /* * applies to all children and sub children */

  :hover {
    transform: translateY(-3px);

    .icon {
      transform: scale(1.2);
    }
  }
`

const Icon = styled.img`
  width: 29px;
  height: 25px;
  padding-bottom: 2px;
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
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
