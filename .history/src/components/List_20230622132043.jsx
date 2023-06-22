
const ListPokemons = ({ pokemons }) => {

    return (
        <ul>    
            {pokemons.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
            ))}
    </ul>
)
}