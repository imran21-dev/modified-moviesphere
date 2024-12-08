import { Link, NavLink } from "react-router-dom";
import { RiCloseFill, RiMenu4Fill,  } from "react-icons/ri";
import {  CiUser } from "react-icons/ci";
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
        icon: "success",
        title: "Logged Out !",
        text: "Successfully logged out!",
        confirmButtonText: "Okay",
        scrollbarPadding: false,
        showConfirmButton: false,
        timer: 1500,
      customClass: {
        title: 'text-xl md:text-3xl font-bold ',
        text: 'text-3xl',
        popup: "bg-[#021308] text-white rounded-3xl outline outline-[#16A34A]",
        confirmButton: "bg-[#16A34A] rounded-full py-[10px] px-[30px]",
      },
      });
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: 'Failed !',
        text: `${error.message}`,
        confirmButtonText: "Retry",
        scrollbarPadding: false,
        customClass: {
          title: 'text-xl md:text-3xl font-bold ',
          text: 'text-3xl',
          popup: "bg-[#1d0602] text-white rounded-3xl outline outline-[#f12804]",
          confirmButton: "bg-[#f12804] rounded-full py-[10px] px-[30px]",
        },
     
      });
    })
  }

  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <Headroom className="absolute top-0 left-0 z-50 w-full ">

    <div className={scrollPosition === 0 ? 'bg-gradient-to-b from-primary/10 to-transparent' :'bg-primary/20 backdrop-blur-md '}>
      <div className="navbar w-11/12 mx-auto p-0 md:p-2">
        <div className="navbar-start w-max">
          <div className="relative z-50 ">
            <div
              onClick={handleMenu}
              tabIndex={0}
              role="button"
              className="btn px-1 mr-1 rounded-full bg-transparent hover:bg-accent/90 hover:text-white border-none py-1 text-xl h-max min-h-max lg:hidden"
            >
              {menu ?<RiCloseFill /> : <RiMenu4Fill />}
            </div>
            <ul
            id="mobileNav"
              tabIndex={0}
              className={`${menu ?'block' : 'hidden'} absolute z-50 bg-primary border border-secondary rounded-3xl mt-3 min-w-40 max-w-max text-sm  p-2 shadow`}
            >
              <li className="">
                <NavLink
                onClick={handleMenu}
                  to="/"
                  className="py-[2px] rounded-xl duration-300  hover:text-accent px-3 flex"
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                onClick={handleMenu}
                  to="/all-movies"
                  className="py-[2px] rounded-xl duration-300  hover:text-accent px-3 flex"
                >
                  All Movies
                </NavLink>
              </li>
              <li className="">
                <NavLink
                onClick={handleMenu}
                  to="/add-movie"
                  className="py-[2px] rounded-xl duration-300 hover:text-accent px-3 flex"
                >
                  Add Movie
                </NavLink>
              </li>
              <li className="">
                <NavLink
                onClick={handleMenu}
                  to='/my-favorites'
                  className="py-[2px] rounded-xl duration-300 hover:text-accent px-3 flex"
                >
                  My Favorites
                </NavLink>
              </li>
              <li className="">
                <NavLink
                onClick={handleMenu}
                  to="/tv-show"
                  className="py-[2px] rounded-xl duration-300 hover:text-accent px-3 flex"
                >
                  TV Show
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="font-bold md:text-[1.4rem]">
            Movie
            <span className="font-[Yellowtail] pr-[2px] text-xl md:text-2xl text-accent/80">
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
                to='/my-favorites'
                className="py-0 duration-300 rounded-none hover:text-accent px-3"
              >
                My Favorites
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
         className="font-medium  btn border border-accent hover:border-[#BEBEBE] hover:bg-[#BEBEBE] md:mx-2 mx-1 min-h-max h-max duration-300 bg-accent/90 text-white hover:text-primary md:py-[6px] py-1 rounded-full md:px-5 px-2 md:text-sm text-xs"
       >
         Login
       </Link>

       <Link
         to="/register"
         className="font-medium  btn border-secondary btn-outline hover:bg-[#BEBEBE] hover:border-[#BEBEBE] min-h-max h-max duration-300   md:py-[6px] py-1 rounded-full md:px-5 px-2 md:text-sm text-xs md:mr-5"
       >
         Register
       </Link>
         </> :
           <></>
        
        }

         
          <label className="swap swap-rotate ml-1">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="light" />

            {/* sun icon */}
            <BsCloudSunFill className="swap-off text-2xl md:text-3xl  rounded-full p-1" />

            {/* moon icon */}
            <FaCloudMoon className="swap-on text-2xl md:text-3xl rounded-full p-1" />
          </label>
          {
           loadPrivate ? user ? <div className="userImg relative">
            <img className="md:w-8 md:h-8 h-6 w-6 object-cover rounded-full ml-2" src={user.photoURL} alt="" />
            <div className="hidden absolute -bottom-[5.9rem] w-max -right-3  px-5 py-3 userName rounded-2xl bg-secondary">
              <div className="w-4 h-4 bg-secondary absolute -top-[6px] right-4 rotate-45"></div>
              <h1 className="text-sm font-semibold bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">{user.displayName}</h1>
              <button onClick={logOut} className="btn mt-4 btn-outline text-xs px-4  border-secondary rounded-full min-h-max h-max py-2 hover:bg-accent/90 hover:border-accent/90 hover:text-white"><TbLogout2 className="text-sm" />Log Out</button>
            </div>
            </div> :<CiUser className="text-2xl md:text-3xl hover:bg-secondary rounded-full p-1 md:ml-2" /> :  <GridLoader 
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
