import React, { useState } from 'react';
import Navbar from '../components/home/header/Navbar';
import Card from '../components/home/cards/Card';

const Home = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  return (
    <div>
      <Navbar setSearchedMovies={setSearchedMovies} />
      <Card searchedMovies={searchedMovies} />
    </div>
  );
}

export default Home;