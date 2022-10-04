import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import './App.css';
import {BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import MovieDetail from './Components/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />
      <Routes>
        <Route  path="/" element={<MovieList />} />
        <Route  path="/:id" element={<MovieDetail />} />
      </Routes>

      </Router>
     
      </div>
  );
}

export default App;
