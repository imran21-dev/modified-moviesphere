import { Link, NavLink } from "react-router-dom";
import { RiMenu4Fill,  } from "react-icons/ri";
import {  CiSearch, CiUser } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";

import { FaCloudMoon } from "react-icons/fa";
import { BsCloudSunFill } from "react-icons/bs";
import Headroom from "react-headroom";
import { ThemeContext } from "../context/AssetsContext";
import { GridLoader } from "react-spinners";
import { TbLogout2 } from "react-icons/tb";
import { signOut } from "firebase/auth";
import { auth } from "../provider/firebase.config";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user,loadPrivate} = useContext(ThemeContext)
  const [hide, setHide] = useState(false);
  const visibleSearch = () => {
    setHide(!hide);
  };


  const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logOut = () => {
    signOut(auth)
    .then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Success!",
        text: 'Successfully loged out',
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error => {
      Swal.fire({
        title: 'Failed!',
        text: `${error.message}`,
        icon: 'error',
        confirmButtonText: 'Retry'
      })
    })
  }

  return (
    <Headroom className="absolute top-0 left-0 z-50 w-full ">

    <div className={scrollPosition === 0 ? 'bg-gradient-to-b from-primary/10 to-transparent' :'bg-primary/20 backdrop-blur-md '}>
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
                  to='/my-favourites'
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
                to="/add-movie"
                className="py-0 duration-300 rounded-none hover:text-accent px-3"
              >
                Add Movie
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to='/my-favourites'
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
        {loadPrivate ?  user ?  <>
         </> : <>
         <Link
         to="/login"
         className="font-medium btn border border-accent hover:border-[#BEBEBE] hover:bg-[#BEBEBE] mx-2 min-h-max h-max duration-300 bg-accent/90 text-white hover:text-primary py-[6px] rounded-full px-5 text-sm"
       >
         Login
       </Link>

       <Link
         to="/register"
         className="font-medium btn border-secondary btn-outline hover:bg-[#BEBEBE] hover:border-[#BEBEBE] min-h-max h-max duration-300   py-[6px] rounded-full px-5 text-sm mr-5"
       >
         Register
       </Link>
         </> :
           <></>
        
        }

          <input
            id="searchBar"
            disabled={hide ? false : true}
            className={
              hide
                ? "bg-transparent w-52 duration-300 border rounded-full border-secondary py-1 focus:outline-none px-2 mr-2"
                : "bg-transparent -ml-5 w-0 duration-300 border-none border-secondary py-1 focus:outline-none px-2 mr-2"
            }
            type="text"
          />
          <CiSearch
            onClick={visibleSearch}
            className="text-3xl hover:bg-secondary rounded-full p-1"
          />
          <label className="swap swap-rotate ml-1">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="light" />

            {/* sun icon */}
            <BsCloudSunFill className="swap-off text-3xl  rounded-full p-1" />

            {/* moon icon */}
            <FaCloudMoon className="swap-on text-3xl rounded-full p-1" />
          </label>
          {
           loadPrivate ? user ? <div className="userImg relative">
            <img className="w-8 h-8 object-cover rounded-full ml-2" src={user.photoURL} alt="" />
            <div className="hidden absolute -bottom-[5.9rem] w-max -right-3  px-5 py-3 userName rounded-2xl bg-secondary">
              <div className="w-4 h-4 bg-secondary absolute -top-[6px] right-4 rotate-45"></div>
              <h1 className="text-sm font-semibold bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">{user.displayName}</h1>
              <button onClick={logOut} className="btn mt-4 btn-outline text-xs px-4  border-secondary rounded-full min-h-max h-max py-2 hover:bg-accent/90 hover:border-accent/90 hover:text-white"><TbLogout2 className="text-sm" />Log Out</button>
            </div>
            </div> :<CiUser className="text-3xl hover:bg-secondary rounded-full p-1 ml-2" /> :  <GridLoader 
           size={5}
           color="#bebebe"
          
           />
          }
          

          
          
        </div>
      </div>
    </div>
    </Headroom>

  );
};

export default Navbar;
