import React, { useState } from "react";

const ListPokemons = () => {
    const [pokemons, setPokemons] = useState([]);

	return (
		<ul>
			{pokemons.map((pokemon, index) => (
				<li key={index}>{pokemon.name}</li>
			))}
		</ul>
	);
};

export ListPokemons;
