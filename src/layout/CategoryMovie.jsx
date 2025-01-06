import MovieCard from "../components/MovieCard";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";

const CategoryMovie = () => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [allMovies, setAllMovies] = useState(loadedMovies);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()



  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    fetch(`https://server-side-nu-swart.vercel.app/category?category=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoadedMovies(data);
        setAllMovies(data);
        setLoading(false);
      });
  }, [id]);




  return (
    <div className="md:py-24 py-16 w-11/12 mx-auto">
      <Helmet>
        <title>All Movies | MovieSphere</title>
      </Helmet>
      <div className="flex lg:flex-row flex-col items-start lg:justify-between lg:items-center">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold  pb-3">
           Movie Category - {id}
          </h1>
          <p className="pb-2 md:pb-5 md:text-base text-xs">
            Explore the ultimate collection of cinematic gems!
          </p>
        </div>
        
      </div>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <GridLoader size={10} color="#bebebe" />
        </div>
      ) : (
        <div>
          {allMovies.length < 1 ? (
            <div className="md:text-xl flex justify-center h-screen pt-32">
              Empty
            </div>
          ) : (
            <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3  mx-auto py-7 gap-2 md:gap-10">
              {allMovies.map((movie) => (
                <MovieCard movie={movie} key={movie._id}></MovieCard>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryMovie;
