import './UserDetails.css'
import { getUserId, getUserSchedule } from '../../apiCall.js'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ScheduleCard from '../ScheduleCard/ScheduleCard.jsx';

const UserDetails = () => {
	const userId = useParams().id;
	const [user, setUser] = useState([])
	const [schedules, setSchedules] = useState([])
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		getUserId(userId)
			.then(userUser => {
				setUser(userUser.data);
			})
			.catch((e) => {
				setError(e.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		getUserSchedule(userId)
			.then(scheduleData => {
				setSchedules(scheduleData.data);
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


	const scheduleCards = schedules.map(schedule => {
		return (
			<ScheduleCard
				key={schedule.id}
				id={schedule.id}
				title={schedule.attributes.title}
				date={schedule.attributes.date}
				user={schedule.attributes.user}
			/>
		);
	});


	return (
		<div className={`details`}>
			<h1> User </h1>
			<h2>{user.attributes.first_name} {user.attributes.last_name}</h2>
			<h3>Email: {user.attributes.email}</h3>
		<h2> Schedules </h2>
		<div className='container'>
			{scheduleCards}
		</div>
		</div>
	)
}

export default UserDetails;
