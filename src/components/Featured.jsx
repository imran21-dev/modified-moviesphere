import { Link, useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";
import { IoIosArrowRoundForward } from "react-icons/io";


const Featured = () => {
    const featuredMovies = useLoaderData()
    
    return (
        <div className="w-11/12 mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-semibold md:pt-20 pt-8 md:pb-4">Featured Movie</h1>
            <p className="md:text-base text-xs">Handpicked Hits, Just for You!</p>
              <section className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2  mx-auto py-7 gap-2 md:gap-10">
                {
                 featuredMovies.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
                }
              </section>

              <Link to='/all-movies' className="btn rounded-full h-max min-h-max py-2 md:py-3 text-xs md:text-sm flex gap-0 w-max mx-auto btn-outline md:px-20 md:mt-10">See all Movies <IoIosArrowRoundForward className="md:text-3xl text-2xl" /></Link>
        </div>
    );
};

export default Featured;