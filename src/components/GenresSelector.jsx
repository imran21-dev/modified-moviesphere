import { useContext, useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { ThemeContext } from "../context/AssetsContext";


const GenresSelector = () => {
    const {setGenreArray,genreTooltip,setGenreTooltip} = useContext(ThemeContext)
    const [genreSwitch, setGenreSwitch] = useState(false)
    const handleGenreSwitch = () =>{
        setGenreSwitch(!genreSwitch)
        setGenreTooltip(false)
    }
    const [selectedGenre, setSelectedGenre] = useState([]);

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
            <span className="label-text">Genre</span>
          </label>
       
          <div className="grid grid-cols-2 gap-2">
          <section>
          <div className={`tooltip w-full  tooltip-bottom ${genreTooltip ? 'tooltip-open': ''}`} data-tip="Add movie genre">
          <div onClick={handleGenreSwitch} className={genreSwitch ? 'font-thin bg-secondary border border-secondary flex items-center gap-1 justify-center px-2 py-2 cursor-pointer':'font-thin border border-secondary flex items-center hover:bg-neutral/10 gap-1 justify-center px-2 py-2 cursor-pointer'}>Select genre {genreSwitch? <IoChevronUpSharp />:<IoChevronDownSharp />}</div>

            </div>

       
            <ul className={genreSwitch ? 'text-sm bg-primary relative z-50 duration-300 text-left' : 'text-sm text-left hidden'}>
             {
             genres.map(genre => <li  onClick={()=>addGenre(genre)} className="hover:bg-secondary cursor-pointer py-1 px-2" key={genre}>{genre}</li>)
             }
            
            </ul>
          </section>
          
          <section className= 'border flex justify-start flex-wrap gap-2 border-secondary h-max py-3 px-2'>
           {
            selectedGenre.length > 0 ?  
                selectedGenre.map(genre => <div className="text-sm cursor-pointer flex items-center gap-1 bg-neutral/10 rounded-full py-1 w-max px-2" key={genre}>{genre}<IoIosCloseCircleOutline onClick={() => removeGenre(genre)} className="text-lg hover:text-accent/90"/></div>) :
                <h2 className="text-sm py-10 flex justify-center w-full text-neutral/20">empty genre box</h2>
                
           }
          </section>
          </div>
        </div>
        </div>
    );
};

export default GenresSelector;