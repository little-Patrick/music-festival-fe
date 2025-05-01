import './BandCard.css';
import { Link } from 'react-router-dom'

const BandCard = ({ id, name, stage, day, start, end, onDelete }) => {
	return (
		<div className="card">
			<Link to={`/bands/${id}`} className='details-button'>
				<h3>{name}</h3>
				<h4>{stage}</h4>
				<h4>{day}</h4>
				<h4>{start}</h4>
				<h4>{end}</h4>
			</Link>
			{onDelete && (
				<button className="delete-button" onClick={() => onDelete(id)}>
					🗑️
				</button>
			)}
		</div>
	)
}

export default BandCard;

