
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./PokemonList.css";

// function PokemonList() {
//   const [pokemons, setPokemons] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
//       .then(response => setPokemons(response.data.results))
//       .catch(error => console.error("Error fetching Pokémon:", error));
//   }, []);

//   return (
//     <div className="pokedex-container">
//       <h1>Pokédex</h1>
//       <input
//         type="text"
//         placeholder="Search Pokémon..."
//         onChange={(e) => setSearch(e.target.value.toLowerCase())}
//       />
//       <div className="pokemon-grid">
//         {pokemons
//           .filter(pokemon => pokemon.name.includes(search))
//           .map((pokemon, index) => (
//             <Link key={index} to={`/pokemon/${pokemon.name}`} className="pokemon-card">
//               <img
//                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
//                 alt={pokemon.name}
//               />
//               <p>{pokemon.name}</p>
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default PokemonList;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => setPokemons(response.data.results))
      .catch(error => console.error("Error fetching Pokémon:", error));
  }, []);

  return (
    <div className="pokedex-container">
      <h1>Pokédex</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <div className="pokemon-grid">
        {pokemons
          .filter(pokemon => pokemon.name.includes(search))
          .map((pokemon, index) => (
            <Link key={index} to={`/pokemon/${pokemon.name}`} className="pokemon-card">
              {/* Lazy loading the images */}
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
                loading="lazy" // Lazy load image when it comes into view
              />
              <p>{pokemon.name}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default PokemonList;
