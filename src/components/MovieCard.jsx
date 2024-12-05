import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { RxStopwatch } from "react-icons/rx";

import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const MovieCard = ({ movie }) => {
  const {
    poster,
    title,
    duration,

    releaseYear,
    ratingStar,
    genreArray,
   
  } = movie;
  return (
        <div className="w-full">
           <div className="w-full relative">
           <h2 className="flex top-4  left-4 px-3 rounded-full gap-1 absolute items-center bg-primary/30 backdrop-blur-md"><FaStar className="text-[#FFAA00] text-sm"/> {ratingStar}</h2>

            <div className="w-full">
                <img className="w-full rounded-3xl h-[420px] object-cover" src={poster} alt="movie poster" />
            </div>

          <div className="text-left absolute bottom-0 pb-4 h-full flex flex-col justify-end w-full px-4  bg-gradient-to-t from-primary/70  to-transparent">
            
            <h1 data-tooltip-id="my-tooltip" data-tooltip-content={title} className="text-lg font-semibold truncate">{title}</h1>
            <div className="flex text-sm items-center gap-2 py-">

           
              <p>{releaseYear}</p>

            </div>
            <h2 className="text-sm pt-1 truncate">{genreArray.join(' | ')}</h2>
           
            <h2 className="flex truncate pt-1 items-center gap-1 text-sm"><RxStopwatch />{duration} mins</h2>
            
          </div>
         </div>
         <div className="pt-3 pb-4 px-3 w-2/5 hover:w-full duration-300">
         <Link className="btn rounded-full w-full bg-accent/90 text-white hover:bg-accent/90 border-accent/90 hover:border-accent/90">Show Details</Link>
         </div>
        <Tooltip style={{backgroundColor: 'red', backdropFilter: 'blur(10px)'}} id='my-tooltip'/>
        </div>
);
};

MovieCard.propTypes = {
  movie: PropTypes.object
};
export default MovieCard;
