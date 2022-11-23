import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { BodyMain, H2, H3 } from "../../styles/TextStyles";
import ReusableButton from "../../buttons/ReusableButton";
import IcebreakerCard from "../../cards/IcebreakerCard";
import { ColorData } from "../../../data/colorData";
import TextArea from "../../textfield/TextArea";
import DropDownBox from "../../buttons/DropDownBox";
import IcebreakerService from "../../../service/IcebreakerService";
import socketService from "../../../service/SocketService";
import GameService from "../../../service/GameService";
export default function IcebreakerGame(props) {
  const {
    context,
    icebreaker,
    setIcebreaker,
    isHost,
    code,
    setCode,
    changeStage,
    setAllAnswers,
    allAnswers,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
  } = props;
  const [answer, setAnswer] = useState();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState();
  const { firstName, lastName, userId } = context;

  const [submittedAnswer, setSubmittedAnswer] = useState();

  function onChangeCategory(e) {
    setSelectedCategory(e.value);
    setSelectedSubCategory();
    setSubCategoryOptions(subCategoryData[`${e.value}`]);
  }
  function onChangeSubCategory(e) {
    setSelectedSubCategory(e.value);
  }

  const handleEndSession = () => {
    if (socketService.socket) {
      GameService.handleEndSession(socketService.socket);
      setCode("");
      setAllAnswers([]);
      setSelectedCategory();
      setSelectedSubCategory();
      setIcebreaker([]);
      changeStage("HOME");
    }
  };
  const handleSessionEnded = () => {
    if (socketService.socket) {
      GameService.onSessionEnded(socketService.socket, () => {
        setCode("");
        setAllAnswers([]);
        setIcebreaker([]);
        changeStage("HOME");
      });
    }
  };

  const filterIcebreakers = async () => {
    if (socketService.socket) {
      const newIcebreaker = await IcebreakerService.getIcebreakerByCatSubCat(
        selectedCategory,
        selectedSubCategory
      );
      setIcebreaker(newIcebreaker);
      GameService.changeCategory(socketService.socket, newIcebreaker);
    }
  };

  const onCategoryChanged = () => {
    if (socketService.socket) {
      GameService.onCategoryChanged(socketService.socket, (icebreaker) => {
        setIcebreaker(icebreaker);
      });
    }
  };

  const submitAnswer = () => {
    const playerAnswer = { answer, firstName, lastName, userId };
    if (socketService.socket) {
      checkDuplicateAnswer(playerAnswer);
      GameService.submitAnswer(
        socketService.socket,
        answer,
        userId,
        firstName,
        lastName
      );
      setSubmittedAnswer(answer);
    }
  };

  const checkDuplicateAnswer = (playerAnswer) => {
    if (allAnswers.length > 0) {
      let prevPlayerAnswer = allAnswers.find(
        (x) => x.userId === playerAnswer.userId
      );
      if (prevPlayerAnswer && prevPlayerAnswer.length > 0) {
        const index = allAnswers.indexOf(prevPlayerAnswer);
        allAnswers[index] = playerAnswer;
      } else {
        allAnswers.push(playerAnswer);
        setAllAnswers(allAnswers);
      }
    } else {
      allAnswers.push(playerAnswer);
      setAllAnswers(allAnswers);
    }
  };

  const onAnswerSubmitted = () => {
    if (socketService.socket) {
      GameService.onAnswerSubmitted(socketService.socket, (playerAnswer) => {
        checkDuplicateAnswer(playerAnswer);
      });
    }
  };

  const handleEndRound = () => {
    if (socketService.socket) {
      GameService.handleEndRound(socketService.socket, allAnswers);
      changeStage("RESULTS");
    }
  };

  const onRoundEnded = () => {
    if (socketService.socket) {
      GameService.onRoundEnded(socketService.socket, (allAnswers) => {
        setAllAnswers(allAnswers);
        changeStage("RESULTS");
      });
    }
  };

  useEffect(() => {
    onCategoryChanged();
    onAnswerSubmitted();
    handleSessionEnded();
    onRoundEnded();
    let isMounted = true;
    IcebreakerService.getIcebreakerCategories().then((response) => {
      if (isMounted) {
        setSubCategoryData(response.subcategories);
        setCategoryOptions(response.categories);
      }
    });
  }, []);

  const getHostDropdowns = () => {
    return (
      <DropdownWrapper>
        <DropDownBox
          options={categoryOptions}
          selected={selectedCategory}
          placeholder="Select a Category"
          onChange={(e) => onChangeCategory(e)}
        ></DropDownBox>
        <DropDownBox
          options={subCategoryOptions}
          selected={selectedSubCategory}
          placeholder="Select a Subcategory"
          onChange={(e) => onChangeSubCategory(e)}
        ></DropDownBox>
        <ButtonWrapper>
          <ReusableButton
            title="Filter"
            width="150px"
            borderRadius="20px"
            onClick={() => filterIcebreakers()}
          />
        </ButtonWrapper>
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
          onClick={() => handleEndRound()}
        />
        <ReusableButton
          title="End Session"
          width="150px"
          borderRadius="20px"
          onClick={() => handleEndSession()}
          color="#FD3F33"
        />
      </HostButtonWrapper>
    );
  };

  return (
    <Wrapper>
      <ContentWrapper isHost={isHost}>
        {isHost === true ? getHostDropdowns() : <></>}
        <TopWrapper>
          <IcebreakerCard
            category={icebreaker.category}
            subcategory={icebreaker.subcategory}
            question={icebreaker.question}
            color={icebreaker.color}
            isButtons={false}
          />
        </TopWrapper>
        <BottomWrapper>
          <TextArea
            title={"Enter your answer here"}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
            rows={"2"}
          />
          <ButtonWrapper>
            <ReusableButton
              title="Submit"
              width="150px"
              borderRadius="20px"
              onClick={() => submitAnswer()}
            />
          </ButtonWrapper>
        </BottomWrapper>
        <AnswerText>Answer Submitted: {submittedAnswer}</AnswerText>
        {isHost === true ? hostButtons() : <></>}
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
  position: relative;
  grid-template-columns: auto auto auto;
  gap: 30px;
  align-items: center;
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

const AnswerText = styled.div`
  display: grid;
  text-align: center;
`;
