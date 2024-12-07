import { useContext, useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { ThemeContext } from "../context/AssetsContext";


const GenresSelector = () => {
    const {setGenreArray,genreTooltip,setGenreTooltip,selectedGenre,setSelectedGenre} = useContext(ThemeContext)
    const [genreSwitch, setGenreSwitch] = useState(false)
    const handleGenreSwitch = () =>{
        setGenreSwitch(!genreSwitch)
        setGenreTooltip(false)
    }

    const addGenre = (genre) => {
        if (!selectedGenre.includes(genre)) {
            setSelectedGenre([...selectedGenre, genre])
    

        }
        else{return}
        
    }
    const removeGenre = (genre) => {
        const remainingGenre = selectedGenre.filter(gen => gen !== genre)
        setSelectedGenre(remainingGenre)
    

        
    }
    useEffect(()=>{
        setGenreArray(selectedGenre)
        
    },[selectedGenre, setGenreArray, setSelectedGenre])
 
    const genres = [
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
          <div className={`tooltip w-full  tooltip-bottom ${genreTooltip ? 'tooltip-open': ''}`} data-tip="Add movie genre">
          <div onClick={handleGenreSwitch} className={genreSwitch ? 'font-thin rounded-full bg-secondary border border-secondary flex items-center gap-1 justify-center px-2 py-2 cursor-pointer':'font-thin rounded-full border border-secondary flex items-center hover:bg-neutral/10 gap-1 justify-center px-2 py-2 cursor-pointer'}>Select genre {genreSwitch? <IoChevronUpSharp />:<IoChevronDownSharp />}</div>

            </div>

       
            <ul className={genreSwitch ? 'text-sm bg-secondary/50 backdrop-blur-md py-2 rounded-2xl absolute w-full z-50 duration-300 text-left' : 'text-sm text-left hidden'}>
             {
             genres.map(genre => <li  onClick={()=>addGenre(genre)} className="hover:bg-secondary rounded-full cursor-pointer md:py-1 px-2" key={genre}>{genre}</li>)
             }
            
            </ul>
          </section>
          
          <section className= 'border overflow-y-auto max-h-44 flex justify-start rounded-3xl flex-wrap gap-2 border-secondary h-max py-3 px-2'>
           {
            selectedGenre.length > 0 ?  
                selectedGenre.map(genre => <div className="text-xs md:text-sm cursor-pointer flex items-center gap-1 bg-neutral/10 rounded-full py-1 w-max px-2 " key={genre}>{genre}<IoIosCloseCircleOutline onClick={() => removeGenre(genre)} className="text-lg hover:text-accent/90"/></div>) :
                <h2 className="md:text-sm  flex justify-center w-full text-neutral/20">Empty genre box</h2>
                
           }
          </section>
          </div>
        </div>
        </div>
    );
};

export default GenresSelector;