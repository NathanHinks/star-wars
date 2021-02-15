import "./Card.css";

function Card({ characterData }) {
	const { name, hair_color: hair, eye_color: eyeColor, gender, height, birth_year: birthYear } = characterData;
	return (
		<div className='card'>
            <h2>{name}</h2>
            <ul className="stats">
                <li><span>Birth Year:</span> {birthYear}</li>
                <li><span>Gender:</span> {gender}</li>
                <li><span>Height:</span> {height}cm</li>
                <li><span>Hair Color:</span> {hair}</li>
                <li><span>Eye Color:</span> {eyeColor}</li>
            </ul>
		</div>
	);
}

export default Card;
