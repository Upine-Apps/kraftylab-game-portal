import React from "react";
import styled from "styled-components";
import { BodyMain, SmallText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";

export default function GameCard2(props) {
  const { category, subcategory, question, color } = props;
  return (
    <Wrapper color={color}>
      <TextWrapper>
        <Header>
          <HeaderText>
            <Category>{category}</Category>
            <SubCategory>{subcategory}</SubCategory>
          </HeaderText>
          <Image>
            <img src="/images/logos/kraftylab-logo.png" alt="Logo" />
          </Image>
        </Header>
        <Question>{question}</Question>
      </TextWrapper>
    </Wrapper>
  );
}

const Header = styled.div`
  display: flex;
`;
const HeaderText = styled.div``;
const Image = styled.div`
  margin-left: auto;
  img {
    width: 75px;
    height: 75px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: ${(props) => (props.color ? props.color : "black")};
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 30px 60px rgba(99, 30, 187, 0.5);
  backdrop-filter: blur(40px);
  border-radius: 30px;
`;

const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto;
  align-self: center;
  @media (max-width: 450px) {
  }
`;

const Category = styled(BodyMain)`
  font-size: 32px;
  font-weight: 700;
  color: ${themes.dark.text1};
  text-align: start;
  @media (max-width: 450px) {
    font-size: 36px;
  }
`;

const SubCategory = styled(BodyMain)`
  font-size: 24px;
  font-weight: 300;
  color: ${themes.dark.text1};
  text-align: start;
  @media (max-width: 450px) {
    font-size: 36px;
  }
`;

const Question = styled(BodyMain)`
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 25px;
  color: ${themes.dark.text1};
  text-align: center;
  @media (max-width: 450px) {
    font-size: 36px;
  }
`;

const GameTitle = styled(BodyMain)`
  font-size: 56px;
  font-weight: 700;
  color: ${themes.dark.text1};
  text-align: start;
  @media (max-width: 450px) {
    font-size: 36px;
  }
`;

const Description = styled(SmallText)`
  font-weight: 400;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.8);
  text-align: start;
  @media (max-width: 450px) {
    font-size: 24px;
  }
`;
