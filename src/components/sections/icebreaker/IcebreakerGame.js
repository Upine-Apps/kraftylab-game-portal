import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { BodyMain, H2, H3 } from "../../styles/TextStyles";
import ReusableButton from "../../buttons/ReusableButton";
import IcebreakerCard from "../../cards/IcebreakerCard";
import { icebreakerData, userData } from "../../../data/icebreakerData";
import ReusableTextField from "../../textfield/ReusableTextField";
// import IcebreakerService from "../../../service/IcebreakerService";
import DefaultSpinner from "../../spinners/DefaultSpinner";
import { ColorData } from "../../../data/colorData";
import TextArea from "../../textfield/TextArea";
import DropDownBox from "../../buttons/DropDownBox";
import IcebreakerService from "../../../service/IcebreakerService";

export default function IcebreakerGame(props) {
  // temp. pull from db
  const { icebreaker, role, code, changeStage } = props;
  const [icebreakers, setIcebreakers] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSubCategory, setSelectedSubCategory] = useState();
  const [answer, setAnswer] = useState();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState();
  const length = icebreakers.length;

  const getColor = () => {
    const colors = ColorData;
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex].color;
  };

  const icebreakerList = [];
  // const getIcebreakers = async () => {
  //   await IcebreakerService.getIcebreakersByCategory();
  // };

  const onSubmitAnswer = (e) => {
    console.log(e);
  };

  function onChangeCategory(e) {
    setSelectedCategory(e.value);
    setSelectedSubCategory();
    console.log(e.value);
    console.log("before");
    console.log(subCategoryData);
    console.log("after");
    setSubCategoryOptions(subCategoryData[`${e.value}`]);
    console.log(subCategoryData[`${e}.value}`]);
  }
  function onChangeSubCategory(e) {
    setSelectedSubCategory(e);
  }

  const changeSlide = (direction) => {
    if (direction == "l") {
      setCurrent(current === 0 ? length - 1 : current - 1);
    }
    if (direction == "r") {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }
  };

  const handleEnd = () => {
    // game end logic here
    changeStage("HOME");
  };

  useEffect(() => {
    let isMounted = true;
    IcebreakerService.getIcebreakerCategories().then((response) => {
      if (isMounted) {
        setSubCategoryData(response.subcategories);
        setCategoryOptions(response.categories);
      }
    });
  }, []);
  //
  //
  //

  const getHostDropdowns = () => {
    return (
      <DropdownWrapper>
        <DropDownBox
          options={categoryOptions}
          selected={selectedCategory}
          onChange={(e) => onChangeCategory(e)}
        ></DropDownBox>
        <DropDownBox
          options={subCategoryOptions}
          selected={selectedSubCategory}
          onChange={(e) => onChangeSubCategory(e)}
        ></DropDownBox>
      </DropdownWrapper>
    );
  };

  const hostButtons = () => {
    return (
      <HostButtonWrapper>
        <ReusableButton
          title="End Round"
          width="150px"
          borderRadius="20px"
          onClick={() => changeStage("RESULTS")}
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
      <ContentWrapper isHost={role == "HOST"}>
        {role === "HOST" ? getHostDropdowns() : <></>}
        <TopWrapper>
          <IcebreakerCard
            category={icebreaker.category}
            subcategory={icebreaker.subcategory}
            question={icebreaker.question}
            color={getColor()}
            onClick={(e) => changeSlide(e)}
            isButtons={false}
          />
        </TopWrapper>
        <BottomWrapper>
          <TextArea
            title={"Enter your answer here"}
            onChange={(e) => {
              setAnswer(e);
            }}
            rows={"2"}
          />
          <ButtonWrapper>
            <ReusableButton
              title="Submit"
              width="150px"
              borderRadius="20px"
              onClick={() => console.log("clicked start")}
            />
          </ButtonWrapper>
        </BottomWrapper>
        {role === "HOST" ? hostButtons() : <></>}
      </ContentWrapper>
      <TextWrapper>
        <GameCode>Game Code: {code}</GameCode>
      </TextWrapper>
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

const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-rows: ${(props) =>
    props.isHost ? "100px 325px auto auto auto" : "325px auto auto"};
  gap: 75px;
  @media (max-width: 450px) {
    display: inline;
  }
`;

const DropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
`;

const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: 550px;
  gap: 50px;
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

const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: 325px auto;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
`;

const HostButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  justify-content: center;
  align-content: center;
`;

const TextWrapper = styled.div`
  display: grid;
  text-align: end;
`;

const GameCode = styled(BodyMain)``;
