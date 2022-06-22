import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function ReusableButton(props) {
  const { title } = props

  // how will the button component obtain state from other fields? curiosity.
  // either lifting up and passing down state, or redux

  return (
    <>
      <ButtonWrapper>
        <button type="submit" value={title || "Submit"}>
          {title || "Submit"}
        </button>
      </ButtonWrapper>
    </>
  )
}

const ButtonWrapper = styled.div`
  button {
    max-width: 500px;
    width: 400px;
    background: #0067ff;
    border: 1px solid #0056d7;
    border-radius: 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 14px;
    gap: 10px;

    color: white;
    font-weight: 600;
    font-size: 15px;

    cursor: pointer;
  }
`
