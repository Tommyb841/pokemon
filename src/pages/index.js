import React, { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import axios from "axios";
const pageUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;
export default function Index() {
  const [pokemonList, setPokemonList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(pageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setPokemonList(
          res.data.results.map((p) => {
            console.log("current pokemon: ", p);
            return p.name;
          })
        );
      });
    return () => cancel();
  }, []);
  if (loading) return "Loading... ";

  return <PokemonList pokemonList={pokemonList} />;
}
