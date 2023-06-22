// import { useState } from "react";
// import { useEffect } from "react";

const ListPokemons = ({pokemons}) => {

	return (
		<ul>
			{pokemons.map((pokemon, index) => (
				<li key={index}>{pokemon.name}</li>
			))}
		</ul>
	);
};

export default ListPokemons;
