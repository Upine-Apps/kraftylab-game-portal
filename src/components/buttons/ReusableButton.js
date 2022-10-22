import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Caption } from "../styles/TextStyles";
import DefaultSpinner from "../spinners/DefaultSpinner";

export default function ReusableButton(props) {
  const { title, onClick, path, spinner, width, borderRadius, color } = props;

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
      <ButtonWrapper
        onClick={onClick}
        width={width}
        borderRadius={borderRadius}
        color={color}
      >
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
  width: ${(props) => (props.width ? props.width : "100%")};
  background: ${(props) => (props.color ? props.color : "#0067ff")};
  border: ${(props) =>
    props.color ? `1px solid ${props.color}` : "1px solid #0056d7"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "4px"};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 14px;
  gap: 10px;
  cursor: pointer;
`;

const Title = styled(Caption)`
  color: white;
`;
