import React, { useContext } from "react";
import PokemonPics from "./PokemonPics";
import PokemonInfo from "./PokemonInfo";
import { Link } from "gatsby";
import { PokeContext } from "./PokeContext";

export default function PokemonList({ pokemon }) {
  const { pokeName, setPokeName } = useContext(PokeContext);
  return (
    <>
      {pokemon.map((p, idx) => (
        <div>
          <ul>
            <PokemonPics id={idx + 1} />
            <br />
            <PokemonInfo />
            {/* <Link to={`pokeinfo/${p}`}>
              <button key={idx + 1}>{p}</button>
            </Link> */}
          </ul>
        </div>
      ))}
      ;
    </>
  );
}
