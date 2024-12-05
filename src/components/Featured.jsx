import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";


const Featured = () => {
    const featuredMovies = useLoaderData()
    console.log(featuredMovies)
    return (
        <div className="w-11/12 mx-auto text-center">
            <h1 className="text-4xl font-semibold pt-20 pb-4">Featured Movie</h1>
            <p>Handpicked Hits, Just for You!</p>
              <section className="grid grid-cols-3 w-9/12 mx-auto py-7 gap-10">
                {
                 featuredMovies.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
                }
              </section>
        </div>
    );
};

export default Featured;