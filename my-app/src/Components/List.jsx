import React, { useState } from 'react';
import './List.css';
import { Link } from 'react-router-dom';

const List = ({ selectedMovies, removeMovie }) => {
  const [listName, setListName] = useState('');

  const saveList = () => {
    localStorage.setItem('List Name:', listName);
    localStorage.setItem('List Items:', selectedMovies);
  };

  return (
    <div className='list'>
      <input
        className='listInput'
        type='text'
        placeholder='Enter list name'
        onChange={(e) => setListName(e.target.value)}
      />
      <div className='listItems'>
        {selectedMovies.map((movie, index) => (
          <div key={index} className='listItem'>
            <div>
              <span>{movie}</span>
            </div>
            <div>
              <button className='removeItem' onClick={() => removeMovie(index)}>
                x
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link
        to={{
          pathname: '/basket',
          state: {
            listName,
            selectedMovies,
          },
        }}
      >
        <button className='yourBasket'>Your basket</button>
      </Link>
      <button className={`${listName.trim() ? 'seems' : 'hidden'}`} onClick={saveList}>
        Save
      </button>
    </div>
  );
};

export default List;
