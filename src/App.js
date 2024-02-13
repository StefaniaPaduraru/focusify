import './App.css';
import NavBar from './components/Navbar';
import CalendarActivities from './pages/CalendarActivities.js';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pomorodo from './pages/Pomorodo.js';
import DefaultMessage from './components/DefaultMessage.js';
import Footer from './components/Footer.js';
import SearchResults from './components/SearchResults.js';

function App() {
  return (
    <Router>
       <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<DefaultMessage/> }/>
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<CalendarActivities />} />
        <Route path="/pomorodo" element={<Pomorodo />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}


export default App;
