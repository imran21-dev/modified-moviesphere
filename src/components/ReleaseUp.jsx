import { useContext, useEffect, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { ThemeContext } from "../context/AssetsContext";
import { useLoaderData } from "react-router-dom";

const ReleaseUp = () => {
  const {
    setReleaseYearUp,
    releaseToolUp,
    setReleaseToolUp,
    releaseUp,
    setReleaseUp,
  } = useContext(ThemeContext);
  const [genreSwitch, setGenreSwitch] = useState(false);
  const needToUpdateMovie = useLoaderData();
  const defaultReleaseYear = needToUpdateMovie.releaseYear;

  useEffect(() => {
    setReleaseUp(defaultReleaseYear);
    setReleaseYearUp(defaultReleaseYear);
  }, [defaultReleaseYear, setReleaseUp, setReleaseYearUp]);

  const handleGenreSwitch = () => {
    setGenreSwitch(!genreSwitch);
  };
  const years = [];
  for (let year = 2024; year >= 1800; year--) {
    years.push(year);
  }
  const addYear = (year) => {
    setReleaseUp(year);
    setGenreSwitch(!genreSwitch);
    setReleaseYearUp(year);
    setReleaseToolUp(false);
  };

  return (
    <div className="w-2/4">
      <div className="form-control pb-1 ">
        <label className="label">
          <span className="label-text md:text-sm text-xs">Release Year</span>
        </label>
        <section className="relative">
          <div
            className={`tooltip w-full  tooltip-bottom ${
              releaseToolUp ? "tooltip-open" : ""
            }`}
            data-tip="Add release date"
          >
            <div
              onClick={handleGenreSwitch}
              className="font-thin rounded-full hover:bg-neutral/10 border  border-secondary  px-5 py-2 cursor-pointer"
            >
              {releaseUp ? (
                <h1>{releaseUp}</h1>
              ) : (
                <h1 className="flex items-center gap-1 justify-center">
                  Release year <IoChevronDownSharp />
                </h1>
              )}
            </div>
          </div>
          <ul
            className={
              genreSwitch
                ? "text-sm absolute rounded-xl h-52 w-full z-50 bg-secondary/50 backdrop-blur-md overflow-y-auto text-left"
                : "text-sm text-left hidden"
            }
          >
            {years.map((year) => (
              <li
                onClick={() => addYear(year)}
                className="hover:bg-secondary cursor-pointer rounded-full md:py-1 px-2"
                key={year}
              >
                {year}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ReleaseUp;
