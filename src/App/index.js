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

	useEffect(() => getCharacters(search), [ search ]);

	async function getCharacters(search) {
		console.log("fetch started!")
		const response = await fetch(process.env.REACT_APP_API_URL + `${search}`
		);
		const data = await response.json();
		console.log(data)
		dispatch({ type: 'LOAD_CHARACTERS', payload: data.results });
	}

	return (
		<div className='app' data-testid='app'>
			<div className='header' data-testid='app-header'>
				<h1>Star Wars</h1>
			</div>
			<Input
				data-testid='input'
				onChange={(event) =>
					dispatch({
						type    : 'SEARCH_CHARACTERS',
						payload : event.target.value,
					})}
				search={search}
			/>
			<CardContainer data-testid='card-container' data={characters} />
			<footer data-testid='footer'>
				Made using: <a
					href='https://swapi.dev'
					target="_blank"
					rel="noreferrer noopener"
					className='api-link'
					data-testid='api-link'
				>
					https://swapi.dev
				</a>
			</footer>
		</div>
	);
}

export { App, appReducer };
