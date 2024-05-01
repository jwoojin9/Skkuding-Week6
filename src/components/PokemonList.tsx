import PokemonItem from "./PokemonItem";
import { data } from "../data";

export default function PokemonList() {
    return (
        <div id="card-wrapper">
            {data.map((pokemon:any, index) => (
                <PokemonItem key={index} pokemon={pokemon} index={index}/>
            ))}
        </div>
    );
}