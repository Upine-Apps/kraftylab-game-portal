import styled from "styled-components";
import React from "react";

function Dropdown(props) {
  return (
    <dropDownWrapper action={props.action}>
      <StyledLabel htmlFor="services">{props.formLabel}</StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
      <StyledButton type="submit" value={props.buttonText} />
    </dropDownWrapper>
  );
}

function Option(props) {
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
}

export default function dropDownBox() {
  return (
    <div>
      <h1>Question Test?</h1>
      <Dropdown formLabel="Test 1" buttonText="Test2" action="/">
        <Option selected value="Click to see options" />
        <Option value="Option 1" />
        <Option value="Option 2" />
        <Option value="Option 3" />
      </Dropdown>
    </div>
  );
}

const dropDownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const StyledSelect = styled.select`
  max-width: 50%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;
