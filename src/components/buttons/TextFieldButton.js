import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { SmallText } from "../styles/TextStyles";

export default function TextFieldButton(props) {
  const { title } = props;
  // const [pattern, setPattern] = useState("[A-Za-z0-9-_.]{1,100}");

  const pattern = title === "First Name" || "Last Name" ? "[A-Za-z]{1, 100}" : ".{1,100}";
  const invalid =
    title === "First Name" || "Last Name"
      ? "setCustomValidity('${title} must contain only letters.')"
      : "setCustomValidity('${title} must have less than 100 characters.')";

  return (
    <>
      <Wrapper>
        <Label>{title || "Field"}</Label>
        <InputField
          id={title}
          // FIXME: make a function for this.
          type={{ title } === "Email" ? "email" : "text"}
          placeholder={"Please enter your " + (title.toLowerCase() || "field")}
          value={null}
          onChange={(e) => null}
          onInvalid={invalid}
          // onInput={setCustomValidity("")}
          pattern={pattern}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 500px;
`;

const InputField = styled.input`
  margin-bottom: 25px;
  // width: 500px;

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

const FieldWrapper = styled.div`
  width: 500px;

  // spacing between bottom of field and top of text has unknown spacing?
  margin-bottom: 25px;

  input {
    box-sizing: border-box;
    background: #f8f8f8;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    padding: 13px 14px;
    gap: 12px;
    font-size: 16px;
    margin: 0px;

    width: 500px;
    ::-webkit-input-placeholder {
      font-size: 0.875em;
    }
  }
`;

const Label = styled(SmallText)`
  width: 100px;
  padding: 4px 0;
  text-align: left;

  color: black;
  line-height: 18px;
`;
