import { useContext, useState } from "react";
import { IoChevronDownSharp,  } from "react-icons/io5";
import { ThemeContext } from "../context/AssetsContext";



const Release = () => {
    const {setReleaseYear,releaseTool,setReleaseTool} = useContext(ThemeContext)
    const [genreSwitch, setGenreSwitch] = useState(false)
    const [release, setRelease] = useState(false)
    const handleGenreSwitch = () =>{
        setGenreSwitch(!genreSwitch)
    }
    const years = [];
    for (let year = 2024; year >= 1800; year--) {
        years.push(year)
        
    }
    const addYear = (year) => {
        setRelease(year)
        setGenreSwitch(!genreSwitch)
        setReleaseYear(year)
        setReleaseTool(false)
    }
 
    return (
        <div className="w-2/4">
          <div  className="form-control pb-1 ">
          <label className="label">
            <span className="label-text">Release Year</span>
          </label>
             <section className="">
             <div className={`tooltip w-full  tooltip-bottom ${releaseTool ? 'tooltip-open': ''}`} data-tip="Add release date">
          <div onClick={handleGenreSwitch} className='font-thin hover:bg-neutral/10 border  border-secondary  px-5 py-2 cursor-pointer'>{release? <h1>{release}</h1> : <h1 className="flex items-center gap-1 justify-center">Release year <IoChevronDownSharp /></h1>}</div>
          </div>
            <ul className={genreSwitch ? 'text-sm h-52 relative z-50 bg-primary overflow-y-auto text-left' : 'text-sm text-left hidden'}>
             {
             years.map(year => <li onClick={()=>addYear(year)} className="hover:bg-secondary cursor-pointer py-1 px-2" key={year}>{year}</li>)
             }
            
            </ul>
          </section>
          </div>
         
        </div>
    );
};

export default Release;