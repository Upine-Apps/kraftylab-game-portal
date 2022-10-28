import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const providerValue = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    userId,
    setUserId,
    email,
    setEmail,
  };
  return (
    <UserContext.Provider value={providerValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default ({ element }) => <UserProvider>{element}</UserProvider>;
