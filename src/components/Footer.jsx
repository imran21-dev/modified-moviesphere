import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-neutral/10 backdrop-blur-md mt-20">
      <div className="w-11/12 mx-auto pt-20">
        <div className="flex flex-col md:flex-row justify-between">

          <div className="flex flex-col md:w-2/6">
            <Link to="/" className="font-bold md:text-[1.4rem]  w-max">
              Movie
              <span className="font-[Yellowtail] pr-[2px] text-xl md:text-2xl text-accent/80">
                S
              </span>
              phere
            </Link>
            <p className="text-xs md:text-sm py-2">
              Discover, explore, and share your favorite movies on MovieSharp.
              Your ultimate destination for trending films, personalized
              recommendations, and unforgettable cinematic experiences. Stay
              connected with us and never miss out on the magic of movies!
            </p>
            <div className="flex items-center gap-2 pt-2 md:pt-5">
              <a
                target="_blank"
                href="https://github.com/imran21-dev"
                className="text-xl hover:text-accent/90 duration-200"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/md-imran-parves-9300091ba/"
                className="text-xl hover:text-accent/90 duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/mdimran.parves.9"
                className="text-xl hover:text-accent/90 duration-200"
              >
                <FaFacebook />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/mimranparves/"
                className="text-xl hover:text-accent/90 duration-200"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                href="https://x.com/Mohamma85577121"
                className="text-xl hover:text-accent/90 duration-200"
              >
                <FaXTwitter />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@itz_riam/featured"
                className="text-xl hover:text-accent/90 duration-200"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
            
             
          <div>
            <h1 className="font-semibold md:pt-0 pt-5">Useful Links</h1>
            <ul className="md:pt-2 md:space-y-2">
              <li className="text-xs md:text-sm hover:text-accent/90 duration-100">
                <Link to='/'>Home</Link>
              </li>
              <li className="text-xs md:text-sm hover:text-accent/90 duration-100">
                <Link to='/all-movies'>All Movies</Link>
              </li>
              <li className="text-xs md:text-sm hover:text-accent/90 duration-100">
                <Link to='/tv-show'>TV Show</Link>
              </li>
              
            </ul>
          </div>
          <div>
            <h1 className="font-semibold md:pt-0 pt-5">Contact</h1>
            <ul className="md:pt-2">
              <li className="text-xs md:text-sm flex items-center gap-2">
                <IoIosCall /> +8801301460344
              </li>
              <li className="text-xs md:text-sm flex items-center gap-2">
                <IoIosMail /> mimranparves@gmail.com
              </li>
              <li className="text-xs md:text-sm flex items-center gap-2">
                <MdLocationPin />
                Sujanagar, Pabna, Bangladesh
              </li>
            </ul>
          </div>

        </div>
        <h2 className="text-xs md:text-sm w-full border-t border-secondary py-5 text-center mt-8">
          &copy; MovieSharp {new Date().getFullYear()}
        </h2>
      </div>
    </div>
  );
};

export default Footer;
