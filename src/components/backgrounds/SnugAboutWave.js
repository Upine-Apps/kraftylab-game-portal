import React from "react"
import styled from "styled-components"

export default function SnugAboutWave() {
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/snug/snug-about-6.svg" style={{ top: "0px" }} />

      <Wave src="/images/snug/snug-about-5.svg" style={{ top: "71.5px" }} />

      <Wave
        src="/images/snug/snug-about-4.svg"
        style={{
          top: "247px",
        }}
      />
      <Wave
        src="/images/snug/snug-about-3.svg"
        style={{
          top: "227px",
        }}
      />
      <Wave
        src="/images/snug/snug-about-2.svg"
        style={{
          top: "558px",
        }}
      />
      <Wave
        src="/images/snug/snug-about-1.svg"
        style={{
          left: "1308px",
          top: "107px",
          height: "632px",
          width: "1000px",
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
