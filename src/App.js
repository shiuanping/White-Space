import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Information from './views/Information/Information';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/information" element={<Information/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
