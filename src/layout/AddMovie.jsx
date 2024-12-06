import { useContext, useState } from "react";
import GenresSelector from "../components/GenresSelector";
import Release from "../components/Release";
import StarRating from "../components/StarRating";
import { ThemeContext } from "../context/AssetsContext";
import Swal from "sweetalert2";


const AddMovie = () => {
  const { releaseYear, ratingStar, genreArray,setReleaseTool, setRatingTool, setGenreTooltip,user,setRelease,setRating,setSelectedGenre } = useContext(ThemeContext);

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
    const titleRegX = /^(?!\s*$).*(\S.*\S)$/;

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
    const poster = form.poster.value;
    const title = form.title.value;
    const duration = form.duration.value;
    const summary = form.summary.value;
    const {email} = user
    const movie = {
      poster,
      title,
      duration,
      summary,
      releaseYear,
      ratingStar,
      genreArray,
      email
    };

    if (!releaseYear) {
      setReleaseTool(true)
      return
    } else if (!ratingStar) {
      setRatingTool(true)
      return
    }
     else if (!genreArray.length > 0) {
      setGenreTooltip(true)
      return
    }

    fetch('http://localhost:5000/add-movie',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(movie)

    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Uploaded !",
          text: "Successfully Uploaded this movie !",
          confirmButtonText: "Okay",
          scrollbarPadding: false,
        customClass: {
          title: 'text-xl md:text-3xl font-bold ',
          text: 'text-3xl',
          popup: "bg-[#021308] text-white rounded-3xl outline outline-[#16A34A]",
          confirmButton: "bg-[#16A34A] rounded-full py-[10px] px-[30px]",
        },
        });
      }else{
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
    form.reset()
    setRelease(false)
    setRating(0)
    setSelectedGenre([])
   











  };
  return (
    <div className="py-14 pb-96 w-11/12 mx-auto text-center">
      <h1 className="text-4xl font-semibold pt-20 pb-2">Upload a Movie</h1>
      <p>Share your favorite movie with the world!</p>

      <form onSubmit={handleForm} className="w-8/12 mx-auto text-sm relative ">
        <div className="form-control pb-1">
          <label className="label">
            <span className="label-text">Movie Poster</span>
          </label>
          <input
            type="text"
            name="poster"
            onKeyUp={handlePoster}
            placeholder="Enter the movie poster URL"
            className={`px-5 rounded-full py-2 placeholder:text-neutral/30 placeholder:font-thin bg-transparent border  focus:outline-none border-secondary`}
            required
          />
          {posterValid ? '': <span className="text-accent/90 text-left text-xs pt-1">Enter a valid poster image URL</span>}
        </div>


        <div className="form-control pb-1">
          <label className="label">
            <span className="label-text">Movie Title</span>
          </label>
          <input
            type="text"
            name="title"
            onKeyUp={handleTitle}
            placeholder="Enter the movie title"
            className={`px-5 py-2 placeholder:text-neutral/30 placeholder:font-thin bg-transparent border border-secondary focus:outline-none rounded-full `}
            required
          />
          {titleValid ? '': <span className="text-accent/90 text-left text-xs pt-1">Title must be at least 2 characters and no space on the right</span>}
        </div>

        <section className="grid grid-cols-2 relative  gap-6">
          <div className="form-control pb-1">
            <label className="label">
              <span className="label-text">Duration</span>
            </label>
            <input
              type="number"
              name="duration"
              onKeyUp={handleDuration}
              placeholder="Input movie duration (in minutes)"
              className={`px-5 rounded-full py-2 number placeholder:text-neutral/30 placeholder:font-thin bg-transparent border border-secondary focus:outline-none`}
              required
            />
            {durationValid ? '': <span className="text-accent/90 text-left text-xs pt-1">Duration must be greater than 60 minutes</span>}
          </div>

          <GenresSelector></GenresSelector>
          <div className="absolute flex items-start justify-between pr-3 w-2/4 top-24 left-0">
          
            <Release></Release>
       
            <StarRating></StarRating>
          </div>

          <div className="form-control absolute left-0 w-3/4 top-[180px] pb-1">
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <textarea
              onKeyUp={handleSummary}
              name="summary"
              required
              placeholder="Provide a brief summary of the movie."
              rows={7}
              className="px-5 rounded-3xl resize-none py-2 placeholder:text-neutral/30 placeholder:font-thin bg-transparent  border border-secondary focus:outline-none"
            ></textarea>
             {summaryValid ? '': <span className="text-accent/90 text-left text-xs pt-1">Summary must be at least 10 characters</span>}
          </div>

          <div className="form-control absolute left-0 w-3/4 top-[400px]">
            <input
              id="uploadBtn"
              disabled={
                posterValid && titleValid && durationValid && summaryValid
                  ? false
                  : true
              }
              className="btn  bg-accent/90 border-none rounded-full hover:bg-[#BEBEBE] text-white"
              type="submit"
              value="Upload"
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddMovie;
