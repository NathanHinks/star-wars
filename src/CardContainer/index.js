import Card from '../Card';
import "./CardContainer.css";

function CardContainer({ data }) {
	return <div className='card-container'>{data.map((character) => <Card characterData={character} />)}</div>;
}

export default CardContainer;
