import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function ReusableButton(props) {
  const { title } = props

  // how will the button component obtain state from other fields? curiosity.
  // either lifting up and passing down state, or redux

  const handleSubmit = async () => {
    try {
    } catch (err) {
      console.error("error invoked")
    }
  }

  return (
    <Wrapper>
      <TextWrapper>
        <Title onSubmit={handleSubmit}>{title || "Submit"}</Title>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 400px;
  background: #0067ff;
  border: 1px solid #0056d7;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 14px;
  gap: 10px;
`

const TextWrapper = styled.div`
  gap: 4px;
`

const Title = styled.div`
  color: white;
  font-weight: 600;
  font-size: 15px;
`
