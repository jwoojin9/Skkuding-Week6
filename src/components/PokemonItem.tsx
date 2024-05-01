import { Link } from "react-router-dom";
import { Pokemon } from "../data";

interface Item {
    pokemon:Pokemon
    index:number
}

export default function PokemonItem({pokemon, index}:Item){
    return (
        <Link to={`/pokemon/${index + 1}`} className="card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} alt={pokemon.name}/>
            <div className="info-wrapper">
                <h2>{pokemon.name}</h2>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Types: {pokemon.types.join(", ")}</p>
            </div>
        </Link>
    )
}