import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchAndMovies.css';

const SearchAndMovies = ({ setSelectedMovies, selectedMovies }) => {
  const [searchMyData, setSearchMyData] = useState('');
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      let url =
        searchMyData.trim() === ''
          ? 'https://www.omdbapi.com/?s=Batman&apikey=cdee03b4'
          : `https://www.omdbapi.com/?s=${searchMyData}&apikey=cdee03b4`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setResultData(data.Search || []);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData();
  }, [searchMyData]);

  const addToSelectedMovies = (movieTitle) => {
    setSelectedMovies((prevMovies) =>
      prevMovies.includes(movieTitle) ? prevMovies : [...prevMovies, movieTitle]
    );
  };

  const searchData = (e) => {
    setSearchMyData(e.target.value.trim().toLowerCase());
  };

  return (
    <div className="searchAndMovies">
      <br />
      <input className="search" type="text" placeholder="search" onChange={searchData} />
      <br />
      <br />
      {resultData &&
        resultData
          .filter((e) => e.Title.toLowerCase().includes(searchMyData))
          .map((a, b) => (
            <div className="movies" key={b}>
              <div className="poster">
                <img src={a.Poster} alt="" />
              </div>
              <div className="posterDetails">
                <h3 className="posterName">{a.Title}</h3>
                <button className="posterButton" onClick={() => addToSelectedMovies(a.Title)}>
                  Add to list
                </button>
                <br />
                <Link to={`/goToImdb/${a.imdbID}`}>
                  <button className="posterButton">Details</button>
                </Link>
              </div>
            </div>
          ))}
    </div>
  );
};

export default SearchAndMovies;
