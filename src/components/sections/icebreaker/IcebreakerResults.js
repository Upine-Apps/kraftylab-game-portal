import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { BodyMain, H2, H3 } from "../../styles/TextStyles";
import ReusableButton from "../../buttons/ReusableButton";
import IcebreakerCard from "../../cards/IcebreakerCard";
import { icebreakerData, userData } from "../../../data/icebreakerData";
import ReusableTextField from "../../textfield/ReusableTextField";
import IcebreakerService from "../../../service/IcebreakerService";
import DefaultSpinner from "../../spinners/DefaultSpinner";
import { ColorData } from "../../../data/colorData";
import SlideShowButton from "../../buttons/SlideShowButton";
export default function IcebreakerResults(props) {
  const { icebreaker, role, changeStage } = props;
  const code = "KL1234";
  const getColor = () => {
    const colors = ColorData;
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex].color;
  };
  const userList = () => {
    if (userData.length > 0) {
      return (
        <ListWrapper>
          {userData.map((item, index) => (
            <ListRow key={index}>
              <TextWrapper>{item.name}:</TextWrapper>

              <TextWrapper>{item.answer}:</TextWrapper>
            </ListRow>
          ))}
        </ListWrapper>
      );
    } else {
      return <DefaultSpinner isDark={true} />;
    }
  };

  const handleEnd = () => {
    changeStage("HOME");
  };

  const hostButtons = () => {
    return (
      <HostButtonWrapper>
        <ReusableButton
          title="Next Round"
          width="150px"
          borderRadius="20px"
          onClick={() => changeStage("GAME")}
        />
        <ReusableButton
          title="End Session"
          width="150px"
          borderRadius="20px"
          onClick={() => handleEnd()}
          color="#FD3F33"
        />
      </HostButtonWrapper>
    );
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <TopWrapper>
          <IcebreakerCard
            category={icebreaker.category}
            subcategory={icebreaker.subcategory}
            question={icebreaker.question}
            color={getColor()}
            onClick={null}
            isButtons={false}
          />
        </TopWrapper>
        {userList()}
        <BottomWrapper>{role === "HOST" ? hostButtons() : <></>}</BottomWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const animation = keyframes`
  0% {opacity: 0;}
  20% {opacity: 1;}
  80% {opacity: 1;}
  100% {opacity: 0;} 
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 1000px;
  top: 200px;
`;

const TextWrapper = styled.div``;

const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  grid-template-rows: 325px auto auto;
  gap: 50px;
  @media (max-width: 450px) {
    display: inline;
  }
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 45px;
  row-gap: 10px;
`;

const ListRow = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 20px;
`;

const TopWrapper = styled.div`
  display: grid;
  width: 550px;
  height: 325px;
  max-height: 325px;
  justify-content: center;
  align-items: center;
  @media (max-width: 450px) {
    vertical-align: middle;
    margin: 0;
    padding: 0 30px;
    max-width: none;
  }
  .item {
    opacity: 0.2;
    transition-duration: 5s ease;
  }
  .item-active {
    transition-duration: 3s;
    transform: scale(1.08);
    animation: ${animation} 7.5s forwards;
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const BottomWrapper = styled.div``;

const HostButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  justify-content: center;
  align-content: center;
`;
