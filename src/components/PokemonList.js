import React from "react";
import PokemonPics from "./PokemonPics";
export default function PokemonList({ pokemon }) {
  return (
    <>
      {pokemon.map((p, idx) => (
        <ul>
          <PokemonPics id={idx + 1} /><br/>
          <button key={idx}>{p}</button>
        </ul>
      ))}
      ;
    </>
  );
}
