import { useContext, useEffect, } from "react";
import Rating from "react-rating";
import { ThemeContext } from "../context/AssetsContext";
import { useLoaderData } from "react-router-dom";

const StarRatingUp = () => {
  const {setRatingStarUp,ratingToolUp,setRatingToolUp,setRatingUp, ratingUp} = useContext(ThemeContext)
  const needToUpdateMovie = useLoaderData()
const defaultRatingStar = needToUpdateMovie.ratingStar

useEffect(()=>{
    setRatingUp(defaultRatingStar)
    setRatingStarUp(defaultRatingStar)
},[defaultRatingStar, setRatingStarUp, setRatingUp])


  const handleRating = (value) => {
    setRatingUp(value); 
    setRatingStarUp(value)
    setRatingToolUp(false)
  };

  return (
    <div className="form-control pb-1">
    <label className="label">
      <span className="label-text md:text-sm text-xs">Rate this Movie</span>
    </label>
    <div className={`tooltip w-full  tooltip-bottom ${ratingToolUp ? 'tooltip-open': ''}`} data-tip="Rate this movie">
    <div className="flex lg:py-2 gap-2 items-center">
      
      <Rating
        
        fractions={2} 
        emptySymbol="far fa-star text-secondary text-sm lg:text-xl" 
        fullSymbol="fas fa-star text-yellow-400 text-sm lg:text-xl" 
        initialRating={ratingUp}
        onChange={handleRating} 
      />
      <span>({ratingUp})</span>
    </div>
    </div>
   
    
  </div>
  );
};

export default StarRatingUp;
