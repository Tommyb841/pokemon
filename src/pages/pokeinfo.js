import React from "react";
import PokemonInfo from "../components/PokemonInfo";

export default function pokeinfo(props) {
  return (
    <>
      <h1>this is the info page</h1>
      <h2>{props.pokemon}</h2>
    </>
  );
}
