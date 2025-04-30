import { Route, Routes,  NavLink } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import ScheduleContainer from '../ScheduleContainer/ScheduleContainer.jsx'
import './App.css'

function App() {
	return (
    <div className="App">
      <header>
        <h1>Festival</h1>
      </header>
				<nav>
					<NavLink to={`/`} className="nav">Home</NavLink>
					<NavLink to={`/schedules`} className="nav">Schedules</NavLink>
				</nav>
      <section className="main">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedules' element={<ScheduleContainer />} />
        </Routes>
      </section>
    </div>
  );

}

export default App

