import PokemonItem from "./PokemonItem";

export default function PokemonList() {
    return (
        <div id="card-wrapper">
            {Array(50).fill(0).map((obj, index) => (
                <PokemonItem key={index} index={index}/>
            ))}
        </div>
    );
}