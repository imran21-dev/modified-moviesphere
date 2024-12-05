import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdDelete, MdFavorite } from "react-icons/md";
import { RxStopwatch } from "react-icons/rx";
import Rating from "react-rating";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const MovieDetails = () => {
    const movie = useLoaderData()
    const navigate = useNavigate()
    const {  poster,
        title,
        duration,
        releaseYear,
        ratingStar,
        genreArray,
        _id,
        summary,
    email} = movie

    const favouriteMovie = {poster,title,duration,summary,releaseYear,ratingStar,genreArray,email}  

    const addToFavourite = () => {
        fetch('http://localhost:5000/add-favourite',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(favouriteMovie)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Added !",
                    text: "This movie is added to your favourite list",
                    
                  });
            }
            else{
                Swal.fire({
                    title: 'Failed!',
                    text: `Something went wrong`,
                    icon: 'error',
                    confirmButtonText: 'Retry'
                  })
            }
        })
    }    

    const deleteMovie = () => {
        fetch(`http://localhost:5000/delete-movie/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Success!",
                    text: 'Successfully delete',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/all-movies')
            }
            else{
                Swal.fire({
                    title: 'Failed!',
                    text: `Something went wrong`,
                    icon: 'error',
                    confirmButtonText: 'Retry'
                  })
            }
        })
    }

    
    return (
        <div className="relative">
           
            <div className="w-11/12 mx-auto relative z-10">
            <h1 className="text-4xl font-semibold pt-24 pb-6">Details</h1>
            <section className="flex gap-6">
                <div className="w-2/4 h-[600px]">
                    <img className="h-full w-full object-cover rounded-3xl" src={poster} alt="" />
                </div>
                <div className="w-2/4 ">
                  <h1 className="text-3xl  font-semibold">{title}</h1>
                  <h2 className="text-xl py-2">{releaseYear}</h2>
                 <div className="flex gap-2">
                 <Rating
                  placeholderRating={ratingStar}
                  readonly
                  className=""
                  emptySymbol={
                      <FaStar className="text-gray-300 text-2xl mr-[2px]" />
                  }
                  placeholderSymbol={
                      <FaStar className="text-[#FFAA00] text-2xl mr-[2px]" />
  
                  }
                  fullSymbol={
                      <FaStar className="text-[#FFAA00] text-2xl mr-[2px]" />
  
                  }
                /> <span className="text-lg">({ratingStar})</span>
                 </div>
                 <h2 className="py-2">{genreArray.join(' | ')}</h2>
                 <h1 className="font-bold"></h1>
                 <h2 className="flex truncate pt-1 items-center gap-2"><RxStopwatch className="text-xl"/> <span className="font-medium">Duration :</span>{duration} mins</h2>
                 <div className="pt-5 flex gap-6">

                    <button onClick={addToFavourite} className="btn min-h-max border border-transparent hover:border-neutral/10 hover:bg-neutral/20 h-max py-3 flex gap-1 items-center rounded-full bg-accent/90 text-white">Add to Favorite <MdFavorite className="text-lg"/></button>

                    <button onClick={deleteMovie} className="btn btn-outline min-h-max border-primary/40 hover:bg-neutral/20 h-max py-3 flex gap-1 items-center rounded-full bg-neutral/10 text-neutral hover:border-neutral/10 hover:text-white">Delete Movie <MdDelete className="text-lg"/> </button>

                 </div>
                 <h1 className="pt-10 font-bold text-lg">Summary :</h1>
                 <p className="py-1">{summary}</p>
                </div>
            </section>
            <Link to='/all-movies' className="btn rounded-full flex gap-0 w-max mx-auto btn-outline px-20 mt-10">See all Movies <IoIosArrowRoundForward className="text-3xl " /></Link>
            
        </div>
        </div>
    );
};

export default MovieDetails;