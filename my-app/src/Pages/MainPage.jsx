import React, { useState } from 'react';
import Header from '../Components/Header';
import SearchAndMovies from '../Components/SearchAndMovies';
import List from '../Components/List';
const MainPage = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const removeMovie = (index) => {
    setSelectedMovies((prevMovies) => {
      const newMovies = [...prevMovies];
      newMovies.splice(index, 1);
      return newMovies;
    });
  };

  return (
    <div>
      <Header />
      <div className='main'>
        <SearchAndMovies setSelectedMovies={setSelectedMovies} selectedMovies={selectedMovies}/>
        <List selectedMovies={selectedMovies} removeMovie={removeMovie} />
      </div>
    </div>
  );
};

export default MainPage;
