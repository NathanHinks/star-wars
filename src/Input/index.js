import './Input.css';
function Input({ onChange, search }) {
	return (
		<div className='input-container'>
			<input
				type='text'
				onChange={onChange}
				value={search}
				placeholder='Search for a character'
			/>
		</div>
	);
}

export default Input;
