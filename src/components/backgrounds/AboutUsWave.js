import React from "react"
import styled from "styled-components"

export default function AboutUsWave() {
  return (
    <Wrapper>
      <WaveOne src="/images/waves/about-us-wave4.svg" style={{ top: "00px" }} />
      <WaveOne src="/images/waves/about-us-wave3.svg" style={{ top: "70px" }} />
      {/* <WaveOne
        src="/images/waves/about-us-wave2.svg"
        style={{ top: "310px", filter: "blur(150px)" }}
      />
      <WaveOne
        src="/images/waves/about-us-wave1.svg"
        style={{ top: "429px", filter: "blur(150px)" }}
      /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const WaveOne = styled.img`
  position: absolute;
  
  z-index: -10;
  @media (min-width: 1440px) {
    width: 100%;
  }
`

const Background = styled.div`
  position: absolute;
  

  z-index: -1;
`
