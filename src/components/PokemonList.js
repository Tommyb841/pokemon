import React from "react";
import Link from "gatsby-link";
import PokemonPics from "./PokemonPics";
export default function PokemonList({ pokemon }) {
  return (
    <>
      {pokemon.map((p, idx) => (
        <ul>
          <button key={idx}>{p}</button>
          <PokemonPics id={idx + 1} />
        </ul>
      ))}
      ;
    </>
  );
}
