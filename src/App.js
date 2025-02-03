// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PokemonList from "./components/PokemonList";
// import PokemonDetail from "./components/PokemonDetail";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<PokemonList />} />
//         <Route path="/pokemon/:name" element={<PokemonDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load the components
const PokemonList = React.lazy(() => import("./components/PokemonList"));
const PokemonDetail = React.lazy(() => import("./components/PokemonDetail"));

function App() {
  return (
    <Router>
      {/* Suspense to show fallback while loading components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

