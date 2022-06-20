import React from "react"
import styled from "styled-components"

export default function SnugHowItWorksBackground() {
  return (
    <Wrapper>
      <Background />

      <Wave src="/images/snug/snug-how-5.svg" style={{ top: "301.6px" }} />

      <Wave
        src="/images/snug/snug-how-4.svg"
        style={{
          top: "471.2px",
        }}
      />
      <Wave
        src="/images/snug/snug-how-3.svg"
        style={{
          top: "425.6px",
        }}
      />
      <Wave
        src="/images/snug/snug-how-2.svg"
        style={{
          top: "420.6px",
        }}
      />
      <Wave
        src="/images/snug/snug-how-1.svg"
        style={{
          top: "570px",
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
  position: absolute;

  z-index: -1;
  @media (min-width: 1440px) {
    width: 100%;
  }
`

const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;

  z-index: -1;
`
