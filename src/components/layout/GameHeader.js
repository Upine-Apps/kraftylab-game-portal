import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import { H2 } from "../styles/TextStyles"
import styled from "styled-components"

export default function GameHeader() {
  return (
    <Wrapper>
      <Title>Krafty Lab Games</Title>
    </Wrapper>
  )
}

const Title = styled(H2)`
  opacity: 0.8;
`

const LinkWrapper = styled.div`
  width: 75px;
  @media (max-width: 450px) {
    width: 44px;
  }
  img {
    height: 100px;
    width: 100px;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  width: 100%;
  justify-content: space-between;
  margin: 75px 0;
  padding: 0 100px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`
