import { useContext, useEffect, useState } from "react";



import { ThemeContext } from "../context/AssetsContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReleaseUp from "../components/ReleaseUp";
import StarRatingUp from "../components/StarRatingUp";
import GenresSelectorUp from "../components/GenresSelectorUp";
import { LuPenLine, LuUndo } from "react-icons/lu";


const UpdateMovie = () => {
const needToUpdateMovie = useLoaderData()
const {poster, title, duration, summary,_id,email} = needToUpdateMovie
const navigate = useNavigate()
const [key, setKey] = useState(0);
  const {
    releaseYearUp,
    ratingStarUp,
    genreArrayUp,
    setReleaseToolUp,
    setRatingToolUp,
    setGenreTooltipUp,
    setReleaseUp,
    setRatingUp,
    setSelectedGenreUp,
    setReleaseYearUp,
    setRatingStarUp,
    setGenreArrayUp,
  } = useContext(ThemeContext);

  const [posterValid, setPosterValid] = useState(true);
  const [titleValid, setTitleValid] = useState(true);
  const [durationValid, setDurationValid] = useState(true);
  const [summaryValid, setSummaryValid] = useState(true);

  const validateURL = (url) => {
    try {
      new URL(url);
      return true;
      // eslint-disable-next-line no-unused-vars
    } catch (_) {
      return false;
    }
  };

  const handlePoster = (e) => {
    const value = e.target.value;
    const target = e.target;
    target.className =
      "px-5 rounded-full py-2 placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-secondary";
    setPosterValid(true);

    if (value.length > 0) {
      if (validateURL(value)) {
        target.className =
          "px-5 rounded-full py-2 placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-secondary";
        setPosterValid(true);
      } else {
        target.className =
          "px-5 py-2 rounded-full placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-accent/90";
        setPosterValid(false);
      }
    }
  };
  const handleTitle = (e) => {
    const titleRegX = /^(?!\s)(?=.{2,}).*$/;

    const value = e.target.value;
    const target = e.target;
    target.className =
      "px-5 rounded-full py-2 placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-secondary";
    setTitleValid(true);

    if (value.length > 0) {
      if (titleRegX.test(value)) {
        target.className =
          "px-5 rounded-full py-2 placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-secondary";
        setTitleValid(true);
      } else {
        target.className =
          "px-5 py-2 rounded-full placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-accent/90";
        setTitleValid(false);
      }
    }
  };
  const handleDuration = (e) => {
    const target = e.target;
    const value = e.target.value;
    const numberValue = parseFloat(value);

    const validateNumber = (input) => {
      const regex = /^(?!\s*$)\d+(\.\d+)?$/;
      const number = parseFloat(input);
      return regex.test(input) && number > 60;
    };

    target.className =
      "px-5 py-2 rounded-full number placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-secondary";
    setDurationValid(true);

    if (value.length > 0) {
      if (validateNumber(numberValue)) {
        target.className =
          "px-5 py-2 rounded-full number placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-secondary";
        setDurationValid(true);
      } else {
        target.className =
          "px-5 py-2 rounded-full number placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-accent/90";
        setDurationValid(false);
      }
    }
  };
  const handleSummary = (e) => {
    const summaryRegX = /^.{10,}$/;
    const value = e.target.value;
    const target = e.target;
    target.className =
      "px-5 rounded-3xl py-2 resize-none  placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-secondary";
    setSummaryValid(true);
    if (value.length > 0) {
      if (summaryRegX.test(value)) {
        target.className =
          "px-5 rounded-3xl py-2 resize-none  placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-secondary";
        setSummaryValid(true);
      } else {
        target.className =
          "px-5 rounded-3xl py-2 resize-none  placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-accent/90";
        setSummaryValid(false);
      }
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const posterUp = form.poster.value;
    const titleUp = form.title.value;
    const durationUp = form.duration.value;
    const summaryUp = form.summary.value;

    const movieUp = {
      posterUp,
      titleUp,
      durationUp,
      summaryUp,
      releaseYearUp,
      ratingStarUp,
      genreArrayUp,
      email
    
    };

   

    if (!releaseYearUp) {
      setReleaseToolUp(true);
      return;
    } else if (!ratingStarUp) {
      setRatingToolUp(true);
      return;
    } else if (!genreArrayUp.length > 0) {
      setGenreTooltipUp(true);
      return;
    }

    fetch(`https://server-side-nu-swart.vercel.app/update-movie-data/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieUp),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Updated !",
            text: "Successfully Updated this movie !",
            confirmButtonText: "Okay",
            scrollbarPadding: false,
            customClass: {
              title: "text-xl md:text-3xl font-bold ",
              text: "text-3xl",
              popup:
                "bg-[#021308] text-white rounded-3xl outline outline-[#16A34A]",
              confirmButton: "bg-[#16A34A] rounded-full py-[10px] px-[30px]",
            },
          });
          form.reset();
          setReleaseUp(false);
          setRatingUp(0);
          setSelectedGenreUp([]);
          setReleaseYearUp(null);
          setRatingStarUp(null);
          setGenreArrayUp([]);
          navigate(`/movie-details/${_id}`)
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed !",
            text: 'No Changes Detected',
            confirmButtonText: "Retry",
            scrollbarPadding: false,
            customClass: {
              title: "text-xl md:text-3xl font-bold ",
              text: "text-3xl",
              popup:
                "bg-[#1d0602] text-white rounded-3xl outline outline-[#f12804]",
              confirmButton: "bg-[#f12804] rounded-full py-[10px] px-[30px]",
            },
          });
        }
      });
   


   
  };

  useEffect(()=>{
      window.scrollTo(0,0)
  },[])

  const [editToggle , setEditToggle] = useState(false)

  const editToggleBtn = () => {
    setEditToggle(!editToggle)
    setKey((x) => x + 1)

  }

  return (
    <div key={key} className="md:py-5  w-11/12 mx-auto text-center ">
      
      <div className={`${editToggle ? 'hidden' : 'flex'} absolute w-full h-full top-0 left-0 bg-base-100/30 backdrop-blur-sm z-30`}></div>
      <Helmet>
        <title>Update Movie | {needToUpdateMovie._id} | MovieSphere</title>
      </Helmet>
      <section className="relative z-30">
      <h1 className="text-2xl md:text-4xl font-semibold pt-20 pb-2">Update This Movie</h1>
      <p className="md:text-base text-xs pb-2">Keep Your Favorite Movies Up-to-Date</p>
      </section>
      <section className="relative pb-3 z-30 lg:w-8/12 mx-auto flex justify-start">
      {
       editToggle ? <button onClick={editToggleBtn} className="btn md:text-base text-xs  bg-base-100 border border-secondary hover:bg-accent/90 text-neutral hover:text-white rounded-full min-h-max h-max md:py-2 py-1"><LuUndo />Undo</button> : <button onClick={editToggleBtn} className="btn md:text-base text-xs  bg-base-100 border border-secondary hover:bg-accent/90 text-neutral hover:text-white rounded-full min-h-max h-max md:py-2 py-1"><LuPenLine />Edit</button>
      }
     

     
      </section>

      <form onSubmit={handleForm} className="lg:w-8/12 mx-auto text-xs md:text-sm relative z-20">
        <div className="form-control pb-1">
          <label className="label">
            <span className="label-text md:text-sm text-xs">Movie Poster</span>
          </label>
          <input
            type="text"
            name="poster"
            onKeyUp={handlePoster}
            defaultValue={poster}
            
            placeholder="Enter the movie poster URL"
            className={`px-5 rounded-full py-2 placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-secondary`}
            required
          />
          {posterValid ? (
            ""
          ) : (
            <span className="text-accent/90 text-left text-xs pt-1">
              Enter a valid poster image URL
            </span>
          )}
        </div>

        <div className="form-control pb-1">
          <label className="label">
            <span className="label-text md:text-sm text-xs">Movie Title</span>
          </label>
          <input
            type="text"
            name="title"
            onKeyUp={handleTitle}
            defaultValue={title}

            placeholder="Enter the movie title"
            className={`px-5 py-2 placeholder:text-neutral/30 placeholder:font-thin bg-transparent border border-secondary focus:outline-none rounded-full `}
            required
          />
          {titleValid ? (
            ""
          ) : (
            <span className="text-accent/90 text-left text-xs pt-1">
              Title must be at least 2 characters
            </span>
          )}
        </div>

        <section className="">
          <div className="form-control pb-1">
            <label className="label">
              <span className="label-text md:text-sm text-xs">Duration</span>
            </label>
            <input
              type="number"
              name="duration"
              onKeyUp={handleDuration}
            defaultValue={duration}

              placeholder="Input movie duration (in minutes)"
              className={`px-5 rounded-full py-2 number placeholder:text-neutral/30 placeholder:font-thin bg-transparent border border-secondary focus:outline-none`}
              required
            />
            {durationValid ? (
              ""
            ) : (
              <span className="text-accent/90 text-left text-xs pt-1">
                Duration must be greater than 60 minutes
              </span>
            )}
          </div>

          <div className="flex items-start gap-10">
            <ReleaseUp></ReleaseUp>

            <StarRatingUp></StarRatingUp>
          </div>
          <GenresSelectorUp></GenresSelectorUp>

          <div className="form-control ">
            <label className="label">
              <span className="label-text md:text-sm text-xs">Summary</span>
            </label>
            <textarea
              onKeyUp={handleSummary}
            defaultValue={summary}

              name="summary"
              required
              placeholder="Provide a brief summary of the movie."
              rows={7}
              className="px-5 rounded-3xl resize-none py-2 placeholder:text-neutral/30 placeholder:font-thin bg-transparent  border border-secondary focus:outline-none"
            ></textarea>
            {summaryValid ? (
              ""
            ) : (
              <span className="text-accent/90 text-left text-xs pt-1">
                Summary must be at least 10 characters
              </span>
            )}
          </div>

          <div className="form-control pt-5">
            <input
              id="uploadBtn"
              disabled={
                posterValid && titleValid && durationValid && summaryValid
                  ? false
                  : true
              }
              className="btn min-h-max h-max py-2 md:py-3 text-sm md:text-sm bg-accent/90 border-none rounded-full hover:bg-[#BEBEBE] text-white"
              type="submit"
              value="Update"
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default UpdateMovie;