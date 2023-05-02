import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
      <img
        className="h-80 w-full object-cover"
        src={movie.poster}
        alt={movie.titulo}
      />
      <div className="py-4 px-6">
        <h2 className="text-lg font-semibold text-gray-800">{movie.titulo}</h2>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">{movie.ano}</span>
          <span className="text-sm font-medium text-gray-600">
            {movie.nota}
          </span>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            {movie.assistido ? "Assistido" : "Não assistido"}
          </span>
          <Link
            to={`/details/${movie.id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    ano: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    nota: PropTypes.number.isRequired,
    assistido: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MovieCard;
