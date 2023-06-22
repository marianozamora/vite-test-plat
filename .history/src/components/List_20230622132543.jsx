import { useState } from "react";
import { useEffect } from "react";

const ListPokemons = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		async function getPokemons() {
			const data = await fetch(import.meta.env.VITE_API_URL).then((response) => response.json());
			setPokemons(data.results);
		}
		getPokemons();
	}, []);

	return (
		<ul>
			{pokemons.map((pokemon, index) => (
				<li key={index}>{pokemon.name}</li>
			))}
		</ul>
	);
};

export default ListPokemons;
