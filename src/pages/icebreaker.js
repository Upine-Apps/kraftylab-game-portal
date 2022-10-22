import React from "react";
import Layout from "../components/layout/layout";
import { lazy, Suspense, useState } from "react";
import SEO from "../components/layout/seo";
import GameHeader from "../components/layout/GameHeader";
import DefaultSpinner from "../components/spinners/DefaultSpinner";
import IcebreakerHome from "../components/sections/icebreaker/IcebreakerHome";
import IcebreakerGame from "../components/sections/icebreaker/IcebreakerGame";
import IcebreakerLobby from "../components/sections/icebreaker/IcebreakerLobby";
import IcebreakerResults from "../components/sections/icebreaker/IcebreakerResults";

function IcebreakerPage() {
  const [icebreaker, setIcebreaker] = useState([]);
  const [role, setRole] = useState("");
  const [stage, setStage] = useState("HOME");

  const onStageChange = (newStage) => {
    console.log(newStage);
    setStage(newStage);
  };

  const onIcebreakerChange = (newIcebreaker) => {
    setIcebreaker(newIcebreaker);
  };

  const getComponent = (item) => {
    switch (stage) {
      case "HOME":
        return (
          <IcebreakerHome
            changeStage={(e) => onStageChange(e)}
            setIcebreaker={(e) => onIcebreakerChange(e)}
            role={(e) => setRole(e)}
          />
        );
      case "LOBBY":
        return (
          <IcebreakerLobby
            icebreaker={icebreaker}
            role={role}
            changeStage={(e) => onStageChange(e)}
          />
        );
      case "GAME":
        return (
          <IcebreakerGame
            icebreaker={icebreaker}
            role={role}
            code={"KL1234"}
            changeStage={(e) => onStageChange(e)}
          />
        );
      case "RESULTS":
        return (
          <IcebreakerResults
            icebreaker={icebreaker}
            role={role}
            changeStage={(e) => onStageChange(e)}
          />
        );
      default:
        return <IcebreakerHome />;
    }
  };

  return (
    <Layout>
      <SEO title="icebreaker" />
      <GameHeader />
      {getComponent()}
    </Layout>
  );
}

export default IcebreakerPage;
