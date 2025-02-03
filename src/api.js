// import axios from 'axios';

// const API_URL = 'https://pokeapi.co/api/v2/pokemon';

// export const getPokemonList = async (offset = 0, limit = 20) => {
//   try {
//     const response = await axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);
//     return response.data;
//   } catch (error) {
//     throw new Error('Failed to fetch Pokemon list');
//   }
// };

// export const getPokemonDetail = async (name) => {
//   try {
//     const response = await axios.get(`${API_URL}/${name}`);
//     return response.data;
//   } catch (error) {
//     throw new Error('Failed to fetch Pokemon details');
//   }
// };

// // src/components/PokemonList.js
// import React from 'react';
// import './PokemonList.css';

// const PokemonList = ({ pokemon, onClick }) => {
//   return (
//     <div className="pokemon-list">
//       {pokemon.map((poke) => (
//         <div key={poke.name} className="pokemon-item" onClick={() => onClick(poke.name)}>
//           {poke.name}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PokemonList;



import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonList = async (offset = 0, limit = 20) => {
  try {
    const response = await axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Pokemon list');
  }
};

export const getPokemonDetail = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/${name}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Pokemon details');
  }
};
