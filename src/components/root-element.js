import React from "react";
import { PokeProvider } from "../context/PokeContext";

const RootElement = ({ children }) => {
  return <PokeProvider>{children}</PokeProvider>;
};

export default RootElement;
