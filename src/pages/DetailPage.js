import React, { useEffect, useState } from 'react';
import { getPokemonDetail } from '../api';
import PokemonDetail from '../components/PokemonDetail';
import './DetailPage.css';

const DetailPage = ({ match }) => {
  const { name } = match.params;
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getPokemonDetail(name)
      .then((data) => setPokemon(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!pokemon) return null;

  return <PokemonDetail pokemon={pokemon} />;
};

export default DetailPage;