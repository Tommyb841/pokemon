import React from "react";
import PokemonPics from "./PokemonPics";
import PokemonInfo from "./PokemonInfo";
import styles from "../styles/pokelist.module.css";

export default function PokemonList({ pokemon }) {
  return (
    <>
      <div className={styles.p}>
        {pokemon.map((p, idx) => (
          <div>
            <ul>
              <PokemonPics id={idx + 1} />
              <br />
              <PokemonInfo pokemon={[p]} />
              {/* <Link to={`pokeinfo/${p}`}>
              <button key={idx + 1}>{p}</button>
            </Link> */}
            </ul>
          </div>
        ))}
        ;
      </div>
    </>
  );
}
