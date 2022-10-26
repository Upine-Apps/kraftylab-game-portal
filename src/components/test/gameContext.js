import React from "react";
export class IGameContextProps {}

const defaultState = {
  isInRoom: false,
  setIsInRoom: () => {},
  playerName: "",
  setPlayerName: () => {},
};

export default React.createContext(defaultState);
