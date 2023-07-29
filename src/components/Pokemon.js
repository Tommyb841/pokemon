// import React from "react"
// import { Link } from "gatsby"
// export default function Pokemon({ pokemon }) {
//   const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
//   console.log("Pokemon inside poke component: ", pokemon)
//   return (
//     <div>
//       <img style={{ width: "50px", height: "50px" }} src={url} alt="" />
//       <Link to={`/pokeinfo`} state={pokemon}>
//         <button>{pokemon.name}</button>
//       </Link>
//     </div>
//   )
// }
import React from "react"
import { Link } from "gatsby"
import "../styles/pokemon.css" // Import the CSS file

export default function Pokemon({ pokemon }) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  console.log("Pokemon inside poke component: ", pokemon)
  return (
    <div className="pokemon-container">
      <img src={url} alt={pokemon.name} />
      <Link to={`/pokeinfo`} state={pokemon}>
        <button>{pokemon.name}</button>
      </Link>
    </div>
  )
}
