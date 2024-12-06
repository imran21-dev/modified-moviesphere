import PropTypes from "prop-types";
import { CiPlay1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { RxStopwatch } from "react-icons/rx";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Fmoviecard = ({ movie, fMovies, setFmovies }) => {
  const navigate = useNavigate();
  const {
    poster,
    title,
    duration,
    _id,
    releaseYear,
    ratingStar,
    genreArray,
    defaultId,
  } = movie;

  const deleteFavourite = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete-favourite/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingMovies = fMovies.filter(
                (movie) => movie._id !== _id
              );
              setFmovies(remainingMovies);
            } else {
              Swal.fire({
                title: "Failed!",
                text: `Something went wrong`,
                icon: "error",
                confirmButtonText: "Retry",
              });
            }
          });
      }
    });
  };

  const showDetails = () => {
    navigate(`/movie-details/${defaultId}`);
  };
  return (
    <div className="w-full">
      <div
        onClick={showDetails}
        className="w-full relative movie-card rounded-3xl overflow-hidden"
      >
        <div className="absolute movie-play flex duration-300 w-full h-full  items-center justify-center text-7xl text-transparent z-50">
          <CiPlay1 />
        </div>
        <h2 className="flex top-4 z-50 left-4 px-3 rounded-full gap-1 absolute items-center bg-primary backdrop-blur-md">
          <FaStar className="text-[#FFAA00] text-sm" /> {ratingStar}
        </h2>

        <div className="w-full h-[600px]  ">
          <img
            className="w-full rounded-3xl h-full object-cover duration-300 movie-poster"
            src={poster}
            alt="movie poster"
          />
        </div>

        <div className="text-left movie-bg duration-300 absolute bottom-0 pb-4 h-full flex flex-col justify-end w-full px-4  bg-gradient-to-t from-primary/70  to-transparent">
          <h1 className="text-lg font-semibold truncate">{title}</h1>
          <div className="flex text-sm items-center gap-2 py-">
            <p>{releaseYear}</p>
          </div>
          <h2 className="text-sm pt-1 truncate">{genreArray.join(" | ")}</h2>

          <h2 className="flex truncate pt-1 items-center gap-1 text-sm">
            <RxStopwatch />
            {duration} mins
          </h2>
        </div>
      </div>
      <div className="pt-3 pb-4 px-3 w-2/5 hover:w-3/5 duration-300">
        <button
          onClick={deleteFavourite}
          className="btn rounded-full w-full bg-accent/90 text-white hover:bg-accent/90 border-accent/90 hover:border-accent/90"
        >
          Delete Favourite
        </button>
      </div>
    </div>
  );
};

Fmoviecard.propTypes = {
  movie: PropTypes.object,
  fMovies: PropTypes.array,
  setFmovies: PropTypes.func,
};
export default Fmoviecard;
