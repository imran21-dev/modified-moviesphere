import tv from "../assets/tv.png";
import down from "../assets/download.png";
import tele from "../assets/telescope.png";
import kids from "../assets/sister-and-brother.png";

const Plans = () => {
  return (
    <div className="w-8/12 mx-auto text-center">
      <h1 className="text-2xl md:text-4xl font-semibold pt-20 pb-4">
        More Reasons to Join
      </h1>
      <p className="md:text-base text-xs">
        Discover Exclusive Content, Special Offers, and Movie Updates – All in
        One Place!
      </p>

      <section className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 py-8 md:gap-6 justify-items-center">
        <div className="w-full flex flex-col rounded-xl text-left bg-gradient-to-br from-neutral/20 via-neutral/20 to-accent/20 py-8 px-5 justify-between">
          <div>
          <h1 className="md:text-2xl font-bold">Enjoy on your TV</h1>
          <p className="py-5 md:text-base text-sm">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
          </div>
          <figure className="w-full flex justify-end">
            <img src={tv} alt="" className="w-10 md:w-16" />
          </figure>
        </div>
        <div className="w-full flex flex-col rounded-xl text-left bg-gradient-to-br from-neutral/20 via-neutral/20 to-accent/20 py-8 px-5 justify-between">
          <div>
          <h1 className="md:text-2xl font-bold">Download your shows to watch offline</h1>
          <p className="py-5 md:text-base text-sm">
          Save your favorites easily and always have something to watch.
          </p>
          </div>
          <figure className="w-full flex justify-end">
            <img src={down} alt="" className="w-10 md:w-16" />
          </figure>
        </div>
        <div className="w-full flex flex-col rounded-xl text-left bg-gradient-to-br from-neutral/20 via-neutral/20 to-accent/20 py-8 px-5 justify-between">
         <div>
         <h1 className="md:text-2xl font-bold">Watch everywhere</h1>
          <p className="py-5 md:text-base text-sm">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
         </div>
          <figure className="w-full flex justify-end">
            <img src={tele} alt="" className="w-10 md:w-16" />
          </figure>
        </div>
        <div className="w-full flex flex-col rounded-xl text-left bg-gradient-to-br from-neutral/20 via-neutral/20 to-accent/20 py-8 px-5 justify-between">
         <div>
         <h1 className="md:text-2xl font-bold">Create profiles for kids</h1>
          <p className="py-5 md:text-base text-sm">
          Send kids on adventures with their favorite characters in a space made just for them — free with your membershi
          </p>
         </div>
          <figure className="w-full flex justify-end">
            <img src={kids} alt="" className="w-10 md:w-16" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Plans;
