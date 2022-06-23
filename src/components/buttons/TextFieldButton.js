import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function TextFieldButton(props) {
  const { title } = props;

  return (
    <>
      <Wrapper>
        <TextWrapper>
          <Title>{title || "Field"}</Title>
        </TextWrapper>
        <FieldWrapper>
          <input
            id={title}
            // FIXME: make a function for this.
            type={{ title } === "Email" ? "email" : "text"}
            placeholder={
              "Please enter your " + (title.toLowerCase() || "field")
            }
            value={null}
            onChange={(e) => null}
            maxLength="100"
          />
        </FieldWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 500px;
`;

const TextWrapper = styled.div`
  width: 100px;
  padding: 4px 0;
  text-align: left;
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

const Title = styled.div`
  color: black;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;
