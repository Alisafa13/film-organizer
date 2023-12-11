import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./GoToImdb.css"
const GoToImdb = () => {
  const { imdbID } = useParams();
  const [selectedMoviesDetails, setSelectedMoviesDetails] = useState([]);

   const openImdbDetails = (imdbID) => {
    window.open(`https://www.imdb.com/title/${imdbID}`, '_blank');
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=cdee03b4`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectedMoviesDetails([data]);
      });
  }, [imdbID]);

  return (
    <div className='imdbAll'>
      {selectedMoviesDetails.map((movie, index) => (
        <div  className="imdbMain" key={index}>
          <div><h2 className='movieTitle'>{movie.Title}</h2></div>
          <div className='containerPoster'><img className="imdbPoster" src={movie.Poster} alt="" /></div>
          <div className='containerButton'><button 
          className='imdbButton'
          onClick={() => openImdbDetails(movie.imdbID)}> Go to trailer</button></div>
        </div>
      ))}
    </div>
  );
};

export default GoToImdb;