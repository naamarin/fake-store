import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from "react-router-dom"
import Home from './components/Home';
import Electronics from './components/Electronics/Electronics';
import Jewlery from './components/Jewleries/Jewlery';
import Books from './components/Books/Books'

function App() {
  return (
    <><header>
      <Link to="/jewlery">jewlery</Link>
      
      <Link to="/electronics">electronics</Link>
      <Link to="/books">Books</Link>
    </header>
    <footer>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/jewlery" element={<Jewlery/>}/>
          <Route path="/electronics" element={<Electronics/>}/>
          <Route path="/books" element={<Books/>}/>
        </Routes>
    </footer></>
  );
  
}

export default App;
