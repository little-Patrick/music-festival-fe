import './ScheduleDetails.css';
import { getScheduleId, deleteBand } from '../../apiCall.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from '../UserCard/UserCard.jsx';
import BandCard from '../BandCard/BandCard.jsx';

const ScheduleDetails = () => {
  const scheduleId = useParams().id;
  const [schedule, setSchedule] = useState(null);
  const [bands, setBands] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getScheduleId(scheduleId)
      .then((userSchedule) => {
        setSchedule(userSchedule.data);
        setBands(userSchedule.data.attributes.bands);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [scheduleId]);

  const handleDeleteBand = async (bandId) => {
    try {
      await deleteBand(scheduleId, bandId);
      setBands((prevBands) => prevBands.filter((band) => band.id !== bandId));
    } catch (e) {
      setError('Failed to delete band.');
    }
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!schedule) return null;

  const bandCards = bands.map((band) => (
    <BandCard
      key={band.id}
      id={band.id}
      name={band.name}
      stage={band.location}
      day={band.date}
      start={band.start_time}
      end={band.end_time}
      onDelete={handleDeleteBand}
    />
  ));

  const userCards = schedule.attributes.attendees.map((user) => (
    <UserCard
      key={user.id}
      id={user.id}
      firstName={user.first_name}
      lastName={user.last_name}
    />
  ));

  return (
    <div className="details">
      <h1>Details</h1>
      <h2>{schedule.attributes.title}</h2>
      <h3>{schedule.attributes.date}</h3>
      <div className="container">{bandCards}</div>
      <div className="container">{userCards}</div>
    </div>
  );
};

export default ScheduleDetails;

