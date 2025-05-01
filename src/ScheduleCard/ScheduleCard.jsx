import './ScheduleCard.css';
import { Link } from 'react-router-dom'

const ScheduleCard = ({ id, title }) => {

	return (
		<div className={`card`}>
			<Link to={`/schedules/${id}`} className='details-button'>
				<h3>{title}</h3>
			</Link>
		</div>
	)
}

export default ScheduleCard;
