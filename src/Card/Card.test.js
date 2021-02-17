import { render } from '@testing-library/react';
import Card from './';

const testProps = {
	characterData : {
		name       : 'Luke',
		hair_color : 'Brown',
		eye_color  : 'Blue',
		gender     : 'male',
		height     : 175,
		birth_year : 1745,
	},
};

test('Given characterData, an object with character properties, Card will render a div with a class of card', () => {
	const { getByTestId } = render(<Card {...testProps} />);

	const actual = getByTestId('card');

	expect(actual).toBeInTheDocument();
	expect(actual).toHaveClass('card');
});

test('Given characterData, an object with character properties, Card will render a h2 containing the name property', () => {
	const { getByTestId } = render(<Card {...testProps} />);
	const { name } = testProps.characterData;
	const actual = getByTestId('h2');

	expect(actual).toBeInTheDocument();
	expect(actual).toHaveTextContent(name);
});

test('Given characterData, an object with character properites, Card will render a ul, with lis containing the character values', () => {
	const { getByTestId, getAllByTestId } = render(<Card {...testProps} />);

	const actualUl = getByTestId('ul');
	const actualLis = getAllByTestId('li');

	expect(actualUl).toBeInTheDocument();
	expect(actualLis).toHaveLength(5);

	expect(actualLis[0]).toHaveTextContent('1745');
	expect(actualLis[3]).toHaveTextContent('Brown');
});
