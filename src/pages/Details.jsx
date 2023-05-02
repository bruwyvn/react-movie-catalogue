import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

const Details = () => {
  const { movie } = useParams();
  return (
    <>
      <MovieDetails movie={movie} />
    </>
  );
};

export default Details;
