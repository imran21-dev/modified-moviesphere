import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

import { RxStopwatch } from "react-icons/rx";
import Rating from "react-rating";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ThemeContext } from "../context/AssetsContext";


const MovieDetails = () => {
    const {user} = useContext(ThemeContext)
    const email = user.email
    const movie = useLoaderData()
 
    const navigate = useNavigate()
    const {  poster,
        title,
        duration,
        releaseYear,
        ratingStar,
        genreArray,
        _id,
        summary,} = movie
    
    const defaultId = _id

    const favouriteMovie = {defaultId,poster,title,duration,summary,releaseYear,ratingStar,genreArray,email}  
        
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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete-movie/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
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
          });
    }

    
    return (
        <div className="relative">
           
         {
           movie &&   <div className="w-11/12 mx-auto relative z-10">
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
                <div className="pt-5 grid grid-cols-2 w-2/4 gap-6">

                   <button onClick={addToFavourite} className="btn min-h-max border border-transparent hover:border-neutral/10 hover:bg-neutral/20 h-max py-3 flex gap-1 items-center rounded-full bg-accent/90 text-white">Add to Favorite </button>

                   

                   <button onClick={deleteMovie} className="btn btn-outline min-h-max border-primary/40 hover:bg-neutral/20 h-max py-3 flex gap-1 items-center rounded-full bg-neutral/10 text-neutral hover:border-neutral/10 hover:text-white">Delete Movie  </button>

                   <Link to={`/update-movie/${_id}`} className="btn btn-outline min-h-max border-primary/40 hover:bg-neutral/20 h-max py-3 flex gap-1 items-center rounded-full bg-neutral/10 text-neutral hover:border-neutral/10 hover:text-white">Update Movie  </Link>

                </div>
                <h1 className="pt-10 font-bold text-lg">Summary :</h1>
                <p className="py-1">{summary}</p>
               </div>
           </section>
           <Link to='/all-movies' className="btn rounded-full flex gap-0 w-max mx-auto btn-outline px-20 mt-10">See all Movies <IoIosArrowRoundForward className="text-3xl " /></Link>
           
       </div>

         
         }
         {
         !movie &&   <div className="h-screen flex items-center flex-col justify-center">
            <h1>Oops! This movie isn&apos;t available on MovieSharp right now.</h1>
            <Link className="btn mt-10 bg-accent/90 text-white rounded-full border-none px-5 hover:bg-neutral/20 duration-300" to='/my-favourites'>Back to Favourites</Link>
         </div>
         }
        </div>
    );
};

export default MovieDetails;