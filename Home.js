// Home.js
import React from 'react';
import NavBar from './NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Recipe Finder</h1>
        <p>Welcome to the Recipe Finder app! Find and explore delicious recipes.</p>
      </div>
    </div>
  );
};

export default Home;
