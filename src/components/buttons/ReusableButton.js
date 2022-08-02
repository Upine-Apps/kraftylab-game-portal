import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Caption } from "../styles/TextStyles";
import DefaultSpinner from "../spinners/DefaultSpinner";

export default function ReusableButton(props) {
  const { title, onClick, path, spinner } = props;

  function returnLink(title, path, onClick) {
    return (
      <Link to={path}>
        <ButtonWrapper onClick={onClick}>
          {spinner === true ? (
            <DefaultSpinner />
          ) : (
            <Title>{title || "Submit"}</Title>
          )}
        </ButtonWrapper>
      </Link>
    );
  }

  function returnNoLink(title, onClick) {
    return (
      <ButtonWrapper onClick={onClick}>
        {spinner === true ? (
          <DefaultSpinner />
        ) : (
          <Title>{title || "Submit"}</Title>
        )}
      </ButtonWrapper>
    );
  }

  return path === undefined
    ? returnNoLink(title, onClick)
    : returnLink(title, path, onClick);
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
  margin-bottom: 25px;
`;

const Title = styled(Caption)`
  color: white;
`;
