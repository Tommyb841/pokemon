import React from "react";
import { Link } from "gatsby";
export default function PokemonInfo(props) {
  return (
    <>
      <Link to={`pokeinfo`} state={props.pokemon}>
        <button>{props.pokemon}</button>
      </Link>
    </>
  );
}
