import React from "react";
import Pokemon from "./Pokemon";

// import PokemonPics from "./PokemonPics";
// import PokemonInfo from "./PokemonInfo";
// import styles from "../styles/pokelist.module.css";

export default function PokemonList({ pokemonList }) {
  return (
    <>
      <div
      // className={styles.p}
      >
        {pokemonList.map((p, idx) => (
          <div>
            <Pokemon pokemon={p} />
          </div>
        ))}
        ;
      </div>
    </>
  );
}
