import React from "react";
import styled from "styled-components";
import { BodyMain, SmallText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import { IoRefresh } from "react-icons/io5";

export default function GameCard2(props) {
  const { category, subcategory, question, color } = props;
  return (
    <Wrapper color={color}>
      <ContentWrapper>
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
        {/* <Refresh /> */}
        <IconWrapper>
          <IoRefresh />
        </IconWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const IconWrapper = styled.button`
  margin-left: auto;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
const Header = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const HeaderText = styled.div``;
const Image = styled.div`
  margin-left: auto;
  img {
    width: 70px;
    height: 70px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  width: 600px;
  min-height: 250px;
  padding: 15px 0;
  justify-content: center;
  background: ${(props) => (props.color ? props.color : "black")};
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 30px 60px rgba(99, 30, 187, 0.5);
  backdrop-filter: blur(40px);
  border-radius: 30px;
`;

const ContentWrapper = styled.div`
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
  font-size: 36px;
  font-weight: 700;
  width: 550px;
  word-wrap: break-word;
  color: ${themes.dark.text1};
  text-align: center;
  @media (max-width: 450px) {
    font-size: 36px;
  }
`;
