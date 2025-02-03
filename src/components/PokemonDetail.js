// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import "./PokemonDetail.css";

// // function PokemonDetail() {
// //   const { name } = useParams();
// //   const [pokemon, setPokemon] = useState(null);

// //   useEffect(() => {
// //     axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
// //       .then(response => setPokemon(response.data))
// //       .catch(error => console.error("Error fetching Pokémon details:", error));
// //   }, [name]);

// //   if (!pokemon) return <p>Loading...</p>;

// //   return (
// //     <div className="pokemon-detail">
// //       <h1>{pokemon.name} #{pokemon.id}</h1>
// //       <img src={pokemon.sprites.front_default} alt={pokemon.name} />
// //       <p>Type: {pokemon.types.map(type => type.type.name).join(", ")}</p>
// //       <p>Height: {pokemon.height}</p>
// //       <p>Weight: {pokemon.weight}</p>
// //       <h2>Base Stats</h2>
// //       <ul>
// //         {pokemon.stats.map(stat => (
// //           <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default PokemonDetail;



// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./PokemonDetail.css";

// const PokemonDetail = () => {
//   const { name } = useParams(); // 👈 Gets Pokémon name from URL
//   const navigate = useNavigate(); 
//   const [pokemon, setPokemon] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPokemonDetail = async () => {
//       try {
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
//         setPokemon(response.data);
//       } catch (error) {
//         setError("Failed to fetch Pokémon details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPokemonDetail();
//   }, [name]);

//   if (loading) return <p>...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="pokemon-detail">
//       <button className="back-button" onClick={() => navigate("/")}>← Back to Pokédex</button>

//       <h1>{pokemon.name}</h1>
//       <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />

//       <h2>Base Stats</h2>
//       <ul>
//         {pokemon.stats.map((stat) => (
//           <li key={stat.stat.name}>
//             <strong>{stat.stat.name}:</strong> {stat.base_stat}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PokemonDetail;





import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./PokemonDetail.css";

const PokemonDetail = () => {
  const { name } = useParams(); // 👈 Gets Pokémon name from URL
  const navigate = useNavigate(); 
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      } catch (error) {
        setError("Failed to fetch Pokémon details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pokemon-detail">
      <button className="back-button" onClick={() => navigate("/")}>← Back to Pokédex</button>

      <h1>{pokemon.name}</h1>
      
      {/* Lazy loading image */}
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        loading="lazy" // Lazy load image when it comes into view
      />

      <h2>Base Stats</h2>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            <strong>{stat.stat.name}:</strong> {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
