
import { BsArrowRight, BsArrowThroughHeartFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GiCrossedSabres, GiPistolGun } from "react-icons/gi";
import { MdAutoFixHigh, MdDiscount, MdTheaterComedy } from "react-icons/md";
import { RiGhost2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";


const CategorySection = () => {
    return (
        <div className="w-11/12 mx-auto text-center">
             <h1 className="text-4xl font-semibold pt-20 pb-4">Choose the category of movie you liked</h1>
             <p>Explore and pick your favorite movie category!</p>
             <section className="grid grid-cols-4 gap-6 mx-auto py-10 w-8/12">

                <div className="flex bg-secondary p-6 gap-8 items-center justify-center">
                    <span className="bg-primary/50 backdrop-blur-md text-accent/90 text-3xl p-5">
                    <GiPistolGun />
                    </span>
                    <div className="text-left">
                        <h1 className="text-xl font-semibold">Action</h1>
                        <p className="text-sm pt-1 pb-3">200+ Movies</p>
                        <Link className="text-accent/90 gap-1 flex items-center text-sm ">View More <BsArrowRight className="mt-[2px]"/></Link>
                    </div>
                </div>

                <div className="flex bg-secondary p-6 gap-8 items-center justify-center">
                    <span className="bg-primary/50 backdrop-blur-md text-accent/90 text-3xl p-5">
                    <MdAutoFixHigh />
                    </span>
                    <div className="text-left">
                        <h1 className="text-xl font-semibold">Fantasy</h1>
                        <p className="text-sm pt-1 pb-3">640+ Movies</p>
                        <Link className="text-accent/90 gap-1 flex items-center text-sm ">View More <BsArrowRight className="mt-[2px]"/></Link>
                    </div>
                </div>

                <div className="flex bg-secondary p-6 gap-8 items-center justify-center">
                    <span className="bg-primary/50 backdrop-blur-md text-accent/90 text-3xl p-5">
                    <MdTheaterComedy />
                    </span>
                    <div className="text-left">
                        <h1 className="text-xl font-semibold">Comedy</h1>
                        <p className="text-sm pt-1 pb-3">480+ Movies</p>
                        <Link className="text-accent/90 gap-1 flex items-center text-sm ">View More <BsArrowRight className="mt-[2px]"/></Link>
                    </div>
                </div>

                <div className="flex bg-secondary p-6 gap-8 items-center justify-center">
                    <span className="bg-primary/50 backdrop-blur-md text-accent/90 text-3xl p-5">
                    <FaUserFriends />
                    </span>
                    <div className="text-left">
                        <h1 className="text-xl font-semibold">Drama</h1>
                        <p className="text-sm pt-1 pb-3">510+ Movies</p>
                        <Link className="text-accent/90 gap-1 flex items-center text-sm ">View More <BsArrowRight className="mt-[2px]"/></Link>
                    </div>
                </div>

                <div className="flex bg-secondary p-6 gap-8 items-center justify-center">
                    <span className="bg-primary/50 backdrop-blur-md text-accent/90 text-3xl p-5">
                    <MdDiscount />
                    </span>
                    <div className="text-left">
                        <h1 className="text-xl font-semibold">Mystery</h1>
                        <p className="text-sm pt-1 pb-3">511+ Movies</p>
                        <Link className="text-accent/90 gap-1 flex items-center text-sm ">View More <BsArrowRight className="mt-[2px]"/></Link>
                    </div>
                </div>

                <div className="flex bg-secondary p-6 gap-8 items-center justify-center">
                    <span className="bg-primary/50 backdrop-blur-md text-accent/90 text-3xl p-5">
                    <BsArrowThroughHeartFill />
                    </span>
                    <div className="text-left">
                        <h1 className="text-xl font-semibold">Romance</h1>
                        <p className="text-sm pt-1 pb-3">211+ Movies</p>
                        <Link className="text-accent/90 gap-1 flex items-center text-sm ">View More <BsArrowRight className="mt-[2px]"/></Link>
                    </div>
                </div>

                <div className="flex bg-secondary p-6 gap-8 items-center justify-center">
                    <span className="bg-primary/50 backdrop-blur-md text-accent/90 text-3xl p-5">
                    <RiGhost2Fill />
                    </span>
                    <div className="text-left">
                        <h1 className="text-xl font-semibold">Horror</h1>
                        <p className="text-sm pt-1 pb-3">654+ Movies</p>
                        <Link className="text-accent/90 gap-1 flex items-center text-sm ">View More <BsArrowRight className="mt-[2px]"/></Link>
                    </div>
                </div>

                <div className="flex bg-secondary p-6 gap-8 items-center justify-center">
                    <span className="bg-primary/50 backdrop-blur-md text-accent/90 text-3xl p-5">
                    <GiCrossedSabres />
                    </span>
                    <div className="text-left">
                        <h1 className="text-xl font-semibold">Thriller</h1>
                        <p className="text-sm pt-1 pb-3">415+ Movies</p>
                        <Link className="text-accent/90 gap-1 flex items-center text-sm ">View More <BsArrowRight className="mt-[2px]"/></Link>
                    </div>
                </div>

             </section>
        </div>
    );
};

export default CategorySection;