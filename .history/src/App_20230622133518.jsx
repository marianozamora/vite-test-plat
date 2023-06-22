import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import List from './components/List'
import Filter from './components/Filter'

function App() {

  const [pokemons, setPokemons] = useState([]);

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
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <Filter />
      <List data={pokemons} />
    </>
  )
}

export default App
