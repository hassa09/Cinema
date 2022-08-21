import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import MainCarousel from './Components/MainCarousel/MCarousel';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <MainCarousel />} />

        </Routes>


      </Router>
     
    </div>
  );
}

export default App;
