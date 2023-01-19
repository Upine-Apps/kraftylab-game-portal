import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { H1, H3 } from "../../../styles/TextStyles";
import GameCard from "../../../cards/GameCard";
import GameHeader from "../../../layout/GameHeader";
import CreateIcebreakers from "./CreateIcebreakers";
import { icebreakerManagementData } from "../../../../data/icebreakerManagementData";
import ReusableButton from "../../../buttons/ReusableButton";
import EditIcebreakers from "./EditIcebreakers";
export default function IcebreakerManagementSection() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const [stage, setStage] = useState("READ");

  const onStageChange = (newStage) => {
    console.log("newStage: ", newStage);
    setStage(newStage);
  };

  const getComponent = (context) => {
    switch (stage) {
      case "CREATE":
        return <CreateIcebreakers />;
      case "EDIT":
        return <EditIcebreakers />;
      default:
        // TODO: Comeback and change to READ case
        // return <Title>Select an option from the left!</Title>;
        return <EditIcebreakers />;
    }
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Ice Breaker Management</Title>
        <ScreenWrapper>
          <LeftColumnWrapper>
            <ColumnNavBar count={icebreakerManagementData.length}>
              {icebreakerManagementData.map((item, index) => (
                <ReusableButton
                  title={item.title}
                  key={index}
                  onClick={(e) => onStageChange(item.stage)}
                  color={item.stage === stage ? "rgba(0, 0, 0, 0.15)" : "white"}
                  isDark={true}
                  isHover={true}
                  isFixedHeigth={true}
                  borderRadius="10px"
                />
              ))}
            </ColumnNavBar>
          </LeftColumnWrapper>
          <RightColumnWrapper> {getComponent()}</RightColumnWrapper>
        </ScreenWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 200px;
`;

const ContentWrapper = styled.div`
  display: grid;
  height: 100%;
  gap: 30px;
  padding: 0px 10px 0px 10px;
  grid-template-rows: 20% auto;
  align-content: center;
`;

const ScreenWrapper = styled.div`
  position: relative;
  display: grid;
  top: 20px;
  grid-template-columns: 15% auto; ;
`;

const LeftColumnWrapper = styled.div`
  position: relative;
  left: 100px;
  justify-content: left;
`;

const ColumnNavBar = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  display: grid;
  gap: 30px;
  grid-template-rows: repeat(${(props) => props.count}, auto);
`;

const RightColumnWrapper = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
`;

const Title = styled(H1)`
  position: relative;
  left: 100px;
  text-align: left;
`;
