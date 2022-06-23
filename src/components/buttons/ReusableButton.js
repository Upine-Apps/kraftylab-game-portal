import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function ReusableButton(props) {
  const { title } = props;

  // how will the button component obtain state from other fields? curiosity.
  // form component will pass down onClick/onSubmit function
  // once that is clicked, parent component will process all
  // text field states and submit a post request

  return (
    <>
      <LinkWrapper>
        <Link to="/">
          <ButtonWrapper>
            <Title>{title || "Submit"}</Title>
          </ButtonWrapper>
        </Link>
      </LinkWrapper>
    </>
  );
}

const LinkWrapper = styled.div`
  max-width: 500px;
`;

const ButtonWrapper = styled.div`
  width: 500px;
  max-width: 500px;
  background: #0067ff;
  border: 1px solid #0056d7;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 14px;
  gap: 10px;
`;

const Title = styled.div`
  color: white;
  font-weight: 600;
  font-size: 1em;
`;
