import React from "react"
import styled from "styled-components"

export default function SnugHeroWave() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/snug/snug-hero-7.svg"
        style={{
          top: "-100px",
        }}
      />
      <Wave src="/images/snug/snug-hero-6.svg" style={{ top: "292.8px" }} />

      <Wave src="/images/snug/snug-hero-5.svg" style={{ top: "364.2px" }} />

      <Wave
        src="/images/snug/snug-hero-4.svg"
        style={{
          top: "500px",
        }}
      />
      <Wave
        src="/images/snug/snug-hero-3.svg"
        style={{
          top: "700px",
        }}
      />
      <Wave
        src="/images/snug/snug-hero-2.svg"
        style={{
          top: "-120.9px",
        }}
      />
      <Wave src="/images/snug/snug-hero-1.svg" style={{ top: "0px" }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  z-index: -1;
`

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  @media (min-width: 1440px) {
    width: 100%;
  }
`
