import React, { useContext } from "react";
import Pokemon from "../components/Pokemon";
import { Link } from "gatsby";
import { PokeContext } from "./PokeContext";
export default function PokemonInfo({ params }) {
  const { pokeName, setPokeName } = useContext(PokeContext);
  return (
    <>
      <Link to={`pokeinfo`}>
        <button>info</button>
      </Link>
    </>
  );
}
