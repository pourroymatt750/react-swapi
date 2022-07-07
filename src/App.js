import './App.css'
import { Routes, Route } from 'react-router-dom'
import StarshipPage from './pages/StarshipPage/StarshipPage';
import NavBar from './components/NavBar/NavBar';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<StarshipPage />} />
        <Route path="/starship" element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
