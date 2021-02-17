import { render } from '@testing-library/react';
import CardContainer from './';

const testProps = {
	data : [ { name: 'Jim' }, { name: 'Bob' }, { name: 'Fred' } ],
};

test('Given an array of character data, CardContainer will render a div with a class name of "card-container"', () => {
	const { getByTestId } = render(<CardContainer {...testProps} />);

	const actual = getByTestId('card-container');

	expect(actual).toBeInTheDocument();
	expect(actual).toHaveClass('card-container');
});

test('Given an array of character data, CardContainer should map over the array and return a Card for each item in the array', () => {
	const { getAllByTestId } = render(<CardContainer {...testProps} />);

	const actual = getAllByTestId('card');
	const expected = testProps.data.length;

	expect(actual).toHaveLength(expected);
});
