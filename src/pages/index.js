import React from "react";
import Pokemon from "../components/Pokemon";
import { PokeContextProvider } from "../components/PokemonList";
export default function index() {
  return (
    <>
      <PokeContextProvider>
        <Pokemon />
      </PokeContextProvider>
    </>
  );
}
