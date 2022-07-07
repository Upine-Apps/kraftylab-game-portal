import React from "react";
import styled from "styled-components";
export default function SlideShowButton(props) {
  const degrees = props.direction;
  return (
    <Wrapper>
      <IconWrapper>
        <Icon
          src="/images/icons/arrow-icon.svg"
          className="icon"
          rotateDirection={degrees}
        />
      </IconWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 55px;
  height: 55px;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  border-radius: 100px;
  background: linear-gradient(
    180deg,
    rgba(123, 123, 123, 0.3) 0%,
    rgba(217, 217, 217, 0) 100%
  );
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 15px;
  cursor: pointer;
  @media (max-width: 450px) {
    width: 30px;
    height: 30px;
  }
`;
const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
  }
`;
const Icon = styled.img`
  width: 29px;
  height: 29px;
  transform: rotate(${(props) => props.rotateDirection});
  @media (max-width: 450px) {
    align-self: center;
    justify-self: center;
    width: 70%;
    height: 70%;
  }
`;
