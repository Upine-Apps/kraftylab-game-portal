import React from "react"
import styled from "styled-components"

export default function SnugRoadmapWave() {
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/snug/snug-roadmap-background.svg" />
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
