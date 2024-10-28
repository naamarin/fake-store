import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from "react-router-dom"
import Home from './components/Home';
import Electronics from './components/Electronics/Electronics';
import Jewlery from './components/Jewleries/Jewlery';

function App() {
  return (
    <><header>
      <Link to="/jewlery">jewlery</Link>
      
      <Link to="/electronics">electronics</Link>
    </header>
    <footer>
        <Routes>
          <Route path="/jewlery" element={<Jewlery/>}/>
          <Route path="/electronics" element={<Electronics/>}/>
        </Routes>
    </footer></>
  );
  
}

export default App;
