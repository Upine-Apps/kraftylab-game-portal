import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { H1, H3 } from "../../styles/TextStyles";
import GameCard from "../../cards/GameCard";
import { adminPortalData } from "../../../data/adminPortalData";

export default function AdminPortalSection() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Admin Portal</Title>
        <ScreenWrapper>
          {adminPortalData.map((item, index) => (
            <GameCard
              title={item.title}
              description={item.description}
              color={item.color}
              icon={item.icon}
              iconSize={"60px"}
              path={item.path ? item.path : null}
              outsidePath={item.outsidePath ? item.outsidePath : false}
            />
          ))}
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
  margin: 0 auto;
  height: 100%;
  gap: 30px;
  grid-template-rows: 20% 80%;
  justify-content: center;
  align-content: center;
`;

const ScreenWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 40% 40%;
  width: 1080px;
  justify-content: center;
`;

const Title = styled(H1)`
  text-align: center;
`;
