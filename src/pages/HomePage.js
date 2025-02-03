import React, { useState, useEffect } from 'react';
import { getPokemonList } from '../api';
import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';
import './HomePage.css';

const HomePage = ({ history }) => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getPokemonList(offset)
      .then((data) => setPokemon((prev) => [...prev, ...data.results]))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [offset]);

  const filteredPokemon = pokemon.filter((poke) => poke.name.includes(search.toLowerCase()));

  return (
    <div className="home-page">
      <SearchBar value={search} onChange={setSearch} />
      <PokemonList
        pokemon={filteredPokemon}
        onClick={(name) => history.push(`/pokemon/${name}`)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <button onClick={() => setOffset((prev) => prev + 20)}>Load More</button>
    </div>
  );
};

export default HomePage;