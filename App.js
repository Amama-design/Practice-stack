// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import Recipes from './Recipes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  );
};

export default App;
