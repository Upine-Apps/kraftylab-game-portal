import React from "react";
import styled from "styled-components";
import ReusableButton from "../components/buttons/ReusableButton";
import ReusableTextField from "../components/textfield/ReusableTextField";
import CustomPasswordField from "../components/textfield/CustomPasswordField";

function PortalPage() {
  return (
    <Wrapper>
      <ReusableButton />
      <ReusableTextField />
    </Wrapper>
  );
}

export default PortalPage;

const Wrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 40px 30px 150px;

  display: grid;
  gap: 20px;
  text-align: center;

  @media (max-width: 450px) {
    grid-template-columns: auto;
  }
`;
