import { useState, useEffect } from 'react';
import './App.css';
import Input from "../Input";
import CardContainer from "../CardContainer";


function App() {
	const [ characters, setCharacters ] = useState([]);
  const [search, setSearch] = useState('');
  
  function onChange(e) {
    setSearch(e.target.value);
  }

	useEffect(() => {
		async function getCharacters() {
			const response = await fetch(`https://swapi.dev/api/people?search=${search}`);
			const data = await response.json();

			setCharacters(data.results);
		}
		getCharacters();
  }, [search]);
  
	return (
		<div className='app'>
			<div className='header'>
				<h1>Star Wars</h1>
      </div>
      <Input onChange={onChange}/>
      <CardContainer data={characters}/>
		</div>
	);
}

export default App;
