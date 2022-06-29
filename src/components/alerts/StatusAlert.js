import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { MediumText } from "../styles/TextStyles";

export default function StatusAlert(props) {
  return (
    <Wrapper status={props.status}>
      <IconWrapper>
        <Icon src={getStatusIcon(props.status)} />
      </IconWrapper>
      <TextWrapper>
        <Title>{props.status}</Title>
      </TextWrapper>
    </Wrapper>
  );
}

const getStatusColor = (status) => {
  switch (status) {
    case "Success":
      return "#18c07a";
    case "Error":
      return "#F06E6E";
    default:
      return "#81B3FF";
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "Success":
      return "/images/icons/white-check.svg";
    case "Error":
      return "/images/icons/white-error.svg";
    default:
      return "/images/icons/white-exclamation.svg";
  }
};

const animation = keyframes`
            from {transform: translateX(300px)}
            to {transform: translateX(0px)}
            `;

const Wrapper = styled.div`
  position: fixed;
  padding-top: 10px;
  padding-bottom: 10px;
  top: 10%;
  right: 0px;
  display: grid;
  grid-template-columns: 100px auto;
  width: 300px;
  min-height: 75px;
  border-radius: 100px 0 0 100px;
  background-color: ${(props) => getStatusColor(props.status)};
`;
const IconWrapper = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
`;
const Icon = styled.img`
  color: #ffffff;
  width: 35px;
  height: 35px;
`;

const TextWrapper = styled.div`
  margin: auto;
  justify-content: center;
  align-content: center;
`;

const Title = styled(MediumText)`
  color: #ffffff;
  font-size: 24px;
`;
