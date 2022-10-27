import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
  const [firstName, setFirstName] = useState("");
  const hi = () => {
    console.log("hi");
  };
  const actuallySetName = (x) => {
    setFirstName(x);
  };
  const providerValue = { firstName, setFirstName, hi, actuallySetName };
  return (
    <UserContext.Provider value={providerValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext as default, UserProvider };
