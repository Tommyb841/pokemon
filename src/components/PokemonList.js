import React, { useContext, createContext, useState } from "react";
import PokemonPics from "./PokemonPics";
import PokemonInfo from "./PokemonInfo";
import { Link } from "gatsby";

const PokeContext = createContext();
const PokeContextProvider = ({ children }) => {
  const [pokeName, setPokeName] = useState("");

  return (
    <PokeContext.Provider value={{ pokeName, setPokeName }}>
      {children}
    </PokeContext.Provider>
  );
};
export default function PokemonList({ pokemon }) {
  return (
    <>
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
    </>
  );
}

export { PokeContext, PokeContextProvider };
