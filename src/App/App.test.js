import { render } from '@testing-library/react';
import { App, appReducer } from './';

/*
REDUCER TESTS
*/
test('When given a state containing "characters", an action with type of "LOAD_CHARACTERS" and a payload, appReduce should return state with "characters" updated to be equal to payload', () => {
	const testArguments = [
		{ characters: [ 'Jenny' ], search: '' },
		{ type: 'LOAD_CHARACTERS', payload: [ 'Josh Smith', 'Colin Smith' ] },
	];

	const expected = {
		characters : [ 'Josh Smith', 'Colin Smith' ],
		search     : '',
	};
	const actual = appReducer(...testArguments);

	expect(actual).toEqual(expected);
});

test('When given a state containing "search", an action with type of "SEARCH_CHARACTERS" and a payload, appReduce should return state with "search" updated to be equal to payload', () => {
	const testArguments = [
		{ characters: [ 'Jenny' ], search: '' },
		{ type: 'SEARCH_CHARACTERS', payload: 'Darth' },
	];

	const expected = {
		characters : [ 'Jenny' ],
		search     : 'Darth',
	};
	const actual = appReducer(...testArguments);

	expect(actual).toEqual(expected);
});

test('When given a state, an action not in switch statement, appReduce should return the state unmodified', () => {
	const testArguments = [
		{ characters: [ 'Jenny' ], search: '' },
		{ type: 'WILL_THIS_WORD', payload: 'Hmmm' },
	];

	const expected = {
		characters : [ 'Jenny' ],
		search     : '',
	};
	const actual = appReducer(...testArguments);

	expect(actual).toEqual(expected);
});

/*
APP BEHAVIOUR TESTS --- need doing:
-getCharacters()
*/

/*
APP RENDER TESTS
*/

test('App renders div with class of app', () => {
	const { getByTestId } = render(<App />);

	const actual = getByTestId('app');

	expect(actual).toBeInTheDocument();
	expect(actual).toHaveClass('app');
});

test('App renders a header div containing a h1 with text "Star Wars"', () => {
	const { getByText, getByTestId } = render(<App />);

	const expectedText = 'Star Wars';

	const actualHeader = getByTestId('app-header');
	const actualH1 = getByText(expectedText);

	expect(actualHeader).toContainElement(actualH1);
	expect(actualH1).toBeInTheDocument();
});
