import './App.css';
import NavBar from './components/Navbar';
import CalendarActivities from './pages/CalendarActivities.js';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pomodoro from './pages/Pomodoro.js';
import DefaultMessage from './components/DefaultMessage.js';
import Footer from './components/Footer.js';
import SearchResults from './components/SearchResults.js';

function App() {
  return (
    <Router>
       <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/focusify" element={<DefaultMessage/> }/>
        <Route path="/focusify/home" element={<Home />} />
        <Route path="/focusify/calendar" element={<CalendarActivities />} />
        <Route path="/focusify/pomodoro" element={<Pomodoro />} />
        <Route path="/focusify/search" element={<SearchResults />} />
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}


export default App;
