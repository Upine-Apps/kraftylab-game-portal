import React from "react";
import styled, { keyframes } from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H1, MediumText } from "../styles/TextStyles";
import SnugHeroWave from "../backgrounds/SnugHeroWave";

function SnugHero() {
  return (
    <Wrapper>
      <SnugHeroWave />
      <ContentWrapper>
        <LeftColumnWrapper>
          <TextWrapper>
            <Title>
              <br /> <span>Safer Dating</span>
            </Title>
            <Subtitle>
              Looking for peace of mind when dating? Snug has your back! Snug -
              Safer Dating is an native app that helps people stay safe while
              dating. Download now and check it out.
            </Subtitle>
          </TextWrapper>
          <StupidWrapper>
            <a href="https://apps.apple.com/us/app/snug-safer-dating/id1572199593">
              <img
                src="/images/store/appstore.svg"
                style={{ width: "250px" }}
                className="store"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.upine.snug">
              <img
                src="/images/store/playstore.svg"
                style={{ width: "250px" }}
                className="store"
              />
            </a>
          </StupidWrapper>
        </LeftColumnWrapper>
        <RightColumnWrapper>
          <ScreenshotWrapper>
            <img src="/images/snug/threePhone.png" />
          </ScreenshotWrapper>
        </RightColumnWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default SnugHero;

const animation = keyframes`
            from {opacity: 0; transform: translateY(-10px) filter: blur(10px)}
            to {opacity: 1; transform: translateY(0px) filter: blur(0px)}
            `;

const LeftColumnWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  @media (max-width: 450px) {
    max-width: 350px;
    justify-content: center;
    margin: 0 auto;
  }
`;

const RightColumnWrapper = styled.div`
  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

const ScreenshotWrapper = styled.div`
  display: grid;
  img {
    border-radius: 20px;
    width: 650px;
    @media (max-width: 450px) {
      margin: 0 auto;
      width: 350px;
    }
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  height: 1000px;

  @media (max-width: 450px) {
    height: 1100px;
  }
`;

const StupidWrapper = styled.div`
  width: 600px;
  display: grid;
  margin: 0 auto;
  align-content: end;
  justify-content: center;
  grid-template-columns: auto auto;
  gap: 30px;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    max-width: 450px;
  }

  //why dis no work?
  a {
    :hover {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: translateY(-3px);
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 200px 30px 120px 30px;
  display: grid;
  grid-template-columns: 620px auto;
  gap: 60px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 200px 0px 0px 0px;
    justify-content: center;
    margin: 0 auto;
  }
`;
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  margin: 0 auto;
  text-align: center;
  gap: 0px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const Title = styled(H1)`
  padding: 10px;
  background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 50px;
    color: transparent;
  }
  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Subtitle = styled(MediumText)`
  padding: 10px;
  color: ${themes.dark.text1};
`;
