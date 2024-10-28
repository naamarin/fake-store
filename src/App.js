import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from "react-router-dom"
import Home from './components/Home';
import Electronics from './components/Electronics';
import Jewlery from './components/Jewlery';

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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  
}

export default App;
