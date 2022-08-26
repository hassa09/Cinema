import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Player from "./Components/MainCarousel/Player";
import Navbar from './Components/Navbar/Navbar';
import { LandingPage } from "./LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={< LandingPage />} />
          

        </Routes>


      </Router>
     
    </div>
  );
}

export default App;
