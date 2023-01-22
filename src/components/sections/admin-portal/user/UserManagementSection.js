import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { H1, H3 } from "../../../styles/TextStyles";
import ViewUsers from "./ViewUsers";
import { userManagementData } from "../../../../data/userManagementData.js";
import ReusableButton from "../../../buttons/ReusableButton";
export default function UserManagementSection() {
  const [stage, setStage] = useState("READ");

  const onStageChange = (newStage) => {
    console.log("newStage: ", newStage);
    setStage(newStage);
  };

  const getComponent = (context) => {
    switch (stage) {
      case "VIEW":
        return <ViewUsers />;
      default:
        return <ViewUsers />;
    }
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>User Management</Title>
        <ScreenWrapper>
          <LeftColumnWrapper>
            <ColumnNavBar count={userManagementData.length}>
              {userManagementData.map((item, index) => (
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
