import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Caption } from "../styles/TextStyles";
import DefaultSpinner from "../spinners/DefaultSpinner";

export default function ReusableButton(props) {
  const { title, onClick, path, spinner, color } = props;

  function returnLink(title, path, onClick) {
    return (
      <Link to={path}>
        <ButtonWrapper onClick={onClick} color={color}>
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
      <ButtonWrapper onClick={onClick} color={color}>
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

const getButtonColor = (color) => {
  switch (color) {
    case "Red":
      return "#ff0000";
    case "Blue":
      return "#0067ff";
    default:
      return "#0067ff";
  }
};

const ButtonWrapper = styled.button`
  width: 100%;
  background: ${(props) => getButtonColor(props.color)};
  border: 1px solid ${(props) => getButtonColor(props.color)};
  border-radius: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 25px;
`;

const Title = styled(Caption)`
  color: white;
`;
