import React from "react";
import styled from "styled-components";
import { SmallText } from "../styles/TextStyles";

export default function ReusableTextField2(props) {
  const { title, placeholder, onChange, value } = props;

  return (
    <>
      <Wrapper>
        <InputField
          name={title}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          minLength="1"
          required
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: relative;
`;

const InputField = styled.input`
  background: #f8f8f8;
  border: 1px solid #d8d8d8;
  border-radius: 24px;
  padding: 0px 12px;
  height: 36px;
  margin: 0;

  &::placeholder {
    color: #757575;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
  }
`;
