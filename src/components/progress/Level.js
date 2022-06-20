import React from "react"
import styled from "styled-components"

export default function Level(props) {
  return (
    <Wrapper>
      <PercentBar percent={props.percentage} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 40%;
  width: 75%;
  padding: 1px;
  height: 5px;
  align-content: center;
`

const PercentBar = styled.div`
  background: linear-gradient(90deg, #9ee1ec, #e5a7e0);
  /* background: rgba(255, 255, 255, 0.7); */
  border-radius: 4px;
  width: ${props => props.percent};

  height: 3px;
`
