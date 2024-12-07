import { useEffect, useState } from "react";
import { CiStreamOn } from "react-icons/ci";
import jamuna from '../assets/jamuna.png'
import nasa from '../assets/nasa.webp'
import cnn from '../assets/cnn.jpg'
import citi from '../assets/citi.jpg'
import alzaa from '../assets/alzaaa.png'
import alza from '../assets/alza.jpg'
import fr from '../assets/fr.png'
import { Helmet } from "react-helmet-async";

const TvShow = () => {

    const [liveTV, setLiveTV] = useState("https://www.youtube.com/embed/bNyUyrR0PHo?si=0BKpT5h_swDM_GEI");

    const handleChannel = (channelLink) => {
        setLiveTV(channelLink)
    }
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className="w-11/12 gap-6 flex xl:flex-row flex-col mx-auto">
             <Helmet>
                <title>TV Show | MovieSphere</title>
            </Helmet>
           <div className="xl:w-10/12 ">
            
           <section className="xl:h-screen h-80 md:h-[500px] lg:h-[600px] pt-16 pb-3">
            
            <iframe className="w-full h-full rounded-3xl" src={liveTV} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </section>

           


           </div>
           <div className="xl:pt-16 xl:w-2/12">
           <h1 className="text-lg md:text-2xl font-bold flex items-center gap-2 pt-4 pb-5">Live TV<CiStreamOn className="text-xl md:text-3xl text-accent/90"/></h1>
             <div className="flex flex-wrap xl:justify-start justify-center gap-4">

                <button className="flex flex-col items-center" onClick={()=> handleChannel('https://www.youtube.com/embed/bNyUyrR0PHo?si=0BKpT5h_swDM_GEI')}>
                    <img className="md:w-14 md:h-14 h-12 w-12 rounded-full object-cover" src={alzaa} alt="" />
                    <h2 className="text-xs md:text-sm font-semibold pt-1">Al Jazeera Arabic</h2>
                </button>

                <button className="flex flex-col items-center" onClick={()=> handleChannel('https://www.youtube.com/embed/gCNeDWCI0vo?si=m61n8AqfsYhjtHBo')}>
                    <img className="md:w-14 md:h-14 h-12 w-12 rounded-full object-cover" src={alza} alt="" />
                    <h2 className="text-xs md:text-sm font-semibold pt-1">Al Jazeera English</h2>
                </button>

                <button className="flex flex-col items-center" onClick={()=> handleChannel('https://www.youtube.com/embed/UGZPjMdxU2A?si=EqIBVUD3l7k3E61p')}>
                    <img className="md:w-14 md:h-14 h-12 w-12 rounded-full object-cover" src={jamuna} alt="" />
                    <h2 className="text-xs md:text-sm font-semibold pt-1">Jamuna TV</h2>
                </button>

                <button className="flex flex-col items-center" onClick={()=> handleChannel('https://www.youtube.com/embed/l8PMl7tUDIE?si=FtwNCknkKisMX7qY')}>
                    <img className="md:w-14 md:h-14 h-12 w-12 rounded-full object-cover" src={fr} alt="" />
                    <h2 className="text-xs md:text-sm font-semibold pt-1">France 24</h2>
                </button>

                <button className="flex flex-col items-center" onClick={()=> handleChannel('https://www.youtube.com/embed/xRPjKQtRXR8?si=IB9uIRSMz2mONjO1')} >
                <img className="md:w-14 md:h-14 h-12 w-12 rounded-full object-cover" src={nasa} alt="" />
                <h2 className="text-xs md:text-sm font-semibold pt-1">NASA</h2>
                </button>

                <button className="flex flex-col items-center" onClick={()=> handleChannel('https://www.youtube.com/embed/Yu2VTnxrLUM?si=kNh_kX26CPfP19yb')} >
                <img className="md:w-14 md:h-14 h-12 w-12 rounded-full object-cover" src={cnn} alt="" />
                <h2 className="text-xs md:text-sm font-semibold pt-1">CNN News</h2>
                </button>

                <button className="flex flex-col items-center" onClick={()=> handleChannel('https://www.youtube.com/embed/hXjow-hYAWw?si=AaMl1r-mSbIV8EeT')} >
                <img className="md:w-14 md:h-14 h-12 w-12 rounded-full object-cover" src={citi} alt="" />
                <h2 className="text-xs md:text-sm font-semibold pt-1">Citizen News</h2>
                </button>
             </div>
           </div>

        </div>
    );
};

export default TvShow;