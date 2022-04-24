import React from 'react';
import { Navbar, BlogDetails } from './components';
import Home from './pages/Home';
import Create from './pages/Create';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/blog/:id' element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
