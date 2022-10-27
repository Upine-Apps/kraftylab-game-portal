import React, { useState, useRef, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import SlideShowButton from "../../buttons/SlideShowButton";
import ReusableButton from "../../buttons/ReusableButton";
import StatusAlert from "../../alerts/StatusAlert";
import ReusableTextField from "../../textfield/ReusableTextField";
import { themes } from "../../styles/ColorStyles";
import { H1, MediumText } from "../../styles/TextStyles";
import Password from "../../textfield/CustomPasswordField";
import DefaultSpinner from "../../spinners/DefaultSpinner";
import DropDownBox from "../../buttons/DropDownBox";
import MenuTooltip from "../../tooltips/MenuTooltip";
import { io } from "socket.io-client";
import socketService from "../../../service/SocketService";
import gameService from "../../../service/GameService";
import GameContext from "../../../providers/gameContext";

function TestHero() {
  const options = ["dog", "cat", "mouse", "bird", "horse", "cow"];
  const options2 = ["red", "green", "blue"];
  const [code, setCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(options[0]);
  const [selectedDropdown2, setSelectedDropdown2] = useState(options2[0]);
  const tooltipRef = useRef();
  const [isJoining, setJoining] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [answer, setAnswer] = useState("");

  const [isInRoom, setIsInRoom] = useState(false);
  // const {setIsInRoom, isInRoom} = useContext(gameContext); TODO

  const gameContextValue = {
    isInRoom,
    setIsInRoom,
  };

  // const connect = () => {
  //   const socket = io("http://localhost:6969");
  //   socket.on("connect", () => {
  //     socket.emit("sex", { name: "peepee toucher", age: "old enough" });
  //   });
  // };

  // useEffect(() => {
  //   connect();
  // }, []);

  function onChangeDropdown(e) {
    console.log(selectedDropdown);
    setSelectedDropdown(e);
    console.log(selectedDropdown);
  }
  function onChangeDropdown2(e) {
    console.log(selectedDropdown2);
    setSelectedDropdown2(e);
    console.log(selectedDropdown2);
  }

  function onChange(e) {
    console.log(e.target.name, e.target.value);
  }
  function handleClick(event) {
    setIsOpen(!isOpen);
    event.preventDefault();
  }

  const connectSocket = async () => {
    const socket = socketService
      .connect("http://localhost:6969")
      .catch((err) => {
        console.log(err);
      });
  };

  const joinRoom = async () => {
    const socket = socketService.socket;
    if (!code || !socket) return;
    setJoining(true);
    const joined = await gameService.joinGameRoom(socket, code).catch((err) => {
      alert(err); //TODO use our custom alerts
    });
    if (joined) setIsInRoom(true);
    setJoining(false);
  };

  useEffect(() => {
    connectSocket();
    handleGameUpdate();
  }, []);

  const renderRoom = () => {
    return (
      <>
        <ReusableTextField
          title="Enter code"
          onChange={(e) => {
            setCode(e.target.value);
          }}
          value={code}
          label="Code"
        />
        <ReusableButton title="Connect to room!" onClick={joinRoom} />
      </>
    );
  };
  const updateGame = async (symbol) => {
    if (socketService.socket)
      gameService.updateGame(socketService.socket, symbol);
  };

  const handleGameUpdate = () => {
    if (socketService.socket)
      gameService.onGameUpdate(socketService.socket, (playerAnswer) => {
        console.log(playerAnswer);
        setAnswer(playerAnswer);
      });
  };

  const renderGame = () => {
    return (
      <>
        <ReusableButton title="X" onClick={() => updateGame("X")} />
        <ReusableButton title="O" onClick={() => updateGame("O")} />
        <Title>{answer}</Title>
      </>
    );
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <Wrapper>
        <Title>Test page</Title>
        <Subtitle>Test out your components here</Subtitle>
        {!isInRoom && renderRoom()}
        {isInRoom && renderGame()}
      </Wrapper>
    </GameContext.Provider>
  );
}
export default TestHero;

const Wrapper = styled.div`
  display: grid;
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 40px 30px 150px;
  display: grid;
  gap: 20px;
  text-align: center;
  @media (max-width: 450px) {
    grid-template-columns: auto;
  }
  background-color: lightblue;
`;

const Title = styled(H1)`
  color: black;
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
  color: ${themes.light.text1};
`;
const NameWrapper = styled.div`
  input {
    /*         
    width: 100%; */
    background: linear-gradient(
      rgba(99, 106, 150, 0.4) 0%,
      rgba(182, 186, 214, 0.25) 100%
    );
    border: none;
    border-radius: 30px;
    box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
      rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    box-sizing: border-box;
    padding: 10px 42px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color: rgb(255, 255, 255);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
      text-align: left;
    }
  }
`;

const HamburgerWrapper = styled.div`
  @media (max-width: 768px) {
    display: block;
  } ;
`;
