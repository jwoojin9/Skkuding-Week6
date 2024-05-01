import { useParams } from "react-router-dom";
import { data } from "../data";
import styles from "./PokemonDetail.module.css"

export default function PokemonDetail(){
    const id = Number(useParams().id);
    const pokemon = data[id - 1];
    return (
        <div>
            <div className={styles["img"]}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemon.name}/>
            </div>
            <h2>{pokemon.name}</h2>
            <table>
                <tbody>
                {Object.entries(pokemon).map(([key, value]) => {
                    return (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}