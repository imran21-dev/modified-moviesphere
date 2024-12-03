import { Link, NavLink } from "react-router-dom";
import fakeUser from "../assets/fake-user.jpg";
import { RiMenu4Fill, RiUser6Line } from "react-icons/ri";
import { CiSearch, CiUser } from "react-icons/ci";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaCloudMoon } from "react-icons/fa";
import { BsCloudSunFill } from "react-icons/bs";

const Navbar = () => {
  const [hide, setHide] = useState(false);
  const visibleSearch = () => {
    setHide(!hide);
  };

  return (
    <div className="">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start w-max">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn text-xl h-max min-h-max lg:hidden"
            >
              <RiMenu4Fill />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="">
                <NavLink
                  to="/"
                  className="py-0 duration-300 rounded-none hover:text-accent px-3"
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/all-movies"
                  className="py-0 duration-300  rounded-none hover:text-accent px-3"
                >
                  All Movies
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/add-movies"
                  className="py-0 duration-300 rounded-none hover:text-accent px-3"
                >
                  Add Movie
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/my-favourites"
                  className="py-0 duration-300 rounded-none hover:text-accent px-3"
                >
                  My Favourites
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/tv-show"
                  className="py-0 duration-300 rounded-none hover:text-accent px-3"
                >
                  TV Show
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="font-bold text-[1.4rem]">
            Movie
            <span className="font-[Yellowtail] pr-[2px] text-2xl text-accent/80">
              S
            </span>
            phere
          </Link>
        </div>
        <div className="navbar-center px-10 hidden lg:flex">
          <ul className=" menu-horizontal  px-1 text-sm">
            <li className="">
              <NavLink
                to="/"
                className="py-0 duration-300 rounded-none hover:text-accent px-3"
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/all-movies"
                className="py-0 duration-300  rounded-none hover:text-accent px-3"
              >
                All Movies
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/add-movies"
                className="py-0 duration-300 rounded-none hover:text-accent px-3"
              >
                Add Movie
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/my-favourites"
                className="py-0 duration-300 rounded-none hover:text-accent px-3"
              >
                My Favourites
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/tv-show"
                className="py-0 duration-300 rounded-none hover:text-accent px-3"
              >
                TV Show
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end w-max flex-1">
          <Link
            to="/login"
            className="font-medium btn border border-accent hover:border-[#BEBEBE] hover:bg-[#BEBEBE] mx-2 min-h-max h-max duration-300 bg-accent/90 text-white hover:text-primary py-[6px] rounded-none px-5 text-sm"
          >
            Login
          </Link>

          <Link
            to="/login"
            className="font-medium btn btn-outline hover:bg-[#BEBEBE] hover:border-[#BEBEBE] min-h-max h-max duration-300   py-[6px] rounded-none px-5 text-sm mr-5"
          >
            Register
          </Link>

          <input
            id="searchBar"
            disabled={hide ? false : true}
            className={
              hide
                ? "bg-primary w-52 duration-300 border border-secondary py-1 focus:outline-none px-2 mr-2"
                : "bg-transparent -ml-5 w-0 duration-300 border-none border-secondary py-1 focus:outline-none px-2 mr-2"
            }
            type="text"
          />
          <CiSearch
            onClick={visibleSearch}
            className="text-3xl hover:bg-secondary rounded-full p-1 ml-1"
          />
          <CiUser className="text-3xl hover:bg-secondary rounded-full p-1 ml-1" />

          {/* <img className="w-8 h-8 object-cover rounded-full ml-1" src={fakeUser} alt="" /> */}
          <label className="swap swap-rotate ml-1">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="light" />

            {/* sun icon */}
            <BsCloudSunFill className="swap-off text-3xl  rounded-full p-1" />

            {/* moon icon */}
            <FaCloudMoon className="swap-on text-3xl rounded-full p-1" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
