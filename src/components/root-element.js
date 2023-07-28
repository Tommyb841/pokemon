import React from "react";
import { PokeContextProvider } from "../context/PokeContext";

const RootElement = ({ children }) => {
  return <PokeContextProvider>{children}</PokeContextProvider>;
};

export default RootElement;
