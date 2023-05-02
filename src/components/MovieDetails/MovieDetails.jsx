import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MovieDetails = ({ movie }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loadingMovieDetails, setLoadingMovieDetails] = useState(true);
  const [errorMovieDetails, setErrorMovieDetails] = useState(undefined);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${movie}`
        );
        const json = await response.json();
        setMovieDetails(json);
        setLoadingMovieDetails(false);
      } catch (error) {
        setErrorMovieDetails({ error });
        console.error(errorMovieDetails);
      }
    }
    fetchMovieDetails();
  }, [errorMovieDetails, movie]);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-screen-lg py-8">
        {loadingMovieDetails ? (
          <h1>Carregando...</h1>
        ) : (
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <img
              className="mb-4 w-64 rounded-lg md:mb-0 md:mr-8"
              src={movieDetails.poster}
              alt={`Poster for ${movieDetails.titulo}`}
            />

            <div className="flex-1">
              <h1 className="mb-4 text-4xl font-bold">
                {movieDetails.titulo} ({movieDetails.ano})
              </h1>
              <p className="mb-4 text-gray-600">
                Assistido: {movieDetails.assistido ? "Sim" : "Não"}
              </p>
              <p className="text-gray-800">{movieDetails.sinopse}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieDetails;
