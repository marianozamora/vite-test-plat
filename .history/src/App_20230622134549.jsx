import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import List from './components/List'
// import Filter from './components/Filter'

function App() {

  const [pokemons, setPokemons] = useState([]);

  function filterByText(e) {
    console.log(e.target.value);
    const value = e.target.value;
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.includes(value));
    if (value === '') {
      console.log('empty');
    }
    console.log(pokemons);
    setPokemons(filteredPokemons);
  }

	useEffect(() => {
		async function getPokemons() {
			const data = await fetch(import.meta.env.VITE_API_URL).then((response) => response.json());
			setPokemons(data.results);
		}
		getPokemons();
	}, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World</h1>

      <input
        onChange={(e)=> filterByText(e)}
      />
      <List data={pokemons} />
    </>
  )
}

export default App
