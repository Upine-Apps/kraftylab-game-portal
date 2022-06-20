import React from "react"
import styled from "styled-components"

export default function SnugCustomerReviewBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/snug/snug-review-5.svg" style={{ top: "301.6px" }} />

      <Wave
        src="/images/snug/snug-review-4.svg"
        style={{
          top: "06.6px",
        }}
      />
      <Wave
        src="/images/snug/snug-review-3.svg"
        style={{
          top: "155.8px",
        }}
      />
      <Wave
        src="/images/snug/snug-review-2.svg"
        style={{
          top: "424px",
        }}
      />
      <Wave
        src="/images/snug/snug-review-1.svg"
        style={{
          top: "504px",
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
