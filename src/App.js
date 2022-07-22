import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Kishore from './Kishore';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Shiva" element={<Kishore/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
