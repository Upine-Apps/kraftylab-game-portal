import React from "react"
import styled from "styled-components"

export default function ProjectsWave() {
  return (
    <Wrapper>
      <Background />
      <WaveOne
        src="/images/waves/projects-wave1.svg"
        style={{ top: "100px" }}
      />
      <WaveOne
        src="/images/waves/projects-wave2.svg"
        style={{ top: "280px" }}
      />
      <WaveOne
        src="/images/waves/projects-wave3.svg"
        style={{ top: "400px" }}
      />
      <WaveOne
        src="/images/waves/projects-wave4.svg"
        style={{ top: "512px" }}
      />
      <WaveOne
        src="/images/waves/projects-wave5.svg"
        style={{ top: "750px" }}
      />
      <WaveOne
        src="/images/waves/projects-wave6.svg"
        style={{ top: "1075px" }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const WaveOne = styled.img`
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
