import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { H1, MediumText } from "../styles/TextStyles";

export default function ReusableButton(props) {
  const { title } = props;

  // how will the button component obtain state from other fields? curiosity.
  // form component will pass down onClick/onSubmit function
  // once that is clicked, parent component will process all
  // text field states and submit a post request

  return (
    <>
      <Link to="/">
        <ButtonWrapper>
          <Title>{title || "Submit"}</Title>
        </ButtonWrapper>
      </Link>
    </>
  );
}

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

const Title = styled(MediumText)`
  color: white;
  font-size: 1em;
`;
