import { fireEvent, render } from '@testing-library/react';
import Input from './';

const testProps = {
	onChange : jest.fn(),
	search   : 'my search',
};

test('Input will render a div with a class of "input-container" on the page', () => {
	const { getByTestId } = render(<Input {...testProps} />);

	const actual = getByTestId('input-container');

	expect(actual).toBeInTheDocument();
	expect(actual).toHaveClass('input-container');
});

test('Input will render an text input, with a placeholder "Search for a character", within its input-container', () => {
	const { getByTestId, getByPlaceholderText } = render(
		<Input {...testProps} />
	);

	const actual = getByTestId('input');
	const actualByPlaceholder = getByPlaceholderText('Search for a character');

	expect(actual).toBeInTheDocument();
	expect(actual).toHaveAttribute('type', 'text');
	expect(actualByPlaceholder).toBeInTheDocument();
});

test('When given a search prop, Input will render an input whose value will be equal to this', () => {
	const { getByTestId } = render(<Input {...testProps} />);

	const actual = getByTestId('input');

	expect(actual).toHaveValue(testProps.search);
});

test('When given a onChange function prop, Input will render an input who fires this function onchange', () => {
	const { getByTestId } = render(<Input {...testProps} />);

	const actual = getByTestId('input');

	fireEvent.change(actual, { target: { value: 'test' } });

	expect(testProps.onChange).toHaveBeenCalled();
});
