import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import ScheduleContainer from '../ScheduleContainer/ScheduleContainer.jsx'
import ScheduleDetails from '../ScheduleDetails/ScheduleDetails.jsx'
import UserContainer from '../UserContainer/UserContainer.jsx'
import UserDetails from '../UserDetails/UserDetails.jsx'
import BandContainer from '../BandContainer/BandContainer.jsx'
import BandDetails from '../BandDetails/BandDetails.jsx'

function App() {
	return (
		<div className="App">
			<header>
				<h1>Festival</h1>
			</header>
			<nav>
				<NavLink to={`/`} className="nav">Home</NavLink>
				<NavLink to={`/schedules`} className="nav">Schedules</NavLink>
				<NavLink to={`/users`} className="nav">Users</NavLink>
				<NavLink to={`/bands`} className="nav">Bands</NavLink>
			</nav>
			<section className="main">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/schedules' element={<ScheduleContainer />} />
					<Route path='/users' element={<UserContainer />} />
					<Route path='/bands' element={<BandContainer />} />
					<Route path="/schedules/:id" element={<ScheduleDetails />} />
					<Route path="/users/:id" element={<UserDetails />} />
					<Route path="/bands/:id" element={<BandDetails />} />
				</Routes>
			</section>
		</div>
	);

}

export default App



