import './Card.css';

function Card({ characterData }) {
	const {
		name,
		hair_color: hair,
		eye_color: eyeColor,
		gender,
		height,
		birth_year: birthYear,
	} = characterData;

	return (
		<div className='card' data-testid='card'>
			<h2 data-testid='h2'>{name}</h2>
			<ul className='stats' data-testid='ul'>
				<li data-testid="li">
					<span>Birth Year:</span> {birthYear}
				</li>
				<li data-testid="li">
					<span>Gender:</span> {gender}
				</li>
				<li data-testid="li">
					<span>Height:</span> {height}cm
				</li>
				<li data-testid="li">
					<span>Hair Color:</span> {hair}
				</li>
				<li data-testid="li">
					<span>Eye Color:</span> {eyeColor}
				</li>
			</ul>
		</div>
	);
}

export default Card;
