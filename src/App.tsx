import React from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PokemonList from './components/PokemonList';
import {  } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ReactDOM from 'react-dom/client';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

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
