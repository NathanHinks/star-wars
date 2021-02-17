import Card from '../Card';
import './CardContainer.css';

function CardContainer({ data }) {
	return (
		<div className='card-container' data-testid='card-container'>
			{data.map((character, index) => <Card characterData={character} key={index} />)}
		</div>
	);
}

export default CardContainer;
