import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";

const Slider = () => {
    const movies = [
        {
            name: "Interstellar",
            img: 'https://showbizcafe.com/wp-content/uploads/2014/11/interstellar_movie-wide.jpg',
            releaseYear: 2014,
            rating: 4.3,
            genre: ["Adventure", "Drama", "Sci-Fi"],
            summary: "A team of explorers travel through a wormhole in space in search of a new home for humanity."
          },
      
        {
          name: "The Dark Knight",
          img: 'https://m.media-amazon.com/images/M/MV5BMjA5ODU3NTI0Ml5BMl5BanBnXkFtZTcwODczMTk2Mw@@._V1_.jpg',
          releaseYear: 2008,
          rating: 4.5,
          genre: ["Action", "Crime", "Drama"],
          summary: "When the menace known as the Joker wreaks havoc in Gotham, Batman must confront his greatest psychological and physical tests."
        },
        {
          name: "Inception",
          img: 'https://images.bauerhosting.com/legacy/empire-tmdb/films/27205/images/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80',
          releaseYear: 2010,
          rating: 4.4,
          genre: ["Action", "Sci-Fi", "Thriller"],
          summary: "A skilled thief is tasked with planting an idea into a target's subconscious through a shared dream world."
        },
        {
            name: "Forrest Gump",
            img: 'https://wallpapers.com/images/hd/tom-hanks-quality-forrest-gump-poster-3kekahja8v9rsdms.jpg',
            releaseYear: 1994,
            rating: 4.4,
            genre: ["Drama", "Romance"],
            summary: "The life and adventures of Forrest Gump, a man with low intelligence but great heart, as he witnesses key moments in history."
          },
        {
          name: "Parasite",
          img: 'https://i0.wp.com/nerdtropolis.com/wp-content/uploads/2023/12/Parasite-Movie-Review.jpg?resize=1024%2C589&ssl=1',
          releaseYear: 2019,
          rating: 4.3,
          genre: ["Drama", "Thriller"],
          summary: "A poor family schemes to become employed by a wealthy household by infiltrating their lives and exploiting their trust."
        },
        {
          name: "The Godfather",
          img: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/the-godfather.jpg',
          releaseYear: 1972,
          rating: 4.6,
          genre: ["Crime", "Drama"],
          summary: "An aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son."
        },
     
        {
            name: "The Shawshank Redemption",
            img: 'https://www.cineluxe.com/wp-content/uploads/2023/10/FB-Shawshank.png',
            releaseYear: 1994,
            rating: 4.7,
            genre: ["Drama"],
            summary: "Two imprisoned men bond over decades, finding solace and eventual redemption through acts of common decency."
          },
        {
          name: "Pulp Fiction",
          img: 'https://images.squarespace-cdn.com/content/v1/58e1117febbd1a7ec641bbf3/1625517038102-A66GQNWY6QBW8ZNLCM5N/2020_header_PulpFiction.png',
          releaseYear: 1994,
          rating: 4.5,
          genre: ["Crime", "Drama"],
          summary: "The lives of two mob hitmen, a boxer, and others intertwine in a series of tales about violence and redemption."
        }
      ];
    
  return (
    <div className="">
      <Swiper
        pagination={{
          type: "bullets",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background: ${
              index % 2 === 0 ? "#ff0000e8" : "#ff0000e8"
            };"></span>`;
          },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper h-80 md:h-screen z-0 flex justify-center"
      >
        {
        movies.map(movie => <SwiperSlide key={movie.name}>
            <div className="h-full relative">
              <img className="h-full w-full object-cover" src={movie.img} alt="" />
                <div className="w-full h-20 md:h-64 bg-gradient-to-b from-primary to-transparent absolute top-0"></div>
              <div className="absolute bg-gradient-to-r from-primary to-transparent h-full md:w-2/5 top-0 flex flex-col justify-end pl-3 pb-3 pr-3 md:pr-0 md:pl-20 md:pb-20 left-0">
                <h1 className="md:text-3xl text- font-bold">{movie.name}</h1>
                <p className="md:text-xl text-xs font-semibold">{movie.releaseYear}</p>
                <div className="flex items-center gap-1 md:gap-2">

                <Rating
                  placeholderRating={movie.rating}
                  readonly
                  className="md:py-3"
                  emptySymbol={
                      <FaStar className="text-gray-300 md:text-2xl text-xs mr-[2px]" />
                  }
                  placeholderSymbol={
                      <FaStar className="text-[#FFAA00] md:text-2xl text-xs mr-[2px]" />
  
                  }
                  fullSymbol={
                      <FaStar className="text-[#FFAA00] md:text-2xl text-xs mr-[2px]" />
  
                  }
                />
                <span className="text-[9px] md:text-base md:mt-0 mt-1">({movie.rating})</span>
                </div>
                
                  <div className="flex md:text-base text-xs items-center gap-2">
                  
                    {movie.genre.join(' | ')}
                   
                  </div>
                  <p className="text-[10px] md:text-sm py-2 md:py-5 opacity-70">Two imprisoned men bond over decades, finding solace and eventual redemption through acts of common decency.</p>
                  <button className="btn min-h-max h-max py-1 md:py-3 w-max text-xs md:text-sm bg-accent/90 text-white border-accent/90 hover:bg-transparent hover:border-accent/90 rounded-full md:px-7 px-3 flex gap-1"> <IoMdPlay className="md:text-xl" />Watch</button>
              </div>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Slider;
