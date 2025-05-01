import './UserCard.css';
import { Link } from 'react-router-dom'

const UserCard = ({ id, firstName, lastName }) => {

	return (
		<div className={`card`}>
			<Link to={`/users/${id}`} className='details-button'>
				<h3>{firstName} {lastName}</h3>
			</Link>
		</div>
	)
}

export default UserCard;
