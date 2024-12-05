import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const allMovies = useLoaderData();
  console.log(allMovies);
  return (
    <div className="py-24 w-11/12 mx-auto">
      <h1 className="text-4xl font-semibold  pb-3">All Movies</h1>
      <p className="pb-5">Explore the ultimate collection of cinematic gems!</p>

      <div className="grid grid-cols-3 gap-10">
        {allMovies.map((movie) => (
          <MovieCard movie={movie} key={movie._id}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
