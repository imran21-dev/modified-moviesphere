import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

import { RxStopwatch } from "react-icons/rx";
import Rating from "react-rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { ThemeContext } from "../context/AssetsContext";
import { Helmet } from "react-helmet-async";
import { GridLoader } from "react-spinners";


const MovieDetails = () => {
    const {user} = useContext(ThemeContext)
    const email = user?.email
    const [movie, setMovie] = useState([])
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
   
    useEffect(()=>{
      setLoading(true)
      window.scrollTo(0,0)
      fetch(`https://server-side-nu-swart.vercel.app/movieDetails/${id}`)
      .then(res => res.json())
      .then(data => {
          setMovie(data)
          setLoading(false)

      })
  },[id])
 
 
    const navigate = useNavigate()

    const poster = movie?.poster;
    const title = movie?.title;
    const duration = movie?.duration;
    const releaseYear = movie?.releaseYear;
    const ratingStar = movie?.ratingStar;
    const genreArray = movie?.genreArray;
    const _id = movie?._id;
    const summary = movie?.summary;

    
    const defaultId = _id

    const favouriteMovie = {defaultId,poster,title,duration,summary,releaseYear,ratingStar,genreArray,email}  
        
    const addToFavourite = () => {
        fetch('https://server-side-nu-swart.vercel.app/add-favourite',{
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
                    text: "This Movie is added to your Favorite list",
                    confirmButtonText: "Got it",
                    scrollbarPadding: false,
                  customClass: {
                    title: 'text-xl md:text-3xl font-bold ',
                    text: 'text-3xl',
                    popup: "bg-[#021308] text-white rounded-3xl outline outline-[#16A34A]",
                    confirmButton: "bg-[#16A34A] rounded-full py-[10px] px-[30px]",
                  },
                  });
            }
            else{
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
        })
    }    

    const deleteMovie = () => {
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
                fetch(`https://server-side-nu-swart.vercel.app/delete-movie/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire({
                            icon: "success",
                            title: "Deleted !",
                            text: "Successfully deleted this movie !",
                            confirmButtonText: "Close",
                            scrollbarPadding: false,
                          customClass: {
                            title: 'text-xl md:text-3xl font-bold ',
                            text: 'text-3xl',
                            popup: "bg-[#021308] text-white rounded-3xl outline outline-[#16A34A]",
                            confirmButton: "bg-[#16A34A] rounded-full py-[10px] px-[30px]",
                          },
                          });
                          navigate('/all-movies')
                    }
                    else{
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
                })
             
            }
          });
    }
 
    
    return (
        <div className="relative">
           <Helmet>
                <title>{`Movie Details | ${_id} | MovieSphere`}</title>
            </Helmet>

            {
            loading ? <div className="h-screen flex justify-center items-center"><GridLoader
            size={10}
            color="#bebebe"
           
            /></div> : 

         <div>
         {
           movie &&   <div className="w-11/12 mx-auto relative z-10">
           <h1 className="text-2xl md:text-4xl font-semibold pt-24 pb-6">Details</h1>
           <section className="flex lg:flex-row flex-col gap-6">
               <div className="lg:w-2/4 h-96 md:h-[600px]">
                   <img className="h-full w-full object-cover rounded-3xl" src={poster} alt="" />
               </div>
               <div className="lg:w-2/4 ">
                 <h1 className="text-xl md:text-3xl  font-semibold">{title}</h1>
                 <h2 className="md:text-xl py-2">{releaseYear}</h2>
                <div className="flex md:gap-2">
                <Rating
                 placeholderRating={ratingStar}
                 readonly
                 className=""
                 emptySymbol={
                     <FaStar className="text-gray-300 md:text-2xl mr-[2px]" />
                 }
                 placeholderSymbol={
                     <FaStar className="text-[#FFAA00] md:text-2xl mr-[2px]" />
 
                 }
                 fullSymbol={
                     <FaStar className="text-[#FFAA00] md:text-2xl mr-[2px]" />
 
                 }
               /> <span className="md:text-lg md:-mt-0 -mt-[2px]">({ratingStar})</span>
                </div>
                <h2 className="py-2">{genreArray?.join(' | ')}</h2>
                <h1 className="font-bold"></h1>
                <h2 className="flex truncate pt-1 items-center gap-2"><RxStopwatch className="text-xl"/> <span className="font-medium">Duration :</span>{duration} mins</h2>
                <div className="pt-5 grid grid-cols-2 2xl:w-2/4 gap-6">

                   <button onClick={addToFavourite} className="btn min-h-max border border-transparent hover:border-neutral/10 hover:bg-neutral/20 h-max py-3 flex gap-1 items-center rounded-full bg-accent/90 text-white">Add to Favorite </button>

                   

                   <button onClick={deleteMovie} className="btn btn-outline min-h-max border-primary/40 hover:bg-neutral/20 h-max py-3 flex gap-1 items-center rounded-full bg-neutral/10 text-neutral hover:border-neutral/10 hover:text-white">Delete Movie  </button>

                   <Link to={`/update-movie/${_id}`} className="btn btn-outline min-h-max border-primary/40 hover:bg-neutral/20 h-max py-3 flex gap-1 items-center rounded-full bg-neutral/10 text-neutral hover:border-neutral/10 hover:text-white">Update Movie  </Link>

                </div>
                <h1 className="pt-10 font-bold text-lg">Summary :</h1>
                <p className="py-1 md:text-base text-sm">{summary}</p>
               </div>
           </section>
           <Link to='/all-movies' className="btn rounded-full flex gap-0 w-max mx-auto btn-outline px-20 mt-10">See all Movies <IoIosArrowRoundForward className="text-3xl " /></Link>
           
       </div>

         
         }
         {
         !movie &&   <div className="h-screen flex items-center flex-col justify-center">
            <h1>Oops! This movie isn&apos;t available on MovieSharp right now.</h1>
            <Link className="btn mt-10 bg-accent/90 text-white rounded-full border-none px-5 hover:bg-neutral/20 duration-300" to='/my-favorites'>Back to Favorites</Link>
         </div>
         }
         </div>
            }
           
        </div>
    );
};

export default MovieDetails;