import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import MovieCard from "../MovieCard";

const MovieList = ({ sortBy, searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [errorMovies, setErrorMovies] = useState(undefined);

  useEffect(() => {
    async function fetchMovies() {
      setLoadingMovies(true);
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/marycamila184/movies/movies"
        );
        const json = await response.json();
        setMovies(json);
        setLoadingMovies(false);
      } catch (error) {
        setErrorMovies({ error });
        console.error(errorMovies);
      }
    }
    fetchMovies();
  }, [errorMovies]);

  // useEffect(() => {
  //   // Sort side-effect
  //   let sortedMovies;
  //   switch (sortBy) {
  //     case "titulo":
  //       sortedMovies = [...movies].sort((a, b) =>
  //         a.titulo.localeCompare(b.titulo)
  //       );
  //       break;
  //     case "ano":
  //       sortedMovies = [...movies].sort((a, b) => b.ano - a.ano);
  //       break;
  //     case "nota":
  //       sortedMovies = [...movies].sort((a, b) => b.nota - a.nota);
  //       break;
  //     default:
  //       sortedMovies = movies;
  //       break;
  //   }
  //   setMovies(sortedMovies);
  // }, [movies, sortBy]);

  // useEffect(() => {
  //   // Search side-effect
  //   async function fetchMovies() {
  //     setLoadingMovies(true);
  //     try {
  //       const response = await fetch(
  //         "https://my-json-server.typicode.com/marycamila184/movies/movies"
  //       );
  //       const json = await response.json();
  //       setMovies(json);
  //       setLoadingMovies(false);
  //     } catch (error) {
  //       setErrorMovies({ error });
  //       console.error(errorMovies);
  //     }
  //   }
  //   if (searchTerm) {
  //     const filteredMovies = movies.filter((movie) =>
  //       movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setMovies(filteredMovies);
  //   } else {
  //     fetchMovies();
  //   }
  // }, [movies, searchTerm]);

  return (
    <div className="container mx-auto my-8 px-4">
      {loadingMovies ? (
        <h1>Carregando...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

MovieList.propTypes = {
  sortBy: PropTypes.string,
  searchTerm: PropTypes.string,
};

export default MovieList;
