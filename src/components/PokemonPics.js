import React, { useEffect } from "react";

export default function PokemonPics({ id }) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return <img style={{ width: "50px", height: "50px" }} src={url} alt="" />;
}
