import './ScheduleContainer.css';
import { useState, useEffect } from 'react';
import { getSchedules } from '../../apiCall.js'
import ScheduleCard from '../ScheduleCard/ScheduleCard.jsx'

const ScheduleContainer = () => {
	const [schedules, setSchedules] = useState([])
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		getSchedules()
			.then(Schedules => {
				setSchedules(Schedules.data);
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
		<div className='container'>
			{scheduleCards}
		</div>
	)

}

export default ScheduleContainer;
