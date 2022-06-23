import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function TextFieldButton(props) {
  const { title } = props;

  return (
    <>
      <FieldWrapper>
        <input
          id={title}
          type="text"
          placeholder={"Please enter your " + title.toLowerCase() || "Field"}
          value={null}
          onChange={(e) => null}
        />
      </FieldWrapper>
    </>
  );
}

const FieldWrapper = styled.div`
  width: 500px;

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
