import React from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PokemonList from './components/PokemonList';
import {  } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
