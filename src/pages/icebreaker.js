import React, { useContext, useEffect } from "react";
import Layout from "../components/layout/layout";
import { lazy, Suspense, useState } from "react";
import SEO from "../components/layout/seo";
import GameHeader from "../components/layout/GameHeader";
import DefaultSpinner from "../components/spinners/DefaultSpinner";
import IcebreakerHome from "../components/sections/icebreaker/IcebreakerHome";
import IcebreakerGame from "../components/sections/icebreaker/IcebreakerGame";
import IcebreakerLobby from "../components/sections/icebreaker/IcebreakerLobby";
import IcebreakerResults from "../components/sections/icebreaker/IcebreakerResults";
import GameContext from "../providers/gameContext";
import socketService from "../service/SocketService";
import { UserContext } from "../providers/userContext";
function IcebreakerPage() {
  const [icebreaker, setIcebreaker] = useState([]);
  const [isHost, setIsHost] = useState(false);
  const [stage, setStage] = useState("HOME");
  const [isInRoom, setIsInRoom] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [code, setCode] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSubCategory, setSelectedSubCategory] = useState();

  // const gameContextValue = {
  //   isHost,
  //   setIsHost,
  //   isInRoom,
  //   setIsInRoom,
  //   playerName,
  //   setPlayerName,
  // };

  // const { firstName, setFirstName, lastName, setLastName } = context.useContext(
  //   UserContext
  // );
  // console.log(firstName);
  // console.log("setting first name");
  // setFirstName("Joe MOmma");

  const onStageChange = (newStage) => {
    console.log(newStage);
    setStage(newStage);
  };

  const onIcebreakerChange = (newIcebreaker) => {
    setIcebreaker(newIcebreaker);
  };

  const getComponent = (context) => {
    switch (stage) {
      case "HOME":
        return (
          <IcebreakerHome
            context={context}
            changeStage={(e) => onStageChange(e)}
            setIcebreaker={(e) => onIcebreakerChange(e)}
            setIsHost={(e) => setIsHost(e)}
            setCode={(e) => setCode(e)}
            code={code}
          />
        );
      case "LOBBY":
        return (
          <IcebreakerLobby
            context={context}
            icebreaker={icebreaker}
            setIcebreaker={setIcebreaker}
            isHost={isHost}
            changeStage={(e) => onStageChange(e)}
            code={code}
          />
        );
      case "GAME":
        console.log("HOST: ", isHost);
        return (
          <IcebreakerGame
            context={context}
            icebreaker={icebreaker}
            setIcebreaker={setIcebreaker}
            isHost={isHost}
            code={code}
            changeStage={(e) => onStageChange(e)}
            setAllAnswers={setAllAnswers}
            allAnswers={allAnswers}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />
        );
      case "RESULTS":
        return (
          <IcebreakerResults
            icebreaker={icebreaker}
            isHost={isHost}
            allAnswers={allAnswers}
            setAllAnswers={setAllAnswers}
            changeStage={(e) => onStageChange(e)}
            code={code}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            setIcebreaker={setIcebreaker}
          />
        );
      default:
        return <IcebreakerHome />;
    }
  };

  return (
    <UserContext.Consumer>
      {(context) => (
        <Layout>
          <SEO title="icebreaker" />
          <GameHeader />
          {getComponent(context)}
        </Layout>
      )}
    </UserContext.Consumer>
  );
}

export default IcebreakerPage;
