import React from "react";
export default function PokeInfo(props) {
  const id = props.location.state.id;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  console.log("props from pokeinfo: ", props);
  return (
    <>
      <div >
        <h1> {props.location.state.name}</h1>
        <img  src={url} alt="" />
      </div>
    </>
  );
}
