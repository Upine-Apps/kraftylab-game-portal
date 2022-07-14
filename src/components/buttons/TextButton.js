import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Caption } from "../styles/TextStyles"

export default function TextButton(props) {
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
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  color: blue;
  text-decoration: underline;
`

const Title = styled(Caption)`
  color: #0067ff;
  padding: 15px 0;
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`
