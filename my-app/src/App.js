import React from 'react';
import './App.css';
import MainPage from './Pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import GoToImdb from './Pages/GoToImdb';
import Basket from './Pages/Basket';

function App() {
  localStorage.setItem("list",["aa"])
  localStorage.getItem("list")
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<MainPage />} />
        <Route path='/goToImdb/:imdbID' element={<GoToImdb />} />
        <Route path='/basket' element={<Basket  />} />
      </Routes>
    </div>
  );
}

export default App;
