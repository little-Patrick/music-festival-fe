// GET All Schedules
export const getSchedules = async () => {
  const url = `http://localhost:3000/api/v1/schedules`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Unable to find schedules.');
  }

  const schedules = await response.json();
  return schedules;
};

// GET Schedule by ID
export const getScheduleId = async (id) => {
  const url = `http://localhost:3000/api/v1/schedules/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to find schedule's details");
  }

  const schedule = await response.json();
  return schedule;
};

// GET All Users
export const getUsers = async () => {
  const url = `http://localhost:3000/api/v1/users`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Unable to find users.');
  }

  const users = await response.json();
  return users;
};

// GET User by ID
export const getUserId = async (id) => {
  const url = `http://localhost:3000/api/v1/users/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to find user's details");
  }

  const user = await response.json();
  return user;
};

// GET All Bands
export const getBands = async () => {
  const url = `http://localhost:3000/api/v1/bands`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Unable to find bands.');
  }

  const bands = await response.json();
  return bands;
};

// GET Band by ID
export const getBandId = async (id) => {
  const url = `http://localhost:3000/api/v1/bands/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to find band's details");
  }

  const band = await response.json();
  return band;
};


// GET UserSchedules by UserID
export const getUserSchedule = async (id) => {
  const url = `http://localhost:3000/api/v1/users/${id}/schedules`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to find user's schedule details");
  }

  const schedule = await response.json();
  return schedule;
};

// Delete Band off of schedule by Band ID
export const deleteBand = async (schedule_id, band_id) => {
  const url = `http://localhost:3000/api/v1/schedules/${schedule_id}/bands/${band_id}`;

	const response = await fetch(url, { method: 'DELETE' });

  if (!response.ok) {
    throw new Error("Unable to find user's schedule details");
  }

  const deleted = await response.json();
  return deleted;
};
