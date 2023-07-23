import React,{useState, useEffect} from 'react'
import axios from 'axios'
const url = `https:/pokeapi.co/api/v2/pokemon`

export default function Pokedex() {
  const [currentPage, setCurrentPage] = useState(url);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(currentPage).then(res=>{
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      setPokemon(res.data.results.map(p => p.name));
      }
    },[currentPage])
  })
  return (
    <div>{pokemon}</div>
  )
}
  