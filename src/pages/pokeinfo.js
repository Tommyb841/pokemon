import React from "react";
import "../styles/pokeInfo.css";
export default function PokeInfo(props) {
  const id = props.location.state.id;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  console.log("props from pokeinfo: ", props);
  return (
    <>
      <div className="container">
        <h1> {props.location.state.name}</h1>
        <img className="img-bottom" src={url} alt="" />
      </div>
    </>
  );
}
