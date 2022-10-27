import React from "react";

const defaultState = {
  isInRoom: false,
  setIsInRoom: () => {},
  playerName: "",
  setPlayerName: () => {},
  isHost: false,
  setIsHost: () => {},
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  userId: "",
  setUserId: () => {},
  email: "",
  setEmail: () => {},
};

export default React.createContext(defaultState);
