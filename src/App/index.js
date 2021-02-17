import { useEffect, useReducer } from 'react';
import CardContainer from '../CardContainer';
import Input from '../Input';
import './App.css';

const intialState = { characters: [], search: '' };

function appReducer(state, action) {
	const { payload, type } = action;

	switch (type) {
		case 'LOAD_CHARACTERS':
			return { ...state, characters: payload };
		case 'SEARCH_CHARACTERS':
			return { ...state, search: payload };
		default:
			return state;
	}
}

function App() {
	const [ { characters, search }, dispatch ] = useReducer(
		appReducer,
		intialState
	);

	useEffect(
		() => {
			async function getCharacters() {
				const response = await fetch(
					`https://swapi.dev/api/people?search=${search}`
				);
				const data = await response.json();

				dispatch({ type: 'LOAD_CHARACTERS', payload: data.results });
			}
			getCharacters();
		},
		[ search ]
	);

	return (
		<div className='app'>
			<div className='header'>
				<h1>Star Wars</h1>
			</div>
			<Input
				onChange={(event) =>
					dispatch({
						type: 'SEARCH_CHARACTERS',
						payload: event.target.value,
					})}
				search={search}
			/>
			<CardContainer data={characters} />
		</div>
	);
}

export default App;
