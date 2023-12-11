import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import "./Basket.css"
import downArrow from "./down-arrow.png"
import upArrow from "./arrowhead-up.png"

const Basket = () => {
  const location = useLocation();
  const { listName } = location.state || { listName: '', selectedMovies: [] };
  console.log(listName);
  const [isNavOpen, setNavOpen] = useState(true);
  
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div>
      <h1 className='basket'>Your Basket</h1>
      <div className='basketListName' onClick={toggleNav}>
        <div><p className='basketName'>{localStorage.getItem("List Name:")}</p></div>
        <div className='containerDirection'>
          <img className="down-arrow" src={isNavOpen  ? upArrow : downArrow} alt="" />
          </div>
      </div>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
        <ul>
          {localStorage.getItem("List Items:").split(",").map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Basket;
