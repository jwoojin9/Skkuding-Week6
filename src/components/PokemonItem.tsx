import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function PokemonItem({index}:any){
    const [pokemon, setPokemon] = useState<any>();
    useEffect(() => {
        (async function run() {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`);
            const data2 = await data.json();
            setPokemon(data2)
        })();
    }, [])
    let typeText:string = "";
    pokemon?.types.forEach((value:any, index:number) => {
        if (index == 0)
            typeText = value.type.name;
        else
            typeText += `, ${value.type.name}`;
    })
    return (
        <Link to={`/pokemon/${index + 1}`} className="card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} alt={pokemon?.name}/>
            <div className="info-wrapper">
                <h2>{pokemon?.name}</h2>
                <p>Height: {pokemon?.height}</p>
                <p>Weight: {pokemon?.weight}</p>
                <p>Types: {typeText}</p>
            </div>
        </Link>
    );
}