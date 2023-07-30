import React from "react"
import Pokemon from "./Pokemon"


export default function PokemonList({ pokemonList }) {
  return (
    <>
      <h1>Choose Your Pokemon</h1>
      <div >
        {pokemonList.map((p, idx) => (
          <div key={idx} >
            <Pokemon pokemon={p} />
          </div>
        ))}
      </div>
    </>
  )
}
