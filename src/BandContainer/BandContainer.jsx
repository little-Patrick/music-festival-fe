import './BandContainer.css';
import { useState, useEffect } from 'react';
import { getBands } from '../../apiCall.js'
import BandCard from '../BandCard/BandCard.jsx'

const BandContainer = () => {
	const [bands, setBands] = useState([])
	const [filteredBands, setFilteredBands] = useState([])
	const [searchTerm, setSearchTerm] = useState('')
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getBands()
			.then(Bands => {
				setBands(Bands.data);
				setFilteredBands(Bands.data);
			})
			.catch((e) => {
				setError(e.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		const results = bands.filter(band =>
			band.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredBands(results);
	}, [searchTerm, bands]);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	if (loading) return <p className='loading'>Loading...</p>;
	if (error) return <p className='error'>{error}</p>;

	const bandCards = filteredBands.map(band => {
		return (
			<BandCard
				key={band.id}
				id={band.id}
				name={band.attributes.name}
				stage={band.attributes.location}
				day={band.attributes.date}
				start={band.attributes.start_time}
				end={band.attributes.end_time}
			/>
		);
	});

	return (
		<>
			<div className="search-container">
				<input
					type="text"
					placeholder="Search bands by name..."
					value={searchTerm}
					onChange={handleSearch}
					className="search-input"
				/>
			</div>
			<div className='container'>
				{bandCards.length > 0 ? 
					bandCards : 
					<p className="no-results">No bands match your search</p>
				}
			</div>
		</>
	)
}

export default BandContainer;
