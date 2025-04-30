const getSchedules = async () => {
  const url = `http://localhost:3000/api/v1/schedules`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Unable to find schedules.');
  }

  const schedules = await response.json();
  return schedules;
};

export default getSchedules;
