import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ReusableButton from "../../buttons/ReusableButton";
import ReusableTextField from "../../textfield/ReusableTextField";
import GameCard from "../../cards/GameCard";

export default function HostResponses() {
  const [res, setRes] = useState("");
  const gameCardColor =
    "radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.7) 0%, rgba(76, 0, 200, 0.7) 45.83%, rgba(76, 0, 200, 0.7) 100%)";

  return (
    <>
      <Wrapper>
        <CardWrapper>
          <GameCard
            title="Sports - Baseball"
            // description="What is your favorite baseball park?"
            color={gameCardColor}
          />
        </CardWrapper>
        <ResponsesWrapper></ResponsesWrapper>
        <ButtonFlexWrapper>
          <LeftButtonWrapper>
            <ReusableButton title="Next Round" />
          </LeftButtonWrapper>
          <RightButtonWrapper>
            <ReusableButton title="End Round" />
          </RightButtonWrapper>
        </ButtonFlexWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  justify-items: center;
  margin: 0 auto;
`;
const CardWrapper = styled.div`
  height: 100px;
`;
const ResponsesWrapper = styled.div`
  height: 450px;
`;
const ButtonFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const LeftButtonWrapper = styled.div`
  flex-grow: 1;
  margin-left: 15%;
`;
const RightButtonWrapper = styled.div`
  flex-grow: 1;
  margin-right: 15%;
`;
