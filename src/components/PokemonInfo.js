import React, { useContext } from "react";
import Pokemon from "../components/Pokemon";
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
