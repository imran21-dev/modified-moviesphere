import { useLoaderData,  } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllMovies = () => {
  const loadedMovies = useLoaderData();
  const [allMovies, setAllMovies] = useState(loadedMovies)
  
  const handleSearch = (e) => {
      e.preventDefault()
      const search = e.target.search.value

      if (search.length < 1) {
      setAllMovies(loadedMovies)
        
      }
      else{
        const filter = loadedMovies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
        
        setAllMovies(filter)

      }

      

    
  }
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <div className="md:py-24 py-16 w-11/12 mx-auto">
       <Helmet>
                <title>All Movies | MovieSphere</title>
            </Helmet>
      <div className="flex lg:flex-row flex-col items-start lg:justify-between lg:items-center">
      <div>
      <h1 className="text-2xl md:text-4xl font-semibold  pb-3">All Movies</h1>
      <p className="pb-2 md:pb-5 md:text-base text-xs">Explore the ultimate collection of cinematic gems!</p>
      </div>
      <form onSubmit={handleSearch} className="lg:w-3/12">
      <div className="border  border-secondary flex items-center pl-3 rounded-full">
        <CiSearch className="text-3xl text-neutral/40"/>
        <input 
        type="text"
        placeholder="Search movies"
        name="search"
        
        className="input w-full pl-1 focus:outline-none focus:border-none  border-none rounded-none min-h-max h-max py-2 placeholder:text-neutral/30 placeholder:font-thin md:text-sm text-xs" 
         />
        <button className="bg-neutral/20 hover:bg-accent/90 duration-200 text-white py-2 text-xs md:text-sm px-5 font-semibold rounded-e-full">Scarch</button>
       </div>
      </form>
      </div>

      {
       allMovies.length < 1 ? <div className="md:text-xl flex justify-center h-screen pt-32">Empty</div> : <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2  mx-auto py-7 gap-2 md:gap-10">
       {allMovies.map((movie) => (
         <MovieCard movie={movie} key={movie._id}></MovieCard>
       ))}
     </div>
      }
    </div>
  );
};

export default AllMovies;
