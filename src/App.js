import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Kishore from './Kishore';
import SukumarBlog from './components/sukumarBlog';
import Body from './components/body';

import BlogPrem from './component/blogPrem';
import HarshitApp from './components/HarshitApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/krish" element={<Kishore />} />
        <Route path='/sukumar' element={<SukumarBlog />} />
        <Route path="/naidu" element={<Body />} />
        <Route path="/prem-blog" element={<BlogPrem />} />
        <Route path="/harshit" element={<HarshitApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
