
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosCall,  IoIosMail, } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div className="bg-neutral/10 backdrop-blur-md mt-20">
     <div className="w-11/12 mx-auto pt-20">
      <div className="flex justify-between">
       <div className="flex flex-col w-2/6">
       <Link to="/" className="font-bold text-[1.4rem] w-max">
          Movie
          <span className="font-[Yellowtail] pr-[2px] text-2xl text-accent/80">
            S
          </span>
          phere
        </Link>
        <p className=" text-sm py-2">
        Discover, explore, and share your favorite movies on MovieSharp. Your ultimate destination for trending films, personalized recommendations, and unforgettable cinematic experiences. Stay connected with us and never miss out on the magic of movies!
        </p>
        <div className="flex items-center gap-2 pt-5">
        <a target="_blank" href="https://www.facebook.com/mdimran.parves.9" className="text-xl hover:text-accent/90 duration-200"><FaFacebook/></a>
        <a target="_blank" href="https://www.instagram.com/mimranparves/" className="text-xl hover:text-accent/90 duration-200"><FaInstagram/></a>
        <a target="_blank" href="https://x.com/Mohamma85577121" className="text-xl hover:text-accent/90 duration-200"><FaXTwitter/></a>
        <a target="_blank" href="https://www.youtube.com/@itz_riam/featured" className="text-xl hover:text-accent/90 duration-200"><FaYoutube/></a>
        </div>
       </div>
       <div>
          <h1 className="font-semibold">Contact</h1>
          <ul className="pt-2">
            <li className="text-sm flex items-center gap-2"><IoIosCall/> +8801301460344</li>
            <li className="text-sm flex items-center gap-2"><IoIosMail /> mimranparves@gmail.com</li>
            <li className="text-sm flex items-center gap-2"><MdLocationPin />Sujanagar, Pabna, Bangladesh</li>
           
          </ul>
       </div>
      </div>
      <h2 className="text-sm w-full border-t border-secondary py-5 text-center mt-8">&copy; Copyright . All Right Reserved</h2>
    </div>
   </div>
  );
};

export default Footer;
