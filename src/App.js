import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDetails from './pages/RestaurantDetails';

function App() {
  return (
    <div className="w-full">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
