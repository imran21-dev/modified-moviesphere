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
      confirmButtonColor: "#f12804",
      cancelButtonColor: "#16A34A",
      confirmButtonText: "Yes, delete it!",
      scrollbarPadding: false,
      customClass: {
        title: 'text-xl md:text-3xl font-bold ',
        text: 'text-3xl',
        popup: "bg-[#1d0602] text-white rounded-3xl outline outline-[#f12804]",
        confirmButton: "bg-[#16A34A] rounded-full py-[10px] px-[30px]",
        cancelButton: "bg-[#16A34A] rounded-full py-[10px] px-[30px]",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-nu-swart.vercel.app/delete-favourite/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                icon: "success",
                title: "Deleted !",
                text: "Successfully deleted from your favourite list !",
                confirmButtonText: "Okay",
                scrollbarPadding: false,
              customClass: {
                title: 'text-xl md:text-3xl font-bold ',
                text: 'text-3xl',
                popup: "bg-[#021308] text-white rounded-3xl outline outline-[#16A34A]",
                confirmButton: "bg-[#16A34A] rounded-full py-[10px] px-[30px]",
              },
              });
              const remainingMovies = fMovies.filter(
                (movie) => movie._id !== _id
              );
              setFmovies(remainingMovies);
            } else {
              Swal.fire({
                icon: "error",
                title: 'Failed !',
                text: `Something went wrong`,
                confirmButtonText: "Retry",
                scrollbarPadding: false,
                customClass: {
                  title: 'text-xl md:text-3xl font-bold ',
                  text: 'text-3xl',
                  popup: "bg-[#1d0602] text-white rounded-3xl outline outline-[#f12804]",
                  confirmButton: "bg-[#f12804] rounded-full py-[10px] px-[30px]",
                },
             
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
        <div className="absolute movie-play flex duration-300 w-full h-full  items-center justify-center text-3xl md:text-7xl text-transparent z-40">
          <CiPlay1 />
        </div>
        <h2 className="flex text-xs md:text-base top-2 left-2 md:top-4 z-40 md:left-4 px-1 py-[1px] md:px-3 rounded-full gap-[2px] md:gap-1 absolute items-center bg-primary backdrop-blur-md">
          <FaStar className="text-[#FFAA00] md:text-sm" /> {ratingStar}
        </h2>

        <div className="w-full md:h-96 lg:h-[600px]  h-48 ">
          <img
            className="w-full rounded-3xl h-full object-cover duration-300 movie-poster"
            src={poster}
            alt="movie poster"
          />
        </div>

        <div className="text-left movie-bg duration-300 absolute bottom-0 pb-2 md:pb-4 h-full flex flex-col justify-end w-full px-2 md:px-4  bg-gradient-to-t from-primary/70  to-transparent">
          <h1 className="md:text-lg text-sm font-semibold truncate">{title}</h1>
          <div className="flex text-xs md:text-sm items-center gap-2">
            <p>{releaseYear}</p>
          </div>
          <h2 className="text-[10px] md:text-sm md:pt-1 truncate">{genreArray.join(" | ")}</h2>

          <h2 className="flex truncate md:pt-1 items-center gap-1 text-[10px] md:text-sm">
            <RxStopwatch />
            {duration} mins
          </h2>
        </div>
      </div>
      <div className="pt-3 pb-4 flex md:justify-start justify-center  md:w-2/5 ">
        <button
          onClick={deleteFavourite}
          className="btn min-h-max h-max py-2 md:py-3 md:px-8 text-[10px] md:text-sm rounded-full  bg-accent/90 text-neutral hover:bg-accent/90 border-accent/90 hover:bg-base-100 duration-300 hover:border-accent/90"
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
