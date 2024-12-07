import { Link, useLoaderData } from "react-router-dom";
import Fmoviecard from "../components/FmovieCard";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/AssetsContext";

import { PiEmpty } from "react-icons/pi";
import { Helmet } from "react-helmet-async";


const FavouriteMovies = () => {
    const {user} = useContext(ThemeContext)
    const currentEmail = user.email
    const favouriteMovies = useLoaderData()
    const userFavourites = favouriteMovies.filter(movie => movie.email === currentEmail)
  
    const [fMovies, setFmovies] = useState(userFavourites)
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
    return (
        <div className="w-11/12 mx-auto">

<Helmet>
                <title>Favourite Movies | MovieSphere</title>
            </Helmet>
            {
             fMovies.length < 1 ? <div className="flex flex-col text-center justify-center items-center h-screen">
                <PiEmpty className="text-7xl mb-5" />
                <h1 className="md:text-base text-sm">Your favorites list is empty. Start adding movies you love!</h1>
             <Link className="btn mt-10 bg-accent/90 text-white rounded-full border-none px-5 hover:bg-neutral/20 duration-300" to='/all-movies'>Explore Movie</Link></div> : <section className="py-24 ">
             <h1 className="text-2xl md:text-4xl font-semibold  pb-3">Your Favourite Movies</h1>
             <p className="pb-2 md:pb-5 md:text-base text-xs">Handpicked just for you, because you deserve the best!</p>
             <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2  mx-auto py-3 md:py-7 gap-2 md:gap-10">
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