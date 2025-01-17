import { useContext, } from "react";
import Rating from "react-rating";
import { ThemeContext } from "../context/AssetsContext";

const StarRating = () => {
  const {setRatingStar,ratingTool,setRatingTool,setRating, rating} = useContext(ThemeContext)
  


  const handleRating = (value) => {
    setRating(value); 
    setRatingStar(value)
    setRatingTool(false)
  };

  return (
    <div className="form-control pb-1">
    <label className="label">
      <span className="label-text md:text-sm text-xs">Rate this Movie</span>
    </label>
    <div className={`tooltip w-full  tooltip-bottom ${ratingTool ? 'tooltip-open': ''}`} data-tip="Rate this movie">
    <div className="flex lg:py-2 gap-2 items-center">
      
      <Rating
        fractions={2} 
        emptySymbol="far fa-star text-secondary text-sm lg:text-xl" 
        fullSymbol="fas fa-star text-yellow-400 text-sm lg:text-xl" 
        initialRating={rating}
        onChange={handleRating} 
      />
      <span className="">({rating})</span>
    </div>
    </div>
   
    
  </div>
  );
};

export default StarRating;
