import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Caption } from "../styles/TextStyles"

export default function ReusableButton(props) {
  const { title, onClick, path } = props
  return (
    <>
      <Link to={path}>
        <ButtonWrapper onClick={onClick}>
          <Title>{title || "Submit"}</Title>
        </ButtonWrapper>
      </Link>
    </>
  )
}

const ButtonWrapper = styled.button`
  width: 100%;
  background: #0067ff;
  border: 1px solid #0056d7;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 14px;
  gap: 10px;
  cursor: pointer;
  @media (max-width: 450px) {
    width: 300px;
  }
`

const Title = styled(Caption)`
  color: white;
`
