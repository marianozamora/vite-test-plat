/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { useEffect } from "react";

const ListPokemons = ({ data }) => {

	return (
		<ul className="list__pokemons">
			{data.map((pokemon, index) => (
				<li key={index}>{pokemon.name}</li>
			))}
		</ul>
	);
};

export default ListPokemons;
