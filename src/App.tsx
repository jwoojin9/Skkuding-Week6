import React from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PokemonList from './components/PokemonList';
import {  } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <nav>
            <h1>
                <Link to="./">Pokemon List</Link>
            </h1>
        </nav>
        <main>
          <Routes>
            <Route path='/' element={<PokemonList/>}/>
            <Route path='/pokemon/:id' element={<PokemonDetail/>}/>

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
