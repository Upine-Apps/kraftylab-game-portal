import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { BodyMain, H2, H3 } from "../../styles/TextStyles";
import ReusableButton from "../../buttons/ReusableButton";
import IcebreakerCard from "../../cards/IcebreakerCard";
import IcebreakerService from "../../../service/IcebreakerService";
import DefaultSpinner from "../../spinners/DefaultSpinner";
import socketService from "../../../service/SocketService";
import GameService from "../../../service/GameService";
export default function IcebreakerLobby(props) {
  const {
    context,
    icebreaker,
    setIcebreaker,
    isHost,
    changeStage,
    code,
  } = props;
  const { firstName, lastName } = context;
  const [users, setUsers] = useState([
    {
      firstName,
      lastName,
    },
  ]);
  const userList = () => {
    if (users.length > 0) {
      return (
        <ListWrapper>
          {users.map((item, index) => (
            <div key={index}>
              <TextWrapper>
                {item.firstName} {item.lastName}
              </TextWrapper>
            </div>
          ))}
        </ListWrapper>
      );
    } else {
      return <DefaultSpinner isDark={true} />;
    }
  };

  const showAdminContols = () => {
    if (isHost === true) {
      return (
        <ButtonWrapper>
          <ReusableButton
            title="Click to start game"
            width="300px"
            borderRadius="20px"
            onClick={() => handleStartGame()}
          />
        </ButtonWrapper>
      );
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    handleUserUpdate();
    handleUpdatedUsers();
    handleGameStarted();
  }, []);

  const handleUserUpdate = () => {
    if (socketService.socket) {
      GameService.onUserJoined(socketService.socket, (firstName, lastName) => {
        let newUsers = users;
        newUsers.push({
          firstName,
          lastName,
        });
        setUsers([...newUsers]);
        if (isHost) {
          GameService.updateUsers(socketService.socket, users);
        }
      });
    }
  };

  const handleUpdatedUsers = () => {
    if (socketService.socket) {
      GameService.onUpdatedUsers(socketService.socket, (users) => {
        setUsers([...users]);
      });
    }
  };

  const handleStartGame = async () => {
    if (socketService.socket) {
      // get random ice breaker
      const randomIcebreaker = await IcebreakerService.getRandomIcebreaker();
      setIcebreaker(randomIcebreaker);
      GameService.startGame(socketService.socket, randomIcebreaker);
      changeStage("GAME");
    }
  };

  const handleGameStarted = () => {
    if (socketService.socket) {
      GameService.onGameStarted(socketService.socket, (icebreaker) => {
        changeStage("GAME");
        setIcebreaker(icebreaker);
      });
    }
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <TopWrapper>
          <IcebreakerCard
            category={icebreaker.category}
            subcategory={icebreaker.subcategory}
            question={icebreaker.question}
            color={icebreaker.color}
            onClick={null}
            isButtons={false}
          />
          {userList()}
        </TopWrapper>
        <Instructions>Share this code with your party</Instructions>
        <Code>{code}</Code>
        {showAdminContols()}
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
  justify-content: center;
  align-content: center;
  grid-template-rows: 325px auto auto auto;
  gap: 20px;
  @media (max-width: 450px) {
    display: inline;
  }
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 45px;
  row-gap: 10px;
`;

const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: 550px auto;
  gap: 50px;
  height: 325px;
  max-height: 325px;
  justify-items: center;
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

const Code = styled(H2)`
  color: black;
  text-align: center;
`;

const Instructions = styled(BodyMain)`
  color: #757575;
  font-size: "24px";
  text-align: center;
  padding-top: 50px;
`;
