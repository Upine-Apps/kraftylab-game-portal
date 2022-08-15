import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ReusableButton from "../../buttons/ReusableButton";
import ReusableTextField from "../../textfield/ReusableTextField";
import GameCard from "../../cards/GameCard";

export default function GuestAnswer() {
  const [res, setRes] = useState("");
  const gameCardColor =
    "radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.7) 0%, rgba(76, 0, 200, 0.7) 45.83%, rgba(76, 0, 200, 0.7) 100%)";

  return (
    <>
      <Wrapper>
        <CardWrapper>
          <GameCard
            title="Sports - Baseball"
            description="What is your favorite baseball park?"
            color={gameCardColor}
          />
        </CardWrapper>
        <ResponseWrapper>
          <TextWrapper>
            <ReusableTextField name="Enter your response!" value={res} />
          </TextWrapper>
          <ButtonWrapper>
            <ReusableButton />
          </ButtonWrapper>
        </ResponseWrapper>
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
  height: 250px;
`;
const ResponseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 5%;
`;
const ButtonWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 5%;
`;
const TextWrapper = styled.div`
  flex-grow: 2;
`;
