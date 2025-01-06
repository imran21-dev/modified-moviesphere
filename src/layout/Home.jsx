import { Helmet } from "react-helmet-async";
import CategorySection from "../components/CategorySection";
import Featured from "../components/Featured";
import Plans from "../components/Plans";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CgSpinner } from "react-icons/cg";



const Home = () => {
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const [loading, setLoading] = useState(false)

    const handleNewsletter = (e) => {
        e.preventDefault()
        setLoading(true)
        const mail = e.target.email.value
        const email ={mail}

        fetch("https://server-side-nu-swart.vercel.app/subscribe" , {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body : JSON.stringify(email)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                setLoading(false)
                Swal.fire({
                            icon: "success",
                            title: "Subscribed !",
                            text: "Stay Updated with the Latest!",
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
            }else{
                setLoading(false)
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
            if (data.mess === 'Email already exists') {
                setLoading(false)
                Swal.fire({
                    icon: "error",
                    title: "Failed !",
                    text: `This email already exists`,
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
        })

        e.target.reset()

    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Home | MovieSphere</title>
            </Helmet>
            <Slider></Slider>
            <Featured></Featured>
            <CategorySection></CategorySection>
            <Plans></Plans>
            <div className="w-11/12 mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-semibold pt-20 pb-4">Don’t Miss a Scene!</h1>
            <p className="md:text-base text-xs">Get the latest movie updates, reviews, and recommendations delivered straight to your inbox.</p>
                <form onSubmit={handleNewsletter} className="lg:w-2/5 mx-auto py-10">
                <input type="email" name="email" required placeholder="Enter your email" className="w-full focus:outline-none bg-transparent border-neutral/20 rounded-full placeholder:text-neutral/20 py-2 px-5 border" />
                <button className="btn bg-accent/90 mt-3 hover:bg-accent/50 border-none text-white rounded-full px-8"> {loading && <CgSpinner className="animate-spin"></CgSpinner>} Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Home;