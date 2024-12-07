import { useContext, useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { ThemeContext } from "../context/AssetsContext";
import { useLoaderData } from "react-router-dom";


const GenresSelectorUp = () => {
    const {setGenreArrayUp,genreTooltipUp,setGenreTooltipUp,selectedGenreUp,setSelectedGenreUp} = useContext(ThemeContext)
    const [genreSwitchUp, setGenreSwitchUp] = useState(false)
    const needToUpdateMovie = useLoaderData()
const defaultGenre = needToUpdateMovie.genreArray

useEffect(()=>{
    setSelectedGenreUp(defaultGenre)
    setGenreArrayUp(defaultGenre)
},[defaultGenre, setGenreArrayUp, setSelectedGenreUp])
    const handleGenreSwitch = () =>{
        setGenreSwitchUp(!genreSwitchUp)
        setGenreTooltipUp(false)
    }

    const addGenre = (genreUp) => {
        if (!selectedGenreUp.includes(genreUp)) {
            setSelectedGenreUp([...selectedGenreUp, genreUp])
    

        }
        else{return}
        
    }
    const removeGenre = (genreUp) => {
        const remainingGenreUp = selectedGenreUp.filter(gen => gen !== genreUp)
        setSelectedGenreUp(remainingGenreUp)
    

        
    }
    useEffect(()=>{
        setGenreArrayUp(selectedGenreUp)
        
    },[selectedGenreUp, setGenreArrayUp, setSelectedGenreUp])
 
    const genresUp = [
        "Action",
        "Comedy",
        "Drama",
        "Horror",
        "Romance",
        "Sci-Fi",
        "Thriller",
        "Fantasy",
        "Adventure",
        "Animation",
      ];
    return (
        <div>
              <div  className="form-control pb-1 ">
          <label className="label">
            <span className="label-text md:text-sm text-xs">Genre</span>
          </label>
       
          <div className="grid grid-cols-2 gap-2">
          <section className="relative">
          <div className={`tooltip w-full  tooltip-bottom ${genreTooltipUp ? 'tooltip-open': ''}`} data-tip="Add movie genre">
          <div onClick={handleGenreSwitch} className={genreSwitchUp ? 'font-thin rounded-full bg-secondary border border-secondary flex items-center gap-1 justify-center px-2 py-2 cursor-pointer':'font-thin rounded-full border border-secondary flex items-center hover:bg-neutral/10 gap-1 justify-center px-2 py-2 cursor-pointer'}>Select genre {genreSwitchUp? <IoChevronUpSharp />:<IoChevronDownSharp />}</div>

            </div>

       
            <ul className={genreSwitchUp ? 'text-sm bg-secondary/50 backdrop-blur-md py-2 rounded-2xl absolute w-full z-50 duration-300 text-left' : 'text-sm text-left hidden'}>
             {
             genresUp.map(genreUp => <li  onClick={()=>addGenre(genreUp)} className="hover:bg-secondary rounded-full cursor-pointer md:py-1 px-2" key={genreUp}>{genreUp}</li>)
             }
            
            </ul>
          </section>
          
          <section className= 'border overflow-y-auto max-h-44 flex justify-start rounded-3xl flex-wrap gap-2 border-secondary h-max py-3 px-2'>
           {
            selectedGenreUp.length > 0 ?  
                selectedGenreUp.map(genreUp => <div className="text-xs md:text-sm cursor-pointer flex items-center gap-1 bg-neutral/10 rounded-full py-1 w-max px-2" key={genreUp}>{genreUp}<IoIosCloseCircleOutline onClick={() => removeGenre(genreUp)} className="text-lg hover:text-accent/90"/></div>) :
                <h2 className="md:text-sm  flex justify-center w-full text-neutral/20">Empty genre box</h2>
                
           }
          </section>
          </div>
        </div>
        </div>
    );
};

export default GenresSelectorUp;