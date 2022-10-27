import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import ReusableButton from "../../buttons/ReusableButton";
import IcebreakerCard from "../../cards/IcebreakerCard";
import ReusableTextField from "../../textfield/ReusableTextField";
import IcebreakerService from "../../../service/IcebreakerService";
import DefaultSpinner from "../../spinners/DefaultSpinner";
import { ColorData } from "../../../data/colorData";
import socketService from "../../../service/SocketService";
import UtilService from "../../../service/UtilService";
import GameService from "../../../service/GameService";
import StatusAlert from "../../alerts/StatusAlert";
import { codeLength } from "../../../validators/validationUtilities";
import gameContext from "../../../providers/gameContext";
import userContext from "../../../providers/userContext";

export default function IcebreakerHome(props) {
  const emptyAlert = {
    visible: false,
    status: "",
    title: "",
    subtitle: "",
    key: 0,
  };
  const { changeStage, setIcebreaker, setIsHost, setCode, code } = props;
  const [icebreakers, setIcebreakers] = useState([]);
  const [alert, setAlert] = useState(emptyAlert);

  const { firstName, lastName } = useContext(userContext);
  console.log(gameContext);
  console.log("First name: ", firstName);
  console.log("Last name: ", lastName);

  const connectToSocket = async () => {
    const socket = await socketService
      .connect("http://localhost:6969")
      .catch((err) => {
        console.log("Error: ", err); //TODO use custom alert
      });
  };

  useEffect(() => {
    let isMounted = true;
    connectToSocket();
    IcebreakerService.getAllIcebreakers().then((response) => {
      if (isMounted) {
        let data = response;
        setIcebreakers(data.sort(() => 0.5 - Math.random()).slice(0, 20));
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  function displayAlert() {
    return (
      <StatusAlert
        status={alert.status}
        title={alert.title}
        subtitle={alert.subtitle}
        key={alert.key}
      />
    );
  }

  async function onHostClick(e) {
    const socket = socketService.socket;
    setIsHost(true);
    const code = UtilService.getCode(5);
    setCode(code);
    await GameService.joinGameRoom(socket, code, true, firstName, lastName);
    setIcebreaker(icebreakers[0]);
    changeStage("LOBBY");
  }

  async function onJoinClick(e) {
    console.log(codeLength(code));
    if (!codeLength(code)) {
      setAlert({
        visible: true,
        status: "Error",
        title: "Error",
        subtitle: "Please enter a valid code",
        key: Math.random(),
      });
    } else {
      const socket = socketService.socket;
      setIsHost(false);
      console.log(firstName);
      const joined = await GameService.joinGameRoom(
        socket,
        code,
        false,
        firstName,
        lastName
      ).catch((err) => {
        console.log("Error: ", err); //TODO use custom alert
        setAlert({
          visible: true,
          status: "Error",
          title: "Error",
          subtitle: err,
          key: Math.random(),
        });
      });
      if (joined) {
        console.log("pp");
        setIcebreaker(icebreakers[0]);
        changeStage("LOBBY");
      }
    }
  }

  const icebreakerCard = () => {
    if (icebreakers.length > 0) {
      return icebreakers.map((item, index) => (
        <div className={index === current ? "item-active" : "item"} key={index}>
          {index === current && (
            <IcebreakerCard
              category={item.category}
              subcategory={item.subcategory}
              question={item.question}
              color={UtilService.getColor()}
              onClick={null}
              isButtons={false}
            />
          )}
        </div>
      ));
    } else {
      return <DefaultSpinner isDark={true} />;
    }
  };
  //slideshow functionality

  const [current, setCurrent] = useState(0);
  const length = icebreakers.length;

  const changeSlide = (direction) => {
    if (direction == "l") {
      setCurrent(current === 0 ? length - 1 : current - 1);
      clearInterval(timer); //without this the buttons can mess up the autoplay
    }
    if (direction == "r") {
      setCurrent(current === length - 1 ? 0 : current + 1);
      clearInterval(timer); //without this the buttons can mess up the autoplay
    }
  };

  var timer = setInterval(function () {
    changeSlide("r");
  }, 7000); //this needs to be 500ms faster than line 42 or the animation breaks

  setTimeout(function () {
    clearInterval(timer);
  }, 7500);

  return (
    <Wrapper>
      {alert.visible ? displayAlert() : ""}
      <ContentWrapper>
        <TopWrapper>{icebreakerCard()}</TopWrapper>
        <BottomWrapper>
          <ButtonRowWrapper>
            <ReusableButton
              title="Host"
              width="182px"
              borderRadius="20px"
              onClick={(e) => onHostClick(e)}
            />
            <ReusableButton
              title="Join"
              width="182px"
              borderRadius="20px"
              onClick={(e) => onJoinClick(e)}
            />
          </ButtonRowWrapper>
          <ReusableTextField
            title="Have a code? Enter it here!"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </BottomWrapper>
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
  height: 100%;
  top: 200px;
`;

const ContentWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  width: 750px;
  justify-content: center;
  grid-template-rows: 80% 20%;
  @media (max-width: 450px) {
    display: inline;
  }
`;

const TopWrapper = styled.div`
  display: grid;
  margin: 50px;
  width: 550px;
  height: 325px;
  justify-items: center;
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
  margin: 0 auto;
  max-width: 750px;
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ButtonRowWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 25px;
  padding-bottom: 20px;
`;
