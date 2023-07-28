import React from "react";
import PokemonInfo from "../components/PokemonInfo";

export default function PokeInfo(props) {
  console.log("props from pokeinfo: ", props);
  return (
    <>
      <h1>this is the info page</h1>
      {/* <h2>{props.pokemon}</h2> */}
    </>
  );
}
