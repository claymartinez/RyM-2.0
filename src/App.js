import './App.css';
import Cards from './components/Cards/Cards';
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
