import React from "react";
import styled from "styled-components";
import { SmallText } from "../styles/TextStyles";

export default function ReusableTextField(props) {
  const { title, onChange } = props;

  const type = title === "Email" ? "email" : "text";

  return (
    <>
      <Wrapper>
        <Label>{title || "Field"}</Label>
        <InputField
          name={title}
          type={type}
          placeholder={"Please enter your " + (title.toLowerCase() || "field")}
          onChange={(e) => onChange(e)}
          minLength="1"
          maxLength="100"
          required
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin-bottom: 25px;
  display: grid;
  width: 500px;
`;

const InputField = styled.input`
  box-sizing: border-box;
  background: #f8f8f8;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 13px 14px;
  gap: 12px;
  font-size: 16px;
  margin: 0px;

  width: 500px;
  &::placeholder {
    font-size: 0.875em;
    line-height: 21px;
    color: #757575;
  }
`;

const Label = styled(SmallText)`
  width: 100px;
  padding: 4px 0;
  text-align: left;

  color: black;
  line-height: 18px;
`;
