import { useState } from "react";

import MovieList from "../components/MovieList/MovieList";

const Home = () => {
  const [sortBy, setSortBy] = useState("titulo"); // Default sort by movie title
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen py-4">
      <div className="container mx-auto flex items-center justify-center px-4">
        <input
          type="text"
          placeholder="Buscar filmes..."
          className="mr-4 rounded-md bg-gray-100 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />

        <select
          value={sortBy}
          onChange={handleSortChange}
          className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="titulo">Título</option>
          <option value="ano">Ano</option>
          <option value="nota">Nota</option>
        </select>
      </div>
      <MovieList sortBy={sortBy} searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
