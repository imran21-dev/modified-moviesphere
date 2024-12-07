import { useContext, useEffect, useState } from "react";
import GenresSelector from "../components/GenresSelector";
import Release from "../components/Release";
import StarRating from "../components/StarRating";
import { ThemeContext } from "../context/AssetsContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddMovie = () => {
  const {
    releaseYear,
    ratingStar,
    genreArray,
    setReleaseTool,
    setRatingTool,
    setGenreTooltip,
    user,
    setRelease,
    setRating,
    setSelectedGenre,
    setReleaseYear,
    setRatingStar,
    setGenreArray,
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
    const poster = form.poster.value;
    const title = form.title.value;
    const duration = form.duration.value;
    const summary = form.summary.value;
    const { email } = user;
    const movie = {
      poster,
      title,
      duration,
      summary,
      releaseYear,
      ratingStar,
      genreArray,
      email,
    };

    if (!releaseYear) {
      setReleaseTool(true);
      return;
    } else if (!ratingStar) {
      setRatingTool(true);
      return;
    } else if (!genreArray.length > 0) {
      setGenreTooltip(true);
      return;
    }

    fetch("https://server-side-nu-swart.vercel.app/add-movie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Uploaded !",
            text: "Successfully Uploaded this movie !",
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
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed !",
            text: `Something went wrong`,
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
    form.reset();
    setRelease(false);
    setRating(0);
    setSelectedGenre([]);
    setReleaseYear(null);
    setRatingStar(null);
    setGenreArray([]);


   
  };

  useEffect(()=>{
      window.scrollTo(0,0)
  },[])

  return (
    <div className="md:py-5  w-11/12 mx-auto text-center">
      <Helmet>
        <title>Add Movie | MovieSphere</title>
      </Helmet>
      <h1 className="text-2xl md:text-4xl font-semibold pt-20 pb-2">Upload a Movie</h1>
      <p className="md:text-base text-xs pb-2">Share your favorite movie with the world!</p>

      <form onSubmit={handleForm} className="lg:w-8/12 mx-auto text-xs md:text-sm relative ">
        <div className="form-control pb-1">
          <label className="label">
            <span className="label-text md:text-sm text-xs">Movie Poster</span>
          </label>
          <input
            type="text"
            name="poster"
            onKeyUp={handlePoster}
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
            <Release></Release>

            <StarRating></StarRating>
          </div>
          <GenresSelector></GenresSelector>
          

          <div className="form-control ">
            <label className="label">
              <span className="label-text md:text-sm text-xs">Summary</span>
            </label>
            <textarea
              onKeyUp={handleSummary}
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
              value="Upload"
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddMovie;
