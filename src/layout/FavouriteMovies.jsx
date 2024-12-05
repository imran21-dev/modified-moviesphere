import { useLoaderData } from "react-router-dom";
import Fmoviecard from "../components/FmovieCard";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/AssetsContext";


const FavouriteMovies = () => {
    const {user} = useContext(ThemeContext)
    const currentEmail = user.email
    const favouriteMovies = useLoaderData()
    const userFavourites = favouriteMovies.filter(movie => movie.email === currentEmail)
  
    const [fMovies, setFmovies] = useState(userFavourites)
    return (
        <div className="w-11/12 mx-auto">
            {
             fMovies.length < 1 ? <div className="flex justify-center items-center h-screen">Your favorites list is empty. Start adding movies you love!</div> : <section className="py-24 ">
             <h1 className="text-4xl font-semibold  pb-3">Your Favourite Movies</h1>
             <p className="pb-5">Handpicked just for you, because you deserve the best!</p>
             <div className="grid grid-cols-3 gap-10">
               {fMovies.map((movie) => (
                 <Fmoviecard movie={movie} fMovies={fMovies} setFmovies={setFmovies} key={movie._id}></Fmoviecard>
               ))}
             </div>
             </section>
            }
     
        </div>
    );
};

export default FavouriteMovies;