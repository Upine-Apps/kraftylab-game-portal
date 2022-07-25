import React from "react";
import styled, { keyframes } from "styled-components";

export default function DefaultSpinner() {
  return <SpinnerWrapper></SpinnerWrapper>;
}

const rotation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  border: 5px solid fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
  width: 48px;
  height: 48px;
`;
