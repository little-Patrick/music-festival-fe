import './BandDetails.css'
import { getBandId } from '../../apiCall.js'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const BandDetails = () => {
	const bandId = useParams().id;
	const [band, setBand] = useState([])
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		getBandId(bandId)
			.then(bandBand => {
				setBand(bandBand.data);
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




	return (
		<div className={`details`}>
			<h1> Details </h1>
			<h3>{band.attributes.name}</h3>
			<h3>{band.attributes.location}</h3>
			<h3>{band.attributes.date}</h3>
			<h3>{band.attributes.start_time}</h3>
			<h3>{band.attributes.end_time}</h3>
		</div>
	)
}

export default BandDetails;

