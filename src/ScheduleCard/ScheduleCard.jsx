import './ScheduleCard.css';

const ScheduleCard = ({ title }) => {

  return (
    <div className={`card`}>
      <h3>{title}</h3>
    </div>
  )
}

export default ScheduleCard;
