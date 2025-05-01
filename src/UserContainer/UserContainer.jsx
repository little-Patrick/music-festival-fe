import './UserContainer.css';
import { useState, useEffect } from 'react';
import { getUsers } from '../../apiCall.js'
import UserCard from '../UserCard/UserCard.jsx'

const UserContainer = () => {
	const [users, setUsers] = useState([])
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		getUsers()
			.then(Users => {
				setUsers(Users.data);
			})
			.catch((e) => {
				setError(e.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) return <p className='loading' >Loading...</p>;
	if (error) return <p className='error' >{error}</p>;

	const userCards = users.map(user => {
		return (
			<UserCard
				key={user.id}
				id={user.id}
				firstName={user.attributes.first_name}
				lastName={user.attributes.last_name}
			/>
		);
	});

	return (
		<div className='container'>
			{userCards}
		</div>
	)

}

export default UserContainer;
