import { useParams } from "react-router-dom";
import styles from "./PokemonDetail.module.css"
import { gql, useQuery } from '@apollo/client';

const GET_POKEMON = gql`
    query PokeAPIquery($id: Int!) {
        pokemon_v2_pokemon(offset: $id, limit:1) {
            name
            id
            base_experience
            height
            weight
            pokemon_v2_pokemonabilities {
                pokemon_v2_ability {
                    name
                }
            }
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                }
            }
            pokemon_v2_pokemonstats {
                base_stat
            }
        }
    }
`;

export default function PokemonDetail(){
    const id = Number(useParams().id);
    const { loading, error, data } = useQuery(GET_POKEMON, {variables: {id: Number(id-1)}});

    if (loading) return <div/>;
    if (error) return <div/>;

    const pokemon = data.pokemon_v2_pokemon[0];
    
    let typeText:string = "";
    pokemon.pokemon_v2_pokemontypes.forEach((value:any, index:number) => {
        if (index == 0)
            typeText = value.pokemon_v2_type.name;
        else
            typeText += `, ${value.pokemon_v2_type.name}`;
    })

    let abilityText:string = "";
    pokemon.pokemon_v2_pokemonabilities.forEach((value:any, index:number) => {
        if (index == 0)
            abilityText = value.pokemon_v2_ability.name;
        else
            abilityText += `, ${value.pokemon_v2_ability.name}`;
    })
    const statnames = ["Hp", "Attack", "Defense", "Special-Attack", "Special-Defense", "Speed"];
    return (
        <div>
            <div className={styles["img"]}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemon.name}/>
            </div>
            <h2>{pokemon.name}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{pokemon.name}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{pokemon.height}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{pokemon.weight}</td>
                    </tr>
                    <tr>
                        <td>Types</td>
                        <td>{typeText}</td>
                    </tr>
                    <tr>
                        <td>Base-Experience</td>
                        <td>{pokemon.base_experience}</td>
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        <td>{abilityText}</td>
                    </tr>
                    {statnames.map((name, index) => (
                        <tr>
                            <td>{name}</td>
                            <td>{pokemon.pokemon_v2_pokemonstats[index].base_stat}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}