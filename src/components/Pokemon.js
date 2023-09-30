import React from "react"
import { Link } from "gatsby"
import "../styles/pokemon.css"
export default function Pokemon({ pokemon }) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  console.log("Pokemon inside poke component: ", pokemon)
  return (
    <div className="pokemon-container">
      <Link to={`/pokeinfo`} state={pokemon}>
        <img src={url} alt={pokemon.name} />
      </Link>
      <h2>{pokemon.name}</h2>
    </div>
  )
}
